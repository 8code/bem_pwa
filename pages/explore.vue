<template>
  <div class="w-full min-h-screen" >

    <div class="mx-auto text-sm flex  px-2">
        <nuxt-link to="/" class="px-5 bg-theme_primary_dark text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 py-2  rounded-full font-bold"> {{ $t("Followed")}} </nuxt-link>
          <nuxt-link to="/explore" class="px-5 mx-1  py-2  bg-primary text-white rounded-full font-bold">
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

          <card-post v-on:balas="balasQuest" v-for="quest in questdata" :key="quest.id" :data="quest" />

          <infinite-loading @infinite="loadMoregetData">

              <div slot="no-more" class="text-center flex w-full p-4"> ... </div>

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
   
  data() {
    return {
      questdata: "",
      search: "",
      balas_quest: '',
      page: 1,
     
    };
  },
  fetch(){
      this.getData()
    
  },
  methods:{
    async loadMoregetData($state){
        this.page = this.page+1
        await this.$axios.$get("/quest/home/explore?search="+this.search+"&page="+this.page)
        .then(res => {
          if(res.total > 0){
              $state.loaded();
              this.questdata = this.questdata.concat(Object.values(res.data))
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
      this.last_page = false
      this.page = 1 
      this.$axios.$get("/quest/home/explore?search="+this.search+"&page="+this.page).then(res => {
        this.questdata = Object.values(res.data);
      });
    },
    to(directions) {
      if (directions == "right") {
        this.$router.push("/");
      }
    },
  }
};
</script>
