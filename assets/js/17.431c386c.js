(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{506:function(t,s,e){},556:function(t,s,e){"use strict";e(506)},581:function(t,s,e){"use strict";e.r(s);var a={components:{},data:function(){return{downloads:0}},computed:{features:function(){return this.$frontmatter.features},advantages:function(){return this.$frontmatter.advantages},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}},customers:function(){return this.$frontmatter.customers}},created:function(){},mounted:function(){},methods:{openNew:function(t){"string"==typeof t?open(t):open(location.href)}}},n=(e(556),e(1)),r=Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.$frontmatter.root?t._e():e("article",{staticClass:"home-page-one-wrapper"},[e("section",{staticClass:"description"},[e("Demo"),t._v(" "),e("div",{staticClass:"action-button",on:{click:t.openNew}},[t._v(t._s(t.$frontmatter.actionText))])],1),t._v(" "),null!==t.$frontmatter.featureText?e("h1",{staticClass:"customerText"},[t._v("\n        "+t._s(t.$frontmatter.featureText)+"\n    ")]):t._e(),t._v(" "),t.features&&t.features.length?e("div",{staticClass:"features"},t._l(t.features,(function(s,a){return e("div",{key:a,staticClass:"feature"},[e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.details))])])})),0):t._e(),t._v(" "),null!==t.$frontmatter.advantageText?e("h1",{staticClass:"customerText"},[t._v("\n        "+t._s(t.$frontmatter.advantageText)+"\n    ")]):t._e(),t._v(" "),t.advantages&&t.advantages.length?e("div",{staticClass:"features"},t._l(t.advantages,(function(s,a){return e("div",{key:a,staticClass:"feature"},[e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.details))])])})),0):t._e(),t._v(" "),null!==t.$frontmatter.customerText?e("h1",{staticClass:"customerText"},[t._v("\n        "+t._s(t.$frontmatter.customerText)+"\n    ")]):t._e(),t._v(" "),!1===t.$frontmatter.showCustomerDetails?e("div",{staticClass:"customers"},t._l(t.customers,(function(s,a){return e("div",{key:a,staticClass:"customer",on:{click:function(e){return t.openNew(s.link)}}},[e("img",{attrs:{src:s.image,alt:""}})])})),0):e("div",[t.customers[0]?e("section",{staticClass:"wish yesterday"},[e("div",{staticClass:"wish-inner"},[e("div",{staticClass:"img-wrapper",on:{click:function(s){return t.openNew(t.customers[0].link)}}},[e("img",{attrs:{src:t.customers[0].image,alt:""}})]),t._v(" "),e("div",{staticClass:"text-wrapper"},[e("h1",[t._v(t._s(t.customers[0].title))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.customers[0].details))])])])]):t._e(),t._v(" "),t.customers[1]?e("section",{staticClass:"wish today"},[e("div",{staticClass:"wish-inner"},[e("div",{staticClass:"text-wrapper"},[e("h1",[t._v(t._s(t.customers[1].title))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.customers[1].details))])]),t._v(" "),e("div",{staticClass:"img-wrapper",on:{click:function(s){return t.openNew(t.customers[1].link)}}},[e("img",{attrs:{src:t.customers[1].image,alt:""}})])])]):t._e(),t._v(" "),t.customers[2]?e("section",{staticClass:"wish tomorrow"},[e("div",{staticClass:"wish-inner"},[e("div",{staticClass:"img-wrapper",on:{click:function(s){return t.openNew(t.customers[2].link)}}},[e("img",{attrs:{src:t.customers[2].image,alt:""}})]),t._v(" "),e("div",{staticClass:"text-wrapper"},[e("h1",[t._v(t._s(t.customers[2].title))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.customers[2].details))])])])]):t._e(),t._v(" "),e("section",{staticClass:"md-content-wrapper"},[e("Content")],1)]),t._v(" "),null!==t.$frontmatter.slogan?e("h1",{staticClass:"slogan"},[t._v("\n      "+t._s(t.$frontmatter.slogan)+"\n    ")]):t._e(),t._v(" "),e("section",{staticClass:"description"},[e("router-link",{staticClass:"action-button",attrs:{to:t.$frontmatter.docsLink}},[t._v(t._s(t.$frontmatter.docsText))])],1)])}),[],!1,null,"392dd581",null);s.default=r.exports}}]);