(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{161:function(t,e,n){"use strict";var o=n(0),r=n(162),c=n.n(r);o.default.use(c.a),e.a=new c.a({})},199:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("597e02f6",content,!0,{sourceMap:!1})},201:function(t,e,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("4e8213bc",content,!0,{sourceMap:!1})},241:function(t,e,n){"use strict";var o=n(62),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("My blog navigation bar here")]),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},242:function(t,e,n){"use strict";n(283);var o=n(62),r=n(166),c=n.n(r),l=n(333),v=n(334),f=n(335),d=n(337),m=n(338),_=n(336),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{staticClass:"grey lighten-5 mb-6",attrs:{id:"app"}},[n("v-row",{attrs:{id:"nav",justify:"center"}},[n("v-col",[n("NuxtLink",{attrs:{to:"/Home"}},[n("v-card",{staticClass:"pa-2"},[t._v("\n            Home\n          ")])],1)],1),t._v(" "),n("v-col",[n("NuxtLink",{attrs:{to:"/blog/Index"}},[n("v-card",{staticClass:"pa-2",attrs:{tile:""}},[t._v("\n            My Blog\n          ")])],1)],1),t._v(" "),n("v-col",{attrs:{md:"4"}},[n("NuxtLink",{attrs:{to:"/About"}},[n("v-card",{staticClass:"pa-2",attrs:{tile:""}},[t._v("\n            About\n          ")])],1)],1)],1),t._v(" "),n("v-row",[n("v-main",{staticClass:"main-container"},[n("Nuxt")],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:l.a,VCard:v.a,VCol:f.a,VContainer:d.a,VMain:m.a,VRow:_.a})},248:function(t,e,n){n(249),t.exports=n(250)},276:function(t,e,n){t.exports=n.p+"img/IMG_CryingKid.7e7869e.jpg"},277:function(t,e,n){"use strict";n(199)},278:function(t,e,n){var o=n(41)((function(i){return i[1]}));o.push([t.i,".img[data-v-267f1efe]{height:30%;width:30%}",""]),o.locals={},t.exports=o},283:function(t,e,n){"use strict";n(201)},284:function(t,e,n){var o=n(41)((function(i){return i[1]}));o.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#nav{padding:30px;font-size:.3in}#nav a{font-weight:700;color:#2c3e50}#nav a.nuxt-link-exact-active,#nav a.nuxt-link-exact-active div{color:#42b983}.main-container{width:80%;align-content:center}",""]),o.locals={},t.exports=o},321:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"mutations",(function(){return l}));var o=n(0),r=n(80);o.default.use(r.a);var c=function(){return{counter:0,person:{name:"John",age:45}}},l={increment:function(t){t.counter++,t.person.age++,console.log(t.counter),localStorage.setItem("agreedToPrivacy",!0),localStorage.setItem("counter",t.counter),localStorage.setItem("person",JSON.stringify(t.person))},initState:function(t){t.counter=localStorage.getItem("counter");var e=localStorage.getItem("person");console.log(e),t.person=null!=e?JSON.parse(e):t.person,console.log("initState.counter: "+t.counter),console.log("initState.person: "),console.log(t.person)}}},72:function(t,e,n){"use strict";var o={props:["error"],layout:"error"},r=(n(277),n(62)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[404===t.error.statusCode?o("div",[o("h1",[t._v("Page not found")]),t._v(" "),o("img",{staticClass:"img",attrs:{src:n(276)}})]):o("h1",[t._v("An error occurred")]),t._v(" "),o("h1",[t._v("Please go to "),o("NuxtLink",{attrs:{to:"/"}},[t._v("Home Page")])],1)])}),[],!1,null,"267f1efe",null);e.a=component.exports}},[[248,18,3,19]]]);