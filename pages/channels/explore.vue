<template>
  <div class="w-full" >

       <subheader name="channels" />

      <balas-quest v-if="balas_quest"  v-on:batal="balas_quest = false" :quest="balas_quest" />

      <section class="w-full rounded-xl pb-20 flex flex-wrap">
      <card-post v-on:balas="balasQuest" v-for="q in quest" :key="q.id" :data="q" />

       <infinite-loading @infinite="loadMoregetData">
        <div slot="no-more"></div>
        <div slot="no-results"></div>
       </infinite-loading>

          <new-quest  />



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
   this.getData()
  },
  methods:{
  loadMoregetData($state){
        this.page = this.page+1
        this.$axios.$get("/event/explore?search="+this.search+"&page="+this.page)
        .then(res => {
            if(res.total > 0){
                this.lastPage = false               
                this.quest = this.quest.concat(res.data)
                
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
      this.$axios.$get("/event/explore?search="+this.search+"&page="+this.page).then(res => {
        this.quest = res.data;
      });
    },
  }
};
</script>
