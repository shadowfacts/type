// global vars
var editor; // code mirror instance
var incompleteMark;
var focused = false;
let invalids = [];

let extensions = {
	js: "javascript",
	kt: "kotlin"
};

// fetch file and setup
let file = window.location.hash.substring(1);
$.get({
	url: `https://raw.githubusercontent.com/${file}`,
	success: (data) => {
		let parts = file.split(".");
		let fileExtension = parts[parts.length - 1];
		let extension = extensions.hasOwnProperty(fileExtension) ? extensions[fileExtension] : fileExtension;
		setup(data, extension);
	}
});

// setup
function setup(data, extension) {
	editor = new CodeMirror(document.body, {
		value: data,
		mode: extension,
		readOnly: true,
		autofocus: true,
		extraKeys: {
			Up: () => {},
			Down: () => {},
			Left: () => {},
			Right: () => {}
		}
	});

	incompleteMark = editor.doc.markText({ line: 0, ch: 0 }, getEndPos(), {
		className: "incomplete"
	});

	focused = true;

	editor.on("focus", (instance, event) => {
		focused = true;
	});
	editor.on("blur", (instance, event) => {
		focused = false;
	});

	editor.on("mousedown", (instance, event) => {
		event.preventDefault();
		editor.focus();
	});

	document.addEventListener("keypress", (event) => {
		if (focused) {
			event.preventDefault();

			let pos = editor.getCursor();
			let line = editor.doc.getLine(pos.line);
			let char = line.charCodeAt(pos.ch);
			if (event.charCode != char) {
				let mark = editor.doc.markText(pos, {line: pos.line, ch: pos.ch + 1}, {
					className: "invalid"
				});
				if (!invalids[pos.line]) invalids[pos.line] = [];
				invalids[pos.line][pos.ch] = mark;
			}
			editor.setCursor({ line: pos.line, ch: pos.ch + 1 });
			updateIncompleteMark();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (focused) {
			var result = false;

			if (event.keyCode == 8) { // delete
				result = true;

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
			} else if (event.keyCode == 13) { // enter
				result = true;

				let pos = editor.getCursor();
				if (pos.line != editor.doc.size - 1) {
					let currentLine = editor.doc.getLine(pos.line);
					let trimmed = currentLine.trim();
					if (editor.getCursor().ch >= currentLine.indexOf(trimmed) + trimmed.length) {
						let newLine = pos.line + 1;
						let text = editor.doc.getLine(newLine);
						let ch = text.indexOf(text.trim());
						editor.setCursor({ line: newLine, ch: ch });
						updateIncompleteMark();
					}
				}
			}

			if (result) {
				event.preventDefault();
			}
		}
	});
}

function moveToEndOfPreviousLine() {
	let pos = editor.getCursor();
	if (pos.line > 0) {
		let newLine = pos.line - 1;
		let text = editor.doc.getLine(newLine);
		let trimmed = text.trim();
		let ch = text.indexOf(trimmed) + trimmed.length;
		editor.setCursor({ line: newLine, ch: ch });
	}
}

function isComplete() {
	if (incompleteMark.lines.length != 0) {
		return false;
	}

	for (var i = 0; i < invalids.length; i++) {
		let arr = invalids[i];
		for (var j = 0; j < arr.length; j++) {
			if (arr[j]) {
				return false;
			}
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

String.prototype.hasOnlyWhiteSpaceBeforeIndex = function(index) {
	return this.substring(index) == this.trim();
};
