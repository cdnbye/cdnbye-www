(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{928:function(e,s,t){"use strict";t.r(s);var a=t(1),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v('This program makes server as a peer (Super Peer) to serve clients that cannot connect to other peers. The master/worker architecture is adopted. The master is responsible for creating and scheduling worker processes, and the worker process is responsible for executing "seeding". Each worker can only seed for one channel, and a channel can be seeded by multiple workers simultaneously.')]),e._v(" "),t("h2",{attrs:{id:"server-spec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-spec"}},[e._v("#")]),e._v(" Server Spec")]),e._v(" "),t("p",[e._v("Each worker process can serve up to 80 peers, requires approximately one CPU core, 300MB of memory, and 100Mbps of bandwidth, it also requires sufficient disk space to cache content for VOD.")]),e._v(" "),t("h2",{attrs:{id:"sdk-version-requirement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sdk-version-requirement"}},[e._v("#")]),e._v(" SDK Version Requirement")]),e._v(" "),t("p",[e._v("Web HLS SDK version >= 2.7.0\n"),t("br"),e._v("\nAndroid SDK version >= 3.4.0")]),e._v(" "),t("h2",{attrs:{id:"install-node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-node-js"}},[e._v("#")]),e._v(" Install Node.js")]),e._v(" "),t("p",[e._v("Ignore this step if you have installed node.js.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://npmmirror.com/mirrors/node/v18.15.0/node-v18.15.0-linux-x64.tar.xz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xvf node-v18.15.0-linux-x64.tar.xz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /usr/local/nodejs\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" node-v18.15.0-linux-x64/* /usr/local/nodejs/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /usr/local/nodejs/bin/node /usr/local/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /usr/local/nodejs/bin/npm /usr/local/bin\n")])])]),t("h2",{attrs:{id:"download-super-peer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-super-peer"}},[e._v("#")]),e._v(" Download Super Peer")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://cdn.swarmcloud.net/super-peer.zip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("unzip")]),e._v(" super-peer.zip\n")])])]),t("h2",{attrs:{id:"start-super-peer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-super-peer"}},[e._v("#")]),e._v(" Start Super Peer")]),e._v(" "),t("p",[e._v("The script to start super peer with listening port 8080 is as follows:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" super-peer\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("listenPort")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" .env\n")])])]),t("h4",{attrs:{id:"use-pm2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-pm2"}},[e._v("#")]),e._v(" Use pm2")]),e._v(" "),t("p",[e._v("pm2 is a Node.js application process manager that is used for keeping super peer alive forever.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i -g pm2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /usr/local/nodejs/bin/pm2 /usr/local/bin\npm2 start index.js -n super-peer\n")])])]),t("h2",{attrs:{id:"register-super-peer-in-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-super-peer-in-dashboard"}},[e._v("#")]),e._v(" Register Super Peer in Dashboard")]),e._v(" "),t("p",[e._v('Log in dashboard, click on "P2P Setting" -> "Server as Peer" -> "+Super Peer", input the server URL(http://ip:port) and bandwidth, then click "Confirm". If the server status shows "Stopped", it means that the server cannot be connected. Please ensure that the firewall configuration is correct.')]),e._v(" "),t("h2",{attrs:{id:"signal-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signal-configuration"}},[e._v("#")]),e._v(" Signal Configuration")]),e._v(" "),t("p",[e._v("If your application has configured signal address on the console, you need to configure the same signal address for the super peer domain.")]),e._v(" "),t("h2",{attrs:{id:"seeding-strategy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seeding-strategy"}},[e._v("#")]),e._v(" Seeding Strategy")]),e._v(" "),t("p",[e._v("By default, the tracker server will automatically seed based on the current hot channel rankings. You can turn off automatic seeding and do it manually.")]),e._v(" "),t("h2",{attrs:{id:"monitor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monitor"}},[e._v("#")]),e._v(" Monitor")]),e._v(" "),t("p",[e._v("Click on the monitor button of the corresponding server on the page to view information such as the number of current connected peers, uploaded traffic in KB, and system resource usage for each worker process. You can also restart or kill a specific worker process.")]),e._v(" "),t("h2",{attrs:{id:"access-token-optional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-token-optional"}},[e._v("#")]),e._v(" Access Token (Optional)")]),e._v(" "),t("p",[e._v("You can set an access token before starting the program:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accessToken=ACCESS_TOKEN'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" .env\n")])])]),t("p",[e._v("ACCESS_TOKEN is the self-defined string, which should be same as the one registered in dashboard.")]),e._v(" "),t("h2",{attrs:{id:"auto-startup-optional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-startup-optional"}},[e._v("#")]),e._v(" Auto Startup (Optional)")]),e._v(" "),t("p",[e._v("Start the program then run:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("pm2 save\npm2 startup\n")])])]),t("h2",{attrs:{id:"update-super-peer-optional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-super-peer-optional"}},[e._v("#")]),e._v(" Update Super Peer (Optional)")]),e._v(" "),t("p",[e._v("When updating version, firstly stop the process:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("pm2 stop super-peer\n")])])]),t("p",[e._v("then replace the file with new version, restart the process:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" -N https://cdn.swarmcloud.net/super-peer.zip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("unzip")]),e._v(" -o super-peer.zip\npm2 start super-peer\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);