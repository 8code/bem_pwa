(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{244:function(t,e,n){var o=n(6),l=n(156)(!1);o(o.S,"Object",{values:function(t){return l(t)}})},270:function(t,e,n){"use strict";n.r(e);n(23),n(244),n(52),n(21),n(22),n(12);var o={layout:"no-header",middleware:"auth",data:function(){return{notif:"",page:1,loadMore:!1,last_page:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&(t.last_page?this.loadMore=!1:t.loadMoregetData())}))},methods:{textToArray:function(text){return text.toString().split(" ")},loadMoregetData:function(){var t=this;this.loadMore=!0,this.page=this.page+1,this.$axios.get("/notifications?page="+this.page).then((function(e){if(e.data.length>0){var n=Object.values(t.notif);t.notif=n.concat(e.data)}else t.last_page=!0;t.loadMore=!1}))},getData:function(){var t=this;this.$axios.get("/notifications?page="+this.page).then((function(e){t.notif=e.data}))}},created:function(){this.page=1,this.getData()}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"w-full pb-10 px-4"},[n("h1",{staticClass:"text-2xl font-semibold p-2 mb-3 flex"},[t._v(t._s(t.$t("Notif"))+"\r\n\r\n                  "),n("button",{staticClass:"ml-auto font-semibold"},[t._v("\r\n                        pesan\r\n                ")])]),t._v(" "),t._l(t.notif,(function(e,o){return n("div",{key:o,staticClass:"w-full flex flex-wrap border-b border-theme_primary_light rounded-lg\r\n        hover:bg-theme_primary_light\r\n         my-2"},[n("nuxt-link",{staticClass:"w-full mb-1  rounded-lg flex flex-wrap",attrs:{to:e.link}},[n("img",{staticClass:" float-left rounded-xl h-8 w-8 -mt-1",attrs:{src:e.avatar,alt:"Avatar"}}),t._v(" "),n("span",{staticClass:" float-left  pl-1"},[n("nuxt-link",{staticClass:"text-primary",attrs:{to:"/@"+e.username}},[t._v("@"+t._s(e.username))]),t._v(" "),1==e.tipe?n("span",[e.total>1?n("span",[t._v("dan "+t._s(e.total)+" lainnya")]):t._e(),t._v(" menyukai quest anda")]):t._e(),t._v(" "),2==e.tipe?n("span",[t._v(" membalas quest anda")]):t._e(),t._v(" "),3==e.tipe?n("span",[t._v(" menandai anda di sebuah quest")]):t._e(),t._v(" "),6==e.tipe?n("span",[t._v(" mengikuti Anda")]):t._e(),t._v("\r\n                        :\r\n                ")],1),t._v(" "),2==e.tipe?n("span",{staticClass:"font-bold text-sm  p-1 mb-1 rounded-sm"},[t._v("\r\n                   "+t._s(e.balasan)+"\r\n                ")]):n("span",{staticClass:"font-bold  text-sm  p-1 mb-1 rounded-sm"},[t._v("\r\n                   "+t._s(e.text.substring(0,200))+"\r\n                ")])])],1)})),t._v(" "),t.loadMore?n("span",{staticClass:"p-4 text-center w-full"},[t._v("\r\n        Memuat ...\r\n      ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports}}]);