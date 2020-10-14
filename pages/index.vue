<template>
  <div class="w-full" >

    <div class="mx-auto text-sm flex px-2">
        <nuxt-link to="/" class="mx-1 px-5 py-2 bg-primary text-white rounded-full font-bold"> {{ $t("Followed")}} </nuxt-link>
        <nuxt-link to="/explore" class="bg-theme_primary_dark text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 px-5 py-2  rounded-full font-bold">
        {{ $t("Explore")}}
        </nuxt-link>
             <nuxt-link to="/search" class="px-5 mx-1 ml-auto py-2  bg-theme_primary_dark text-primary  border-primary rounded-full font-bold">
                  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          </svg>
        </nuxt-link>
    </div>

     

      <balas-quest v-if="balas_quest"  v-on:batal="balas_quest = false" :quest="balas_quest" />

      <section class="w-full rounded-xl pb-20 flex flex-wrap">
      <card-post @click="$store.commit('set_scroll_home',document.documentElement.scrollTop)" v-on:balas="balasQuest" v-for="quest in $store.state.data_quest_following.data" :key="quest.id" :data="quest" />


       <infinite-loading @infinite="loadMoregetData">

           <div slot="no-more">Selamat kamu sudah berada di bagian terakhir :) </div>

       </infinite-loading>


    </section>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

export default {
   components: {
    InfiniteLoading,
  },
  layout: "no-header",
  middleware: "auth",
  scrollToTop: false,
  data() {
    return {
      quest: "",
      search: "",
      balas_quest: '',
      page: 1,
    };
  },
  created(){
    if(!this.$store.state.user.gender){
          this.$router.push("/edit/profile")
    }else{
      if(!this.$store.state.data_quest_following){
         this.getData()
      }else{
        this.quest = this.$store.state.data_quest_following.data
        this.page = this.$store.state.data_quest_following.page
      }
    }
  },
  methods:{
  loadMoregetData($state){
        this.page = this.page+1
        this.$axios.$get("/quest/home?search="+this.search+"&page="+this.page)
        .then(res => {
            if(res.total > 0){
                this.lastPage = false               
                this.quest = this.quest.concat(res.data)

                this.$store.commit("setDataQuestFollowing",{
                  data: this.quest,
                  page: this.page
                })
                
                $state.loaded();
            }else{
                $state.complete();
            }
        })
    },
    newQuest(){
      this.balas_quest = ""
      this.getData()
    },
    balasQuest(data){
        this.balas_quest = data
    },
    getData(){
      this.lastPage = false
      this.page = 1 
      this.$axios.$get("/quest/home?search="+this.search+"&page="+this.page).then(res => {
        this.quest = res.data;
        this.$store.commit("setDataQuestFollowing",{
                  data: this.quest,
                  page: this.page
                })

        if(this.quest.length == 0){
          this.$router.push("/explore")
        }
      });
    },
  }
};
</script>
