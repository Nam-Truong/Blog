(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{358:function(e,t,r){"use strict";r.r(t);var n=r(16),c=(r(81),r(22),r(165),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=3;break}return t.articles=[],r.abrupt("return");case 3:return r.next=5,t.$content("articles").limit(6).search(e).fetch();case 5:t.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),l=r(62),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._v(" "),e.articles.length?r("ul",e._l(e.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[e._v("\n        "+e._s(article.title)+"\n      ")])],1)})),0):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);