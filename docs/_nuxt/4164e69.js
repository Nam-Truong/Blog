(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{343:function(t,e,r){var content=r(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("7132a15d",content,!0,{sourceMap:!1})},344:function(t,e,r){var n=r(41)((function(i){return i[1]}));n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),n.locals={},t.exports=n},355:function(t,e,r){var content=r(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("cdd59a04",content,!0,{sourceMap:!1})},372:function(t,e,r){"use strict";r(12),r(10),r(15),r(20),r(14),r(21);var n=r(2),o=(r(343),r(82));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},388:function(t,e,r){"use strict";r(355)},389:function(t,e,r){var n=r(41)((function(i){return i[1]}));n.push([t.i,".img{height:40px;width:20px}",""]),n.locals={},t.exports=n},421:function(t,e,r){"use strict";r.r(e);r(74);var n=r(16),o=r(19),c=r(40),l=r(39),v=r(29),d=r(17),h=(r(14),r(163),r(81),r(341)),f=r(340);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(v.a)(this,r)}}var y=function(t){Object(l.a)(d,t);var e,r,v=m(d);function d(){return Object(o.a)(this,d),v.apply(this,arguments)}return Object(c.a)(d,[{key:"mounted",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.title="Nam-Truong Blog | Blog Posts";case 1:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})},{key:"asyncData",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,n=e.params,t.next=3,r("articles",n.slug).only(["title","description","img","slug","author","createdAt"]).sortBy("createdAt","desc").fetch();case 3:return o=t.sent,t.next=6,r("authors").only(["details","slug"]).fetch();case 6:return c=t.sent,o.forEach((function(article){var t=c.find((function(t){return t.slug===article.author}));article.author=t?t.details:article.author})),t.abrupt("return",{articles:o});case 9:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}]),d}(f.Vue),x=y=Object(h.a)([Object(f.Component)({components:{}})],y),O=(r(388),r(62)),w=r(166),j=r.n(w),_=r(335),k=r(337),P=r(372),R=r(336),component=Object(O.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("br"),t._v(" "),r("NuxtLink",{attrs:{to:"/blog/ArticlesSearch"}},[t._v("Search blog posts")])],1),t._v(" "),r("v-row",{staticStyle:{height:"20px"}}),t._v(" "),r("v-row",{staticStyle:{height:"20px"}},[r("v-divider")],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-container",t._l(t.articles,(function(article){return r("v-row",{key:article.slug,attrs:{justify:"center"}},[r("v-col",{attrs:{md:"2"}},[t._v(t._s(article.createdAt))]),t._v(" "),r("v-col",{attrs:{md:"1"}},[r("img",{staticClass:"img",attrs:{src:article.img}})]),t._v(" "),r("v-col",{attrs:{md:"5"}},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("h2",[t._v(t._s(article.title))])]),t._v("\n          by "+t._s(article.author.name)+"\n        ")],1),t._v(" "),r("v-col",{attrs:{md:"4"}},[t._v("\n          "+t._s(article.description)+"\n        ")])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{VCol:_.a,VContainer:k.a,VDivider:P.a,VRow:R.a})}}]);