(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{853:function(t,a,n){"use strict";n.r(a);var e=n(1),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"实例化与参数配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例化与参数配置"}},[t._v("#")]),t._v(" 实例化与参数配置")]),t._v(" "),n("h3",{attrs:{id:"var-engine-new-p2pengineshaka-player-p2pconfig-opts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#var-engine-new-p2pengineshaka-player-p2pconfig-opts"}},[t._v("#")]),t._v(" var engine = new P2PEngineShaka(player, {p2pConfig: [opts]});")]),t._v(" "),n("p",[t._v("创建一个新的 "),n("em",[n("strong",[t._v("P2PEngineShaka")])]),t._v(" 实例，其中 "),n("em",[n("strong",[t._v("player")])]),t._v(" 是 "),n("em",[n("strong",[t._v("Shaka Player")])]),t._v(" 的实例。")]),t._v(" "),n("p",[t._v("如果指定了 "),n("em",[n("strong",[t._v("opts")])]),t._v(" ，那么对应的默认值将会被覆盖。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("字段")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("logLevel")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string|boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'error'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("log的等级，分为warn、error、none，设为true等于warn，设为false等于none。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("token")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("RouterLink",{attrs:{to:"/cn/views/bindings.html"}},[t._v("token")]),t._v("用于控制台多域名数据汇总展示，另外如果自定义channelId也需要设置token。")],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("trackerZone")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'cn'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("tracker服务器地址的国家代号，分为'cn'、'hk'、'us'。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("memoryCacheLimit")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v('{"pc": 600 * 1024 * 1024, "mobile": 300 * 1024 * 1024}')]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("p2p缓存的最大数据量，分为PC和mobile。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("p2pEnabled")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("是否开启P2P。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("webRTCConfig")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("{}")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("用于配置stun和datachannel的"),n("a",{attrs:{href:"https://github.com/feross/simple-peer",target:"_blank",rel:"noopener noreferrer"}},[t._v("字典"),n("OutboundLink")],1),t._v("。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("useHttpRange")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("在可能的情况下使用Http Range请求来补足p2p下载超时的剩余部分数据。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("httpLoadTime")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("3.0")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("P2P下载超时后留给HTTP下载的时间。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("sharePlaylist")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("是否允许m3u8文件的P2P传输。")])])])]),t._v(" "),n("h2",{attrs:{id:"p2pengineshaka-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2pengineshaka-api"}},[t._v("#")]),t._v(" P2PEngineShaka API")]),t._v(" "),n("h4",{attrs:{id:"p2pengineshaka-version-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2pengineshaka-version-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineShaka.version")])]),t._v(" (static)")]),t._v(" "),n("p",[t._v("获取 P2PEngineShaka 的版本号。")]),t._v(" "),n("h4",{attrs:{id:"p2pengineshaka-protocolversion-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2pengineshaka-protocolversion-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineShaka.protocolVersion")])]),t._v(" (static)")]),t._v(" "),n("p",[t._v("获取 P2P 协议的版本号。")]),t._v(" "),n("h4",{attrs:{id:"p2pengineshaka-issupported-static-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2pengineshaka-issupported-static-method"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineShaka.isSupported()")])]),t._v(" (static method)")]),t._v(" "),n("p",[t._v("判断当前浏览器是否支持WebRTC datachannel。")]),t._v(" "),n("h4",{attrs:{id:"engine-enablep2p"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-enablep2p"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.enableP2P()")])])]),t._v(" "),n("p",[t._v("在p2p暂停或未启动情况下启动p2p。")]),t._v(" "),n("h4",{attrs:{id:"engine-disablep2p"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-disablep2p"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.disableP2P()")])])]),t._v(" "),n("p",[t._v("停止p2p并释放内存。")]),t._v(" "),n("h4",{attrs:{id:"engine-destroy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-destroy"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.destroy()")])])]),t._v(" "),n("p",[t._v("停止p2p、销毁engine并释放内存。")]),t._v(" "),n("h2",{attrs:{id:"p2pengineshaka-事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2pengineshaka-事件"}},[t._v("#")]),t._v(" P2PEngineShaka 事件")]),t._v(" "),n("h4",{attrs:{id:"engine-on-peerid-function-peerid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-peerid-function-peerid"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('peerId', function (peerId) {})")])])]),t._v(" "),n("p",[t._v("当从服务端获取到peerId时回调该事件。")]),t._v(" "),n("h4",{attrs:{id:"engine-on-peers-function-peers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-peers-function-peers"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('peers', function (peers) {})")])])]),t._v(" "),n("p",[t._v("当与新的节点成功建立p2p连接时回调该事件。")]),t._v(" "),n("h4",{attrs:{id:"engine-on-stats-function-stats"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-stats-function-stats"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('stats', function (stats) {})")])])]),t._v(" "),n("p",[t._v("该回调函数可以获取p2p信息，包括："),n("br"),t._v("\nstats.totalHTTPDownloaded: 从HTTP(CDN)下载的数据量（单位KB）"),n("br"),t._v("\nstats.totalP2PDownloaded: 从P2P下载的数据量（单位KB）"),n("br"),t._v("\nstats.totalP2PUploaded: P2P上传的数据量（单位KB）"),n("br"),t._v("\nstats.p2pDownloadSpeed: P2P下载速度（单位KB/s）")]),t._v(" "),n("h3",{attrs:{id:"engine-on-serverconnected-function-connected"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-serverconnected-function-connected"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('serverConnected', function (connected) {})")])])]),t._v(" "),n("p",[t._v("当连接/断开websocket时回调该事件。")]),t._v(" "),n("h3",{attrs:{id:"engine-on-exception-function-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-exception-function-e"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('exception', function (e) {})")])])]),t._v(" "),n("p",[t._v("该回调函数可以获取SDK的异常信息，包括："),n("br"),t._v("\ne.code: 异常标识（TRACKER_EXPT SIGNAL_EXPT）"),n("br"),t._v("\ne.message: 异常信息 "),n("br"),t._v("\ne.stack: 异常堆栈信息 "),n("br")]),t._v(" "),n("h3",{attrs:{id:"通过p2pconfig获取p2p信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过p2pconfig获取p2p信息"}},[t._v("#")]),t._v(" 通过p2pConfig获取p2p信息")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("p2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getStats")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("totalP2PDownloaded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalP2PUploaded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalHTTPDownloaded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2pDownloadSpeed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取p2p下载信息")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getPeerId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("peerId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取本节点的Id")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getPeersInfo")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("peers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取成功连接的节点的信息")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"高级用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[t._v("#")]),t._v(" 高级用法")]),t._v(" "),n("h3",{attrs:{id:"解决动态-m3u8-mpd-路径问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决动态-m3u8-mpd-路径问题"}},[t._v("#")]),t._v(" 解决动态 m3u8/mpd 路径问题")]),t._v(" "),n("p",[t._v("某些流媒体提供商的 m3u8/mpd 是动态生成的，不同节点的mpd地址不一样，例如example.com/clientId1/streamId.mpd和example.com/clientId2/streamId.mpd,\n而本插件默认使用m3u8/mpd作为channelId。这时候就要构造一个共同的chanelId，使实际观看同一直播/视频的节点处在相同频道中。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必须先在 p2pConfig 设置 token ，才能自定义 channelId !")]),t._v("\np2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    token"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_TOKEN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("channelId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mpdUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" videoId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extractVideoIdFromUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mpdUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 忽略差异部分，构造一个一致的channelId，其中 extractVideoIdFromUrl 需要自己定义，可以抽取url中的视频ID作为结果返回")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" videoId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// channelId: VIDEO_ID       // for fixed channel id")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"解决动态切片路径问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决动态切片路径问题"}},[t._v("#")]),t._v(" 解决动态切片路径问题")]),t._v(" "),n("p",[t._v("类似动态mpd路径问题，相同切片文件的路径也可能有差异，这时候需要忽略切片路径差异的部分。插件默认用切片的绝地路径(url)来标识每个切片文件，所以需要通过钩子函数重新构造标识符。可以按如下设置：")]),t._v(" "),n("Tabs",{attrs:{type:"card"}},[n("Tab",{attrs:{label:".mpd"}},[n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("p2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n        segmentUrl: The url of segment\n        range: The byte range of segment\n     */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("segmentId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("segmentUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" segId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extractSegmentIdFromUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("segmentUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" range"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" segId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),n("Tab",{attrs:{label:".m3u8"}},[n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("p2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n        streamId: The id of stream\n        sn: The serial number of segment\n        segmentUrl: The url of segment\n        range: The byte range of segment\n     */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("segmentId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("streamId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" segmentUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tsId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extractSegmentIdFromUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("segmentUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tsId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),n("h3",{attrs:{id:"自行配置-stun-和-turn-服务器地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自行配置-stun-和-turn-服务器地址"}},[t._v("#")]),t._v(" 自行配置 STUN 和 TURN 服务器地址")]),t._v(" "),n("p",[t._v("STUN用于p2p连接过程中获取公网IP地址，TURN则可以在p2p连接不通时用于中转数据。本SDK已内置公开的STUN服务，开发者可以通过P2pConfig来更换STUN地址。TURN服务器则需要开发者自行搭建，可以参考"),n("a",{attrs:{href:"https://github.com/coturn/coturn",target:"_blank",rel:"noopener noreferrer"}},[t._v("coturn"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("p2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    webRTCConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       iceServers"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" urls"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_STUN_OR_TURN_SERVER")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"允许http-range请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#允许http-range请求"}},[t._v("#")]),t._v(" 允许Http Range请求")]),t._v(" "),n("p",[t._v("当对等端上行带宽不够时，可能导致p2p传输超时而转向http下载，原本p2p下载的数据无法复用。Http Range请求用于补足p2p下载超时的剩余部分数据，要开启Http Range，首先需要源服务器支持，然后增加以下配置：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("p2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    useHttpRange"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"切片合法性校验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#切片合法性校验"}},[t._v("#")]),t._v(" 切片合法性校验")]),t._v(" "),n("p",[t._v("有时候我们需要校验从节点下载的切片的合法性（类似bittorrent的哈希校验）。\nCDNBye提供了一个钩子函数，可以回调下载的切片供开发者进行校验。用于校验的\n哈希表建议直接从服务器下载，开发者可以通过程序计算每个ts文件的哈希并存储于\n特定的文件中或者直接嵌入到m3u8文件中。如果校验失败，直接在回调函数中\n返回false即可。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("p2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("validateSegment")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("segId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buffer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hash "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hashFile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHash")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("segId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" hash "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);