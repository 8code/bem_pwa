(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{768:function(t,e,r){"use strict";r.r(e);r(21),r(14);var n=r(3),l=r(2),o=r(336),d=r.n(o);r(337);l.default.use(d.a);var c={layout:"no-header",middleware:"auth",data:function(){return{avatar:{},d:{username:"",avatar:"",name:"",desc:"-",type:"UKM"}}},methods:{onInit:function(){this.avatar.addClipPlugin((function(t,e,r,n,l){t.beginPath(),t.arc(e+n/2,r+l/2,n/2,0,2*Math.PI,!0),t.closePath()}))},save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t.d.name||""==t.d.desc||""==t.d.type){e.next=7;break}if(t.d.avatar=t.avatar.generateDataUrl("image/jpeg",.8),!t.d.avatar){e.next=7;break}return e.next=5,t.$store.commit("createGroup",t.d);case 5:return e.next=7,t.$router.push(t.localePath("/groups"));case 7:case"end":return e.stop()}}),e)})))()}}},m=r(13),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full bg-theme_primary"},[r("section",{staticClass:"w-full shadow-sm rounded-xl mb-20"},[r("div",{staticClass:"shadow-sm rounded-xl px-5 pb-5"},[r("div",{staticClass:"flex flex-wrap"},[r("div",{staticClass:"w-full  px-5 flex flex-wrap"},[r("label",{staticClass:" pl-2 w-full my-3 flex",attrs:{for:"nama"}},[t._v("avatar")]),t._v(" "),r("div",{staticClass:"w-full my-3 flex content-center justify-center items-center"},[r("croppa",{staticClass:"shadow-sm rounded-lg",attrs:{width:150,"prevent-white-space":"",height:150,placeholder:"50x50px",quality:1},on:{init:t.onInit},model:{value:t.avatar,callback:function(e){t.avatar=e},expression:"avatar"}})],1),t._v(" "),r("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"usernama"}},[t._v("Username / TagName")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.d.username,expression:"d.username"}],staticClass:"w-full\r\n                      shadow-sm bg-theme_primary_light\r\n                      py-2 px-4 \r\n                      rounded-lg mb-3\r\n                      ",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.d.username},on:{input:function(e){e.target.composing||t.$set(t.d,"username",e.target.value)}}}),t._v(" "),r("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"nama"}},[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.d.name,expression:"d.name"}],staticClass:"w-full\r\n                      shadow-sm bg-theme_primary_light\r\n                      py-2 px-4 \r\n                      rounded-lg mb-3\r\n                      ",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.d.name},on:{input:function(e){e.target.composing||t.$set(t.d,"name",e.target.value)}}}),t._v(" "),r("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"type"}},[t._v("Type")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.d.type,expression:"d.type"}],staticClass:"w-full\r\n                      shadow-sm bg-theme_primary_light\r\n                      py-2 px-4 \r\n                      rounded-lg mb-3\r\n                      ",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.d,"type",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"Ormawa"}},[t._v("Ormawa")]),t._v(" "),r("option",{attrs:{value:"UKM"}},[t._v("UKM")]),t._v(" "),r("option",{attrs:{value:"StartUp"}},[t._v("StartUp")]),t._v(" "),r("option",{attrs:{value:"Komunitas"}},[t._v("Komunitas")]),t._v(" "),r("option",{attrs:{value:"Acara"}},[t._v("Acara")]),t._v(" "),r("option",{attrs:{value:"Lainnya"}},[t._v("Lainnya")])]),t._v(" "),r("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"email"}},[t._v("Descriptions")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.d.desc,expression:"d.desc"}],staticClass:"w-full\r\n                          shadow-sm bg-theme_primary_light\r\n                          py-2 px-4 \r\n                          rounded-lg mb-3\r\n                          ",attrs:{placeholder:"Descriptions"},domProps:{value:t.d.desc},on:{input:function(e){e.target.composing||t.$set(t.d,"desc",e.target.value)}}}),t._v(" "),r("button",{staticClass:"w-full  py-2 px-4 bg-primary_dark text-white hover:opacity-75 rounded-lg mt-5",on:{click:t.save}},[r("i",{staticClass:"fa fa-plus"}),t._v("\r\n                          Buat Group\r\n                      ")]),t._v(" "),r("nuxt-link",{staticClass:"w-full text-center py-2 px-4 bg-theme_primary_light hover:opacity-75 rounded-lg mt-5",attrs:{to:t.localePath("/groups")}},[r("i",{staticClass:"fa fa-plus"}),t._v("\r\n                          Batal\r\n                      ")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);