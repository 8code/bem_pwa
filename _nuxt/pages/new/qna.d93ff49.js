(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{223:function(e,t,l){"use strict";l.r(t);var n=l(2),r=l(208),o=l.n(r);l(209);n.a.use(o.a);var d={layout:"app",middleware:"auth",data:function(){return{logo:{},d:{logo:"",name:"",phone:"",email:"",desc:""}}},methods:{onInit:function(){this.logo.addClipPlugin((function(e,t,l,n,r){e.beginPath(),e.arc(t+n/2,l+r/2,n/2,0,2*Math.PI,!0),e.closePath()}))}}},m=l(12),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"w-full"},[l("section",{staticClass:"w-full neu-in rounded-xl"},[l("div",{staticClass:"neu-out rounded-xl p-5 py-8"},[l("div",{staticClass:"flex flex-wrap"},[l("div",{staticClass:"w-full lg:w-1/2 px-5 flex flex-wrap"},[l("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"nama"}},[e._v("Logo")]),e._v(" "),l("croppa",{staticClass:"mx-auto neu-in rounded-full",attrs:{width:150,"prevent-white-space":"",height:150},on:{init:e.onInit},model:{value:e.logo,callback:function(t){e.logo=t},expression:"logo"}}),e._v(" "),l("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"nama"}},[e._v("Name")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.d.name,expression:"d.name"}],staticClass:"w-full\r\n                        \r\n                      neu-in bg-theme_primary_light\r\n                      py-2 px-4 \r\n                      rounded-full mb-3\r\n                      ",attrs:{type:"text",placeholder:"Name"},domProps:{value:e.d.name},on:{input:function(t){t.target.composing||e.$set(e.d,"name",t.target.value)}}})],1),e._v(" "),l("div",{staticClass:"w-full lg:w-1/2 px-5 flex flex-wrap"},[l("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"no_hp"}},[e._v("Phone Number / WA")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.d.phone,expression:"d.phone"}],staticClass:"w-full\r\n                            \r\n                          neu-in bg-theme_primary_light\r\n                          py-2 px-4 \r\n                          rounded-full mb-3\r\n                          ",attrs:{type:"text",placeholder:"No Hp"},domProps:{value:e.d.phone},on:{input:function(t){t.target.composing||e.$set(e.d,"phone",t.target.value)}}}),e._v(" "),l("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"email"}},[e._v("Email")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.d.email,expression:"d.email"}],staticClass:"w-full\r\n                            \r\n                          neu-in bg-theme_primary_light\r\n                          py-2 px-4 \r\n                          rounded-full mb-3\r\n                          ",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.d.email},on:{input:function(t){t.target.composing||e.$set(e.d,"email",t.target.value)}}}),e._v(" "),l("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"email"}},[e._v("Descriptions")]),e._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.d.desc,expression:"d.desc"}],staticClass:"w-full\r\n                            \r\n                          neu-in bg-theme_primary_light\r\n                          py-2 px-4 \r\n                          rounded-full mb-3\r\n                          ",attrs:{placeholder:"Descriptions"},domProps:{value:e.d.desc},on:{input:function(t){t.target.composing||e.$set(e.d,"desc",t.target.value)}}}),e._v(" "),l("button",{staticClass:"w-full  py-2 px-4 bg-primary_dark hover:opacity-75 rounded-full mt-5",on:{click:function(t){e.form=!0}}},[l("i",{staticClass:"fa fa-plus"}),e._v("\r\n                          Register\r\n                      ")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);