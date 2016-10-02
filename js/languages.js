let languages = {
	"Brainfuck": {
		file: "brainfuck",
		mime: "text/x-brainfuck",
		extensions: ["b", "bf"]
	},
	"C": {
		file: "clike",
		mime: "text/x-csrc",
		extensions: ["c", "cats", "h", "idc", "w"]
	},
	"C++": {
		file: "clike",
		mime: "text/x-c++src",
		extensions: ["cpp", "c++", "cc", "cp", "cxx", "h++", "hh", "hpp", "hxx", "inc", "inl", "ipp", "tcc", "tpp"]
	},
	"Java": {
		file: "clike",
		mime: "text/x-java",
		extensions: ["java"]
	},
	"C#": {
		file: "clike",
		mime: "text/x-csharp",
		extensions: ["cs", "cake", "cshtml", "csx"]
	},
	"Objective-C": {
		file: "clike",
		mime: "text/x-objectivec",
		extensions: ["m"]
	},
	"Scala": {
		file: "clike",
		mime: "text/x-scala",
		extensions: ["scala", "sbt", "sc"]
	},
	"Vertex Shader": {
		file: "clike",
		mime: "text/x-vertex",
		extensions: ["frag", "fp", "frg", "fs", "fshader"]
	},
	"Fragment Shader": {
		file: "clike",
		mime: "x-shader/x-fragment",
		extensions: ["vert", "vrx", "vshader"]
	},
	"Squirrel": {
		file: "clike",
		mime: "text/x-squirrel",
		extensions: ["nut"]
	},
	"Kotlin": {
		file: "clike",
		mime: "text/x-kotlin",
		extensions: ["kt", "ktm", "kts"]
	},
	"Ceylon": {
		file: "clike",
		mime: "text/x-ceylon",
		extensions: ["ceylon"]
	},
	"Clojure": {
		file: "clojure",
		mime: "text/x-clojure",
		extensions: ["clj", "boot", "cl2", "cljc", "cljs", "cljscm", "cljx", "hic"]
	},
	"CMake": {
		file: "cmake",
		mime: "text/x-cmake",
		extensions: ["cmake"]
	},
	"CoffeeScript": {
		file: "coffeescript",
		mime: "text/x-coffeescript",
		extensions: ["coffee", "_coffee", "cake", "cjsx", "cson", "iced"]
	},
	"Common Lisp": {
		file: "commonlisp",
		mime: "text/x-common-lisp",
		extensions: ["lisp", "asd", "cl", "l", "lsp", "ny", "podsl", "sexp"]
	},
	"Crystal": {
		file: "crystal",
		mime: "text/x-crystal",
		extensions: ["cr"]
	},
	"CSS": {
		file: "css",
		mime: "text/x-css",
		extensions: ["css"]
	},
	"SCSS": {
		file: "css",
		mime: "text/x-scss",
		extensions: ["scss"]
	},
	"Less": {
		file: "css",
		mime: "text/x-less",
		extensions: ["less"]
	},
	"Python": {
		file: "python",
		mime: "text/x-python",
		extensions: ["py", "bzl", "gyp", "lmi", "pyde", "pyp", "pyt", "pyw", "rpy", "tac", "wsgi", "xpy"]
	},
	"Cython": {
		file: "python",
		mime: "text/x-cython",
		extensions: ["pyx", "pxd", "pxi"]
	},
	"D": {
		file: "d",
		mime: "text/x-d",
		extensions: ["d", "di"]
	},
	"Dart": {
		file: "dart",
		mime: "text/x-dart",
		extensions: ["dart"]
	},
	"Django": {
		file: "django",
		mime: "text/x-django",
		extensions: ["mustache", "jinja"]
	},
	"Dockerfile": {
		file: "dockerfile",
		mime: "text/x-dockerfile",
		extensions: ["dockerfile"]
	},
	"Elm": {
		file: "elm",
		mime: "text/x-elm",
		extensions: ["elm"]
	},
	"Erlang": {
		file: "erlang",
		mime: "text/x-erlang",
		extensions: ["erl", "es", "escript", "hrl", "xrl", "yrl"]
	},
	"FORTRAN": {
		file: "fortran",
		mime: "text/x-fortran",
		extensions: ["f90", "f", "f03", "f08", "f77", "f95", "for", "fpp"]
	},
	"OCaml": {
		file: "mllike",
		mime: "text/x-ocaml",
		extensions: ["ml", "eliom", "eliomi", "ml4", "mli", "mll", "mly"]
	},
	"F#": {
		file: "mllike",
		mime: "text/x-fsharp",
		extensions: ["fsharp"]
	},
	"Go": {
		file: "go",
		mime: "text/x-go",
		extensions: ["go"]
	},
	"Groovy": {
		file: "groovy",
		mime: "text/x-groovy",
		extensions: ["groovy", "grt", "gtpl", "gvy", "gradle"]
	},
	"HAML": {
		file: "haml",
		mime: "text/x-haml",
		extensions: ["haml"]
	},
	"Handlebars": {
		file: "handlebars",
		mime: "text/x-handlebars-template",
		extensions: ["handlebars", "hbs"]
	},
	"Haskell": {
		file: "haskell",
		mime: "text/x-haskell",
		extensions: ["hs", "hsc"]
	},
	"Haxe": {
		file: "haxe",
		mime: "text/x-haxe",
		extensions: ["hx", "hxsl"]
	},
	"Hxml": {
		file: "haxe",
		mime: "text/x-hxml",
		extensions: ["hxml"]
	},
	"EJS": {
		file: "htmlembedded",
		mime: "text/x-ejs",
		extensions: ["ejs"]
	},
	"ASP.NET": {
		file: "htmlembedded",
		mime: "text/x-aspx",
		extensions: ["asp", "aspx"]
	},
	"Java Server Pages": {
		file: "htmlembedded",
		mime: "text/x-jsp",
		extensions: ["jsp"]
	},
	"ERB": {
		file: "htmlembedded",
		mime: "text/x-erb",
		extensions: ["erb"]
	},
	"HTML": {
		file: ["xml", "htmlmixed"],
		mime: "text/html",
		extensions: ["html", "htm", "inc", "st", "xht", "xhtml"]
	},
	"IDL": {
		file: "idl",
		mime: "text/x-idl",
		extensions: ["pro", "dlm"]
	},
	"JavaScript": {
		file: "javascript",
		mime: "text/javascript",
		extensions: ["js", "es", "es6"]
	},
	"TypeScript": {
		file: "javascript",
		mime: "application/typescript",
		extensions: ["ts", "tsx"]
	},
	"Julia": {
		file: "julia",
		mime: "text/x-julia",
		extensions: ["jl"]
	},
	"LiveScript": {
		file: "livescript",
		mime: "text/x-livescript",
		extensions: ["ls"]
	},
	"Lua": {
		file: "lua",
		mime: "text/x-lua",
		extensions: ["lua", "nse", "pd_lua", "rbxs", "wlua"]
	},
	"Markdown": {
		file: "markdown",
		mime: "text/x-markdown",
		extensions: ["md", "markdown", "mkd", "mkdn", "mkdown"]
	},
	"Mathematica": {
		file: "mathematica",
		mime: "text/x-mathematica",
		extensions: ["cdf", "ma", "mt"]
	},
	"NSIS": {
		file: "nsis",
		mime: "text/x-nsis",
		extensions: ["nsi", "nsh"]
	},
	"Oz": {
		file: "oz",
		mime: "text/x-oz",
		extensions: ["oz"]
	},
	"Pascal": {
		file: "pascal",
		mime: "text/x-pascal",
		extensions: ["pas", "dfm", "dpr", "inc", "lpr", "pp"]
	},
	"Perl": {
		file: "perl",
		mime: "text/x-perl",
		extensions: ["pl", "al", "cgi", "fcgi", "perl", "ph", "plx", "pm", "pod", "psgi", "t"]
	},
	"PHP": {
		file: "php",
		mime: "application/x-httpd-php",
		extensions: ["php"]
	},
	"PowerShell": {
		file: "powershell",
		mime: "application/x-powershell",
		extensions: ["ps1", "psd1", "psm1"]
	},
	"INI": {
		file: "properties",
		mime: "text/x-ini",
		extensions: ["properties", "ini"]
	},
	"Protocol Buffer": {
		file: "protobuf",
		mime: "text/x-protobuf",
		extensions: ["proto"]
	},
	"Plain Text": {
		file: [],
		mime: "text/plain",
		extensions: ["txt"]
	},
	"R": {
		file: "r",
		mime: "text/x-rsrc",
		extensions: ["r", "rd", "rsx"]
	},
	"Ruby": {
		file: "ruby",
		mime: "text/x-ruby",
		extensions: ["rb", "ruby", "rake", "gemspec"]
	},
	"Rust": {
		file: "rust",
		mime: "text/x-rustsrc",
		extensions: ["rs"]
	},
	"SAS": {
		file: "sas",
		mime: "text/x-sas",
		extensions: ["sas"]
	},
	"Sass": {
		file: "sass",
		mime: "text/x-sass",
		extensions: ["sass"]
	},
	"Scheme": {
		file: "scheme",
		mime: "text/x-scheme",
		extensions: ["scm", "sld", "sls", "sps", "ss"]
	},
	"Shell": {
		file: "shell",
		mime: "text/x-sh",
		extensions: ["sh", "bash", "command", "zsh"]
	},
	"Slim": {
		file: "slim",
		mime: "application/x-slim",
		extensions: ["slim"]
	},
	"Smalltalk": {
		file: "smalltalk",
		mime: "text/x-stsrc",
		extensions: ["st", "cs"]
	},
	"Smarty": {
		file: "smarty",
		mime: "text/x-smarty",
		extensions: ["tpl"]
	},
	"Stylus": {
		file: "stylus",
		mime: "text/x-styl",
		extensions: ["styl"]
	},
	"SQL": {
		file: "sql",
		mime: "text/x-sql",
		extensions: ["sql"]
	},
	"Swift": {
		file: "swift",
		mime: "text/x-swift",
		extensions: ["swift"]
	},
	"TeX": {
		file: "stex",
		mime: "text/x-stex",
		extensions: ["tex"]
	},
	"Tcl": {
		file: "tcl",
		mime: "text/x-tcl",
		extensions: ["tcl", "adp", "tm"]
	},
	"Textile": {
		file: "textile",
		mime: "text/x-textile",
		extensions: ["textile"]
	},
	"TOML": {
		file: "toml",
		mime: "text/x-toml",
		extensions: ["toml"]
	},
	"Visual Basic": {
		file: "vb",
		mime: "text/x-vb",
		extensions: ["vb", "vba", "vbhtml", "vbs"]
	},
	"XML": {
		file: "xml",
		mime: "application/xml",
		extensions: ["xml", "ant", "fxml", "iml", "plist", "storyboard", "vbproj", "vcsettings"]
	},
	"XQuery": {
		file: "xquery",
		mime: "application/xquery",
		extensions: ["xquery", "xq", "xql", "xqm", "xqy"]
	},
	"YAML": {
		file: "yaml",
		mime: "text/x-yaml",
		extensions: ["yml", "yaml"]
	},
	"Jekyll (YAML front matter + GFM)": {
		file: "yaml-frontmatter",
		mime: "yaml-frontmatter"
	}
};

function getLanguageByExtension(ext) {
	ext = ext.toLowerCase();
	for (var key in languages) {
		let language = languages[key];
		if (language.extensions) {
			for (var i = 0; i < language.extensions.length; i++) {
				if (language.extensions[i].toLowerCase() == ext) {
					return language;
				}
			}
		}
	}
	return languages["Plain Text"];
}
