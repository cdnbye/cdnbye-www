(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{794:function(t,a,s){"use strict";s.r(a);var n=s(1),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),s("h3",{attrs:{id:"p2p服务停止后会影响视频的正常播放吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#p2p服务停止后会影响视频的正常播放吗"}},[t._v("#")]),t._v(" P2P服务停止后会影响视频的正常播放吗？")]),t._v(" "),s("p",[t._v("不会。视频仍会正常播放，只是没有P2P加速效果。")]),t._v(" "),s("h3",{attrs:{id:"swarmcloud的p2p服务安全吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swarmcloud的p2p服务安全吗"}},[t._v("#")]),t._v(" SwarmCloud的P2P服务安全吗？")]),t._v(" "),s("p",[t._v("SwarmCloud采用的WebRTC data channel技术，是基于SCTP协议和DTLS加密的，无需担心数据传输的安全问题。另外，与后台服务器的通信（包括tracker和信令服务器）是基于安全的HTTPS和WSS。隐私方面，SwarmCloud不会在服务器缓存任何视频内容相关的信息，视频地址也做了加密处理。")]),t._v(" "),s("h3",{attrs:{id:"支持加了防盗链或者加密的视频地址吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持加了防盗链或者加密的视频地址吗"}},[t._v("#")]),t._v(" 支持加了防盗链或者加密的视频地址吗？")]),t._v(" "),s("p",[t._v("支持的，请提供加密原理以及测试地址给我们的技术支援团队。")]),t._v(" "),s("h3",{attrs:{id:"集成了swarmcloud后会造成直播延迟吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成了swarmcloud后会造成直播延迟吗"}},[t._v("#")]),t._v(" 集成了SwarmCloud后会造成直播延迟吗？")]),t._v(" "),s("p",[t._v("不会的，由于前几个切片从CDN拉取，因此不会给起播带来任何延迟。然而低延迟直播可能会使P2P效果下降，建议 HLS / Dash 的 playlist 遵循以下配置：\n"),s("br"),t._v("\n切片时长: 至少3秒\n"),s("br"),t._v("\nPlaylist包含的切片数: 至少6个")]),t._v(" "),s("h3",{attrs:{id:"微信小程序可以使用吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序可以使用吗"}},[t._v("#")]),t._v(" 微信小程序可以使用吗？")]),t._v(" "),s("p",[t._v("暂时不支持微信小程序")]),t._v(" "),s("h3",{attrs:{id:"使用swarmcloud的p2p服务需要付费吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用swarmcloud的p2p服务需要付费吗"}},[t._v("#")]),t._v(" 使用SwarmCloud的P2P服务需要付费吗？")]),t._v(" "),s("p",[t._v("目前SwarmCloud已经开始商业化，但同时对小型流媒体网站仍提供免费服务。收费模式如下：")]),t._v(" "),s("ul",[s("li",[t._v("只对在管理面板(https://www.cdnbye.com/oms) 绑定的域名提供P2P服务")]),t._v(" "),s("li",[t._v("每个账号每日免费赠送25GB P2P流量，次日重置")]),t._v(" "),s("li",[t._v("每日在管理面板完成签到后再赠送25GB P2P流量，次日清零")]),t._v(" "),s("li",[t._v("超出免费额度后停止P2P服务，如果继续使用，需要购买流量包，购买的流量包额度越大，价格越划算，且可以使用更多P2P流量，直到剩余可用流量为零。")])]),t._v(" "),s("h3",{attrs:{id:"如何购买流量包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何购买流量包"}},[t._v("#")]),t._v(" 如何购买流量包？")]),t._v(" "),s("p",[t._v("登入 "),s("em",[s("strong",[t._v("https://www.cdnbye.com/oms")])]),t._v("，点击左边侧滑栏的 "),s("em",[s("strong",[t._v("购买流量包")])]),t._v(" ，目前支援支付宝和Paypal两种付款方式，其中支付宝以人民币付款，Paypal以美元付款。")]),t._v(" "),s("h3",{attrs:{id:"如果绑定了多个域名-appid-购买流量包后怎么扣费呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果绑定了多个域名-appid-购买流量包后怎么扣费呢"}},[t._v("#")]),t._v(" 如果绑定了多个域名/AppId，购买流量包后怎么扣费呢？")]),t._v(" "),s("p",[t._v("如果您在同一个账号同时绑定了多个域名/APP，则开启P2P的所有域名/APP会共享流量包。您可以在管理面板的 "),s("em",[s("strong",[t._v("P2P配置")])]),t._v(" 关闭某个域名的P2P服务从而节省流量包消耗。")]),t._v(" "),s("h3",{attrs:{id:"购买了包月套餐后每日额度不够用怎么办"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#购买了包月套餐后每日额度不够用怎么办"}},[t._v("#")]),t._v(" 购买了包月套餐后每日额度不够用怎么办？")]),t._v(" "),s("p",[t._v("建议再买个流量包作为补充，系统会先扣除包月套餐流量，扣完再扣除流量包流量。")]),t._v(" "),s("h3",{attrs:{id:"如何查看集成后有没有效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何查看集成后有没有效果"}},[t._v("#")]),t._v(" 如何查看集成后有没有效果？")]),t._v(" "),s("ul",[s("li",[t._v("确保已经打开2个以上播放同一个m3u8的客户端")]),t._v(" "),s("li",[t._v("确保按文档提供的步骤集成，并且SDK没有任何报错信息")]),t._v(" "),s("li",[t._v("打开管理面板切换对应域名即可查看p2p流量")]),t._v(" "),s("li",[t._v("每个平台的SDK都会提供API来监听p2p流量等统计信息，请参考对应的文档说明")])]),t._v(" "),s("h3",{attrs:{id:"对接入p2p服务的网站-app有什么要求吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对接入p2p服务的网站-app有什么要求吗"}},[t._v("#")]),t._v(" 对接入P2P服务的网站/APP有什么要求吗？")]),t._v(" "),s("p",[t._v("SwarmCloud不对色情等非法内容提供P2P服务，请确保您的网站/APP符合法律规范。服务于国内的域名必须已备案。")]),t._v(" "),s("h3",{attrs:{id:"swarmcloud会不会造成用户视频播放延迟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swarmcloud会不会造成用户视频播放延迟"}},[t._v("#")]),t._v(" SwarmCloud会不会造成用户视频播放延迟？")]),t._v(" "),s("p",[t._v("不会。首先，视频的首片数据总是从CDN下载的，因而不会造成首屏延迟。其次，如果在超时时间内无法从其他节点获取数据，那么内置的调度算法会及时切到CDN下载，因此本P2P技术不会带来任何额外的延迟。")]),t._v(" "),s("h3",{attrs:{id:"使用过程中出现异常如何反馈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用过程中出现异常如何反馈"}},[t._v("#")]),t._v(" 使用过程中出现异常如何反馈？")]),t._v(" "),s("p",[t._v("如果是Web端插件的异常请在p2p配置中开启log并截图浏览器console出错信息发送到service@cdnbye.com，或者在QQ群里反馈。如果是原生SDK出现异常请在p2p配置中开启log并保存日志文件发送到官方邮箱，建议在APP中集成"),s("a",{attrs:{href:"https://bugly.qq.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bugly"),s("OutboundLink")],1),t._v("，有助于收集crash日志并上传到云端。")]),t._v(" "),s("h3",{attrs:{id:"如何在内网使用swarmcloud"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何在内网使用swarmcloud"}},[t._v("#")]),t._v(" 如何在内网使用SwarmCloud？")]),t._v(" "),s("p",[t._v("使用SwarmCloud的p2p服务需要调用两个云端服务，一个是Tracker调度服务，另一个是信令服务。")]),t._v(" "),s("h5",{attrs:{id:"信令服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#信令服务"}},[t._v("#")]),t._v(" 信令服务")]),t._v(" "),s("p",[t._v("可以直接在内网服务器上部署"),s("a",{attrs:{href:"https://github.com/cdnbye/cbsignal",target:"_blank",rel:"noopener noreferrer"}},[t._v("信令服务"),s("OutboundLink")],1),t._v("，信令不需要与外网通信。")]),t._v(" "),s("h5",{attrs:{id:"tracker服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tracker服务"}},[t._v("#")]),t._v(" Tracker服务")]),t._v(" "),s("p",[t._v("Tracker需要通过能与外网通信的服务器进行转发，操作步骤如下：")]),t._v(" "),s("ul",[s("li",[t._v("在管理面板绑定网站域名")]),t._v(" "),s("li",[t._v("联系SwarmCloud技术人员对转发域名进行授权")]),t._v(" "),s("li",[t._v("在服务器配置nginx内网转发，在conf.d增加tracker.conf，示例如下："),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    listen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name YOUR_TRACKER_DOMAIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置内网转发域名")]),t._v("\n    access_log /root/log/access.log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    error_log /root/log/error.log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ssl on;")]),t._v("\n    ssl_certificate  tracker.pem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 证书路径")]),t._v("\n    ssl_certificate_key tracker.key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 证书秘钥路径")]),t._v("\n\n    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy_pass https://tracker.cdnbye.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 转发到SwarmCloud的tracker服务")]),t._v("\n        proxy_set_header  Host  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        proxy_set_header  X-Real-IP  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        proxy_set_header  X-Forwarded-For "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v("同时在nginx.conf添加如下配置："),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("worker_rlimit_nofile "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置Nginx worker进程最大打开文件数")]),t._v("\nevents "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    worker_connections "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("102400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个进程允许的客户端最大连接数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("执行重新加载 Nginx"),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nginx -s reload\n")])])])]),t._v(" "),s("li",[t._v("确认公司防火墙对 Nginx 服务器 IP 及端口限制访问解除")]),t._v(" "),s("li",[t._v("修改前端代码，替换Tracker域名为转发域名"),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("p2pConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  announce"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://your_traclker.com/v1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])]),t._v(" "),s("h3",{attrs:{id:"swarmcloud的效果如何-如果使用过程效果不如预期-应该怎么调整"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swarmcloud的效果如何-如果使用过程效果不如预期-应该怎么调整"}},[t._v("#")]),t._v(" SwarmCloud的效果如何？如果使用过程效果不如预期，应该怎么调整？")]),t._v(" "),s("p",[t._v("如果您使用过程中无法达到预期效果，请参照"),s("RouterLink",{attrs:{to:"/cn/views/optimization.html"}},[t._v("P2P优化")]),t._v("对各参数进行调整，或者联系本平台获取技术支援。")],1),t._v(" "),s("h3",{attrs:{id:"swarmcloud的p2p技术会影响drm-数字版权管理-吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swarmcloud的p2p技术会影响drm-数字版权管理-吗"}},[t._v("#")]),t._v(" SwarmCloud的P2P技术会影响DRM(数字版权管理)吗?")]),t._v(" "),s("p",[t._v("不会。只有在用户获得发布者的服务器授权后才会激活P2P传输。而且，流秘钥是不会在P2P网络中\n传输的。P2P网络中传输的ts文件和用户从CDN下载的完全一样。另外，播放的内容不会上传或者缓存在我们的服务器中。")]),t._v(" "),s("h3",{attrs:{id:"平时在线人数不多有必要用p2p吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平时在线人数不多有必要用p2p吗"}},[t._v("#")]),t._v(" 平时在线人数不多有必要用P2P吗？")]),t._v(" "),s("p",[t._v('有。P2P的独特优势是带宽"削峰"，平时在线人数不多的时候效果不明显，一旦在观看高峰期带宽突然大幅增长，随著在线人数增多P2P分享率指数式上升，可有效降低带宽峰值，避免由于带宽不足导致用户播放卡顿等问题。')]),t._v(" "),s("h2",{attrs:{id:"web-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-sdk"}},[t._v("#")]),t._v(" Web SDK")]),t._v(" "),s("h3",{attrs:{id:"web-sdk的原理是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-sdk的原理是什么"}},[t._v("#")]),t._v(" Web SDK的原理是什么？")]),t._v(" "),s("p",[t._v("SwarmCloud采用WebRTC data channel技术和BT算法来实现直播和点播的P2P加速。通过内置的调度算法，\n在P2P和CDN之间进行无缝切换，从而在不影响用户播放体验的前提下最大化P2P率。hlsjs-p2p-engine\n是SwarmCloud为播放HLS流而开发的hls.js插件。目前，SwarmCloud已经支援大部分的HTML5播放器，包括\nHls.js, JWPlayer, Video.js, Clappr, Flowplayer和TCPlayer等。")]),t._v(" "),s("h3",{attrs:{id:"ios浏览器是否不支援p2p"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios浏览器是否不支援p2p"}},[t._v("#")]),t._v(" iOS浏览器是否不支援P2P？")]),t._v(" "),s("p",[t._v("由于iOS的浏览器内核不支援MSE(Media Source Extension)，因此基于hls.js的SDK不支援iOS浏览器。我们已推出基于ServiceWorker的SDK，建议两个SDK同时使用从而使所有浏览器均支援P2P。")]),t._v(" "),s("h3",{attrs:{id:"如果用户的浏览器不支援webrtc-会怎麽样"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果用户的浏览器不支援webrtc-会怎麽样"}},[t._v("#")]),t._v(" 如果用户的浏览器不支援WebRTC，会怎麽样？")]),t._v(" "),s("p",[t._v("在这种情况下，插件不起任何作用，用户和往常一样采用HTTP方式下载。")]),t._v(" "),s("h3",{attrs:{id:"当sdk新版本发佈时-我需要手动更新吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当sdk新版本发佈时-我需要手动更新吗"}},[t._v("#")]),t._v(" 当SDK新版本发佈时，我需要手动更新吗？")]),t._v(" "),s("p",[t._v("如果您用了我们提供的CDN来引入SDK，则不需要手动更新。")]),t._v(" "),s("h3",{attrs:{id:"我的播放器是在-iframe-裡面的要怎麽集成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我的播放器是在-iframe-裡面的要怎麽集成"}},[t._v("#")]),t._v(" 我的播放器是在 iframe 裡面的要怎麽集成？")]),t._v(" "),s("p",[t._v("在这种情况下，您需要在 iframe 的脚本裡集成SDK，因为 Javascript 无法从 iframe 外部访问 iframe 裡的内容。")]),t._v(" "),s("h3",{attrs:{id:"目前支援的移动端浏览器有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目前支援的移动端浏览器有哪些"}},[t._v("#")]),t._v(" 目前支援的移动端浏览器有哪些？")]),t._v(" "),s("ul",[s("li",[t._v("谷歌浏览器"),s("br")]),t._v(" "),s("li",[t._v("火狐浏览器"),s("br")]),t._v(" "),s("li",[t._v("欧朋浏览器"),s("br")]),t._v(" "),s("li",[t._v("微信内置浏览器"),s("br")]),t._v(" "),s("li",[t._v("QQ内置浏览器"),s("br")]),t._v(" "),s("li",[t._v("猎豹浏览器"),s("br")]),t._v(" "),s("li",[t._v("搜狗浏览器")]),t._v(" "),s("li",[t._v("百度浏览器")]),t._v(" "),s("li",[t._v("360极速浏览器"),s("br")]),t._v(" "),s("li",[t._v("2345浏览器"),s("br")]),t._v(" "),s("li",[t._v("遨游5浏览器"),s("br")]),t._v(" "),s("li",[t._v("Via浏览器")]),t._v(" "),s("li",[t._v("X浏览器")]),t._v(" "),s("li",[t._v("先锋浏览器\n"),s("br"),t._v("\n注：以上所列出均是安卓平台，目前iOS平台还未支援，不断完善中...")])]),t._v(" "),s("h3",{attrs:{id:"某些移动端浏览器无法正常播放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#某些移动端浏览器无法正常播放"}},[t._v("#")]),t._v(" 某些移动端浏览器无法正常播放？")]),t._v(" "),s("p",[t._v("P2P需要浏览器同时支援MSE(Media Source Extension)和WebRTC才能使用，可以通过 "),s("em",[s("strong",[t._v("SwarmCloud")])]),t._v(" 提供的API进行检测，如果不支援则用原生播放器进行播放，示例如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Hls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSupported")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" Hls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WEBRTC_SUPPORT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 采用SwarmCloud播放")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 采用video标签播放")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"web端插件p2p无效问题排查步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web端插件p2p无效问题排查步骤"}},[t._v("#")]),t._v(" Web端插件P2P无效问题排查步骤")]),t._v(" "),s("ul",[s("li",[t._v("同时打开2个以上处于同一局域网的网页播放同一个视频")]),t._v(" "),s("li",[t._v("直播流建议按照"),s("RouterLink",{attrs:{to:"/cn/views/optimization.html"}},[t._v("P2P优化指南")]),t._v("进行配置")],1),t._v(" "),s("li",[t._v("视频播放后打开网页调试窗口查看debug信息")]),t._v(" "),s("li",[t._v("如果有红色的报错信息一般是代码逻辑问题，请根据提示修改")]),t._v(" "),s("li",[t._v('如果显示类似 "CDNBye 0.X.X is deprecated, please update to latest version(0.X.X已停止支援，请更新至最新版本)" 说明版本已过期，请升级至最新版')]),t._v(" "),s("li",[t._v("如果显示其它信息，请根据提示操作，有以下五种可能：\n"),s("ul",[s("li",[t._v("域名没有绑定，注意SwarmCloud后台是根据HTTP请求的Origin字段来获取域名的（如果使用iFrame该域名可能和网站域名不一致），请在后台绑定正确的域名")]),t._v(" "),s("li",[t._v("流量已经用完，请登入"),s("a",{attrs:{href:"https://www.cdnbye.com/oms",target:"_blank",rel:"noopener noreferrer"}},[t._v("管理面板"),s("OutboundLink")],1),t._v("并切换到对应域名查看流量使用情况")]),t._v(" "),s("li",[t._v("在管理面板的 "),s("em",[s("strong",[t._v("P2P配置")])]),t._v(" 中关闭了P2P服务，重新开启即可")]),t._v(" "),s("li",[t._v("在管理面板的 "),s("em",[s("strong",[t._v("P2P配置")])]),t._v(" 中激活比率调小了，重新调至100即可")]),t._v(" "),s("li",[t._v("域名被加入黑名单，登入管理面板点击 "),s("em",[s("strong",[t._v("网站管理")])]),t._v(" 即可确认")])])]),t._v(" "),s("li",[t._v("如果没有显示任何异常，请确保m3u8路径不会动态变化，否则请"),s("RouterLink",{attrs:{to:"/cn/views/web/API.html#解决动态m3u8路径问题"}},[t._v("构造一个相同的ChannelId")])],1),t._v(" "),s("li",[t._v("如果以上步骤还不能解决问题，请联系技术客服")])]),t._v(" "),s("h2",{attrs:{id:"客户端sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端sdk"}},[t._v("#")]),t._v(" 客户端SDK")]),t._v(" "),s("h3",{attrs:{id:"安卓sdk可以用于机顶盒吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安卓sdk可以用于机顶盒吗"}},[t._v("#")]),t._v(" 安卓SDK可以用于机顶盒吗？")]),t._v(" "),s("p",[t._v("当然可以，只要是安卓4.4以上系统的机顶盒都支援。经过实测，exoplayer的兼容性最好，推荐采用。")]),t._v(" "),s("h3",{attrs:{id:"sdk除了-p2p-还有其他附加功能吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sdk除了-p2p-还有其他附加功能吗"}},[t._v("#")]),t._v(" SDK除了 P2P 还有其他附加功能吗？")]),t._v(" "),s("p",[t._v("有的。SDK还具备智能缓存能力，用于避免文件重复下载问题，从而有效节省带宽消耗，而且本功能是完全免费的。")]),t._v(" "),s("h3",{attrs:{id:"客户端sdk-p2p无效问题排查步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端sdk-p2p无效问题排查步骤"}},[t._v("#")]),t._v(" 客户端SDK P2P无效问题排查步骤")]),t._v(" "),s("ul",[s("li",[t._v("请先确保在真机上调试")]),t._v(" "),s("li",[t._v("同时打开2个处于同一局域网的设备")]),t._v(" "),s("li",[t._v("直播流建议按照"),s("RouterLink",{attrs:{to:"/cn/views/optimization.html"}},[t._v("P2P优化指南")]),t._v("进行配置")],1),t._v(" "),s("li",[t._v("iOS\n"),s("ul",[s("li",[t._v('在管理面板搜索关键字"P2P warning"，根据对应的警告信息进行配置')]),t._v(" "),s("li",[t._v("如果仍然无法排查问题，请先将日志打印功能打开并保存为文件，示例代码如下：")])]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"swift"}},[s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SWCP2pConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logLevel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SWCLogLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug\nconfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logPersistent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SWCP2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sharedInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2pConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"objective-c"}},[s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("SWCP2pConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SWCP2pConfig defaultConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logLevel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CBLogLevelDebug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logPersistent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" YES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SWCP2pEngine sharedInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" startWithToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("YOUR_TOKEN andP2pConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])],1),t._v(" "),s("ul",[s("li",[t._v("在 Library/Caches/Logs 找到日志文件并发送给SwarmCloud技术人员")])])],1),t._v(" "),s("li",[t._v("安卓\n"),s("ul",[s("li",[t._v('在Logcat搜索关键字"P2P warning"，根据对应的警告信息进行配置')]),t._v(" "),s("li",[t._v("如果仍然无法排查问题，请先将日志级别调整为Debug并保存为文件，示例代码如下：")])]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"java"}},[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pConfig")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logEnabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logPersistent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" YOUR_TOKEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"kotlin"}},[s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" P2pConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logEnabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LogLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logPersistent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nP2pEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" YOUR_TOKEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1),t._v(" "),s("ul",[s("li",[t._v('在外部存储（Environment.getExternalStorageDirectory() -> /Android/data/）中找到logger/logs_0.csv，如果找不到请尝试查看路径"/storage/emulated/0"，然后将保存完整日志的csv文件发送给SwarmCloud技术人员')])])],1)]),t._v(" "),s("h3",{attrs:{id:"解决exoplayer无法播放问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决exoplayer无法播放问题"}},[t._v("#")]),t._v(" 解决Exoplayer无法播放问题")]),t._v(" "),s("p",[t._v("Exoplayer默认"),s("a",{attrs:{href:"https://github.com/google/ExoPlayer/issues/1190",target:"_blank",rel:"noopener noreferrer"}},[t._v("不支援跨协议重定向"),s("OutboundLink")],1),t._v("，因此需要在初始化时设置 "),s("em",[s("strong",[t._v("allowCrossProtocolRedirects=true")])]),t._v("，如以下示例：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Factory")]),t._v(" dataSourceFactory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultHttpDataSourceFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Util")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserAgent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p2p-engine"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultHttpDataSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEFAULT_CONNECT_TIMEOUT_MILLIS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultHttpDataSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEFAULT_READ_TIMEOUT_MILLIS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* allowCrossProtocolRedirects */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("具体用法可以参考"),s("a",{attrs:{href:"https://github.com/cdnbye/android-p2p-engine",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方demo"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"解决安卓机顶盒oom问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决安卓机顶盒oom问题"}},[t._v("#")]),t._v(" 解决安卓机顶盒OOM问题")]),t._v(" "),s("p",[t._v("配置比较低的机顶盒容易出现OOM，可以通过配置提高堆内存大小，在 "),s("em",[s("strong",[t._v("app/src/main")])]),t._v(" 目录中的 "),s("em",[s("strong",[t._v("AndroidManifest.xml")])]),t._v(" 的 "),s("code",[t._v("<application>")]),t._v(" 标签中直接插入：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("application")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("largeHeap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“true”")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h3",{attrs:{id:"如何减小apk体积"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何减小apk体积"}},[t._v("#")]),t._v(" 如何减小APK体积")]),t._v(" "),s("p",[t._v("由于依赖了第三方库WebRTC，使APK体积增大了不少。如果对APK体积比较敏感，可以通过以下2种方案压缩体积：")]),t._v(" "),s("ul",[s("li",[s("em",[s("strong",[t._v("abiFilters")])]),t._v(" "),s("br"),t._v("编译系统的默认行为是将每个 ABI 的二进制文件包括在单个 APK（也称为胖 APK）内。与仅包含单个 ABI 的二进制文件的 APK 相比，胖 APK 要大得多；要权衡的是兼容性更广，但 APK 更大。要限制应用支援的 ABI 集，请使用 "),s("a",{attrs:{href:"https://developer.android.com/ndk/guides/abis",target:"_blank",rel:"noopener noreferrer"}},[t._v("abiFilters"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("android "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    defaultConfig "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        ndk "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            abiFilters "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"armeabi-v7a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"armeabi"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("em",[s("strong",[t._v("APK 拆分")])]),t._v(" "),s("br"),t._v("谷歌建议"),s("a",{attrs:{href:"https://developer.android.com/studio/build/configure-apk-splits#configure-abi-split",target:"_blank",rel:"noopener noreferrer"}},[t._v("针对不同CPU架构生成对应的APK"),s("OutboundLink")],1),t._v("：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("android "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  splits "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据ABI配置生成多APK")]),t._v("\n    abi "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否根据不同ABI生成APK")]),t._v("\n      enable "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认情况下所有ABI都包含了，因此需要调用reset()并且指定我们需要的CPU架构")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重置Gradle生成APK的ABI列表")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定CPU架构来生成我们需要的APK")]),t._v("\n      include "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"armeabi-v7a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arm64-v8a"')]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置不再生成一个包含所有ABI的APK")]),t._v("\n      universalApk "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"如何获取安卓应用签名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何获取安卓应用签名"}},[t._v("#")]),t._v(" 如何获取安卓应用签名")]),t._v(" "),s("p",[t._v("可以使用 keytool 来获取APP的应用签名")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("keytool -v -list -keystore path/to/my-signing-key.keystore\n")])])]),s("p",[t._v("在输出的证书指纹中(MD5, SHA1, SHA256)，SHA1对应的字符串即需要的应用签名。")])])}),[],!1,null,null,null);a.default=r.exports}}]);