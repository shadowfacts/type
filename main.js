// global vars
var editor; // code mirror instance
var incompleteMark;
var focused = false;
let invalids = [];

// fetch file and setup
let hash = window.location.hash.substring(1);
let hashBits = hash.split("/");
let repo = hashBits.slice(0, 3).join("/");
let filePath = hashBits.slice(3, hashBits.length).join("/");
$.get({
	url: `https://raw.githubusercontent.com/${repo}/${filePath}`,
	success: (code) => {
		let parts = filePath.split(".");
		let fileExtension = parts[parts.length - 1];
		let lang = getLanguageByExtension(fileExtension);
		$.get({
			url: `https://cdn.jsdelivr.net/codemirror/4.5.0/mode/${lang.file}/${lang.file}.js`,
			success: (data) => {
				eval(data);
				setup(code, lang.mime);
			}
		});
	}
});

// setup
function setup(data, mime) {
	let el = document.getElementById("editor");
	el.value = data;
	editor = CodeMirror.fromTextArea(el, {
		mode: mime,
		readOnly: true,
		autofocus: true,
		extraKeys: {
			Up: () => {},
			Down: () => {},
			Left: () => {},
			Right: () => {}
		}
	});

	editor.setSize("100%", "100%");

	load()
		.then(save)
		.then(() => {
			incompleteMark = editor.doc.markText(editor.getCursor(), getEndPos(), {
				className: "incomplete"
			});

			focused = true;

			editor.on("focus", handleFocus);
			editor.on("blur", handleBlur);
			editor.on("mousedown", handleMouseDown);

			document.addEventListener("keypress", handleKeyPress);
			document.addEventListener("keydown", handleKeyDown);

		})
		.catch((e) => {
			throw e;
		});
}

function handleFocus() {
	focused = true;
}

function handleBlur() {
	focused = false;
}

function handleMouseDown(instance, event) {
	event.preventDefault();
	editor.focus();
}

function handleKeyPress(event) {
	if (focused) {
		event.preventDefault();

		let pos = editor.getCursor();
		let line = editor.doc.getLine(pos.line);
		let char = line.charCodeAt(pos.ch);
		if (event.charCode != char) {
			markInvalid(pos);
		}
		editor.setCursor({ line: pos.line, ch: pos.ch + 1 });
		updateIncompleteMark();
	}
}

function handleKeyDown(event) {
	if (focused) {
		if (event.keyCode == 8) { // delete
			event.preventDefault();
			handleDelete(event);
		} else if (event.keyCode == 13) { // enter
			event.preventDefault();
			handleEnter(event);
		}
	}
}

function handleDelete(event) {
	let pos = editor.getCursor();
	if (pos.ch == 0) { // move up 1 line {
		moveToEndOfPreviousLine();
	} else { // move back 1 char
		let line = editor.doc.getLine(pos.line);
		if (line.hasOnlyWhiteSpaceBeforeIndex(pos.ch)) {
			moveToEndOfPreviousLine();
		} else {
			editor.setCursor({ line: pos.line, ch: pos.ch - 1 });
		}
	}

	let newPos = editor.getCursor();
	let lineInvalids = invalids[newPos.line];
	if (lineInvalids) {
		let mark = lineInvalids[newPos.ch];
		if (mark) {
			mark.clear();
			lineInvalids.splice(newPos.ch, 1);
		}
	}

	updateIncompleteMark();
}

function handleEnter(event) {
	let pos = editor.getCursor();
	if (pos.line != editor.doc.size - 1) {
		let currentLine = editor.doc.getLine(pos.line);
		let trimmed = currentLine.trim();
		if (editor.getCursor().ch >= currentLine.indexOf(trimmed) + trimmed.length) {
			var newLine = pos.line;
			while (true) {
				newLine++;
				if (newLine >= editor.doc.size) { // go to end of last line
					editor.setCursor(getEndPos());
					break;
				} else { // try go to next line
					let newText = editor.doc.getLine(newLine);
					let newTrimmed = newText.trim();
					if (newTrimmed.length != 0) { // line is not empty (whitespace-only)
						let ch = newText.indexOf(newTrimmed);
						editor.setCursor({ line: newLine, ch: ch });
						break;
					}
				}
			}
			updateIncompleteMark();
		}
	}
}

function moveToEndOfPreviousLine() {
	let pos = editor.getCursor();
	if (pos.line > 0) {
		var newLine = pos.line;
		while (true) {
			newLine--;
			let text = editor.doc.getLine(newLine);
			let trimmed = text.trim();
			if (trimmed.length != 0) {
				let ch = text.indexOf(trimmed) + trimmed.length;
				editor.setCursor({ line: newLine, ch: ch });
				break;
			}
		}
	}
}

function isComplete() {
	if (!areAllNextLinesEmpty()) {
		if (incompleteMark.lines.length != 0) {
			return false;
		}
	}

	for (var i = 0; i < invalids.length; i++) {
		let arr = invalids[i];
		if (arr) {
			for (var j = 0; j < arr.length; j++) {
				if (arr[j]) {
					return false;
				}
			}
		}
	}
	return true;
}

function areAllNextLinesEmpty() {
	let pos = editor.getCursor();
	for (var i = pos.line + 1; i < editor.doc.size; i++) {
		let line = editor.doc.getLine(i);
		if (line.trim().length != 0) {
			return false;
		}
	}
	return true;
}

function getEndPos() {
	return { line: editor.doc.size, ch: editor.doc.getLine(editor.doc.size - 1).length };
}

function updateIncompleteMark() {
	incompleteMark.clear();
	incompleteMark = editor.doc.markText(editor.getCursor(), getEndPos(), {
		className: "incomplete"
	});
}

function markInvalid(pos) {
	let mark = editor.doc.markText(pos, {line: pos.line, ch: pos.ch + 1}, {
		className: "invalid"
	});
	if (!invalids[pos.line]) invalids[pos.line] = [];
	invalids[pos.line][pos.ch] = mark;
}

function load() {
	return localforage.getItem(repo)
		.then((val) => {
			loadInvalids(val[filePath]);
			loadCursor(val[filePath]);
		});
}

function save() {
	let obj = {};
	saveInvalids(obj);
	saveCursor(obj);
	localforage.getItem(repo)
		.then((val) => {
			if (!val) val = {};
			val[filePath] = obj;
			localforage.setItem(repo, val)
				.catch((e) => {
					throw e;
				});
		})
		.catch((e) => {
			throw e;
		});
}

function loadInvalids(val) {
	let serialized = val.invalids;
	if (serialized) {
		editor.operation(() => { // buffer all DOM changes together b/c performance
			serialized.forEach(markInvalid);
		});
	}
}

function saveInvalids(obj) {
	let serialized = [];
	for (var i = 0; i < invalids.length; i++) {
		let inner = invalids[i];
		if (!inner) continue;

		for (var j = 0; j < inner.length; j++) {
			let mark = inner[j];
			if (!mark) continue;

			let pos = mark.find();
			if (pos) {
				serialized.push(pos.from);
			}
		}
	}
	obj.invalids = serialized;
}

function loadCursor(val) {
	editor.setCursor(val && val.cursor ? val.cursor : { line: 0, ch: 0 });
}

function saveCursor(obj) {
	obj.cursor = editor.getCursor();
}

String.prototype.hasOnlyWhiteSpaceBeforeIndex = function(index) {
	return this.substring(index) == this.trim();
};
