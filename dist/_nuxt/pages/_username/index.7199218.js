(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{210:function(t,e,r){"use strict";r.r(e);var l={props:["link","name"]},n=r(12),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$store.state.topMenu?"":"hidden"},[r("router-link",{staticClass:"bg-primary text-secondary p-2 px-3 right-0 rounded-xl fixed bottom-0 mr-5 z-50 mb-16 lg:mr-20 flex  ",attrs:{to:t.link}},[r("svg",{staticClass:"bi bi-plus-circle",attrs:{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v(" "),r("span",{staticClass:"hidden lg:block px-2"},[t._v(" "+t._s(t.name))])])],1)}),[],!1,null,null,null);e.default=component.exports},212:function(t,e,r){"use strict";r.r(e);r(58),r(24),r(25),r(13);var l={parseQuestDate:function(t){var e=new Date(t),r=new Date,l=Math.round((r-e)/6e4);if(0==l)if((o=Math.round((r-e)/1e3))<10)var n="baru saja";else if(o<20)n="20 detik";else n="30 detik";else if(1==l){var o;if(30==(o=Math.round((r-e)/1e3)))n="30 detik";else if(o<60)n="< 1 menit";else n="1 menit"}else if(l<45)n=l+" menit";else if(l>44&&l<60)n="< 1 jam";else if(l<1440){var d=Math.round(l/60);if(1==d)n=" 1 jam";else n=d+" jam"}else if(l>1439&&l<2880)n="1 hari";else n=Math.round(l/1440)+" hari";return n}},n={props:["data"],data:function(){return{btnFollow:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary",btnFollowed:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl bg-primary text-xs text-secondary"}},methods:{parseQuestDate:function(data){return l.parseQuestDate(data)},textToArray:function(text){return text.toString().split(" ")}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full p-2 relative cursor-pointer"},[r("div",{staticClass:"shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-3 "},[t.data.group_id&&!t.data.quest_id?r("router-link",{staticClass:"p-1 px-4 bg-theme_primary_dark rounded-xl text-xs",attrs:{to:t.data.group.username}},[t._v("\n                                      \n                                     #"+t._s(t.data.group.username)+"\n\n                                  ")]):t._e(),t._v(" "),t.data.quest_id?r("router-link",{staticClass:"p-1 px-4 bg-theme_primary_dark rounded-xl  text-xs",attrs:{to:t.data.group.username}},[t._v("\n                             \n                                     Membalas @"+t._s(t.data.quest.text)+"\n                                \n                                  ")]):t._e(),t._v(" "),r("span",{staticClass:"text-xs"},[t._v("\n                                    "+t._s(t.parseQuestDate(t.data.created_at))+"\n                                  ")]),t._v(" "),r("div",{staticClass:"w-auto flex p-2 "},[r("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:"/icon.png",alt:"Event 1"}}),t._v(" "),r("div",{staticClass:"pl-5 flex flex-wrap items-start"},[r("router-link",{staticClass:"font-bold",attrs:{to:"/@"+t.data.user.username}},[t._v("\n                                              @"+t._s(t.data.user.username)+"\n                                          ")]),t._v(" "),r("span",{staticClass:"w-full  mb-2"},t._l(t.textToArray(t.data.text),(function(e,i){return r("span",{key:i},["@"==e.slice(0,1)?r("router-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?r("router-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):r("span",[t._v(" "+t._s(e)+" ")])],1)})),0),t._v(" "),r("div",{staticClass:"text-xs lg:text-lg text-primary "},[t._v("\n                                  "+t._s(t.data.qna_total)+" Balasan\n                                  ")]),t._v(" "),r("div",{staticClass:"flex mx-3"},[r("router-link",{staticClass:"flex relative ml-auto py-1 px-5 mx-2 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary",attrs:{to:"/explore?event"}},[r("svg",{staticClass:"bi bi-plus-circle mt-1 mr-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v("\n                                          Balas\n                                      ")]),t._v(" "),r("div",{class:t.data.followed?t.btnFollowed:t.btnFollow},[r("svg",{staticClass:"bi bi-heart-fill mr-1 mt-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}})]),t._v("\n                                              "+t._s(t.data.total_follower)+"\n                                              "),t.data.followed?r("span",{staticClass:"px-1"},[t._v("Diikuti")]):r("span",{staticClass:"px-1"},[t._v("Ikuti")])])],1)],1)])],1)])}),[],!1,null,null,null);e.default=component.exports},225:function(t,e,r){"use strict";r.r(e);var l={layout:"app",middleware:"auth",data:function(){return{filterClassActive:"cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",filterClass:"cursor-pointer relative mx-1 px-6 bg-theme_primary rounded-xl flex text-sm items-center justify-center p-2",group:"",quest:"",search:"",filter:"Quest Only"}},fetch:function(){var t=this;this.$axios.$get("/group/"+this.$route.params.username).then((function(data){t.group=data,t.getData()}))},methods:{getData:function(){var t=this;this.$axios.$get("/quest/"+this.group.id+"?filter="+this.filter).then((function(data){console.log(data),t.quest=data}))}}},n=r(12),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.group?r("div",{staticClass:"w-full"},[r("section",[r("div",{staticClass:"w-full flex flex-wrap bg-theme_primary p-2 pt-6 rounded-xl "},[r("div",{staticClass:"w-full font-bold flex px-2 "},[r("img",{staticClass:"w-16 h-16  rounded-full",attrs:{src:t.group.avatar,alt:t.group.name}}),t._v(" "),r("div",{staticClass:"w-full pl-5 mt-1 flex flex-wrap items-start "},[r("div",{staticClass:"w-full text-xl lg:text-2xl mb-2"},[t._v("\n            "+t._s(t.group.name)+"\n            "),r("br"),t._v(" "),r("small",[t._v("#"+t._s(t.group.username))])])])])])]),t._v(" "),r("div",{staticClass:"p-2 flex flex-row mt-2",staticStyle:{"overflow-x":"scroll"}},[r("div",{class:"Quest Only"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Quest Only",t.getData()}}},[r("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Quest Saja\n    ")]),t._v(" "),r("div",{class:"Quest & Balasan"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Quest & Balasan",t.getData()}}},[r("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Quest & Balasan\n    ")])]),t._v(" "),r("div",{staticClass:"p-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full py-2 px-5 rounded-full bg-theme_primary hover:bg-theme_primary_dark",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getData(e)},input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),r("btn-create",{attrs:{link:"/new/quest/"+t.group.username,name:"Buat Quest"}}),t._v(" "),r("section",{staticClass:"w-full rounded-xl pb-20 "},t._l(t.quest.data,(function(t){return r("card-post",{key:t.id,attrs:{data:t}})})),1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BtnCreate:r(210).default,CardPost:r(212).default})}}]);