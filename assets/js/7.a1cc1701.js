(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{302:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(t,n,e){var r=e(24),i="["+e(302)+"]",u=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),o=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(a,"")),e}};t.exports={start:o(1),end:o(2),trim:o(3)}},304:function(t,n,e){"use strict";var r=e(1),i=e(303).trim;r({target:"String",proto:!0,forced:e(305)("trim")},{trim:function(){return i(this)}})},305:function(t,n,e){var r=e(2),i=e(302);t.exports=function(t){return r((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},310:function(t,n,e){},311:function(t,n,e){"use strict";var r=e(312),i=e.n(r);n.default=i.a},312:function(t,n){},313:function(t,n,e){"use strict";var r=e(314),i=e.n(r);n.default=i.a},314:function(t,n){},315:function(t,n,e){"use strict";var r=e(316),i=e.n(r);n.default=i.a},316:function(t,n){},317:function(t,n,e){},318:function(t,n,e){},331:function(t,n,e){"use strict";var r=e(310);e.n(r).a},332:function(t,n,e){"use strict";var r=e(339),i=e(311),u=e(43),a=Object(u.a)(i.default,r.a,r.b,!1,null,"e1072dd2",null);n.default=a.exports},333:function(t,n,e){"use strict";var r=e(340),i=e(313),u=e(43),a=Object(u.a)(i.default,r.a,r.b,!1,null,"456f0d9a",null);n.default=a.exports},334:function(t,n,e){"use strict";var r=e(341),i=e(315),u=(e(335),e(43)),a=Object(u.a)(i.default,r.a,r.b,!1,null,"4d1c43eb",null);n.default=a.exports},335:function(t,n,e){"use strict";var r=e(317);e.n(r).a},336:function(t,n,e){"use strict";var r=e(318);e.n(r).a},337:function(t,n,e){"use strict";e(92),e(67),e(93);var r={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(n){"GuluSider"===n.$options.name&&(t.layoutClass.hasSider=!0)}))}},i=(e(331),e(43)),u=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"2740a594",null);n.a=u.exports},338:function(t,n,e){"use strict";var r={name:"GuluSider",data:function(){return{visible:!0}},methods:{}},i=(e(336),e(43)),u=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"slide"}},[t.visible?e("div",{staticClass:"sider"},[t._t("default"),t._v(" "),e("button",{on:{click:function(n){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"ac7d5d3a",null);n.a=u.exports},339:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},i=[]},340:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},i=[]},341:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)},i=[]},370:function(t,n,e){},426:function(t,n,e){"use strict";var r=e(370);e.n(r).a},453:function(t,n,e){"use strict";e.r(n);e(44),e(65),e(304);var r=e(337),i=e(332),u=e(333),a=e(334),o=e(338),c={components:{"g-layout":r.a,"g-header":i.default,"g-footer":u.default,"g-content":a.default,"g-sider":o.a},data:function(){return{content:'\n        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">\n          <g-sider style=" background:#ddd; width:200px; color: black;">\n            sider\n          </g-sider>\n          <g-layout>\n            <g-header style="height: 50px; background:lightskyblue;">\n              header\n            </g-header>\n            <g-content style="height: 100px; background:deepskyblue;">\n              content\n            </g-content>\n            <g-footer style="height: 50px; background:lightskyblue;">\n              footer\n            </g-footer>\n          </g-layout>\n        </g-layout>\n    '.replace(/^ {8}/gm,"").trim()}}},s=(e(426),e(43)),l=Object(s.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),e("g-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[e("g-sider",{staticStyle:{background:"#ddd",width:"200px",color:"black"}},[t._v("\n      sider\n    ")]),t._v(" "),e("g-layout",[e("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n        header\n      ")]),t._v(" "),e("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n        content\n      ")]),t._v(" "),e("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n        footer\n      ")])],1)],1),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("使用预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"0267f65e",null);n.default=l.exports}}]);