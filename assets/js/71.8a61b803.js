(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{843:function(t,e,n){"use strict";n.r(e);var a=n(1),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"实例化-p2penginemedia"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例化-p2penginemedia"}},[t._v("#")]),t._v(" 实例化 P2PEngineMedia")]),t._v(" "),n("h3",{attrs:{id:"var-engine-new-p2penginemedia-p2pconfig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#var-engine-new-p2penginemedia-p2pconfig"}},[t._v("#")]),t._v(" var engine = new P2PEngineMedia(p2pConfig);")]),t._v(" "),n("p",[t._v("创建一个 "),n("em",[n("strong",[t._v("P2PEngineMedia")])]),t._v(" 实例。")]),t._v(" "),n("p",[t._v("如果指定了 "),n("em",[n("strong",[t._v("p2pConfig")])]),t._v(" ，那么对应的默认值将会被覆盖。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("字段")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("logLevel")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string|boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'error'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("log的等级，分为warn、error、none，设为true等于warn，设为false等于none。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("token")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("RouterLink",{attrs:{to:"/cn/views/bindings.html"}},[t._v("token")]),t._v("用于控制台多域名数据汇总展示，另外如果自定义channelId也需要设置token。")],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("trackerZone")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'eu'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("tracker服务器地址的国家代号，分为'eu'、'hk'、'us'。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("pieceLength")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("512 * 1024")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("每个切片的大小(单位：Byte)，相同pieceLength的节点才能互相连接，建议根据码率进行调整。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("mediaElem")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("HTMLMediaElement|string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("指定video或audio标签的id或者Element对象，默认是document中的第一个video/audio元素。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("p2pEnabled")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("是否开启P2P。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("webRTCConfig")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("{}")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("用于配置stun和datachannel的"),n("a",{attrs:{href:"https://github.com/feross/simple-peer",target:"_blank",rel:"noopener noreferrer"}},[t._v("字典"),n("OutboundLink")],1),t._v("。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("tag")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("''")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("用户自定义标签。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("swFile")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'./sw.js'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("ServiceWorker文件名和路径.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("swScope")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'./'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("ServiceWorker默认作用域是当前目录以及所有子目录，因此如果将 sw.js 放在网站根目录，那么所有网站请求都在 ServiceWorker 控制范围内。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("diskCacheLimit")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v('{"pc": 2500 * 1024 * 1024, "mobile": 1500 * 1024 * 1024}')]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("磁盘缓存的最大数据量，分为PC和mobile。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("minBufferCount")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("video元素剩余缓冲piece数量小于这个数值将强制用HTTP下载。")])])])]),t._v(" "),n("h2",{attrs:{id:"p2penginemedia-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemedia-api"}},[t._v("#")]),t._v(" P2PEngineMedia API")]),t._v(" "),n("h4",{attrs:{id:"p2penginemedia-version-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemedia-version-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineMedia.version")])]),t._v(" (static)")]),t._v(" "),n("p",[t._v("获取 P2PEngineMedia 的版本号。")]),t._v(" "),n("h4",{attrs:{id:"p2penginemedia-protocolversion-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemedia-protocolversion-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineMedia.protocolVersion")])]),t._v(" (static)")]),t._v(" "),n("p",[t._v("获取 P2P 协议的版本号。")]),t._v(" "),n("h4",{attrs:{id:"p2penginemedia-issupported-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemedia-issupported-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineMedia.isSupported() (static)")])])]),t._v(" "),n("p",[t._v("判断当前浏览器是否支持 WebRTC datachannel 和 ServiceWorker 。")]),t._v(" "),n("h4",{attrs:{id:"p2penginemedia-iswebrtcsupported-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemedia-iswebrtcsupported-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineMedia.isWebRTCSupported() (static)")])])]),t._v(" "),n("p",[t._v("判断当前浏览器是否支持 WebRTC datachannel 。")]),t._v(" "),n("h4",{attrs:{id:"p2penginemedia-isseviceworkersupported-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemedia-isseviceworkersupported-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineMedia.isSeviceWorkerSupported() (static)")])])]),t._v(" "),n("p",[t._v("判断当前浏览器是否支持 ServiceWorker 。")]),t._v(" "),n("h4",{attrs:{id:"engine-getproxiedurl-originalurl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-getproxiedurl-originalurl"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.getProxiedUrl(originalURL)")])])]),t._v(" "),n("p",[t._v("获取本地代理地址，参数是原始地址字符串，返回值是本地代理地址的Promise。")]),t._v(" "),n("h4",{attrs:{id:"engine-enablep2p"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-enablep2p"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.enableP2P()")])])]),t._v(" "),n("p",[t._v("启动 p2p 。")]),t._v(" "),n("h4",{attrs:{id:"engine-disablep2p"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-disablep2p"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.disableP2P()")])])]),t._v(" "),n("p",[t._v("停止 p2p 并释放资源。")]),t._v(" "),n("h4",{attrs:{id:"engine-restartp2p"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-restartp2p"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.restartP2p()")])])]),t._v(" "),n("p",[t._v("重启 p2p 。")]),t._v(" "),n("h2",{attrs:{id:"p2penginemedia-事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemedia-事件"}},[t._v("#")]),t._v(" P2PEngineMedia 事件")]),t._v(" "),n("h4",{attrs:{id:"engine-on-peerid-function-peerid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-peerid-function-peerid"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('peerId', function (peerId) {})")])])]),t._v(" "),n("p",[t._v("当从服务端获取到peerId时回调该事件。")]),t._v(" "),n("h4",{attrs:{id:"engine-on-peers-function-peers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-peers-function-peers"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('peers', function (peers) {})")])])]),t._v(" "),n("p",[t._v("当与新的节点成功建立p2p连接时回调该事件。")]),t._v(" "),n("h4",{attrs:{id:"engine-on-stats-function-stats"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-stats-function-stats"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('stats', function (stats) {})")])])]),t._v(" "),n("p",[t._v("该回调函数可以获取p2p信息，包括："),n("br"),t._v("\nstats.totalHTTPDownloaded: 从HTTP(CDN)下载的数据量（单位KB）"),n("br"),t._v("\nstats.totalP2PDownloaded: 从P2P下载的数据量（单位KB）"),n("br"),t._v("\nstats.totalP2PUploaded: P2P上传的数据量（单位KB）"),n("br"),t._v("\nstats.p2pDownloadSpeed: P2P下载速度（单位KB/s）")]),t._v(" "),n("h3",{attrs:{id:"engine-on-serverconnected-function-connected"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-serverconnected-function-connected"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('serverConnected', function (connected) {})")])])]),t._v(" "),n("p",[t._v("当连接/断开websocket时回调该事件。")]),t._v(" "),n("h3",{attrs:{id:"engine-on-exception-function-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-exception-function-e"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('exception', function (e) {})")])])]),t._v(" "),n("p",[t._v("该回调函数可以获取SDK的异常信息，包括："),n("br"),t._v("\ne.code: 异常标识（TRACKER_EXPT SIGNAL_EXPT）"),n("br"),t._v("\ne.message: 异常信息 "),n("br"),t._v("\ne.stack: 异常堆栈信息 "),n("br")]),t._v(" "),n("h3",{attrs:{id:"通过p2pconfig获取p2p信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过p2pconfig获取p2p信息"}},[t._v("#")]),t._v(" 通过p2pConfig获取p2p信息")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("p2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getStats")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("totalP2PDownloaded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalP2PUploaded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalHTTPDownloaded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2pDownloadSpeed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取p2p下载信息")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getPeerId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("peerId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取本节点的Id")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getPeersInfo")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("peers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取成功连接的节点的信息")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"mediaproxy-version-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mediaproxy-version-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("MediaProxy.version")])]),t._v(" (static)")]),t._v(" "),n("p",[t._v("获取 MediaProxy 的版本号。")]),t._v(" "),n("h2",{attrs:{id:"高级用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[t._v("#")]),t._v(" 高级用法")]),t._v(" "),n("h3",{attrs:{id:"解决动态-mp4-mp3-路径问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决动态-mp4-mp3-路径问题"}},[t._v("#")]),t._v(" 解决动态 MP4/MP3 路径问题")]),t._v(" "),n("p",[t._v("某些流媒体提供商的 mp4/mp3 地址是动态生成的，不同节点的 mp4/mp3 地址不一样，例如example.com/clientId1/streamId.mp4和example.com/clientId2/streamId.mp4，而本插件默认使用 mp4/mp3 地址(去掉查询参数)作为channelId。这时候就要构造一个共同的chanelId，使实际观看同一直播/视频的节点处在相同频道中。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必须先在 p2pConfig 设置 token ，才能自定义 channelId ! 与其他平台互通需要构造相同的 token 。")]),t._v("\np2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    token"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_TOKEN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("channelId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" videoId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extractVideoIdFromUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 忽略差异部分，构造一个一致的channelId，其中 extractVideoIdFromUrl 需要自己定义，可以抽取url中的视频ID作为结果返回")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" videoId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// channelId: VIDEO_ID       // for fixed channel id")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",[t._v("如果要与其他平台互通，则必须确保两者拥有相同的 token 和 channelId 。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);