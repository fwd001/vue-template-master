### 设置setting.json
```json
{
	"editor.fontSize": 18,
	"window.zoomLevel": 1,
	"px2rem.rootFontSize": 192,
	"liveServer.settings.port": 8080,
	"git.autofetch": true,
	"eslint.alwaysShowStatus": true,
	"workbench.editor.enablePreview": false, // 打开文件不覆盖
	"search.followSymlinks": false, // 打开自动保存
	"editor.lineNumbers": "on", // 开启行数提示
	"editor.formatOnPaste": false, // 控制编辑器是否自动格式化粘贴的内容。格式化程序必须可用，并且能针对文档中的某一范围进行格式化。
	"editor.quickSuggestions": {
		// 开启自动显示建议
		"other": true,
		"comments": true,
		"strings": true
	},
	"editor.tabSize": 2, // 制表符符号eslint
	"editor.formatOnSave": false, // 让prettier使用eslint的代码格式进行校验
	"prettier.semi": false, // 去掉代码结尾的分号
	"prettier.singleQuote": true, // 使用带引号替代双引号
	"vetur.format.defaultFormatter.html": "js-beautify-html", // 格式化.vue中html
	"vetur.format.defaultFormatter.js": "vscode-typescript", // 让vue中的js按编辑器自带的ts格式进行格式化
	"javascript.format.insertSpaceBeforeFunctionParenthesis": true, // 让函数(名)和后面的括号之间加个空格
	"vetur.format.defaultFormatterOptions": {
		"js-beautify-html": {
			// 属性强制折行对齐
			// 1.force-aligned 启用后.vue文件中templeate部分代码中的属性会被强制换行，但是闭合的标签却与最后一个属性在同一行，没有换，由于不好看，因此禁用
			// 2.auto
			"wrap_line_length": 250,
			"wrap_attributes": "auto"
		},
		"prettier": {
			"semi": false, // 去掉末尾分号
			"singleQuote": true // 将所有双引号改为单引号
		}
	},
	"eslint.validate": [ // 开启对.vue文件中错误的检查
		"javascript",
		"javascriptreact",
		"html",
		"vue"
	],
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"explorer.confirmDragAndDrop": false,
	"git.enableSmartCommit": true,
	"terminal.integrated.rendererType": "dom",
	"[json]": {
		"editor.defaultFormatter": "vscode.json-language-features"
	},
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": false
	},
	"editor.fontFamily": "Monaco, Menlo, 'Courier New', monospace",
	"explorer.confirmDelete": false,
	"[vue]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"git.confirmSync": false,
	"terminal.integrated.shell.osx": "/bin/bash"
}
```
