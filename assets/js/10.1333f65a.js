(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{302:function(t,s){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(t,s,n){var o=n(24),e="["+n(302)+"]",a=RegExp("^"+e+e+"*"),r=RegExp(e+e+"*$"),c=function(t){return function(s){var n=String(o(s));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},304:function(t,s,n){"use strict";var o=n(1),e=n(303).trim;o({target:"String",proto:!0,forced:n(305)("trim")},{trim:function(){return e(this)}})},305:function(t,s,n){var o=n(2),e=n(302);t.exports=function(t){return o((function(){return!!e[t]()||"​᠎"!="​᠎"[t]()||e[t].name!==t}))}},307:function(t,s,n){"use strict";var o=n(6),e=n(4),a=n(94),r=n(11),c=n(7),i=n(18),l=n(308),d=n(45),f=n(2),u=n(29),v=n(68).f,g=n(25).f,p=n(9).f,m=n(303).trim,C=e.Number,_=C.prototype,h="Number"==i(u(_)),w=function(t){var s,n,o,e,a,r,c,i,l=d(t,!1);if("string"==typeof l&&l.length>2)if(43===(s=(l=m(l)).charCodeAt(0))||45===s){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===s){switch(l.charCodeAt(1)){case 66:case 98:o=2,e=49;break;case 79:case 111:o=8,e=55;break;default:return+l}for(r=(a=l.slice(2)).length,c=0;c<r;c++)if((i=a.charCodeAt(c))<48||i>e)return NaN;return parseInt(a,o)}return+l};if(a("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var b,N=function(t){var s=arguments.length<1?0:t,n=this;return n instanceof N&&(h?f((function(){_.valueOf.call(n)})):"Number"!=i(n))?l(new C(w(s)),n,N):w(s)},y=o?v(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)c(C,b=y[x])&&!c(N,b)&&p(N,b,g(C,b));N.prototype=_,_.constructor=N,r(e,"Number",N)}},308:function(t,s,n){var o=n(5),e=n(95);t.exports=function(t,s,n){var a,r;return e&&"function"==typeof(a=s.constructor)&&a!==n&&o(r=a.prototype)&&r!==n.prototype&&e(t,r),t}},327:function(t,s,n){},328:function(t,s,n){},363:function(t,s,n){"use strict";var o=n(327);n.n(o).a},364:function(t,s,n){"use strict";var o=n(328);n.n(o).a},366:function(t,s,n){},387:function(t,s,n){"use strict";n(92),n(165),n(307),n(93);var o={props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginRight:-t/2+"px",marginLeft:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(s){s.gutter=t.gutter}))}},e=(n(363),n(43)),a=Object(e.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"6503dab3",null);s.a=a.exports},388:function(t,s,n){"use strict";n(168),n(167),n(66),n(307),n(97);var o=n(34),e=function(t){return Object.keys(t).map((function(t){return["span","offset"].includes(t)}))},a={data:function(){return{gutter:0}},props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowPc:{type:Object,validator:e},pc:{type:Object,validator:e},wildPc:{type:Object,validator:e}},computed:{colClass:function(){var t=this.span,s=this.offset,n=this.ipad,e=this.narrowPc,a=this.pc,r=this.wildPc,c=this.createClass;return[].concat(Object(o.a)(c({span:t,offset:s})),Object(o.a)(c(n,"ipad-")),Object(o.a)(c(a,"pc-")),Object(o.a)(c(e,"narrow-pc-")),Object(o.a)(c(r,"wild-pc-")))},colStyle:function(){var t=this.gutter;return{paddingLeft:t/2+"px",paddingRight:t/2+"px"}}},methods:{createClass:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var n=[];return t.span&&n.push("col-".concat(s).concat(t.span)),t.offset&&n.push("offset-".concat(s).concat(t.offset)),n}}},r=(n(364),n(43)),c=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"column",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"1104b01f",null);s.a=c.exports},423:function(t,s,n){"use strict";var o=n(366);n.n(o).a},448:function(t,s,n){"use strict";n.r(s);n(44),n(65),n(304);var o=n(387),e=n(388),a={components:{"g-row":o.a,"g-col":e.a},data:function(){return{content:'\n        * {\n          box-sizing: border-box;\n        }\n         .demoRow{\n  margin: 10px 0;\n}\n.demoCol {\n  height: 50px;\n  border: 1px solid #ccc;\n  background: #eee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n        <g-row class="demoRow" gutter="10">\n          <g-col span="8">\n            <div class="demoCol">8</div>\n          </g-col>\n          <g-col span="8" offset="8">\n            <div class="demoCol">8</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="6" offset="6">\n            <div class="demoCol">6</div>\n          </g-col>\n          <g-col span="6" offset="6">\n            <div class="demoCol">6</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4" offset="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4" offset="8">\n            <div class="demoCol">4</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n        </g-row>\n    '.replace(/^ {8}/gm,"").trim()}}},r=(n(423),n(43)),c=Object(r.a)(a,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("设置offset")]),t._v(" "),t._m(0),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8",offset:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"6",offset:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6",offset:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4",offset:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4",offset:"8"}},[n("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("使用预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])}],!1,null,"552e4fae",null);s.default=c.exports}}]);