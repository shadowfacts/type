var editor = ace.edit("editor");
editor.setReadOnly(true);
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
editor.getSession().setValue("function foo(items) {\n\tvar x = \"All this is syntax highlighted\";\n\treturn x;\n}");

// disable all keybindings
editor.commands.commandKeyBinding = {};

// prevent mouse interaction
editor.on("mousedown", (event) => {
	event.preventDefault();
});

// handle text typing
editor.on("keydown", (event) => {
	console.log(`Key pressed (focused: ${editor.isFocused()}, char: ${String.fromCharCode(event.charCode)}`);
	if (editor.isFocused()) {
		event.preventDefault();

		let pos = editor.getCursorPosition();
		let line = editor.getLine(pos.row);
		let char = line.charCodeAt(pos.column);

		if (event.charCode != char) {
			// TODO: mark as invalid
		}

		editor.moveCursorTo(pos.row, pos.column + 1);
		// TODO: update incomplete mark
	}
});

String.prototype.hasOnlyWhiteSpaceBeforeIndex = function(index) {
	return this.substring(index) == this.trim();
}
