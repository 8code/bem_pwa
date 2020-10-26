<template>
  <div class="w-full min-h-screen" v-touch:swipe="swipeHandler">

      <subheader name="feed" />

     
    

      <new-quest  />

      <balas-quest v-if="balas_quest"  v-on:batal="balas_quest = false" :quest="balas_quest" />

      <section class="w-full rounded-xl pb-20 flex flex-wrap" >
      <card-post  v-on:balas="balasQuest" v-for="quest in $store.state.data_quest_following.data" :key="quest.id" :id="'feed'+quest.id" :data="quest" />
       
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
  transition: 'slide-fade',
   components: {
    InfiniteLoading,
  },
  scrollToTop: true,
  layout: "no-header",
  middleware: "auth",
  data() {
    return {
      quest: "",
      search: "",
      balas_quest: '',
      page: 1,
    };
  },
  mounted(){
     
     if(this.$store.state.data_quest_following.data){
        

      if(this.$store.state.data_quest_following.data.length == 0){
         this.getData()
      }else{
          this.quest = this.$store.state.data_quest_following.data
          this.page = this.$store.state.data_quest_following.page

          this.$nextTick(() => {
            this.scrollToLast()
          });
      }
      
        
      }else{
         this.getData()
    }
  },
  methods:{
    swipeHandler(direction){
      if(direction =='left'){
        this.$router.push('/feed-explore')
      }
    },
    scrollToLast(){
            let lastQuest = this.quest[this.quest.length - 5]
              if(lastQuest){
                this.$scrollTo("#feed"+lastQuest.id);
              }
            
    },
   async loadMoregetData($state){
        this.page = this.page+1
        await this.$axios.$get("/quest/home?search="+this.search+"&page="+this.page)
        .then(res => {
            if(res.total > 0){
                this.lastPage = false               
                this.quest = this.quest.concat(Object.values(res.data))

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
    balasQuest(data){
        this.balas_quest = data
    },
    async getData(){
      this.lastPage = false
      this.page = 1 
       await this.$axios.$get("/quest/home?search="+this.search+"&page="+this.page).then(res => {
        this.quest = Object.values(res.data);
      
        this.$store.commit("setDataQuestFollowing",{
            data: this.quest,
            page: this.page
          })

        if(this.quest.length == 0){
          this.$router.push(this.localePath("/feed-explore"))
        }
      });
    },
  }
};
</script>
