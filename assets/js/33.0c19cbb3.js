(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{802:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[t._v("#")]),t._v(" 环境配置")]),t._v(" "),s("h3",{attrs:{id:"开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[t._v("#")]),t._v(" 开发环境")]),t._v(" "),s("ul",[s("li",[t._v("Android Studio 开发工具，"),s("a",{attrs:{href:"http://developer.android.com/intl/zh-cn/sdk/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"开启java8支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启java8支持"}},[t._v("#")]),t._v(" 开启Java8支持")]),t._v(" "),s("p",[t._v("在 "),s("em",[s("strong",[t._v("app/build.gradle")])]),t._v(" 中加入以下配置以开启Java8支持：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("android {\n    compileOptions {\n        sourceCompatibility JavaVersion.VERSION_1_8\n        targetCompatibility JavaVersion.VERSION_1_8\n    }\n}\n")])])]),s("h3",{attrs:{id:"添加相关权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加相关权限"}},[t._v("#")]),t._v(" 添加相关权限")]),t._v(" "),s("p",[t._v("在 "),s("em",[s("strong",[t._v("app/src/main")])]),t._v(" 目录中的 "),s("em",[s("strong",[t._v("AndroidManifest.xml")])]),t._v(" 中增加如下权限声明:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.INTERNET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.ACCESS_NETWORK_STATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.READ_EXTERNAL_STORAGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.WRITE_EXTERNAL_STORAGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.ACCESS_WIFI_STATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h3",{attrs:{id:"允许http请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#允许http请求"}},[t._v("#")]),t._v(" 允许HTTP请求")]),t._v(" "),s("p",[t._v("从Android P系统开始，如果应用使用的是非加密的明文流量的http网络请求，则会导致该应用无法进行网络请求，https则不会受影响。由于本地代理服务需要使用http协议访问，针对这个问题，有以下两种解决方法：\n"),s("br"),t._v("\n（1） "),s("em",[s("strong",[t._v("targetSdkVersion")])]),t._v(" 降到27以下\n"),s("br"),t._v("\n（2） 更改网络安全配置，在 "),s("em",[s("strong",[t._v("app/src/main")])]),t._v(" 目录中的 "),s("em",[s("strong",[t._v("AndroidManifest.xml")])]),t._v(" 的"),s("code",[t._v("<application>")]),t._v("标签中直接插入：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("application")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("usesCleartextTraffic")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h3",{attrs:{id:"混淆配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#混淆配置"}},[t._v("#")]),t._v(" 混淆配置")]),t._v(" "),s("p",[t._v("为了保证正常使用 SDK ，请在 proguard-rules.pro 文件中添加以下代码：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-dontwarn com.p2pengine.**\n-keep class com.p2pengine.**{*;}\n-keep interface com.p2pengine.**{*;}\n-dontwarn org.webrtc.**\n-keep class org.webrtc.**{*;}\n")])])]),s("h2",{attrs:{id:"导入sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入sdk"}},[t._v("#")]),t._v(" 导入SDK")]),t._v(" "),s("h3",{attrs:{id:"下载-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载-sdk"}},[t._v("#")]),t._v(" 下载 SDK")]),t._v(" "),s("p",[t._v("下载最新版本的"),s("a",{attrs:{href:"https://github.com/cdnbye/android-p2p-engine/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("安卓SDK"),s("OutboundLink")],1),t._v("，并拷贝到工程的 "),s("em",[s("strong",[t._v("libs")])]),t._v(" 目录下。\n"),s("br"),t._v("\n下载只包含Datachannel和P2P模块的WebRTC库 "),s("a",{attrs:{href:"https://cdnbye.oss-cn-beijing.aliyuncs.com/android_sdk/webrtc.aar",target:"_blank",rel:"noopener noreferrer"}},[t._v("webrtc.aar"),s("OutboundLink")],1),t._v("并拷贝到工程的 "),s("em",[s("strong",[t._v("libs")])]),t._v(" 目录下。")]),t._v(" "),s("h3",{attrs:{id:"修改-build-gradle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改-build-gradle"}},[t._v("#")]),t._v(" 修改 build.gradle")]),t._v(" "),s("p",[t._v("在 "),s("em",[s("strong",[t._v("build.gradle")])]),t._v(" 添加如下依赖：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("dependencies {\n    implementation fileTree(dir: 'libs', include: ['*.aar', '*.jar'], exclude: [])\n    implementation(\"com.squareup.okhttp3:okhttp:3.12.13\")    // Or any okhttp newer version\n    implementation(\"com.orhanobut:logger:2.2.0\")\n    implementation(\"com.google.code.gson:gson:2.9.0\")\n}\n")])])]),s("p",[t._v("如果需要在Google Play上线，可能会因为WebRTC版本太旧而被拒绝，可以替换成较新版本的WebRTC，在 "),s("em",[s("strong",[t._v("build.gradle")])]),t._v(" 添加如下依赖：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 移除libs/webrtc.aar\nimplementation 'com.dafruits:webrtc:106.0.0'\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("由于模拟器运行环境问题，请在真机进行调试。")])]),t._v(" "),s("h2",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),s("p",[t._v("推荐在 "),s("em",[s("strong",[t._v("Application.OnCreate()")])]),t._v(" 中启动P2P加速服务。")]),t._v(" "),s("h3",{attrs:{id:"导入-p2pengine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入-p2pengine"}},[t._v("#")]),t._v(" 导入 P2pEngine")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p2pengine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("P2pEngine\n")])])]),s("h3",{attrs:{id:"实例化-p2pengine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例化-p2pengine"}},[t._v("#")]),t._v(" 实例化 P2pEngine")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"kotlin"}},[s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" MyApplication "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" P2pConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("announceLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AnnounceLocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("China"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set HongKong or USA if you changed zone")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        P2pEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" YOUR_TOKEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"java"}},[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApplication")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Application")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pConfig")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("announceLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnounceLocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("China")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" YOUR_TOKEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("其中 YOUR_TOKEN 是用于标识用户的字符串，请换成自己的token，点击"),s("RouterLink",{attrs:{to:"/cn/views/bindings.html#绑定-app-id-并获取token"}},[t._v("这里")]),t._v("查看如何注册 "),s("em",[s("strong",[t._v("Appid")])]),t._v(" 并获取 "),s("em",[s("strong",[t._v("token")])]),t._v("。")],1),t._v(" "),s("h3",{attrs:{id:"播放-hls-mpeg-dash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#播放-hls-mpeg-dash"}},[t._v("#")]),t._v(" 播放 HLS/MPEG-DASH")]),t._v(" "),s("p",[t._v("进行流媒体播放，必须通过SDK把播放地址转换成本地加速地址，再把转换后的地址传给播放器即可（建议使用"),s("a",{attrs:{href:"https://github.com/google/ExoPlayer",target:"_blank",rel:"noopener noreferrer"}},[t._v("ExoPlayer"),s("OutboundLink")],1),t._v("）。")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"kotlin"}},[s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" void "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPlay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" parsedUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" P2pEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseStreamUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("YOUR_STREAM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  mediaPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parsedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"java"}},[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPlay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" parsedUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseStreamUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("YOUR_STREAM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  mediaPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parsedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),s("h3",{attrs:{id:"绑定播放器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绑定播放器"}},[t._v("#")]),t._v(" 绑定播放器")]),t._v(" "),s("p",[t._v("如果您使用的播放器是 Exoplayer ，直播场景下建议通过 setPlayerInteractor 来获取播放器实时反馈。")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"kotlin"}},[s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("P2pEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPlayerInteractor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PlayerInteractor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBufferedDuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Long "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Exoplayer in milliseconds")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            player"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bufferedPosition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" player"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentPosition\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"java"}},[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPlayerInteractor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerInteractor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBufferedDuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Exoplayer in milliseconds")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("play "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBufferedPosition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentPosition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])],1),t._v(" "),s("h4",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("获取完整的"),s("a",{attrs:{href:"https://github.com/cdnbye/android-p2p-engine/tree/v3-kotlin",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例程序"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"从-v2-迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-v2-迁移"}},[t._v("#")]),t._v(" 从 v2 迁移")]),t._v(" "),s("p",[t._v("v3 的一些主要改动和优化：")]),t._v(" "),s("ul",[s("li",[t._v("包名前缀由 com.cdnbye.* 改为 com.p2pengine.*")]),t._v(" "),s("li",[t._v("API level的最低要求由 19+ 升至 21+")]),t._v(" "),s("li",[t._v("okhttp 的最低版本要求是 4.5+")]),t._v(" "),s("li",[t._v("gradle依赖之一 "),s("code",[t._v("fastjson")]),t._v(" 改为 "),s("code",[t._v("gson")]),t._v(" ：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// implementation 'com.alibaba:fastjson:1.2.58'   // 删除这一行\nimplementation(\"com.google.code.gson:gson:2.9.0\") // 添加这一行\n")])])]),s("ul",[s("li",[t._v("Mp4/MPEG-Dash/大文件下载的API被移除")]),t._v(" "),s("li",[t._v('P2pConfig 中的一些字段被移除，比如 "waitForPeer", "waitForPeerTimeout"')])]),t._v(" "),s("h4",{attrs:{id:"p2p无效问题排查步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#p2p无效问题排查步骤"}},[t._v("#")]),t._v(" P2P无效问题排查步骤")]),t._v(" "),s("p",[t._v("请参考"),s("RouterLink",{attrs:{to:"/cn/views/FAQ.html#客户端sdk-p2p无效问题排查步骤"}},[t._v("常见问题")])],1),t._v(" "),s("h4",{attrs:{id:"解决exoplayer无法播放问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决exoplayer无法播放问题"}},[t._v("#")]),t._v(" 解决Exoplayer无法播放问题")]),t._v(" "),s("p",[t._v("请参考"),s("RouterLink",{attrs:{to:"/cn/views/FAQ.html#解决exoplayer无法播放问题"}},[t._v("常见问题")])],1),t._v(" "),s("h4",{attrs:{id:"解决安卓机顶盒oom问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决安卓机顶盒oom问题"}},[t._v("#")]),t._v(" 解决安卓机顶盒oom问题")]),t._v(" "),s("p",[t._v("请参考"),s("RouterLink",{attrs:{to:"/cn/views/FAQ.html#解决安卓机顶盒oom问题"}},[t._v("常见问题")])],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);