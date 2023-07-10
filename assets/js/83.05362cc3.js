(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{854:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"绑定域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绑定域名"}},[t._v("#")]),t._v(" 绑定域名")]),t._v(" "),s("p",[t._v("在使用P2P服务之前，需要先"),s("RouterLink",{attrs:{to:"/cn/views/bindings.html"}},[t._v("绑定域名")]),t._v("。")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("Localhost 已加入白名单，无需绑定，用于本地调试。")])]),t._v(" "),s("h2",{attrs:{id:"第三方播放器集成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方播放器集成"}},[t._v("#")]),t._v(" 第三方播放器集成")]),t._v(" "),s("p",[t._v("参考"),s("a",{attrs:{href:"https://github.com/cdnbye/shaka-p2p-engine/tree/master/demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("播放器示例"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"引入插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入插件"}},[t._v("#")]),t._v(" 引入插件")]),t._v(" "),s("h4",{attrs:{id:"script标签引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script标签引入"}},[t._v("#")]),t._v(" Script标签引入")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/cdnbye-shaka@latest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"文件引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件引入"}},[t._v("#")]),t._v(" 文件引入")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/cdnbye/shaka-p2p-engine/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"browserify-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browserify-webpack"}},[t._v("#")]),t._v(" Browserify / Webpack")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save cdnbye-shaka\n")])])]),s("p",[t._v("在播放器模块中通过 "),s("em",[s("strong",[t._v("require")])]),t._v(" 引入cdnbye：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" P2PEngineShaka "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cdnbye-shaka'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("或者使用ES6的 "),s("em",[s("strong",[t._v("import")])]),t._v(" 语法：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" P2PEngineShaka "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cdnbye-shaka'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用插件"}},[t._v("#")]),t._v(" 使用插件")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("shaka"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Player")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("P2PEngineShaka"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSupported")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2PEngineShaka")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nplayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("play_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"electron"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#electron"}},[t._v("#")]),t._v(" Electron")]),t._v(" "),s("p",[t._v("本插件同样支持 "),s("a",{attrs:{href:"https://electronjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron"),s("OutboundLink")],1),t._v(" 平台，只需求将从控制台获取的token等信息传进config中即可，如下所示：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2PEngineShaka")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    appName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_APP_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 应用的名称")]),t._v("\n    appId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_APP_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要与控制台输入的保持一致")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other p2pConfig options if applicable")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("参考"),s("RouterLink",{attrs:{to:"/cn/views/bindings.html#绑定-app-id-并获取token"}},[t._v("如何获取token")])],1)])}),[],!1,null,null,null);a.default=e.exports}}]);