(window.webpackJsonp=window.webpackJsonp||[]).push([[10,14],{474:function(t,e,i){"use strict";var r=i(0),a=i(63),n=[].reverse,s=[1,2];r({target:"Array",proto:!0,forced:String(s)===String(s.reverse())},{reverse:function(){return a(this)&&(this.length=this.length),n.call(this)}})},475:function(t,e,i){},499:function(t,e,i){"use strict";var r=i(0),a=i(51),n=i(500),s=i(245),o=i(2),l=1..toFixed,c=Math.floor,d=function(t,e,i){return 0===e?i:e%2==1?d(t,e-1,i*t):d(t*t,e/2,i)},u=function(t,e,i){for(var r=-1,a=i;++r<6;)a+=e*t[r],t[r]=a%1e7,a=c(a/1e7)},f=function(t,e){for(var i=6,r=0;--i>=0;)r+=t[i],t[i]=c(r/e),r=r%e*1e7},h=function(t){for(var e=6,i="";--e>=0;)if(""!==i||0===e||0!==t[e]){var r=String(t[e]);i=""===i?r:i+s.call("0",7-r.length)+r}return i};r({target:"Number",proto:!0,forced:l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){l.call({})}))},{toFixed:function(t){var e,i,r,o,l=n(this),c=a(t),p=[0,0,0,0,0,0],m="",v="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(m="-",l=-l),l>1e-21)if(i=(e=function(t){for(var e=0,i=t;i>=4096;)e+=12,i/=4096;for(;i>=2;)e+=1,i/=2;return e}(l*d(2,69,1))-69)<0?l*d(2,-e,1):l/d(2,e,1),i*=4503599627370496,(e=52-e)>0){for(u(p,0,i),r=c;r>=7;)u(p,1e7,0),r-=7;for(u(p,d(10,r,1),0),r=e-1;r>=23;)f(p,1<<23),r-=23;f(p,1<<r),u(p,1,1),f(p,2),v=h(p)}else u(p,0,i),u(p,1<<-e,0),v=h(p)+s.call("0",c);return v=c>0?m+((o=v.length)<=c?"0."+s.call("0",c-o)+v:v.slice(0,o-c)+"."+v.slice(o-c)):m+v}})},500:function(t,e,i){var r=i(42);t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},501:function(t,e,i){"use strict";i(475)},502:function(t,e,i){},513:function(t,e,i){"use strict";i.r(e);i(141),i(474),i(61);var r=i(77),a=(i(10),i(143),i(138)),n={name:"FlyBox",mixins:[{data:function(){return{dom:"",width:0,height:0,debounceInitWHFun:"",domObserver:""}},methods:{autoResizeMixinInit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var i,r,a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.initWH,r=t.getDebounceInitWHFun,a=t.bindDomResizeCallback,n=t.afterAutoResizeMixinInit,e.next=3,i(!1);case 3:r(),a(),"function"==typeof n&&n();case 6:case"end":return e.stop()}}),e)})))()},initWH:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=this.$nextTick,r=this.$refs,a=this.ref,n=this.onResize;return new Promise((function(s){i((function(i){var o=t.dom=r[a];t.width=o?o.clientWidth:0,t.height=o?o.clientHeight:0,o?t.width&&t.height||console.warn("DataV: Component width or height is 0px, rendering abnormality may occur!"):console.warn("DataV: Failed to get dom node, component rendering may be abnormal!"),"function"==typeof n&&e&&n(),s()}))}))},getDebounceInitWHFun:function(){var t=this.initWH;this.debounceInitWHFun=Object(a.a)(100,t)},bindDomResizeCallback:function(){var t=this.dom,e=this.debounceInitWHFun;this.domObserver=Object(a.i)(t,e),window.addEventListener("resize",e)},unbindDomResizeCallback:function(){var t=this.domObserver,e=this.debounceInitWHFun;t&&(t.disconnect(),t.takeRecords(),t=null,window.removeEventListener("resize",e))}},mounted:function(){(0,this.autoResizeMixinInit)()},beforeDestroy:function(){(0,this.unbindDomResizeCallback)()}}],props:{hide:{type:Boolean,default:!1},color:{type:Array,default:function(){return[]}},dur:{type:Number,default:4},backgroundColor:{type:String,default:"transparent"},reverse:{type:Boolean,default:!1}},data:function(){var t=Object(a.k)();return{ref:"border-box-8",path:"border-box-8-path-".concat(t),gradient:"border-box-8-gradient-".concat(t),mask:"border-box-8-mask-".concat(t),defaultColor:["#235fa7","#4fd2dd"],mergedColor:[]}},computed:{length:function(){return 2*(this.width+this.height-5)},pathD:function(){var t=this.reverse,e=this.width,i=this.height;return t?"M 2.5, 2.5 L 2.5, ".concat(i-2.5," L ").concat(e-2.5,", ").concat(i-2.5," L ").concat(e-2.5,", 2.5 L 2.5, 2.5"):"M2.5, 2.5 L".concat(e-2.5,", 2.5 L").concat(e-2.5,", ").concat(i-2.5," L2.5, ").concat(i-2.5," L2.5, 2.5")}},watch:{color:function(){(0,this.mergeColor)()}},methods:{mergeColor:function(){var t=this.color,e=this.defaultColor;this.mergedColor=t||e}},mounted:function(){(0,this.mergeColor)()}},s=(i(501),i(1)),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:t.ref,staticClass:"dv-border-box-8"},[i("svg",{directives:[{name:"show",rawName:"v-show",value:!t.hide,expression:"!hide"}],staticClass:"dv-border-svg-container",attrs:{width:t.width,height:t.height}},[i("defs",[i("path",{attrs:{id:t.path,d:t.pathD,fill:"transparent"}}),t._v(" "),i("radialGradient",{attrs:{id:t.gradient,cx:"50%",cy:"50%",r:"50%"}},[i("stop",{attrs:{offset:"0%","stop-color":"#fff","stop-opacity":"1"}}),t._v(" "),i("stop",{attrs:{offset:"100%","stop-color":"#fff","stop-opacity":"0"}})],1),t._v(" "),i("mask",{attrs:{id:t.mask}},[i("circle",{attrs:{cx:"0",cy:"0",r:"50",fill:"url(#"+t.gradient+")"}},[i("animateMotion",{attrs:{dur:t.dur+"s",path:t.pathD,rotate:"auto",repeatCount:"indefinite"}})],1)])],1),t._v(" "),i("polygon",{attrs:{fill:t.backgroundColor,points:"5, 5 "+(t.width-5)+", 5 "+(t.width-5)+" "+(t.height-5)+" 5, "+(t.height-5)}}),t._v(" "),i("use",{attrs:{stroke:t.mergedColor[0],"stroke-width":"0","xlink:href":"#"+t.path}}),t._v(" "),i("use",{attrs:{stroke:t.mergedColor[1],"stroke-width":"1.5","xlink:href":"#"+t.path,mask:"url(#"+t.mask+")"}},[i("animate",{attrs:{attributeName:"stroke-dasharray",from:"0, "+t.length,to:t.length+", 0",dur:t.dur+"s",repeatCount:"indefinite"}})])]),t._v(" "),i("div",{staticClass:"border-box-content"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=o.exports},518:function(t,e,i){"use strict";i(502)},604:function(t,e,i){"use strict";i.r(e);var r=i(39),a=(i(15),i(499),i(138)),n={name:"CBPlayer",components:{FlyBox:i(513).default},props:{playUrl:{type:String,required:!0},isLive:{type:Boolean,required:!1}},data:function(){return{player:null,showWarn:!1,statis:{offload:"0",upload:"0",ratio:"0",peers:"0",buffers:0,peerID:""},p2pVersion:""}},watch:{playUrl:{handler:function(t,e){this.playUrl=t,t&&t!==e&&(this.statis={offload:"0",ratio:"0",upload:"0",peers:"0",buffers:0,peerID:""},this.initPlayer(t,this.isLive),/m3u8(#|\?|$)/i.exec(t)?this.showWarn=!Hls.P2pEngine.isSupported():/.mpd(#|\?|$)/i.exec(t)?this.showWarn=!(Object(a.d)()&&P2PEngineDash.isSupported()):/.mp4(#|\?|$)/i.exec(t)&&(this.showWarn=!P2PEngineMp4.isSupported()))},immediate:!0,deep:!0}},mounted:function(){},methods:{initPlayer:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.player&&this.player.destroy();var a={live:this.isLive,logLevel:!0,wsSignalerAddr:{main:"wss://signal.cdnbye.com",backup:"wss://signal.swarmcloud.net"},waitForPeer:!0,sourceUrl:t,trickleICE:!0,getStats:function(t,i,r){var a=r+t;e.statis.ratio=Math.round(t/a*100),e.statis.offload=(t/1024).toFixed(1),e.statis.upload=(i/1024).toFixed(1)},getPeerId:function(t){e.statis.peerID=t},getPeersInfo:function(t){e.statis.peers=t.length}},n={container:document.getElementById("player"),theme:"#1E90FFFF",autoplay:!0,live:i,hotkey:!0,preload:"none",volume:.7,mutex:!0,screenshot:!0,video:{url:t,pic:"https://www.cdnbye.com/logo.png"},pluginOptions:{hls:{debug:!1,maxBufferLength:i?void 0:10,p2pConfig:Object(r.a)(Object(r.a)({proxyOnly:!!this.$route.query.ios,swFile:"../sw.js"},a),{},{segmentId:function(t,e,i,r){return"".concat(e)}})},shaka:{p2pConfig:a},dash:{p2pConfig:a},mp4:{p2pConfig:a}}};this.player=new CBPlayer(n)}},beforeDestroy:function(){this.player&&(this.player.destroy(),this.player=null)}},s=(i(518),i(1)),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"player container"},[t._m(0),t._v(" "),i("fly-box",{attrs:{hide:t.showWarn,color:["rgb(255,255,255)","rgb(30 ,144, 255)"]}},[t.$frontmatter.warnText&&t.showWarn?i("h3",{staticStyle:{color:"red"}},[t._v(t._s(t.$frontmatter.warnText))]):t._e(),t._v(" "),t.showWarn?t._e():i("div",{staticClass:"player-statistics"},[i("div",{staticClass:"statis-item"},[i("span",{staticClass:"item-label"},[i("span",{staticClass:"item-label-data"},[t._v(t._s(t.statis.peers))]),i("br"),t._v(" "),i("span",{staticClass:"item-name peers"},[t._v(t._s(t.$frontmatter.peersText))])])]),t._v(" "),i("div",{staticClass:"statis-item"},[i("span",{staticClass:"item-label"},[i("span",{staticClass:"item-label-data"},[t._v(t._s(t.statis.offload))]),t._v(" MB"),i("br"),t._v(" "),i("span",{staticClass:"item-name offload"},[t._v(t._s(t.$frontmatter.offloadText))])])]),t._v(" "),i("div",{staticClass:"statis-item"},[i("span",{staticClass:"item-label"},[i("span",{staticClass:"item-label-data"},[t._v(t._s(t.statis.ratio))]),t._v(" %"),i("br"),t._v(" "),i("span",{staticClass:"item-name ratio"},[t._v(t._s(t.$frontmatter.ratioText))])])]),t._v(" "),i("div",{staticClass:"statis-item"},[i("span",{staticClass:"item-label"},[i("span",{staticClass:"item-label-data"},[t._v(t._s(t.statis.upload))]),t._v(" MB"),i("br"),t._v(" "),i("span",{staticClass:"item-name upload"},[t._v(t._s(t.$frontmatter.uploadText))])])])]),t._v(" "),i("div",{staticClass:"clear"})])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"player-container"},[e("div",{attrs:{id:"player"}})])}],!1,null,null,null);e.default=o.exports}}]);