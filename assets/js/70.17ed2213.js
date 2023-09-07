(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{843:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),s("p",[t._v("先安装依赖，然后将两个 xcframework 拷贝到xcode中。")]),t._v(" "),s("h3",{attrs:{id:"安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),s("h4",{attrs:{id:"cocoapods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cocoapods"}},[t._v("#")]),t._v(" CocoaPods")]),t._v(" "),s("p",[t._v("编辑 "),s("em",[s("strong",[t._v("Podfile")])])]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("target "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TargetName'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the next line if you're using Swift")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# use_frameworks!")]),t._v("\n    pod "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SwiftyJSON'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~> 5.0'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),s("p",[t._v("然后，运行如下的命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ pod "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h4",{attrs:{id:"carthage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carthage"}},[t._v("#")]),t._v(" Carthage")]),t._v(" "),s("p",[t._v("编辑 Cartfile:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('github "SwiftyJSON/SwiftyJSON" ~> 5.0\n')])])]),s("p",[t._v("然后，运行如下的命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("carthage update --use-xcframeworks --cache-builds\n")])])]),s("p",[t._v("这个命令会在 "),s("em",[s("strong",[t._v("Carthage/Build")])]),t._v(" 文件夹中生成编译好的XCFramework。\n"),s("br"),t._v("\n依次打开xcode的 "),s("em",[s("strong",[t._v("General")])]),t._v(" -> "),s("em",[s("strong",[t._v("Frameworks, Libraries, and Embedded Content")])]),t._v("，将所有 XCFramework 拖进来。")]),t._v(" "),s("h4",{attrs:{id:"swift-package-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swift-package-manager"}},[t._v("#")]),t._v(" Swift Package Manager")]),t._v(" "),s("p",[t._v("在 Package.swift 的 dependencies 中添加：")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("dependencies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/swarm-cloud/SwarmCloudKit.git"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.0.3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h4",{attrs:{id:"手动导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动导入"}},[t._v("#")]),t._v(" 手动导入")]),t._v(" "),s("p",[t._v("将 "),s("a",{attrs:{href:"https://github.com/SwiftyJSON/SwiftyJSON#manually-ios-7-os-x-109",target:"_blank",rel:"noopener noreferrer"}},[t._v("SwiftyJSON"),s("OutboundLink")],1),t._v(" 相关源码拖进 xcode 项目中。")]),t._v(" "),s("h3",{attrs:{id:"集成-swarmcloudkit-和-datachannel-wrapper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成-swarmcloudkit-和-datachannel-wrapper"}},[t._v("#")]),t._v(" 集成 SwarmCloudKit 和 datachannel_wrapper")]),t._v(" "),s("h4",{attrs:{id:"下载预编译好的-xcframework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载预编译好的-xcframework"}},[t._v("#")]),t._v(" 下载预编译好的 XCFramework")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cdn.swarmcloud.net/apple/v3.0.0/SwarmCloudKit.xcframework.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("SwarmCloudKit.xcframework"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cdn.swarmcloud.net/apple/libDC/v1.0.8/datachannel_wrapper.xcframework.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("datachannel_wrapper.xcframework"),s("OutboundLink")],1)])]),t._v(" "),s("h4",{attrs:{id:"拷贝-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拷贝-framework"}},[t._v("#")]),t._v(" 拷贝 framework")]),t._v(" "),s("p",[t._v("先解压，然后将 SwarmCloudKit.xcframework 和 datachannel_wrapper.xcframework 拖入 "),s("em",[s("strong",[t._v("General")])]),t._v(" -> "),s("em",[s("strong",[t._v("Frameworks, Libraries, and Embedded Content")])])]),t._v(" "),s("h1",{attrs:{id:"集成方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成方法"}},[t._v("#")]),t._v(" 集成方法")]),t._v(" "),s("p",[t._v("SDK通过本地代理伺服器拦截数据请求的方式来进行P2P缓存和传输，所以需要在项目的info.plist中允许HTTP请求：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSAppTransportSecurity"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSAllowsArbitraryLoads"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"引入-swarmcloudkit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入-swarmcloudkit"}},[t._v("#")]),t._v(" 引入 SwarmCloudKit")]),t._v(" "),s("p",[t._v("在工程的 "),s("em",[s("strong",[t._v("AppDelegate.m")])]),t._v(" 文件导入头文件：")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"swift"}},[s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SwarmCloudKit")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"objective-c"}},[s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SwarmCloudKit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("SwarmCloudKit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Swift"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),t._v("\n")])])])])],1),t._v(" "),s("h4",{attrs:{id:"初始化-swcp2pengine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化-swcp2pengine"}},[t._v("#")]),t._v(" 初始化 SWCP2pEngine")]),t._v(" "),s("p",[t._v("在工程 "),s("em",[s("strong",[t._v("AppDelegate.m")])]),t._v(" 的 "),s("em",[s("strong",[t._v("application:didFinishLaunchingWithOptions:")])]),t._v(" 方法中初始化：")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"swift"}},[s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" didFinishLaunchingWithOptions launchOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("LaunchOptionsKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Bool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P2pConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        trackerZone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Europe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set HongKong or USA if you changed zone")]),t._v("\n        playlistTimeOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("P2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// replace with your own token")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"objective-c"}},[s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIApplication "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application didFinishLaunchingWithOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSDictionary "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("launchOptions\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    P2pConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("P2pConfig defaultConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trackerZone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TrackerZoneEurope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set HongKong or USA if you changed zone")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("playlistTimeOffset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("P2pEngine setupWithToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("YOUR_TOKEN config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// replace with your own token")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" YES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("其中 YOUR_TOKEN 是用于标识用户的字符串，请换成自己的token，点击"),s("RouterLink",{attrs:{to:"/cn/views/bindings.html#绑定-app-id-并获取token"}},[t._v("这里")]),t._v("查看如何注册 "),s("em",[s("strong",[t._v("Appid")])]),t._v(" 并获取 "),s("em",[s("strong",[t._v("token")])]),t._v("。")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",[t._v("如果媒体文件是由多个服务器生成的，为避免冲突，请在 P2pConfig 增加以下配置：\n"),s("br"),t._v("\nconfig.useStrictHlsSegmentId = true")])]),t._v(" "),s("h4",{attrs:{id:"转换地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换地址"}},[t._v("#")]),t._v(" 转换地址")]),t._v(" "),s("p",[t._v("在代码中实例化AVPlayer之后（也可以是其他任何视频播放器），先将URL传给 SWCP2pEngine，之后将转化的本地URL传给播放器：")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"swift"}},[s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" parsedUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("P2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shared"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseStreamUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://your_stream.m3u8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n_player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AVPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" parsedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"objective-c"}},[s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("NSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("parsedUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("P2pEngine sharedInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" parseStreamUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v('"https'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//your_stream.m3u8"];')]),t._v("\n_player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AVPlayer alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL URLWithString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("parsedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("就这么简单，你的播放器已经具备P2P能力了！")]),t._v(" "),s("h4",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("获取完整的"),s("a",{attrs:{href:"https://github.com/cdnbye/ios-p2p-engine",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例程序"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"p2p无效问题排查步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#p2p无效问题排查步骤"}},[t._v("#")]),t._v(" P2P无效问题排查步骤")]),t._v(" "),s("p",[t._v("请参考"),s("RouterLink",{attrs:{to:"/cn/views/FAQ.html#客户端sdk-p2p无效问题排查步骤"}},[t._v("常见问题")])],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);