(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{869:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[t._v("#")]),t._v(" Basics")]),t._v(" "),a("h3",{attrs:{id:"will-the-shutdown-of-p2p-service-affect-the-normal-play-of-video"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#will-the-shutdown-of-p2p-service-affect-the-normal-play-of-video"}},[t._v("#")]),t._v(" Will the shutdown of P2P service affect the normal play of video?")]),t._v(" "),a("p",[t._v("No. Videos will still play normally without P2P streaming.")]),t._v(" "),a("h3",{attrs:{id:"do-i-need-to-replace-or-change-my-existing-streaming-solution-content-delivery-network-cdn-to-use-swarmcloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-i-need-to-replace-or-change-my-existing-streaming-solution-content-delivery-network-cdn-to-use-swarmcloud"}},[t._v("#")]),t._v(" Do I need to replace or change my existing streaming solution / content delivery network (CDN) to use SwarmCloud?")]),t._v(" "),a("p",[t._v("No. SwarmCloud is a hybrid solution that integrates with and extends the capabilities of your existing infrastructure. This allows you to switch the solution on or off if needed and easily revert to your original method of delivery. All you have to do to integrate SwarmCloud, is to add a single library to your code.")]),t._v(" "),a("h3",{attrs:{id:"how-does-p2p-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-p2p-works"}},[t._v("#")]),t._v(" How does P2P works?")]),t._v(" "),a("p",[t._v("When used with streaming video, P2P technology creates a hierarchy of nodes to retrieve and redistribute video segments from an origin video source. A P2P network looks very much like an inverted tree, with root nodes retrieving video segments from the upstream origin server, and downstream nodes retrieving video segments from the upstream nodes, which in turn serve the segments to nodes downstream from them.\n"),a("img",{attrs:{width:"480",src:"https://www.cdnbye.com/pics/hierarchy.png",alt:"cdn-vs-p2p"}}),t._v(" "),a("br"),t._v("\nA P2P network controller (tracker) forms peer groups of end-user devices as they come online. The groups are based on geographic proximity, making the peers suitable to share content quickly and easily. The tracker can be hosted as a cloud-based service. When a user requests content, the P2P tracker checks the peer group to determine if the content has been previously stored. If a peer is found, the content will be provided without connecting to the original video source.\n"),a("br"),t._v("\nOne of the strongest features of peer-to-peer (P2P) networking is that it needs virtually no infrastructure. The tracker can be deployed in the cloud as easily as anywhere else, since video traffic never passes through it. For the same reason, P2P networks are fast to deploy. As each viewer installs the P2P client on their device, they can join or start a P2P network with little other work required. When using WebRTC-based P2P, no client deployment is necessary and any device with a modern browser can participate in the peer network.\n"),a("br"),t._v("\nNo matter how powerful the CDN, however, an influx of viewers at the most critical moment of the action will always be a challenge. An exciting game in which fans tune in en masse at kick-off, in the final minutes, or even in overtime can create network conditions which drive just as much action off the pitch as on it. For these reasons, we suggest incorporating P2P delivery technology to complete the delivery workflow.\n"),a("br"),t._v("\nSwarmCloud’s P2P Delivery solution offers wide device coverage across desktop, Android and iOS mobile devices and set-top boxes. Its algorithms take a quality-first approach, using metrics such as rebuffering, CPU, and battery life to adapt delivery to the resources of each device and help improve user experience overall during peak traffic hours.")]),t._v(" "),a("img",{attrs:{width:"480",src:"https://www.cdnbye.com/pics/cdn-vs-p2p.jpeg",alt:"cdn-vs-p2p"}}),t._v(" "),a("h3",{attrs:{id:"does-swarmcloud-work-with-tokenized-streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#does-swarmcloud-work-with-tokenized-streams"}},[t._v("#")]),t._v(" Does SwarmCloud work with tokenized streams?")]),t._v(" "),a("p",[t._v("Our products are compatible with tokenized streams. As we require some information about how you tokenize, this needs to be set up by our support team. You will need to provide tokenized sample URLs and if available a URL pattern.")]),t._v(" "),a("h3",{attrs:{id:"do-you-add-additional-latency-to-my-stream-or-are-there-other-potential-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-you-add-additional-latency-to-my-stream-or-are-there-other-potential-problems"}},[t._v("#")]),t._v(" Do you add additional latency to my stream, or are there other potential problems?")]),t._v(" "),a("p",[t._v("No, SwarmCloud does not add additional latency to your stream. However, low latency environments can cause a drop in saving ratio when using SwarmCloud. We recommend the following setup for your HLS / Dash streaming playlist:\n"),a("br"),t._v("\nSegment length: at least 3 seconds\n"),a("br"),t._v("\nPlaylist length: at least 6 segments")]),t._v(" "),a("h3",{attrs:{id:"what-if-viewers-do-not-have-enough-uplink-bandwidth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-if-viewers-do-not-have-enough-uplink-bandwidth"}},[t._v("#")]),t._v(" What if viewers do not have enough uplink bandwidth?")]),t._v(" "),a("p",[t._v("SwarmCloud comes with an intelligent fallback system. Each end device keeps an open connection to the original content source (the CDN). The SwarmCloud Client SDK measures local bandwidth capacities and decides in real-time whether or not to use a WebRTC connection for content delivery. That means if viewers do not have enough bandwidth capacities to share content, they simply won't.\n"),a("br"),t._v("\nWith this approach, SwarmCloud guarantees the optimal ratio between regular CDN traffic and WebRTC traffic between users. Furthermore, as SwarmCloud adapts to bandwidth changes in real-time, the network will always converge to this optimal state.")]),t._v(" "),a("h3",{attrs:{id:"how-secure-is-the-swarmcloud-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-secure-is-the-swarmcloud-service"}},[t._v("#")]),t._v(" How secure is the SwarmCloud service?")]),t._v(" "),a("p",[t._v("SwarmCloud transfers data between peers using WebRTC data channel, which is secured by SCTP protocols and DTLS encryption. Communication with the backend(tracker and signaling server) is done via HTTPS and secured WebSocket.")]),t._v(" "),a("h3",{attrs:{id:"do-you-offer-a-self-hosted-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-you-offer-a-self-hosted-solution"}},[t._v("#")]),t._v(" Do you offer a self-hosted solution?")]),t._v(" "),a("p",[t._v("We don’t currently offer an on-premise option.")]),t._v(" "),a("h3",{attrs:{id:"how-to-buy-a-traffic-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-buy-a-traffic-package"}},[t._v("#")]),t._v(" How to buy a traffic package?")]),t._v(" "),a("p",[t._v("Log on to https://oms.cdnbye.com and click the "),a("em",[a("strong",[t._v("Traffic Package")])]),t._v(" on the left side. At present, Alipay and Paypal are supported to pay for the order. Please note that Alipay pays in RMB and Paypal in US dollars.")]),t._v(" "),a("h3",{attrs:{id:"how-to-deduct-the-traffic-after-buying-the-traffic-package-if-multiple-domain-names-appid-are-bound"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-deduct-the-traffic-after-buying-the-traffic-package-if-multiple-domain-names-appid-are-bound"}},[t._v("#")]),t._v(" How to deduct the traffic after buying the traffic package if multiple domain names/AppId are bound?")]),t._v(" "),a("p",[t._v("If you bind multiple domain names in one account, those which open P2P services share traffic packets together. You can save on packet consumption by shutting down P2P services of one or several domain names in "),a("em",[a("strong",[t._v("P2P Setting")])]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"does-swarmcloud-interfere-with-drm-digital-right-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#does-swarmcloud-interfere-with-drm-digital-right-management"}},[t._v("#")]),t._v(" Does SwarmCloud interfere with DRM(Digital Right Management)?")]),t._v(" "),a("p",[t._v("No. P2P transmission is activated only after the user is authorized by the publisher’s server. Importantly, decryption key isn't transferred through the P2P network. The segments shared between peers are the same as what peers receive from the CDN. Also, content is never uploaded or stored in our server.\n"),a("br"),t._v("\nSwarmCloud works in a network layer to optimize the way segments are distributed between end devices. While doing this, all segments remain decrypted. As each segment is encrypted the same way for each user, there is no problem in exchanging those segments. Once a segment reaches an end device, the DRM service, that runs in a local application layer starts decrypting the segment.")]),t._v(" "),a("h3",{attrs:{id:"will-swarmcloud-bring-a-delay-to-a-user-s-stream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#will-swarmcloud-bring-a-delay-to-a-user-s-stream"}},[t._v("#")]),t._v(" Will SwarmCloud bring a delay to a user's stream?")]),t._v(" "),a("p",[t._v("No. The first Segment is always downloaded from CDN. Additionally, if a video segment cannot be loaded from peers within the timeout period, our scheduling algorithm will switch to CDN mode in time. That means it works within the delay inherent to the HLS and MPEG-DASH protocols.")]),t._v(" "),a("h2",{attrs:{id:"web-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-sdk"}},[t._v("#")]),t._v(" Web SDK")]),t._v(" "),a("h3",{attrs:{id:"how-does-web-sdk-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-web-sdk-work"}},[t._v("#")]),t._v(" How does Web SDK work?")]),t._v(" "),a("p",[t._v("SwarmCloud implements WebRTC datachannel to scale live/vod video streaming by p2p network using bittorrent-like protocol. The built-in scheduling algorithm determines whether a peer should load the next segment from p2p network or the publisher’s alternative delivery system. hlsjs-p2p-engine is a hls.js wrapper provided by SwarmCloud for streaming HLS.\nToday SwarmCloud supports the vast majority of HTML5 players including Hls.js, JWPlayer, Video.js, Clappr, Flowplayer and TCPlayer.")]),t._v(" "),a("h3",{attrs:{id:"is-it-possible-to-run-swarmcloud-on-ios-browsers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-it-possible-to-run-swarmcloud-on-ios-browsers"}},[t._v("#")]),t._v(" Is it possible to run SwarmCloud on iOS browsers?")]),t._v(" "),a("p",[t._v("Yes, we provide SDK based on ServiceWorker which can run p2p on iOS Safari.")]),t._v(" "),a("h3",{attrs:{id:"what-happens-if-a-user-s-browser-doesn-t-support-webrtc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-happens-if-a-user-s-browser-doesn-t-support-webrtc"}},[t._v("#")]),t._v(" What happens if a user‘s browser doesn't support WebRTC?")]),t._v(" "),a("p",[t._v("If that happens, the user will seamlessly fallback to normal HTTP request without any side effect.")]),t._v(" "),a("h3",{attrs:{id:"troubleshooting-steps-of-web-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-steps-of-web-sdk"}},[t._v("#")]),t._v(" Troubleshooting steps of Web SDK")]),t._v(" "),a("ul",[a("li",[t._v("Open two or more webpages on the same LAN to play the same video")]),t._v(" "),a("li",[t._v("It is recommended to configure live streaming according to the "),a("RouterLink",{attrs:{to:"/en/views/optimization.html"}},[t._v("P2P optimization guide")])],1),t._v(" "),a("li",[t._v("Open the webpage debugging window to view the debug information")]),t._v(" "),a("li",[t._v("There is usually a warning message, fix it as prompted")]),t._v(" "),a("li",[t._v("If no abnormality is displayed, please ensure that the m3u8 path does not change dynamically，or you may need to "),a("RouterLink",{attrs:{to:"/en/views/web/API.html#advanced-usage"}},[t._v("format a common channelId")]),t._v(" for people watching same content.")],1),t._v(" "),a("li",[t._v("If the above steps do not solve the problem, please contact technical customer service")])]),t._v(" "),a("h3",{attrs:{id:"do-i-need-to-update-the-code-when-a-new-version-is-being-released"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-i-need-to-update-the-code-when-a-new-version-is-being-released"}},[t._v("#")]),t._v(" Do I need to update the code when a new version is being released?")]),t._v(" "),a("p",[t._v("No. The new versions are being loaded dynamically once you used the official CDN.")]),t._v(" "),a("h3",{attrs:{id:"my-player-is-integrated-via-an-iframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-player-is-integrated-via-an-iframe"}},[t._v("#")]),t._v(" My player is integrated via an iframe")]),t._v(" "),a("p",[t._v("In this case, you need to get access to the iframe’s content. As any Javascript code can not access the content of an iframe, the SwarmCloud web SDK needs to be located within the iframe.")]),t._v(" "),a("h2",{attrs:{id:"native-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#native-sdk"}},[t._v("#")]),t._v(" Native SDK")]),t._v(" "),a("h3",{attrs:{id:"is-android-tv-supported"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-android-tv-supported"}},[t._v("#")]),t._v(" Is Android TV supported?")]),t._v(" "),a("p",[t._v("Yes, Android TV is a supported platform for the SDK. Android SDK works with any Android player although we recommend ExoPlayer which we've found to give good playback results.")]),t._v(" "),a("h3",{attrs:{id:"troubleshooting-steps-of-native-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-steps-of-native-sdk"}},[t._v("#")]),t._v(" Troubleshooting steps of native SDK")]),t._v(" "),a("ul",[a("li",[t._v("Please make sure to debug on the real device")]),t._v(" "),a("li",[t._v("Open 2 devices on the same LAN")]),t._v(" "),a("li",[t._v("iOS\n"),a("ul",[a("li",[t._v('Search for the keyword "P2P warning" in the xcode console and fix it according to the warning message')]),t._v(" "),a("li",[t._v("If you still can't troubleshoot the problem, please turn on the log printing function first, as shown below:")])]),t._v(" "),a("Tabs",{attrs:{type:"card"}},[a("Tab",{attrs:{label:"swift"}},[a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SWCP2pConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logLevel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SWCLogLevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logPersistent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SWCP2pEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sharedInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2pConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("Tab",{attrs:{label:"objective-c"}},[a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("SWCP2pConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SWCP2pConfig defaultConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logLevel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CBLogLevelDebug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logPersistent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" YES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SWCP2pEngine sharedInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" startWithToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("YOUR_TOKEN andP2pConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])],1),t._v(" "),a("ul",[a("li",[t._v("Then you can find the log file in Library/Caches/Logs , send it to SwarmCloud technicians")])])],1),t._v(" "),a("li",[t._v("Android\n"),a("ul",[a("li",[t._v('Search for the keyword "P2P warning" in the Logcat and fix it according to the warning message')]),t._v(" "),a("li",[t._v("If you still can't troubleshoot the problem, please set the log level to Debug and save to file, as shown below:")])]),t._v(" "),a("Tabs",{attrs:{type:"card"}},[a("Tab",{attrs:{label:"java"}},[a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pConfig")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logEnabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logLevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogLevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logPersistent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" YOUR_TOKEN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("Tab",{attrs:{label:"kotlin"}},[a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" P2pConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logEnabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logLevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LogLevel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logPersistent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nP2pEngine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" YOUR_TOKEN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1),t._v(" "),a("ul",[a("li",[t._v('Then you can find the log file in external storage (Environment.getExternalStorageDirectory() -> /Android/data/ , usually on the path "/storage/emulated/0") with file path like logger/logs_0.csv, please send it to SwarmCloud technicians')])])],1)]),t._v(" "),a("h3",{attrs:{id:"resolve-some-streams-fail-with-http-response-code-302-in-exoplayer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve-some-streams-fail-with-http-response-code-302-in-exoplayer"}},[t._v("#")]),t._v(" Resolve some streams fail with HTTP response code 302 in exoplayer")]),t._v(" "),a("p",[t._v("It's working as intended that ExoPlayer "),a("a",{attrs:{href:"(https://github.com/google/ExoPlayer/issues/1190)"}},[t._v("doesn't follow cross-protocol redirects")]),t._v(" by default. You can enable following of cross-protocol redirects in ExoPlayer by passing "),a("em",[a("strong",[t._v("allowCrossProtocolRedirects=true")])]),t._v(" to the "),a("em",[a("strong",[t._v("DefaultHttpDataSourceFactory")])]),t._v(" constructor:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Factory")]),t._v(" dataSourceFactory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultHttpDataSourceFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Util")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserAgent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p2p-engine"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultHttpDataSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEFAULT_CONNECT_TIMEOUT_MILLIS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultHttpDataSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEFAULT_READ_TIMEOUT_MILLIS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* allowCrossProtocolRedirects */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("For details, please see official "),a("a",{attrs:{href:"https://github.com/cdnbye/android-p2p-engine",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"how-to-reduce-apk-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-reduce-apk-size"}},[t._v("#")]),t._v(" How to reduce APK size?")]),t._v(" "),a("p",[t._v("SwarmCloud's core library weighs less than 300KB alone, but it uses some large dependencies such as the WebRTC C++ library, which is compiled for different architectures.")]),t._v(" "),a("ul",[a("li",[a("em",[a("strong",[t._v("abiFilters")])]),t._v(" "),a("br"),t._v("The default behavior of the build system is to include the binaries for each ABI in a single APK, also known as a fat APK. A fat APK is significantly larger than one containing only the binaries for a single ABI; the tradeoff is gaining wider compatibility, but at the expense of a larger APK. To restrict the set of ABIs that your application supports, use "),a("a",{attrs:{href:"https://developer.android.com/ndk/guides/abis",target:"_blank",rel:"noopener noreferrer"}},[t._v("abiFilters"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("android "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    defaultConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        ndk "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            abiFilters "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"armeabi-v7a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"armeabi"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("em",[a("strong",[t._v("APK Splits")])]),t._v(" "),a("br"),t._v("The solution google recommend is to "),a("a",{attrs:{href:"https://developer.android.com/studio/build/configure-apk-splits#configure-abi-split",target:"_blank",rel:"noopener noreferrer"}},[t._v("split the builds per CPU architecture"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    android "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n      splits "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configures multiple APKs based on ABI.")]),t._v("\n        abi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Enables building multiple APKs per ABI.")]),t._v("\n          enable "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// By default all ABIs are included, so use reset() and include to specify that we only")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// want APKs for x86 and x86_64.")]),t._v("\n\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Resets the list of ABIs that Gradle should create APKs for to none.")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Specifies a list of ABIs that Gradle should create APKs for.")]),t._v("\n          include "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x86"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x86_64"')]),t._v("\n\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Specifies that we do not want to also generate a universal APK that includes all ABIs.")]),t._v("\n          universalApk "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"how-to-get-android-app-signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-android-app-signature"}},[t._v("#")]),t._v(" How to get Android APP Signature")]),t._v(" "),a("p",[t._v("Use keytool to get your certificate signature:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("keytool -v -list -keystore path/to/my-signing-key.keystore\n")])])]),a("p",[t._v("You will get the certificate fingerprint (MD5, SHA1, SHA256), the SHA1 value is what you need.")])])}),[],!1,null,null,null);e.default=n.exports}}]);