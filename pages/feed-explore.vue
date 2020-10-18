<template>
  <div class="w-full" >

         <subheader name="feed" />


      <balas-quest v-if="balas_quest"  v-on:batal="balas_quest = false" :quest="balas_quest" />

        <section class="w-full rounded-xl pb-20 flex flex-wrap">

          <card-post v-on:balas="balasQuest" v-for="quest in questdata" :key="quest.id" :data="quest" :id="'feed'+quest.id"  />

          <infinite-loading @infinite="loadMoregetData">

              <div slot="no-more"></div>
               <div slot="no-results"></div>

          </infinite-loading>
        
        </section>


      </div>
</template>

<script>

import InfiniteLoading from 'vue-infinite-loading';

export default {
  scrollToTop: true,
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
  mounted(){
      if(!this.$store.state.data_quest_explore){
         this.getData()
      }else{
        
        this.questdata = this.$store.state.data_quest_explore.data
        this.page = this.$store.state.data_quest_explore.page

        this.$nextTick(() => {
           this.scrollToLast()
        });

      }
  },
  methods:{
    scrollToLast(){
            let lastQuest = this.questdata[this.questdata.length - 8]
              if(lastQuest){
              this.$scrollTo("#feed"+lastQuest.id);
              }
    },
    async loadMoregetData($state){
        this.page = this.page+1
        await this.$axios.$get("/quest/home/explore?search="+this.search+"&page="+this.page)
        .then(res => {
          if(res.total > 0){
              $state.loaded();
              this.questdata = this.questdata.concat(Object.values(res.data))

               this.$store.commit("setDataQuestExplore",{
                    data: this.questdata,
                    page: this.page
                  })

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

  
          this.$store.commit("setDataQuestExplore",{
            data: this.questdata,
            page: this.page
          })
          
      });
    },
 
  }
};
</script>
