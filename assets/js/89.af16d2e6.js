(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{874:function(s,a,t){"use strict";t.r(a);var e=t(1),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v('将服务器作为一个P2P节点，利用公网IP和大带宽优势来服务连不上其他节点的客户端。采用master/worker架构，master负责创建和调度worker进程，worker进程负责实际执行"做种"，每个worker只能为一个频道做种，一个频道可以由多个worker同时做种。')]),s._v(" "),t("h2",{attrs:{id:"服务器选型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器选型"}},[s._v("#")]),s._v(" 服务器选型")]),s._v(" "),t("p",[s._v("每个worker进程可以服务最多80个客户端，大概占用一个cpu核心、300MB内存以及100Mbps带宽，可以参考控制台显示的热门频道数量来选择合适的服务器配置，操作系统暂时只支持Linux。")]),s._v(" "),t("h2",{attrs:{id:"安装node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装node-js"}},[s._v("#")]),s._v(" 安装node.js")]),s._v(" "),t("p",[s._v("如果已经安装node.js，请忽略此步骤")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://npmmirror.com/mirrors/node/v18.15.0/node-v18.15.0-linux-x64.tar.xz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf node-v18.15.0-linux-x64.tar.xz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/nodejs\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" node-v18.15.0-linux-x64/* /usr/local/nodejs/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/nodejs/bin/node /usr/local/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/nodejs/bin/npm /usr/local/bin\n")])])]),t("h2",{attrs:{id:"下载超级节点程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载超级节点程序"}},[s._v("#")]),s._v(" 下载超级节点程序")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://cdn.swarmcloud.net/super-peer.zip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" super-peer.zip\n")])])]),t("h2",{attrs:{id:"启动超级节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动超级节点"}},[s._v("#")]),s._v(" 启动超级节点")]),s._v(" "),t("p",[s._v("以监听端口8080为例：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" super-peer\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("listenPort")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .env\n")])])]),t("h4",{attrs:{id:"使用pm2启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用pm2启动"}},[s._v("#")]),s._v(" 使用pm2启动")]),s._v(" "),t("p",[s._v("pm2是一个Node应用进程管理器，用于超级节点的进程守护：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g pm2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/nodejs/bin/pm2 /usr/local/bin\npm2 start index.js -n super-peer\n")])])]),t("h2",{attrs:{id:"绑定超级节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绑定超级节点"}},[s._v("#")]),s._v(" 绑定超级节点")]),s._v(" "),t("p",[s._v('登录控制台，依次点击 P2P配置 -> 超级节点管理 -> +超级节点，输入服务器url地址(http://ip:port)和带宽大小等信息，点击确定即可。\n如果服务器状态显示"已停止"，说明连接不上服务器，请检查各个步骤是否正确，并确保防火墙配置正确。')]),s._v(" "),t("h2",{attrs:{id:"信令配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#信令配置"}},[s._v("#")]),s._v(" 信令配置")]),s._v(" "),t("p",[s._v("如果您的应用在控制台配置了信令，需要为超级节点域名也配置相同的信令地址。")]),s._v(" "),t("h2",{attrs:{id:"做种策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#做种策略"}},[s._v("#")]),s._v(" 做种策略")]),s._v(" "),t("p",[s._v('默认情况下调度服务器会根据当前热门频道排序来自动做种，您也可以关闭自动做种，在超级节点管理页面上方输入播放地址来生成Base64，点击"做种"按钮并输入相关信息即可。')]),s._v(" "),t("h2",{attrs:{id:"监控超级节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监控超级节点"}},[s._v("#")]),s._v(" 监控超级节点")]),s._v(" "),t("p",[s._v("在超级节点管理页面点击对应服务器的监控按钮，即可查看每个worker进程的连接节点数、上传流量(单位KB)、系统资源使用情况等信息，也可以重启或者杀掉某个worker进程。")]),s._v(" "),t("h2",{attrs:{id:"配置访问token-可选"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置访问token-可选"}},[s._v("#")]),s._v(" 配置访问token (可选)")]),s._v(" "),t("p",[s._v("可以在启动程序前先执行以下脚本来创建AccessToken：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accessToken=YOUR_TOKEN'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .env\n")])])]),t("p",[s._v("其中YOUR_TOKEN是你自定义的token，需要确保与在后台绑定超级节点时配置的AccessToken一致。")]),s._v(" "),t("h2",{attrs:{id:"开机自启动-可选"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开机自启动-可选"}},[s._v("#")]),s._v(" 开机自启动 (可选)")]),s._v(" "),t("p",[s._v("在启动程序后，用以下脚本实现开机自动重启进程：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pm2 save\npm2 startup\n")])])]),t("h2",{attrs:{id:"更新超级节点-可选"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新超级节点-可选"}},[s._v("#")]),s._v(" 更新超级节点 (可选)")]),s._v(" "),t("p",[s._v("当需要更新版本时，先停止程序：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pm2 stop super-peer\n")])])]),t("p",[s._v("替换文件，然后重新启动程序：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -N https://cdn.swarmcloud.net/super-peer.zip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" -o super-peer.zip\npm2 start super-peer\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);