(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{891:function(t,e,n){"use strict";n.r(e);var a=n(1),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"create-instance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-instance"}},[t._v("#")]),t._v(" Create instance")]),t._v(" "),n("h3",{attrs:{id:"var-engine-new-p2penginefile-url-p2pconfig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#var-engine-new-p2penginefile-url-p2pconfig"}},[t._v("#")]),t._v(" var engine = new P2PEngineFile(url, p2pConfig);")]),t._v(" "),n("p",[t._v("Create a new "),n("em",[n("strong",[t._v("P2PEngineFile")])]),t._v(" instance, "),n("em",[n("strong",[t._v("url")])]),t._v(" is the downloading file url.")]),t._v(" "),n("p",[t._v("If "),n("em",[n("strong",[t._v("p2pConfig")])]),t._v(" is specified, then the default options (shown below) will be overridden.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("logLevel")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string|boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'error'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Print log level(warn, error, none，false=none, true=warn).")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("token")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("RouterLink",{attrs:{to:"/en/views/bindings.html"}},[t._v("token")]),t._v("is used to summarize and display multi domain name data on the console. In addition, token is required while customizing channelId.")],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("trackerZone")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'cn'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("The country code name of the tracker server address('cn', 'hk', 'us').")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("p2pEnabled")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Enable or disable p2p engine.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("webRTCConfig")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("{}")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("A "),n("a",{attrs:{href:"https://github.com/feross/simple-peer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration dictionary"),n("OutboundLink")],1),t._v(" providing options to configure WebRTC connections.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("pieceLength")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("1024 * 1024")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Length in bytes of every piece but the last one.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("httpMaxRetrys")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Maximum retry times of file download by HTTP.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("showSlogan")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Display slogan of cdnbye on console.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("mitm")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("'https://cdnbye.github.io/file-p2p-engine/demo/mitm.html'")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("The address of own man in the middle that installs the service worker in a secure context hosted on github static pages from an iframe.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("diskCacheLimit")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v('{"pc": 2500 * 1024 * 1024, "mobile": 1500 * 1024 * 1024}')]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("The max size of binary data that can be stored in the disk cache.")])])])]),t._v(" "),n("h2",{attrs:{id:"p2penginefile-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginefile-api"}},[t._v("#")]),t._v(" P2PEngineFile API")]),t._v(" "),n("h4",{attrs:{id:"p2penginefile-version-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginefile-version-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineFile.version")])]),t._v(" (static)")]),t._v(" "),n("p",[t._v("Get the version of P2PEngineFile.")]),t._v(" "),n("h4",{attrs:{id:"p2penginefile-protocolversion-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginefile-protocolversion-static"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineFile.protocolVersion")])]),t._v(" (static)")]),t._v(" "),n("p",[t._v("Get the version of P2P protocol.")]),t._v(" "),n("h4",{attrs:{id:"p2penginefile-issupported-static-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginefile-issupported-static-method"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("P2PEngineFile.isSupported() (static method)")])])]),t._v(" "),n("p",[t._v("Returns true if WebRTC data channel is supported by the browser.")]),t._v(" "),n("h4",{attrs:{id:"engine-start"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-start"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.start()")])])]),t._v(" "),n("p",[t._v("Start file download.")]),t._v(" "),n("h4",{attrs:{id:"engine-pause"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-pause"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.pause()")])])]),t._v(" "),n("p",[t._v("Pause file download.")]),t._v(" "),n("h4",{attrs:{id:"engine-resume"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-resume"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.resume()")])])]),t._v(" "),n("p",[t._v("Resume file download.")]),t._v(" "),n("h4",{attrs:{id:"engine-stop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-stop"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.stop()")])])]),t._v(" "),n("p",[t._v("Stop downloading and p2p, free used resources.")]),t._v(" "),n("h4",{attrs:{id:"engine-destroy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-destroy"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.destroy()")])])]),t._v(" "),n("p",[t._v("Stop downloading and p2p, free used resources.")]),t._v(" "),n("h4",{attrs:{id:"engine-issavebystreamsupported"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-issavebystreamsupported"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.isSaveByStreamSupported")])])]),t._v(" "),n("p",[t._v("Returns true if save file by ServiceWorker stream is supported by the browser.")]),t._v(" "),n("h4",{attrs:{id:"engine-savebyserviceworkerstream-filename"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-savebyserviceworkerstream-filename"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.saveByServiceWorkerStream(filename)")])])]),t._v(" "),n("p",[t._v("Instruct the browser to save a file using some response header + service worker.")]),t._v(" "),n("h2",{attrs:{id:"p2penginefile-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2penginefile-events"}},[t._v("#")]),t._v(" P2PEngineFile Events")]),t._v(" "),n("h4",{attrs:{id:"engine-on-metadata-function-source"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-metadata-function-source"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('metadata', function (source) {})")])])]),t._v(" "),n("p",[t._v("Get the metadata of file，including: "),n("br"),t._v("\nsource.getUrl()：The download address of file "),n("br"),t._v("\nsource.getMime()：The mime type of file "),n("br"),t._v("\nsource.getFileLength()：The size of file "),n("br")]),t._v(" "),n("h4",{attrs:{id:"engine-on-progress-function-ratio"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-progress-function-ratio"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('progress', function (ratio) {})")])])]),t._v(" "),n("p",[t._v("Download progress.")]),t._v(" "),n("h4",{attrs:{id:"engine-on-failed-function"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-failed-function"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('failed', function () {})")])])]),t._v(" "),n("p",[t._v("Emitted when download failed, do something like fallback to normal download.")]),t._v(" "),n("h4",{attrs:{id:"engine-on-speed-function-speed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-speed-function-speed"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('speed', function (speed) {})")])])]),t._v(" "),n("p",[t._v("Mean download speed(byte/s).")]),t._v(" "),n("h4",{attrs:{id:"engine-on-finished-function-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-finished-function-file"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('finished', function (file) {})")])])]),t._v(" "),n("p",[t._v("Emitted when download finished, file is an object to handle the downloaded file, including: "),n("br"),t._v("\nfile.save(fileName)：Save file with fileName "),n("br"),t._v("\nfile.getBlobURL()：Get the blob URL "),n("br"),t._v("\nfile.revokeBlobURL()：Remove reference to BlobURL and free used resources "),n("br")]),t._v(" "),n("h4",{attrs:{id:"engine-on-peerid-function-peerid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-peerid-function-peerid"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('peerId', function (peerId) {})")])])]),t._v(" "),n("p",[t._v("Emitted when the peer Id of this client is obtained from server.")]),t._v(" "),n("h4",{attrs:{id:"engine-on-peers-function-peers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-peers-function-peers"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('peers', function (peers) {})")])])]),t._v(" "),n("p",[t._v("Emitted when successfully connected with new peer.")]),t._v(" "),n("h4",{attrs:{id:"engine-on-stats-function-stats"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-stats-function-stats"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('stats', function (stats) {})")])])]),t._v(" "),n("p",[t._v("Emitted when data is downloaded/uploaded."),n("br"),t._v("\nstats.totalHTTPDownloaded: total data downloaded by HTTP(KB)."),n("br"),t._v("\nstats.totalP2PDownloaded: total data downloaded by P2P(KB)."),n("br"),t._v("\nstats.totalP2PUploaded: total data uploaded by P2P(KB)."),n("br"),t._v("\nstats.p2pDownloadSpeed: p2p download speed(KB/s).")]),t._v(" "),n("h3",{attrs:{id:"engine-on-serverconnected-function-connected"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-serverconnected-function-connected"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('serverConnected', function (connected) {})")])])]),t._v(" "),n("p",[t._v("Emitted when websocket is opened/closed.")]),t._v(" "),n("h3",{attrs:{id:"engine-on-exception-function-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-on-exception-function-e"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("engine.on('exception', function (e) {})")])])]),t._v(" "),n("p",[t._v("Emitted when exception occured."),n("br"),t._v("\ne.code: Exception identifier（TRACKER_EXPT SIGNAL_EXPT）"),n("br"),t._v("\ne.message: Exception message "),n("br"),t._v("\ne.stack: Exception stack "),n("br")]),t._v(" "),n("h3",{attrs:{id:"get-p2p-information-from-p2pconfig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-p2p-information-from-p2pconfig"}},[t._v("#")]),t._v(" Get p2p information from p2pConfig")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("p2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getStats")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("totalP2PDownloaded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalP2PUploaded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalHTTPDownloaded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2pDownloadSpeed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get the downloading statistics")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getPeerId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("peerId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get peer Id")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getPeersInfo")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("peers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get peers information")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"advanced-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advanced-usage"}},[t._v("#")]),t._v(" Advanced Usage")]),t._v(" "),n("h4",{attrs:{id:"dynamic-file-url-path-support"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-file-url-path-support"}},[t._v("#")]),t._v(" Dynamic File URL Path Support")]),t._v(" "),n("p",[t._v("Some urls point to the same file but have different paths on them. For example,\nexample.com/clientId1/fileId.file and example.com/clientId2/fileId.file. In this case, you can format a common channelId for them.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set token in p2pConfig before setting channelId!")]),t._v("\np2pConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    token"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_TOKEN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("channelId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fileId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extractFileIdFromUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// make a channelId by removing the different part which is defined by yourself")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fileId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// channelId: VIDEO_ID       // for fixed channel id")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);