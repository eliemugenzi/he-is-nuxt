(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1021:function(t,e,n){var content=n(1048);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(131).default)("0fd9de44",content,!0,{sourceMap:!1})},1047:function(t,e,n){"use strict";var o=n(1021);n.n(o).a},1048:function(t,e,n){(e=n(130)(!1)).push([t.i,".single-joke[data-v-5288540c]{margin-top:20px}",""]),t.exports=e},1051:function(t,e,n){"use strict";n.r(e);n(128);var o=n(45),c=n(1022),r=n.n(c),l={created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,r.a.get("https://icanhazdadjoke.com/j/".concat(t.$route.params.id),n);case 4:o=e.sent,data=o.data,t.joke=data.joke,t.fetched=!0,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},data:function(){return{joke:null,fetched:!1}},head:function(){return{title:this.fetched?this.joke:"A single joke"}}},h=(n(1047),n(81)),component=Object(h.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"joke"},[e("nuxt-link",{attrs:{to:"/jokes"}},[this._v("Back to Jokes")]),this._v(" "),this.fetched?e("p",{staticClass:"single-joke"},[this._v(this._s(this.joke))]):e("p",[this._v("Fetching...")])],1)}),[],!1,null,"5288540c",null);e.default=component.exports}}]);