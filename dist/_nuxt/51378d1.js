(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{243:function(t,e,n){var o=n(6),l=n(153)(!1);o(o.S,"Object",{values:function(t){return l(t)}})},281:function(t,e,n){"use strict";n.r(e);n(23),n(12),n(243);var o=n(240),l={components:{InfiniteLoading:n.n(o).a},scrollToTop:!0,layout:"no-header",middleware:"auth",data:function(){return{data:"",quest:"",balas_quest:"",page:1}},created:function(){var t=this;this.$axios.get("/quest/"+this.$route.params.id).then((function(e){t.data=e.data,t.getData()}))},methods:{loadMoregetData:function(t){var e=this;this.page=this.page+1,this.$axios.$get("/quest/balasan/"+this.data.id+"?page="+this.page).then((function(n){if(n.total>0){t.loaded();var o=Object.values(e.quest.data);e.quest.data=o.concat(n.data)}else t.complete()}))},newQuest:function(){this.balas_quest="",this.getData()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;this.last_page=!1,this.page=1,this.$axios.$get("/quest/balasan/"+this.data.id+"?page="+this.page).then((function(e){t.quest=e.data}))}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen pb-20 mb-20"},[t.quest?n("card-post",{attrs:{active:"true",bigtext:"true",data:t.data,link:"true"},on:{balas:t.balasQuest}}):t._e(),t._v(" "),t.balas_quest?n("h1",{staticClass:"px-4"},[t._v("Balasan :")]):t._e(),t._v(" "),t.balas_quest?n("balas-quest",{attrs:{quest:t.balas_quest},on:{kirim:t.newQuest,batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),t._l(t.quest,(function(e){return n("card-post",{key:e.id,attrs:{hideBalasan:"true",data:e},on:{balas:t.balasQuest}})})),t._v(" "),n("infinite-loading",{on:{infinite:t.loadMoregetData}},[n("div",{staticClass:"text-center flex w-full p-4",attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),n("div",{attrs:{slot:"no-results"},slot:"no-results"})])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardPost:n(242).default,BalasQuest:n(248).default})}}]);