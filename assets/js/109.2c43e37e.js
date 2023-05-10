(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{879:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"environment-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environment-configuration"}},[t._v("#")]),t._v(" Environment Configuration")]),t._v(" "),s("h3",{attrs:{id:"developing-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#developing-environment"}},[t._v("#")]),t._v(" Developing Environment")]),t._v(" "),s("ul",[s("li",[t._v("Android Studio，"),s("a",{attrs:{href:"http://developer.android.com/intl/zh-cn/sdk/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("download"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"turn-on-java-8-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#turn-on-java-8-support"}},[t._v("#")]),t._v(" Turn on Java 8 support")]),t._v(" "),s("p",[t._v("If not enabled already, you also need to turn on Java 8 support in application's build.gradle, by adding the following to the android section:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("android {\n    compileOptions {\n        sourceCompatibility JavaVersion.VERSION_1_8\n        targetCompatibility JavaVersion.VERSION_1_8\n    }\n}\n")])])]),s("h3",{attrs:{id:"add-uses-permission"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-uses-permission"}},[t._v("#")]),t._v(" Add Uses Permission")]),t._v(" "),s("p",[t._v("Add relevant uses permissions in "),s("em",[s("strong",[t._v("app/src/main/AndroidManifest.xml")])]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.INTERNET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.ACCESS_NETWORK_STATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.READ_EXTERNAL_STORAGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.WRITE_EXTERNAL_STORAGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.ACCESS_WIFI_STATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h3",{attrs:{id:"allow-http-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#allow-http-request"}},[t._v("#")]),t._v(" Allow HTTP Request")]),t._v(" "),s("p",[t._v("Starting with Android 9 (API level 28), cleartext support is disabled by default. There are 2 solutions:\n"),s("br"),t._v("\n（1） set "),s("em",[s("strong",[t._v("targetSdkVersion")])]),t._v(" under 27\n"),s("br"),t._v("\n（2） Add the attribute below in "),s("em",[s("strong",[t._v("app/src/main/AndroidManifest.xml")])]),t._v(" to indicate that the app intends to use cleartext HTTP:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("application")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("usesCleartextTraffic")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h3",{attrs:{id:"enable-largeheap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-largeheap"}},[t._v("#")]),t._v(" Enable LargeHeap")]),t._v(" "),s("p",[t._v('P2P related application can be memory intensive, setting the optional android:largeHeap="true" flag in the AndroidManifest.xml file is recommended to ensure that your application has enough heap memory allocated.')]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("application")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("largeHeap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“true”")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h3",{attrs:{id:"proguard-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proguard-configuration"}},[t._v("#")]),t._v(" Proguard Configuration")]),t._v(" "),s("p",[t._v("Please add the following code in proguard-rules.pro:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-dontwarn com.p2pengine.**\n-keep class com.p2pengine.**{*;}\n-keep interface com.p2pengine.**{*;}\n-keep class com.cdnbye.libdc.**{*;}\n-keep interface com.cdnbye.libdc.**{*;}\n-keep class com.snapchat.djinni.**{*;}\n")])])]),s("h2",{attrs:{id:"import-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-sdk"}},[t._v("#")]),t._v(" Import SDK")]),t._v(" "),s("h3",{attrs:{id:"download-sdk-version-3-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-sdk-version-3-5"}},[t._v("#")]),t._v(" Download SDK(version >= 3.5)")]),t._v(" "),s("p",[t._v("Download the latest version "),s("a",{attrs:{href:"https://github.com/cdnbye/android-p2p-engine/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("SDK"),s("OutboundLink")],1),t._v("，then copy it to "),s("em",[s("strong",[t._v("app/libs")])]),t._v(" .\n"),s("br"),t._v("\nDownload the P2P library "),s("a",{attrs:{href:"https://cdnbye.oss-cn-beijing.aliyuncs.com/android_sdk/datachannel.aar",target:"_blank",rel:"noopener noreferrer"}},[t._v("datachannel.aar"),s("OutboundLink")],1),t._v("，then copy it to "),s("em",[s("strong",[t._v("app/libs")])]),t._v(" .")]),t._v(" "),s("p",[t._v("Besides add new dependencies in "),s("em",[s("strong",[t._v("app/build.gradle")])]),t._v(" as shown below:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("dependencies {\n    implementation fileTree(dir: 'libs', include: ['*.aar', '*.jar'], exclude: [])\n    implementation(\"com.squareup.okhttp3:okhttp:3.12.13\")    // Or any okhttp newer version\n    implementation(\"com.orhanobut:logger:2.2.0\")\n    implementation(\"com.google.code.gson:gson:2.9.0\")\n}\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("Simulator may not work as expected, please test on real device.")])]),t._v(" "),s("h2",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),s("p",[t._v("We recommend calling P2pEngine.initEngine in the instance of the Application class right after the application is created.")]),t._v(" "),s("h3",{attrs:{id:"import-p2pengine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-p2pengine"}},[t._v("#")]),t._v(" Import P2pEngine")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p2pengine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("P2pEngine\n")])])]),s("h3",{attrs:{id:"initialize-p2pengine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize-p2pengine"}},[t._v("#")]),t._v(" Initialize P2pEngine")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"kotlin"}},[s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" MyApplication "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" P2pConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("announceLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AnnounceLocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("China"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set HongKong or USA if you changed zone")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        P2pEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" YOUR_TOKEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"java"}},[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApplication")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Application")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pConfig")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("announceLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnounceLocation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("China")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" YOUR_TOKEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("Where YOUR_TOKEN is your Customer ID. Please replace it by your own token obtained from console, click "),s("RouterLink",{attrs:{to:"/en/views/bindings.html#app-id-and-token"}},[t._v("here")]),t._v(" for more information.")],1),t._v(" "),s("h3",{attrs:{id:"playback-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#playback-address"}},[t._v("#")]),t._v(" Playback Address")]),t._v(" "),s("p",[t._v("When initializing a media player (or any other video player, "),s("a",{attrs:{href:"https://github.com/google/ExoPlayer",target:"_blank",rel:"noopener noreferrer"}},[t._v("ExoPlayer"),s("OutboundLink")],1),t._v(" is highly recommended) instance, before passing it a URL, pass that URL through P2P Engine.")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"kotlin"}},[s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" void "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPlay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" parsedUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" P2pEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseStreamUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("YOUR_STREAM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  mediaPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parsedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"java"}},[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPlay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" parsedUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseStreamUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("YOUR_STREAM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  mediaPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parsedUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),s("h3",{attrs:{id:"setup-player-interactor-for-exoplayer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-player-interactor-for-exoplayer"}},[t._v("#")]),t._v(" Setup Player Interactor For Exoplayer")]),t._v(" "),s("p",[t._v("If your are using Exoplayer, it's recommended to setup PlayerInteractor for live streaming.")]),t._v(" "),s("Tabs",{attrs:{type:"card"}},[s("Tab",{attrs:{label:"kotlin"}},[s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("P2pEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPlayerInteractor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PlayerInteractor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBufferedDuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Long "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Exoplayer in milliseconds")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            player"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bufferedPosition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" player"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentPosition\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"java"}},[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P2pEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPlayerInteractor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerInteractor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBufferedDuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Exoplayer in milliseconds")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("play "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBufferedPosition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentPosition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])],1),t._v(" "),s("h4",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),s("p",[t._v("A completed example can be found "),s("a",{attrs:{href:"https://github.com/cdnbye/android-p2p-engine/tree/v3-kotlin",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"migrating-from-v2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-v2"}},[t._v("#")]),t._v(" Migrating from v2")]),t._v(" "),s("p",[t._v("Some major changes and enhancements of v3:")]),t._v(" "),s("ul",[s("li",[t._v("The package name is renamed from com.cdnbye.* to com.p2pengine.*")]),t._v(" "),s("li",[t._v("The minimum requirement of API level is now 21+ instead of 19+")]),t._v(" "),s("li",[t._v("The requirement of okhttp version is 4.5+")]),t._v(" "),s("li",[t._v("One of the gradle dependencies "),s("code",[t._v("fastjson")]),t._v(" is replaced by "),s("code",[t._v("gson")]),t._v(" :")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// implementation 'com.alibaba:fastjson:1.2.58'   // Remove this dependency\nimplementation(\"com.google.code.gson:gson:2.9.0\") // Add this dependency\n")])])]),s("ul",[s("li",[t._v("The APIs for Mp4/MPEG-Dash/FIle download are removed")]),t._v(" "),s("li",[t._v('Some fields of P2pConfig are removed, like "waitForPeer", "waitForPeerTimeout"')])]),t._v(" "),s("h4",{attrs:{id:"troubleshooting-steps-when-p2p-doesn-t-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-steps-when-p2p-doesn-t-work"}},[t._v("#")]),t._v(" Troubleshooting Steps when P2P doesn't work")]),t._v(" "),s("p",[t._v("Click "),s("RouterLink",{attrs:{to:"/en/views/FAQ.html#troubleshooting-steps-of-native-sdk"}},[t._v("here")])],1),t._v(" "),s("h4",{attrs:{id:"resolve-oom-in-android-set-top-box"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve-oom-in-android-set-top-box"}},[t._v("#")]),t._v(" Resolve OOM in Android set-top box")]),t._v(" "),s("p",[t._v("Click "),s("RouterLink",{attrs:{to:"/en/views/FAQ.html#resolve-oom-in-android-set-top-box"}},[t._v("here")])],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);