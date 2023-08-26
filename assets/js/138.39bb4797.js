(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{910:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"project-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-setup"}},[t._v("#")]),t._v(" Project Setup")]),t._v(" "),s("h2",{attrs:{id:"for-ios-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-ios-only"}},[t._v("#")]),t._v(" For iOS only")]),t._v(" "),s("p",[t._v("To install SDK into your Xcode project using CocoaPods, specify it in your "),s("em",[s("strong",[t._v("Podfile")])]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("target "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TargetName'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the next line if you're using Swift")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# use_frameworks!")]),t._v("\n    pod "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SwarmCloudSDK'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'= 2.6.5'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),s("p",[t._v("Then, run the following command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ pod "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("p",[t._v("If can not find SwarmCloudSDK in repo, run command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ pod repo update\n")])])]),s("p",[t._v("Update SDK if needed:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pod update SwarmCloudSDK --verbose --no-repo-update\n")])])]),s("h2",{attrs:{id:"for-ios-tvos-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-ios-tvos-macos"}},[t._v("#")]),t._v(" For iOS/tvOS/macOS")]),t._v(" "),s("h3",{attrs:{id:"install-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[t._v("#")]),t._v(" Install dependencies")]),t._v(" "),s("h4",{attrs:{id:"cocoapods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cocoapods"}},[t._v("#")]),t._v(" CocoaPods")]),t._v(" "),s("p",[t._v("To install dependencies into your Xcode project using CocoaPods, specify it in your "),s("em",[s("strong",[t._v("Podfile")])]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("target "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TargetName'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the next line if you're using Swift")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# use_frameworks!")]),t._v("\n    pod "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SocketRocket'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~> 0.6'")]),t._v("\n    pod "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CocoaLumberjack'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~> 3.7'")]),t._v("\n    pod "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GCDWebServer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/swisspol/GCDWebServer.git'")]),t._v("\n    pod "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CocoaAsyncSocket'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~> 7.6'")]),t._v("\n    pod "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PINCache'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~> 3.0'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),s("p",[t._v("Then, run the following command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ pod "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h4",{attrs:{id:"carthage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carthage"}},[t._v("#")]),t._v(" Carthage")]),t._v(" "),s("p",[t._v("Add the dependencies to the Cartfile:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('github "facebook/SocketRocket" ~> 0.6\ngithub "CocoaLumberjack/CocoaLumberjack" ~> 3.7\ngithub "pinterest/PINCache" ~> 3.0\ngithub "https://github.com/swisspol/GCDWebServer.git" "master"\ngithub "robbiehanson/CocoaAsyncSocket" ~> 7.6\n')])])]),s("p",[t._v("Then run:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("carthage update --use-xcframeworks --cache-builds\n")])])]),s("p",[t._v("This will build each one or download a pre-compiled XCFramework.\n"),s("br"),t._v("\nOn your application targets’ General settings tab, in the Frameworks, Libraries, and Embedded Content section, drag and drop each XCFramework you want to use from the "),s("em",[s("strong",[t._v("Carthage/Build")])]),t._v(" folder.")]),t._v(" "),s("h3",{attrs:{id:"add-swarmcloudsdk-and-webrtc-framework-to-your-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-swarmcloudsdk-and-webrtc-framework-to-your-project"}},[t._v("#")]),t._v(" Add SwarmCloudSDK and WebRTC framework to your project")]),t._v(" "),s("h4",{attrs:{id:"download-pre-compiled-xcframework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-pre-compiled-xcframework"}},[t._v("#")]),t._v(" Download pre-compiled XCFramework")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/cdnbye/ios-p2p-engine/releases/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SwarmCloudSDK.xcframework"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/swarm-cloud/Apple-WebRTC/releases/download/v1.0/WebRTC.xcframework.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebRTC.xcframework"),s("OutboundLink")],1)])]),t._v(" "),s("h4",{attrs:{id:"copy-the-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-the-framework"}},[t._v("#")]),t._v(" Copy the framework")]),t._v(" "),s("p",[t._v("Unzip files, then drag and drop SwarmCloudSDK.xcframework and WebRTC.xcframework into your Xcode project on your application targets’ General settings tab, in the Frameworks, Libraries, and Embedded Content section.\n"),s("img",{attrs:{width:"600",src:"https://www.cdnbye.com/pics/xcode_framework.jpg",alt:"xcode_framework"}})]),t._v(" "),s("h1",{attrs:{id:"integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration"}},[t._v("#")]),t._v(" Integration")]),t._v(" "),s("p",[t._v("In order to allow the loading of distributed content via the local proxy, enable loading data from HTTP in your app by opening your info.plist file as source code and adding the following values below the "),t._v(" tag:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSAppTransportSecurity"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSAllowsArbitraryLoads"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"include"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[t._v("#")]),t._v(" Include")]),t._v(" "),s("p",[t._v("Import SwarmCloudSDK in "),s("em",[s("strong",[t._v("AppDelegate.m")])]),t._v(":")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"swift"}},[s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SwarmCloudSDK")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"objective-c"}},[s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SwarmCloudSDK"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("SwarmCloudSDK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),t._v("\n")])])])])],1),t._v(" "),s("h4",{attrs:{id:"initialize-swcp2pengine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize-swcp2pengine"}},[t._v("#")]),t._v(" Initialize SWCP2pEngine")]),t._v(" "),s("p",[t._v("Initialize SWCP2pEngine in "),s("em",[s("strong",[t._v("AppDelegate.m")])]),t._v(":")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"swift"}},[s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" didFinishLaunchingWithOptions launchOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("LaunchOptionsKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Bool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SWCP2pConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("announceLocation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SWCAnnounceLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("china      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set HongKong or USA if you changed zone")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SWCP2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sharedInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2pConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"objective-c"}},[s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIApplication "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application didFinishLaunchingWithOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSDictionary "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("launchOptions\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    SWCP2pConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SWCP2pConfig defaultConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("announceLocation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SWCAnnounceLocationChina"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set HongKong or USA if you changed zone")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SWCP2pEngine sharedInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" startWithToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("YOUR_TOKEN andP2pConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" YES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("Where YOUR_TOKEN is your Customer ID. Please replace it by your own token obtained from console, click "),s("RouterLink",{attrs:{to:"/en/views/bindings.html#app-id-and-token"}},[t._v("here")]),t._v(" for more information.")],1),t._v(" "),s("h4",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("When initializing an AVPlayer (or any other video player) instance, before passing it a URL, pass that URL through P2P Engine:")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"swift"}},[s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" orginalUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://your_stream.m3u8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" parsedUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SWCP2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sharedInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("streamURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orginalUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n_player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AVPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" parsedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"objective-c"}},[s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("NSURL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("originalUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL URLWithString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v('"https'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//your_stream.m3u8"];')]),t._v("\nNSURL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("parsedUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SWCP2pEngine sharedInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" parseStreamURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("originalUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n_player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AVPlayer alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("parsedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("That’s it! SDK should now be integrated into your app.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("Simulator may not work as expected, please test on real device.")])]),t._v(" "),s("h4",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),s("p",[t._v("A completed example can be found "),s("a",{attrs:{href:"https://github.com/cdnbye/ios-p2p-engine",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"troubleshooting-steps-when-p2p-doesn-t-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-steps-when-p2p-doesn-t-work"}},[t._v("#")]),t._v(" Troubleshooting Steps when P2P doesn't work")]),t._v(" "),s("p",[t._v("Click "),s("RouterLink",{attrs:{to:"/en/views/FAQ.html#troubleshooting-steps-of-native-sdk"}},[t._v("here")])],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);