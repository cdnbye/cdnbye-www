(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{627:function(t,e,a){"use strict";a.r(e);var r=a(1),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("基於ServiceWorker的MP4/WebM/MP3/WAV加速引擎，適配所有瀏覽器（包括iOS Safari）和Web播放器！")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/swarmcloud-mp4-sw"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/swarmcloud-mp4-sw.svg?style=flat",alt:"npm"}})]),t._v(" "),a("a",{attrs:{href:"https://www.jsdelivr.com/package/npm/swarmcloud-mp4-sw"}},[a("img",{attrs:{src:"https://data.jsdelivr.com/v1/package/npm/swarmcloud-mp4-sw/badge",alt:"jsdelivr"}})])]),t._v(" "),a("p",[t._v("本項目基於ServiceWorkers和WebRTC在所有現代瀏覽器和Web播放器實現了MP4/MP3的P2P能力。")]),t._v(" "),a("h3",{attrs:{id:"瀏覽器支持情況"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#瀏覽器支持情況"}},[t._v("#")]),t._v(" 瀏覽器支持情況")]),t._v(" "),a("p",[t._v("由於WebRTC已成為HTML5標準，目前大部分主流瀏覽器都已經支持。兼容性取決於瀏覽器是否支持 WebRTC 和 ServiceWorker。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("兼容性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Chrome")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Firefox")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("macOS Safari")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Opera")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Edge")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("iOS Safari")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("IE")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("WebRTC Datachannel")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("❌")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Service Worker")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("❌")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SwarmCloud")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("❌")])])])]),t._v(" "),a("h3",{attrs:{id:"工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),a("ul",[a("li",[t._v("首先由客戶端嵌入的SDK 註冊 ServiceWorker ，從而在播放器與網絡之間嵌入一層本地代理")]),t._v(" "),a("li",[t._v("播放器向本地代理請求視頻流")]),t._v(" "),a("li",[t._v("本地代理（ServiceWorker）通過監聽 fetch 事件，攔截全站的網絡請求，並識別出 MP4/MP3 文件請求，將請求的文件範圍劃分成若幹個子範圍請求，隨後將這些子範圍請求依次轉發到主線程")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fetch'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ⛦ magic here ⛦ */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("主線程根據P2P網絡情況決定是否從對等端下載，下載完成後在主線程保留一份拷貝以分享給其他節點")]),t._v(" "),a("li",[t._v("當資源被一個設備緩存之後，其他設備在請求相同資源時，將嘗試優先通過P2P網絡就近從該設備獲取資源，而不是從成本更高、距離更遠的源服務器獲取（即用WebRTC替代HTTP）")]),t._v(" "),a("li",[t._v("從P2P網絡獲取失敗或者不能緩存的資源，將自動回源")])]),t._v(" "),a("h3",{attrs:{id:"局限性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局限性"}},[t._v("#")]),t._v(" 局限性")]),t._v(" "),a("ul",[a("li",[t._v("由於ServiceWorker的限製，需要用https訪問網站")]),t._v(" "),a("li",[t._v("由於ServiceWorker的限製，需要將sw.js文件部署至托管域名的服務器")])]),t._v(" "),a("h3",{attrs:{id:"在線示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在線示例"}},[t._v("#")]),t._v(" 在線示例")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://swarm-cloud.github.io/mp4-sw-p2p-engine/demo/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MP4 Demo"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://swarm-cloud.github.io/mp4-sw-p2p-engine/demo/audio.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MP3 Demo"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://swarm-cloud.github.io/mp4-sw-p2p-engine/demo/audio.html?type=wav",target:"_blank",rel:"noopener noreferrer"}},[t._v("WAV Demo"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);