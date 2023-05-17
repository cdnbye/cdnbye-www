(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{914:function(t,e,n){"use strict";n.r(e);var a=n(1),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"create-p2penginemp4-instance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-p2penginemp4-instance"}},[t._v("#")]),t._v(" Create P2PEngineMP4 instance")]),t._v(" "),n("h3",{attrs:{id:"var-engine-new-p2penginemp4-p2pconfig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#var-engine-new-p2penginemp4-p2pconfig"}},[t._v("#")]),t._v(" var engine = new P2PEngineMP4(p2pConfig);")]),t._v(" "),n("p",[t._v("Create a new "),n("em",[n("strong",[t._v("P2PEngineMP4")])]),t._v(" instance.")]),t._v(" "),n("p",[t._v("If "),n("em",[n("strong",[t._v("p2pConfig")])]),t._v(" is specified, then the default options (shown below) will be overridden.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("logLevel")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string|boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'error'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Print log level(warn, error, none，false=none, true=warn).")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("token")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("RouterLink",{attrs:{to:"/en/views/bindings.html"}},[t._v("token")]),t._v("is used to summarize and display multi domain name data on the console. In addition, token is required while customizing channelId.")],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("announce")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'https://tracker.cdnbye.com/v1'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("The address of tracker server.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("announceLocation")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'cn'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("The country code name of the tracker server address('cn', 'hk', 'us').")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("memoryCacheLimit")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v('{"pc": 600 * 1024 * 1024, "mobile": 300 * 1024 * 1024}')]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("The max size of binary data that can be stored in the cache.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("pieceLength")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("512 * 1024")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Length in bytes of every piece but the last one.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("maxBufferLength")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("30")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Maximum buffer length in seconds. Player will never exceed this value.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("minBufferLength")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Minimum buffer length in seconds. If buffer length is/become less than this value, a new fragment will be loaded.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("mediaElem")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("HTMLMediaElement|string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Specify the ID or element object of the video/audio tag, default value is the first video/audio element in the document tree.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("p2pEnabled")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Enable or disable p2p engine.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("webRTCConfig")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("{}")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("A "),n("a",{attrs:{href:"https://github.com/feross/simple-peer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration dictionary"),n("OutboundLink")],1),t._v(" providing options to configure WebRTC connections.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("tag")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("''")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("User customized tag.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("swFile")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'./sw.js'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("The file name and path of ServiceWorker.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("swScope")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'./'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("The default scope is the location of the ServiceWorker file, and extends to all directories below. So if sw.js is located in the root directory, the ServiceWorker will control requests from all files at this domain.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("showSlogan")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Display slogan of cdnbye on console.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("sharePlaylist")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Allow the P2P transmission of m3u8 file.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("em",[n("strong",[t._v("useDiskCache")])])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Use IndexedDB to cache data.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("em",[n("strong",[t._v("diskCacheLimit")])])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v('{"pc": 2500 * 1024 * 1024, "mobile": 1500 * 1024 * 1024}')]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("The max size of binary data that can be stored in the disk cache.")])])])]),t._v(" "),n("h2",{attrs:{id:"p2penginemp4-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemp4-api"}},[t._v("#")]),t._v(" P2PEngineMP4 API")]),t._v(" "),n("h4",{attrs:{id:"p2penginemp4-version-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemp4-version-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineMP4.version")])]),t._v(" (static)")]),t._v(" "),n("p",[t._v("Get the version of P2PEngineMP4.")]),t._v(" "),n("h4",{attrs:{id:"p2penginemp4-protocolversion-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemp4-protocolversion-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineMP4.protocolVersion")])]),t._v(" (static)")]),t._v(" "),n("p",[t._v("Get the version of P2P protocol.")]),t._v(" "),n("h4",{attrs:{id:"p2penginemp4-issupported-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemp4-issupported-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineMP4.isSupported() (static)")])])]),t._v(" "),n("p",[t._v("Returns true if both WebRTC datachannel and ServiceWorker are supported by the browser.")]),t._v(" "),n("h4",{attrs:{id:"p2penginemp4-iswebrtcsupported-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemp4-iswebrtcsupported-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineMP4.isWebRTCSupported() (static)")])])]),t._v(" "),n("p",[t._v("Returns true if WebRTC datachannel is supported by the browser.")]),t._v(" "),n("h4",{attrs:{id:"p2penginemp4-isseviceworkersupported-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemp4-isseviceworkersupported-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineMP4.isSeviceWorkerSupported() (static)")])])]),t._v(" "),n("p",[t._v("Returns true if ServiceWorker is supported by the browser.")]),t._v(" "),n("h4",{attrs:{id:"engine-registerserviceworker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-registerserviceworker"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.registerServiceWorker()")])])]),t._v(" "),n("p",[t._v("Register ServiceWorker and return a promise.")]),t._v(" "),n("h4",{attrs:{id:"engine-unregisterserviceworker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-unregisterserviceworker"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.unregisterServiceWorker()")])])]),t._v(" "),n("p",[t._v("Unregister ServiceWorker and return a promise.")]),t._v(" "),n("h4",{attrs:{id:"engine-enablep2p"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-enablep2p"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.enableP2P()")])])]),t._v(" "),n("p",[t._v("Start p2p.")]),t._v(" "),n("h4",{attrs:{id:"engine-disablep2p"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-disablep2p"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.disableP2P()")])])]),t._v(" "),n("p",[t._v("Stop p2p, free used resources.")]),t._v(" "),n("h4",{attrs:{id:"engine-restartp2p"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-restartp2p"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.restartP2p()")])])]),t._v(" "),n("p",[t._v("Restart p2p 。")]),t._v(" "),n("h2",{attrs:{id:"p2penginemp4-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginemp4-events"}},[t._v("#")]),t._v(" P2PEngineMP4 Events")]),t._v(" "),n("h4",{attrs:{id:"engine-on-peerid-function-peerid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-peerid-function-peerid"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('peerId', function (peerId) {})")])])]),t._v(" "),n("p",[t._v("Emitted when the peer Id of this client is obtained from server.")]),t._v(" "),n("h4",{attrs:{id:"engine-on-peers-function-peers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-peers-function-peers"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('peers', function (peers) {})")])])]),t._v(" "),n("p",[t._v("Emitted when successfully connected with new peer.")]),t._v(" "),n("h4",{attrs:{id:"engine-on-stats-function-stats"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-stats-function-stats"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('stats', function (stats) {})")])])]),t._v(" "),n("p",[t._v("Emitted when data is downloaded/uploaded."),n("br"),t._v("\nstats.totalHTTPDownloaded: total data downloaded by HTTP(KB)."),n("br"),t._v("\nstats.totalP2PDownloaded: total data downloaded by P2P(KB)."),n("br"),t._v("\nstats.totalP2PUploaded: total data uploaded by P2P(KB)."),n("br"),t._v("\nstats.p2pDownloadSpeed: p2p download speed(KB/s).")]),t._v(" "),n("h3",{attrs:{id:"engine-on-serverconnected-function-connected"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-serverconnected-function-connected"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('serverConnected', function (connected) {})")])])]),t._v(" "),n("p",[t._v("Emitted when websocket is opened/closed.")]),t._v(" "),n("h3",{attrs:{id:"engine-on-exception-function-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-exception-function-e"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('exception', function (e) {})")])])]),t._v(" "),n("p",[t._v("Emitted when exception occured."),n("br"),t._v("\ne.code: Exception identifier（TRACKER_EXPT SIGNAL_EXPT）"),n("br"),t._v("\ne.message: Exception message "),n("br"),t._v("\ne.stack: Exception stack "),n("br")]),t._v(" "),n("h3",{attrs:{id:"get-p2p-information-from-p2pconfig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-p2p-information-from-p2pconfig"}},[t._v("#")]),t._v(" Get p2p information from p2pConfig")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("p2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getStats")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("totalP2PDownloaded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalP2PUploaded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalHTTPDownloaded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2pDownloadSpeed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get the downloading statistics")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getPeerId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("peerId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get peer Id")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getPeersInfo")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("peers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get peers information")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"the-global-variable-for-sdk-auto-init"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-global-variable-for-sdk-auto-init"}},[t._v("#")]),t._v(" The global variable for SDK auto init")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("window.disableP2pEngineMP4AutoInit")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("SDK will register ServiceWorker automatically with default configuration when page loaded, you can disable it and customize p2p config")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("window.p2pEngineMP4AnnounceLocation")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'cn'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("The country code name of the tracker server address('cn', 'hk', 'us')")])])])]),t._v(" "),n("h2",{attrs:{id:"mp4proxy-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mp4proxy-api"}},[t._v("#")]),t._v(" MP4Proxy API")]),t._v(" "),n("h4",{attrs:{id:"new-mp4proxy-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-mp4proxy-config"}},[t._v("#")]),t._v(" new MP4Proxy(config);")]),t._v(" "),n("p",[t._v("Create a new "),n("em",[n("strong",[t._v("MP4Proxy")])]),t._v(" instance.")]),t._v(" "),n("p",[t._v("If "),n("em",[n("strong",[t._v("config")])]),t._v(" is specified, then the default options (shown below) will be overridden.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("httpHeaders")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("function(url, headers)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Set http headers for mp4 request, for example, httpHeaders: (url, headers) => { headers.set('token', 'xxx') }")])])])]),t._v(" "),n("h4",{attrs:{id:"mp4proxy-version-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mp4proxy-version-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("MP4Proxy.version")])]),t._v(" (static)")]),t._v(" "),n("p",[t._v("Get the version of MP4Proxy.")]),t._v(" "),n("h2",{attrs:{id:"advanced-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advanced-usage"}},[t._v("#")]),t._v(" Advanced Usage")]),t._v(" "),n("h3",{attrs:{id:"dynamic-mp4-mp3-path-support"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-mp4-mp3-path-support"}},[t._v("#")]),t._v(" Dynamic MP4/MP3 Path Support")]),t._v(" "),n("p",[t._v("The channelId is an identifier used by our backend to match peers that are watching the same content. It is an optional parameter, and by default, we generate channelId from the content URL by removing any query parameters and protocol from it.\nSome mp4/mp3 urls play the same live/vod but have different paths on them. For example, example.com/clientId1/streamId.mp4 and example.com/clientId2/streamId.mp4. In this case, you can format a common channelId for them.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set token in p2pConfig before setting channelId! Connectivity with other platform should have the same token.")]),t._v("\np2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    token"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_TOKEN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("channelId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" videoId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extractVideoIdFromUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// make a channelId by removing the different part which is defined by yourself")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" videoId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// channelId: VIDEO_ID       // for fixed channel id")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",[t._v("Interconnect with other platform should ensure that both have the same token and channelId.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);