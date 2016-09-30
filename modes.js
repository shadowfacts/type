// let modes = {};
let languages = {
	"Brainfuck": {
		file: "brainfuck",
		mime: "text/x-brainfuck"
	},
	"C": {
		file: "clike",
		mime: "text/x-csrc"
	},
	"C++": {
		file: "clike",
		mime: "text/x-c++src"
	},
	"Java": {
		file: "clike",
		mime: "text/x-java"
	},
	"C#": {
		file: "clike",
		mime: "text/x-csharp"
	},
	"Objective-C": {
		file: "clike",
		mime: "text/x-objectivec"
	},
	"Scala": {
		file: "clike",
		mime: "text/x-scala"
	},
	"Vertex Shader": {
		file: "clike",
		mime: "text/x-vertex"
	},
	"Fragment Shader": {
		file: "clike",
		mime: "x-shader/x-fragment"
	},
	"Squirrel": {
		file: "clike",
		mime: "text/x-squirrel"
	},
	"Kotlin": {
		file: "clike",
		mime: "text/x-kotlin"
	},
	"Ceylon": {
		file: "clike",
		mime: "text/x-ceylon"
	},
	"Clojure": {
		file: "clojure",
		mime: "text/x-clojure"
	},
	"CMake": {
		file: "cmake",
		mime: "text/x-cmake"
	},
	"CoffeeScript": {
		file: "coffeescript",
		mime: "text/x-coffeescript"
	},
	"Common Lisp": {
		file: "commonlisp",
		mime: "text/x-common-lisp"
	},
	"Crystal": {
		file: "crystal",
		mime: "text/x-crystal"
	},
	"CSS": {
		file: "css",
		mime: "text/x-css"
	},
	"SCSS": {
		file: "css",
		mime: "text/x-scss"
	},
	"Less": {
		file: "css",
		mime: "text/x-less"
	},
	"Python": {
		file: "python",
		mime: "text/x-python"
	},
	"Cython": {
		file: "python",
		mime: "text/x-cython"
	},
	"D": {
		file: "d",
		mime: "text/x-d"
	},
	"Dart": {
		file: "dart",
		mime: "text/x-dart"
	},
	"Django": {
		file: "django",
		mime: "text/x-django"
	},
	"Dockerfile": {
		file: "dockerfile",
		mime: "text/x-dockerfile"
	},
	"Elm": {
		file: "elm",
		mime: "text/x-elm"
	},
	"Erlang": {
		file: "erlang",
		mime: "text/x-erlang"
	},
	"FORTRAN": {
		file: "fortran",
		mime: "text/x-fortran"
	},
	"OCaml": {
		file: "mllike",
		mime: "text/x-ocaml"
	},
	"F#": {
		file: "mllike",
		mime: "text/x-fsharp"
	},
	"Go": {
		file: "go",
		mime: "text/x-go"
	},
	"Groovy": {
		file: "groovy",
		mime: "text/x-groovy"
	},
	"HAML": {
		file: "haml",
		mime: "text/x-haml"
	},
	"Handlebars": {
		file: "handlebars",
		mime: "text/x-handlebars-template"
	},
	"Haskell": {
		file: "haskell",
		mime: "text/x-haskell"
	},
	"Haxe": {
		file: "haxe",
		mime: "text/x-haxe"
	},
	"Hxml": {
		file: "haxe",
		mime: "text/x-hxml"
	},
	"EJS": {
		file: "htmlembedded",
		mime: "text/x-ejs"
	},
	"ASP.NET": {
		file: "htmlembedded",
		mime: "text/x-aspx"
	},
	"JSP": {
		file: "htmlembedded",
		mime: "text/x-jsp"
	},
	"ERB": {
		file: "htmlembedded",
		mime: "text/x-erb"
	},
	"HTML": {
		file: ["xml", "htmlmixed"],
		mime: "text/html"
	},
	"IDL": {
		file: "idl",
		mime: "text/x-idl"
	},
	"JavaScript": {
		file: "javascipt",
		mime: "text/javascript"
	},
	"TypeScript": {
		file: "javascript",
		mime: "application/typescript"
	},
	"Julia": {
		file: "julia",
		mime: "text/x-julia"
	},
	"LiveScript": {
		file: "livescript",
		mime: "text/x-livescript"
	},
	"Lua": {
		file: "lua",
		mime: "text/x-lua"
	},
	"Markdown": {
		file: "markdown",
		mime: "text/x-markdown"
	},
	"Mathematica": {
		file: "mathematica",
		mime: "text/x-mathematica"
	},
	"NSIS": {
		file: "nsis",
		mime: "text/x-nsis"
	},
	"Oz": {
		file: "oz",
		mime: "text/x-oz"
	},
	"Pascal": {
		file: "pascal",
		mime: "text/x-pascal"
	},
	"Perl": {
		file: "perl",
		mime: "text/x-perl"
	},
	"PHP": {
		file: "php",
		mime: "application/x-httpd-php"
	},
	"PowerShell": {
		file: "powershell",
		mime: "application/x-powershell"
	},
	"Properties": {
		file: "proeprties",
		mime: "text/x-properties"
	},
	"INI": {
		file: "properties",
		mime: "text/x-ini"
	},
	"ProtoBuf": {
		file: "protobuf",
		mime: "text/x-protobuf"
	}
};

function createMode(extensions, file, mime) {
	if (Array.isArray(extensions)) {
		for (var i = 0; i < extensions.length; i++) {
			modes[extensions[i]] = {
				file: file,
				mime: mime
			};
		}
	} else if (typeof extensions == "string") {
		modes[extensions] = {
			file: file,
			mime: mime
		};
	}
}