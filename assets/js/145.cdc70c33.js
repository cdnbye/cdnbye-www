(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{913:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"project-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-setup"}},[t._v("#")]),t._v(" Project Setup")]),t._v(" "),s("h3",{attrs:{id:"install-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[t._v("#")]),t._v(" Install dependencies")]),t._v(" "),s("h4",{attrs:{id:"cocoapods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cocoapods"}},[t._v("#")]),t._v(" CocoaPods")]),t._v(" "),s("p",[t._v("To install dependencies into your Xcode project using CocoaPods, specify it in your "),s("em",[s("strong",[t._v("Podfile")])]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("target "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TargetName'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the next line if you're using Swift")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# use_frameworks!")]),t._v("\n    pod "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SwiftyJSON'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~> 5.0'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),s("p",[t._v("Then, run the following command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ pod "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h4",{attrs:{id:"carthage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carthage"}},[t._v("#")]),t._v(" Carthage")]),t._v(" "),s("p",[t._v("Add the dependencies to the Cartfile:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('github "SwiftyJSON/SwiftyJSON" ~> 5.0\n')])])]),s("p",[t._v("Then run:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("carthage update --use-xcframeworks --cache-builds\n")])])]),s("p",[t._v("This will build each one or download a pre-compiled XCFramework.\n"),s("br"),t._v("\nOn your application targets’ General settings tab, in the Frameworks, Libraries, and Embedded Content section, drag and drop each XCFramework you want to use from the "),s("em",[s("strong",[t._v("Carthage/Build")])]),t._v(" folder.")]),t._v(" "),s("h4",{attrs:{id:"swift-package-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swift-package-manager"}},[t._v("#")]),t._v(" Swift Package Manager")]),t._v(" "),s("p",[t._v("Once you have your Swift package set up, adding Alamofire as a dependency is as easy as adding it to the dependencies value of your Package.swift.")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("dependencies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/swarm-cloud/SwarmCloudKit.git"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.0.3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h4",{attrs:{id:"manually"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually"}},[t._v("#")]),t._v(" Manually")]),t._v(" "),s("p",[t._v("Drag "),s("a",{attrs:{href:"https://github.com/SwiftyJSON/SwiftyJSON#manually-ios-7-os-x-109",target:"_blank",rel:"noopener noreferrer"}},[t._v("SwiftyJSON"),s("OutboundLink")],1),t._v(" to your xcode project.")]),t._v(" "),s("h3",{attrs:{id:"add-swarmcloudkit-and-datachannel-wrapper-to-your-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-swarmcloudkit-and-datachannel-wrapper-to-your-project"}},[t._v("#")]),t._v(" Add SwarmCloudKit and datachannel_wrapper to your project")]),t._v(" "),s("h4",{attrs:{id:"download-pre-compiled-xcframework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-pre-compiled-xcframework"}},[t._v("#")]),t._v(" Download Pre-compiled XCFramework")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cdn.swarmcloud.net/apple/v3.0.0/SwarmCloudKit.xcframework.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("SwarmCloudKit.xcframework"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cdn.swarmcloud.net/apple/libDC/v1.0.8/datachannel_wrapper.xcframework.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("datachannel_wrapper.xcframework"),s("OutboundLink")],1)])]),t._v(" "),s("h4",{attrs:{id:"copy-the-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-the-framework"}},[t._v("#")]),t._v(" Copy the framework")]),t._v(" "),s("p",[t._v("Unzip files, then drag and drop SwarmCloudKit.xcframework and datachannel_wrapper.xcframework into your Xcode project on your application targets’ General settings tab, in the Frameworks, Libraries, and Embedded Content section.")]),t._v(" "),s("h1",{attrs:{id:"integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration"}},[t._v("#")]),t._v(" Integration")]),t._v(" "),s("p",[t._v("In order to allow the loading of distributed content via the local proxy, enable loading data from HTTP in your app by opening your info.plist file as source code and adding the following values below the "),t._v(" tag:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSAppTransportSecurity"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSAllowsArbitraryLoads"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"include"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[t._v("#")]),t._v(" Include")]),t._v(" "),s("p",[t._v("Import SwarmCloudKit in "),s("em",[s("strong",[t._v("AppDelegate.m")])]),t._v(":")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"swift"}},[s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("SwarmCloudKit")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"objective-c"}},[s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SwarmCloudKit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("SwarmCloudKit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Swift"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),t._v("\n")])])])])],1),t._v(" "),s("h4",{attrs:{id:"initialize-p2pengine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize-p2pengine"}},[t._v("#")]),t._v(" Initialize P2pEngine")]),t._v(" "),s("p",[t._v("Initialize P2pEngine in "),s("em",[s("strong",[t._v("AppDelegate.m")])]),t._v(":")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"swift"}},[s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" didFinishLaunchingWithOptions launchOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("LaunchOptionsKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Bool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P2pConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        trackerZone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Europe")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set HongKong or USA if you changed zone")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("P2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YOUR_TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// replace with your own token")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"objective-c"}},[s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIApplication "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application didFinishLaunchingWithOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSDictionary "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("launchOptions\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    P2pConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("P2pConfig defaultConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trackerZone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TrackerZoneEurope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set HongKong or USA if you changed zone")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("P2pEngine setupWithToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("YOUR_TOKEN config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// replace with your own token")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" YES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("Where YOUR_TOKEN is your Customer ID. Please replace it by your own token obtained from console, click "),s("RouterLink",{attrs:{to:"/en/views/bindings.html#app-id-and-token"}},[t._v("here")]),t._v(" for more information.")],1),t._v(" "),s("h4",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("When initializing an AVPlayer (or any other video player) instance, before passing it a URL, pass that URL through P2P Engine:")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"swift"}},[s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" parsedUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("P2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shared"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseStreamUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://your_stream.m3u8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n_player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AVPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" parsedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"objective-c"}},[s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("NSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("parsedUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("P2pEngine sharedInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" parseStreamUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v('"https'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//your_stream.m3u8"];')]),t._v("\n_player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AVPlayer alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL URLWithString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("parsedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("That’s it! SDK should now be integrated into your app.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("For macOS development:\n"),s("br"),t._v("\nXcode enables sandboxing by default on new applications. Ensure your application's entitlements allows incoming and outgoing connections by marking the respective checkboxes in the Network section.")])]),t._v(" "),s("h4",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),s("p",[t._v("A completed example can be found "),s("a",{attrs:{href:"https://github.com/cdnbye/ios-p2p-engine",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"troubleshooting-steps-when-p2p-doesn-t-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-steps-when-p2p-doesn-t-work"}},[t._v("#")]),t._v(" Troubleshooting Steps when P2P doesn't work")]),t._v(" "),s("p",[t._v("Click "),s("RouterLink",{attrs:{to:"/en/views/FAQ.html#troubleshooting-steps-of-native-sdk"}},[t._v("here")])],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);