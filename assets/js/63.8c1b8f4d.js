(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{625:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("h4",{attrs:{id:"绑定域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定域名"}},[t._v("#")]),t._v(" 绑定域名")]),t._v(" "),a("p",[t._v("在使用P2P服務之前，需要先"),a("RouterLink",{attrs:{to:"/cn/views/bindings.html"}},[t._v("綁定域名")]),t._v("。")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("Localhost 已加入白名单，无需绑定，用于本地调试。")])]),t._v(" "),a("h4",{attrs:{id:"网站迁移到https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站迁移到https"}},[t._v("#")]),t._v(" 网站迁移到HTTPS")]),t._v(" "),a("p",[t._v("由于 Service Worker 需要在HTTPS下才能生效，请确保你的网站已经迁移到HTTPS。")]),t._v(" "),a("p",[t._v("你可以使用 "),a("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt"),a("OutboundLink")],1),t._v(" 来生成免费的证书。请参考 "),a("a",{attrs:{href:"https://letsencrypt.org/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v(" 的教程。")]),t._v(" "),a("h2",{attrs:{id:"部署本地代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署本地代理"}},[t._v("#")]),t._v(" 部署本地代理")]),t._v(" "),a("p",[t._v("为了安全起见，浏览器不允许其他域名的脚本调用 ServiceWorker ，因此需要将脚本文件置于网站同一域名下，P2P功能才能正常工作，具体操作如下：")]),t._v(" "),a("h3",{attrs:{id:"如果网站不是pwa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果网站不是pwa"}},[t._v("#")]),t._v(" 如果网站不是PWA")]),t._v(" "),a("p",[t._v("拷贝 "),a("a",{attrs:{href:"https://github.com/swarm-cloud/hls-sw-p2p-engine/blob/main/demo/sw.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("sw.js"),a("OutboundLink")],1),t._v(" 到服务器的播放器所在目录， 并确保可以通过公网访问如 "),a("em",[a("strong",[t._v("https://your_website.com/sw.js")])]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"如果网站是pwa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果网站是pwa"}},[t._v("#")]),t._v(" 如果网站是PWA")]),t._v(" "),a("p",[t._v("在网站根目录的 "),a("em",[a("strong",[t._v("sw.js")])]),t._v(" 文件的第一行增加以下代码：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("importScripts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://cdn.jsdelivr.net/npm/swarmcloud-hls-sw@latest/dist/hls-proxy.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v('部署完成后，1）您的网站之前 sw.js 的逻辑将继续正常执行；2）SwarmCloud 的 ServiceWorker 脚本将监听"fetch"事件进而拦截HLS请求，其他请求将被之前的 ServiceWorker 的逻辑处理。')]),t._v(" "),a("h2",{attrs:{id:"集成-p2p-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成-p2p-engine"}},[t._v("#")]),t._v(" 集成 P2P Engine")]),t._v(" "),a("p",[t._v("P2P Engine 用于启动 ServiceWorker 并运行P2P调度逻辑。同样, 可以自定义配置或者采用默认配置。")]),t._v(" "),a("h4",{attrs:{id:"快速集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速集成"}},[t._v("#")]),t._v(" 快速集成")]),t._v(" "),a("p",[t._v("如果不需要自定义配置，只需要在网站主页 index.html 加上一行脚本即可：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/swarmcloud-hls-sw@latest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h4",{attrs:{id:"自定义集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义集成"}},[t._v("#")]),t._v(" 自定义集成")]),t._v(" "),a("p",[t._v("在 index.html 的 head 标签中添加如下脚本，并创建 P2PEngineIOS 实例，可以自定义配置参数：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/swarmcloud-hls-sw@latest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("也可以通过npm引入：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" swarmcloud-hls-sw\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" P2PEngineIOS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swarmcloud-hls-sw'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create P2PEngineIOS instance...")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("disableP2pEngineIOSAutoInit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" engine "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2PEngineIOS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// logLevel: 'debug',")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// swFile: './sw.js',     // 如果 sw.js 不在当前文件夹，则需要修改这个字段")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other p2pConfig options provided by P2PEngineIOS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Register ServiceWorker")]),t._v("\nengine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerServiceWorker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("registration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ServiceWorker registration successful with scope: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" registration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ServiceWorker registration failed '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),a("p",[t._v('打来调试控制台，如果有打印 "ServiceWorker registration successful with scope" 则表示已正常工作。如果有报错请将报错信息发给技术客服排查。')]),t._v(" "),a("h3",{attrs:{id:"最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),a("ul",[a("li",[t._v("准备工作\n"),a("ul",[a("li",[t._v("为网站申请HTTPS证书")]),t._v(" "),a("li",[t._v("在CDNBye控制台注册账号并在 "),a("em",[a("strong",[t._v("网站管理")])]),t._v(" 界面添加域名")])])]),t._v(" "),a("li",[t._v("将用户的 http 访问请求自动跳转到 https ，从而保证 P2P 可以正常工作")]),t._v(" "),a("li",[t._v("将 "),a("a",{attrs:{href:"https://github.com/swarm-cloud/hls-sw-p2p-engine/blob/main/demo/sw.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("sw.js"),a("OutboundLink")],1),t._v(" 文件放在播放器调用脚本所在目录")]),t._v(" "),a("li",[t._v("在播放器调用页面嵌入 P2PEngineIOS SDK(ios-p2p-engine.min.js)：")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/swarmcloud-hls-sw@latest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("脚本会自动执行初始化操作并注册ServiceWorker，如果需要自定义参数，可以手动实例化 P2PEngineIOS ：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("disableP2pEngineIOSAutoInit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" engine "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2PEngineIOS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    swFile"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./sw.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// please set the correct path of sw.js")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// logLevel: 'debug',")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other p2pConfig options provided by P2PEngineIOS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nengine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerServiceWorker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("registration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ServiceWorker registration successful with scope: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" registration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ServiceWorker registration failed '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),t._v(" "),a("h2",{attrs:{id:"第三方播放器集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方播放器集成"}},[t._v("#")]),t._v(" 第三方播放器集成")]),t._v(" "),a("p",[t._v("本SDK可以与几乎所有第三方播放器搭配使用，请参考"),a("a",{attrs:{href:"https://github.com/swarm-cloud/hls-sw-p2p-engine/tree/main/demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例代码"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);