(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{302:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(t,n,e){var r=e(24),u="["+e(302)+"]",a=RegExp("^"+u+u+"*"),i=RegExp(u+u+"*$"),c=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(a,"")),2&t&&(e=e.replace(i,"")),e}};t.exports={start:c(1),end:c(2),trim:c(3)}},304:function(t,n,e){"use strict";var r=e(1),u=e(303).trim;r({target:"String",proto:!0,forced:e(305)("trim")},{trim:function(){return u(this)}})},305:function(t,n,e){var r=e(2),u=e(302);t.exports=function(t){return r((function(){return!!u[t]()||"​᠎"!="​᠎"[t]()||u[t].name!==t}))}},310:function(t,n,e){},311:function(t,n,e){"use strict";var r=e(312),u=e.n(r);n.default=u.a},312:function(t,n){},313:function(t,n,e){"use strict";var r=e(314),u=e.n(r);n.default=u.a},314:function(t,n){},315:function(t,n,e){"use strict";var r=e(316),u=e.n(r);n.default=u.a},316:function(t,n){},317:function(t,n,e){},318:function(t,n,e){},331:function(t,n,e){"use strict";var r=e(310);e.n(r).a},332:function(t,n,e){"use strict";var r=e(339),u=e(311),a=e(43),i=Object(a.a)(u.default,r.a,r.b,!1,null,"e1072dd2",null);n.default=i.exports},333:function(t,n,e){"use strict";var r=e(340),u=e(313),a=e(43),i=Object(a.a)(u.default,r.a,r.b,!1,null,"456f0d9a",null);n.default=i.exports},334:function(t,n,e){"use strict";var r=e(341),u=e(315),a=(e(335),e(43)),i=Object(a.a)(u.default,r.a,r.b,!1,null,"4d1c43eb",null);n.default=i.exports},335:function(t,n,e){"use strict";var r=e(317);e.n(r).a},336:function(t,n,e){"use strict";var r=e(318);e.n(r).a},337:function(t,n,e){"use strict";e(92),e(67),e(93);var r={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(n){"GuluSider"===n.$options.name&&(t.layoutClass.hasSider=!0)}))}},u=(e(331),e(43)),a=Object(u.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"2740a594",null);n.a=a.exports},338:function(t,n,e){"use strict";var r={name:"GuluSider",data:function(){return{visible:!0}},methods:{}},u=(e(336),e(43)),a=Object(u.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"slide"}},[t.visible?e("div",{staticClass:"sider"},[t._t("default"),t._v(" "),e("button",{on:{click:function(n){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"ac7d5d3a",null);n.a=a.exports},339:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return u}));var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},u=[]},340:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return u}));var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},u=[]},341:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return u}));var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)},u=[]},368:function(t,n,e){},424:function(t,n,e){"use strict";var r=e(368);e.n(r).a},451:function(t,n,e){"use strict";e.r(n);e(44),e(65),e(304);var r=e(337),u=e(332),a=e(333),i=e(334),c=e(338),s={components:{"g-layout":r.a,"g-header":u.default,"g-footer":a.default,"g-content":i.default,"g-sider":c.a},data:function(){return{content:'\n        <g-layout style="color: white; margin-bottom:50px;">\n          <g-header style="height: 50px; background:lightskyblue;">\n            header\n          </g-header>\n          <g-content style="height: 100px; background:deepskyblue;">\n            content\n          </g-content>\n          <g-footer style="height: 50px; background:lightskyblue;">\n            footer\n          </g-footer>\n        </g-layout>\n    '.replace(/^ {8}/gm,"").trim()}}},o=(e(424),e(43)),l=Object(o.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),e("g-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[e("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),e("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n      content\n    ")]),t._v(" "),e("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("使用预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"4e1a6fa0",null);n.default=l.exports}}]);