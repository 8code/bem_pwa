<template>
  <div class="w-full" >

      <subheader name="feed" />

     
      <balas-quest v-if="balas_quest"  v-on:batal="balas_quest = false" :quest="balas_quest" />

      <section class="w-full rounded-xl pb-20 flex flex-wrap">
      <card-post  v-on:balas="balasQuest" v-for="quest in $store.state.data_quest_following.data" :key="quest.id" :id="'feed'+quest.id" :data="quest" />
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
    if(!this.$store.state.user.gender){
          this.$router.push("/edit/profile")
    }else{
      if(!this.$store.state.data_quest_following){
         this.getData()
      }else{
        
        this.quest = this.$store.state.data_quest_following.data
        this.page = this.$store.state.data_quest_following.page

        this.$nextTick(() => {
           this.scrollToLast()
        });

      }
    }
  },
  methods:{
    scrollToLast(){
            let lastQuest = this.quest[this.quest.length - 5]
              if(lastQuest){
                this.$scrollTo("#feed"+lastQuest.id);
              }
            
    },
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
          this.$router.push("feed-explore")
        }
      });
    },
  }
};
</script>
