(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{240:function(t,e,r){var content=r(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("32abb0ec",content,!0,{sourceMap:!1})},241:function(t,e,r){"use strict";r.r(e);r(107),r(52),r(21),r(22),r(12);var l={parseQuestDate:function(t){var e=new Date(t),r=new Date,l=Math.round((r-e)/6e4);if(0==l)if((o=Math.round((r-e)/1e3))<10)var n="baru saja";else if(o<20)n="20 detik";else n="30 detik";else if(1==l){var o;if(30==(o=Math.round((r-e)/1e3)))n="30 detik";else if(o<60)n="< 1 menit";else n="1 menit"}else if(l<45)n=l+" menit";else if(l>44&&l<60)n="< 1 jam";else if(l<1440){var d=Math.round(l/60);if(1==d)n=" 1 jam";else n=d+" jam"}else if(l>1439&&l<2880)n="1 hari";else n=Math.round(l/1440)+" hari";return n}},n={props:["data","bigtext","active","hideBalasan","link","donasi"],data:function(){return{btnFollow:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl shadow-sm text-xs text-theme_secondary",btnFollowed:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl shadow-sm text-xs text-primary",followTemp:!1}},methods:{isLink:function(link){return!!link&&"http"==link.substring(0,4)},followQuest:function(t){var e=this;this.$axios.get("/quest/follow/"+t).then((function(t){e.followTemp=!0}))},parseQuestDate:function(data){return l.parseQuestDate(data)},textToArray:function(text){return text.toString().split(" ")},cekSumber:function(t){return t.search("spotify")>0?"spotify":t.search("youtube")>0?"youtube":void 0},imgPreview:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),r="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t)){var l=t.split("/");r="https://img.youtube.com/vi/".concat(l[4],"/mqdefault.jpg")}else r="";return r}return""}}},o=(r(242),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data.id?r("div",{staticClass:"w-full p-2 relative cursor-pointer border-b border-theme_primary_light overflow-hidden"},[r("div",{staticClass:"shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-2 ",class:t.active?"bg-theme_primary_dark":""},[t.data.group?r("div",[t.data.group.user_id==t.data.user.id?r("span",{staticClass:"bg-primary px-2 rounded-xl  text-xs text-secondary "},[t._v("admin")]):t._e(),t._v(" "),t.data.group_id?r("nuxt-link",{staticClass:"text-primary p-1 px-4 bg-theme_primary_dark rounded-tl-xl rounded-br-xl text-xs",attrs:{to:"/"+t.data.group.username}},[t._v("\n                                                  \n                                              #"+t._s(t.data.group.username)+" \n\n                                              ")]):t._e()],1):t._e(),t._v(" "),t.donasi?t._e():r("div",{staticClass:"flex pt-2"},[r("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.data.user.avatar,alt:"Event 1"}}),t._v(" "),r("nuxt-link",{staticClass:"p-2",attrs:{to:"/@"+t.data.user.username}},[r("span",{staticClass:"font-bold text-md"},[t._v(t._s(t.data.user.name)+"\n                                          ")]),t._v(" "),r("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.data.user.username))])]),t._v(" "),r("span",{staticClass:"text-xs ml-auto text-primary_light flex"},[t._v("\n                                      "+t._s(t.parseQuestDate(t.data.created_at))+"\n                                         "),t.data.user_id==t.$store.state.user.id?r("span",{staticClass:"px-2"},[r("svg",{staticClass:"bi bi-pencil bg-theme_primary_dark p-1 rounded-full",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}})])]):t._e()])],1),t._v(" "),r("div",{staticClass:"w-auto flex "},[r("div",{staticClass:"flex flex-wrap items-start",class:t.donasi?"":"pl-8"},[t.hideBalasan?t._e():r("div",{staticClass:"w-full"},[t.data.quest_id?r("nuxt-link",{staticClass:"p-1 text-sm w-full",attrs:{to:"/quest/"+t.data.quest_id}},[r("nuxt-link",{staticClass:" text-primary rounded-xl",attrs:{to:"/quest/"+t.data.quest_id}},[r("b",[t._v(" @"+t._s(t.data.membalas_user))]),t._v("\n                                                      : \n                                                      "+t._s(t.data.quest.text.substring(0,60))+" ... \n                                                      \n                                                  ")]),t._v(" "),r("span",[t._v(" Membalas :")])],1):t._e()],1),t._v(" "),t.data.embed?r("div",{staticClass:"py-2 w-full media-preview",on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}},["youtube"==t.cekSumber(t.data.embed)?r("div",[r("img",{staticClass:"absolute play-button-youtube",attrs:{src:"/youtube.png",alt:"logo"}}),t._v(" "),r("img",{staticClass:"w-full rounded-xl",attrs:{src:t.imgPreview(t.data.embed),alt:"Preview"}})]):t._e(),t._v(" "),"spotify"==t.cekSumber(t.data.embed)?r("div",{staticClass:"bg-primary justify-beetween text-secondary w-full flex rounded-xl p-3 px-4 h-auto"},[r("svg",{staticClass:"bi bi-play",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"}})]),t._v(" "),r("span",{staticClass:"p-1 px-2 font-bold"},[t._v("Play Podcast")])]):t._e()]):t._e(),t._v(" "),t.data.video||t.data.img?r("div",{staticClass:"w-full media-preview py-2"},[t.data.video?r("img",{staticClass:"absolute play-button-youtube text-primary bg-primary rounded-full p-1",attrs:{src:"/play.svg",alt:"logo"},on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}}):t._e(),t._v(" "),t.data.video?r("img",{staticClass:"w-full rounded-xl",attrs:{src:t.data.thumb},on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}}):r("img",{staticClass:"w-full rounded-xl",attrs:{src:t.data.img},on:{dblclick:function(e){return t.followQuest(t.data.id)}}})]):t._e(),t._v(" "),t.active?r("div",{staticClass:"w-full pb-2  text-theme_secondary"},t._l(t.textToArray(t.data.text),(function(e,i){return r("span",{key:i},["@"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):r("span",[t.link?r("span",[t.isLink(e)?r("a",{staticClass:"text-primary",attrs:{href:e,target:"_BLANK"}},[t._v(t._s(e))]):r("span",[t._v(" "+t._s(e)+" ")])]):r("span",[t._v(" "+t._s(e)+" ")]),t._v(" "),"."==e.slice(e.length-1,e.length)?r("div",{staticClass:"w-full pb-2"}):t._e()])],1)})),0):r("nuxt-link",{staticClass:"w-full pb-2  text-theme_secondary",attrs:{to:"/quest/"+t.data.id}},[t._l(t.textToArray(t.data.text.slice(0,200)),(function(e,i){return r("span",{key:i},["@"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):r("span",[t._v(" \n                                                      \n                                                      "+t._s(e)+"\n                                                       "),"."==e.slice(e.length-1,e.length)?r("div",{staticClass:"w-full pb-2"}):t._e()])],1)})),t._v(" "),t.data.text.length>200?r("span",[t._v("...")]):t._e()],2),t._v(" "),r("div",{staticClass:"flex text-right "},[r("nuxt-link",{staticClass:"text-xs lg:text-lg text-primary ",attrs:{to:"/quest/"+t.data.id}},[t._v("\n                                      "+t._s(t.data.total_qna)+" Balasan\n                                      ")]),t._v(" "),r("div",{staticClass:"flex mx-3"},[t.donasi?t._e():r("button",{staticClass:"flex relative ml-auto py-1 px-5 mx-2 rounded-tl-xl rounded-br-xl text-xs text-primary  shadow-sm",on:{click:function(e){return t.$emit("balas",t.data)}}},[r("svg",{staticClass:"bi bi-plus-circle mt-1 mr-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v("\n                                                  Balas\n                                              ")]),t._v(" "),r("div",{class:t.data.followed||t.followTemp?t.btnFollowed:t.btnFollow,on:{click:function(e){return t.followQuest(t.data.id)}}},[r("svg",{staticClass:"bi bi-heart-fill mr-1 mt-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}})]),t._v(" "),t.data.followed?r("span",[t._v("\n                                                          "+t._s(t.data.total_follower)+"\n                                                      ")]):r("span",[t._v("\n                                                          "+t._s(t.followTemp?parseInt(t.data.total_follower)+1:t.data.total_follower)+"\n                                                      ")]),t._v(" "),t.data.followed?r("span",{staticClass:"px-1"},[t._v("Disukai")]):r("span",[t.followTemp?r("span",{staticClass:"px-1"},[t._v("Disukai")]):r("span",{staticClass:"px-1"},[t._v("Suka")])])])])],1)],1)])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,r){"use strict";var l=r(240);r.n(l).a},243:function(t,e,r){(e=r(65)(!1)).push([t.i,".videoWrapper iframe{width:100%;min-height:100px;border-radius:10px}.play-button-youtube{width:14%;top:40%;left:43%;opacity:.8}.media-preview{position:relative}.media-preview:hover .play-button-youtube{opacity:1}",""]),t.exports=e},265:function(t,e,r){"use strict";r.r(e);var l={layout:"no-header",middleware:"auth",data:function(){return{donations:"",events:""}},mounted:function(){var t=this;this.$axios.get("/donations").then((function(e){t.donations=e.data})),this.$axios.get("/events").then((function(e){t.events=e.data}))}},n=r(8),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full flex flex-wrap relative"},[r("h1",{staticClass:"font-bold text-left text-xl p-2 px-4 w-full"},[t._v("\r\n                Donasi\r\n        ")]),t._v(" "),r("div",{staticClass:"p-2 flex flex-row bg-theme_primary_dark rounded-xl",staticStyle:{"overflow-x":"scroll"}},[t._l(t.donations,(function(t){return r("div",{key:t.id,staticClass:"cursor-pointer w-full relative mx-1  rounded-xl flex items-center justify-center"},[r("card-post",{staticStyle:{"min-width":"320px"},attrs:{donasi:"true",data:t}})],1)})),t._v(" "),t.donations?r("div",{staticClass:"cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center"},[t._v("\r\n                          Lihat Donasi Lainnya \r\n                ")]):r("div",{staticClass:"cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center"},[t._v("\r\n                       Tidak Ada Donasi\r\n                ")])],2),t._v(" "),r("h1",{staticClass:"font-bold text-left text-xl p-2 px-4 w-full"},[t._v("\r\n                Acara\r\n        ")]),t._v(" "),r("div",{staticClass:"p-2 flex flex-row bg-theme_primary_dark rounded-xl",staticStyle:{"overflow-x":"scroll"}},[t._l(t.events,(function(t){return r("div",{key:t.id,staticClass:"cursor-pointer w-full relative mx-1  rounded-xl flex items-center justify-center"},[r("card-post",{staticStyle:{"min-width":"320px"},attrs:{donasi:"true",data:t}})],1)})),t._v(" "),t.events?r("div",{staticClass:"cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center"},[t._v("\r\n                          Lihat Acara Lainnya \r\n                ")]):r("div",{staticClass:"cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center"},[t._v("\r\n                       Tidak Ada Acara\r\n                ")])],2),t._v(" "),r("h1",{staticClass:"font-bold text-left text-xl p-2 px-4 w-full"},[t._v("\r\n               Loker\r\n        ")]),t._v(" "),r("div",{staticClass:"p-2 flex flex-row bg-theme_primary_dark rounded-xl",staticStyle:{"overflow-x":"scroll"}},[t._l(t.donations,(function(t){return r("div",{key:t.id,staticClass:"cursor-pointer w-full relative mx-1  rounded-xl flex items-center justify-center"},[r("card-post",{staticStyle:{"min-width":"320px"},attrs:{donasi:"true",data:t}})],1)})),t._v(" "),t.events?r("div",{staticClass:"cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center"},[t._v("\r\n                          Lihat Loker Lainnya \r\n                ")]):r("div",{staticClass:"cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center"},[t._v("\r\n                       Tidak Ada Loker\r\n                ")])],2),t._v(" "),r("h1",{staticClass:"font-bold text-left text-xl p-2 px-4 w-full"},[t._v("\r\n              Cari Teman\r\n        ")]),t._v(" "),r("div",{staticClass:"p-2 flex flex-row bg-theme_primary_dark rounded-xl",staticStyle:{"overflow-x":"scroll"}},[t._l(t.events,(function(t){return r("div",{key:t.id,staticClass:"cursor-pointer w-full relative mx-1  rounded-xl flex items-center justify-center"},[r("card-post",{staticStyle:{"min-width":"320px"},attrs:{donasi:"true",data:t}})],1)})),t._v(" "),r("div",{staticClass:"cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center"},[t._v("\r\n                          Lihat Saran Lainnya \r\n                ")])],2),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"w-full mb-20 pb-20 "},[e("ul",[e("li",{staticClass:"w-full flex flex-wrap relative justify-center"},[e("a",{staticClass:"text-center mt-4 w-full font-bold p-2 px-6 rounded-full bg-theme_primary_dark text-primary",attrs:{target:"_BLANK",href:"https://trello.com/b/cEeYmDi1/aplikasi-maba"}},[this._v("\r\n\r\n                                Pengembangan Aplikasi\r\n                        ")]),this._v(" "),e("a",{staticClass:"text-center mt-4 w-full font-bold p-2 px-6 rounded-full bg-primary text-secondary",attrs:{target:"_BLANK",href:"https://saweria.co/akew"}},[this._v("\r\n                        Dukung Kami :)\r\n                        ")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CardPost:r(241).default})}}]);