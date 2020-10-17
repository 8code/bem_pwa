<template>
  <div class="w-full" >

       <button @click="$router.back()" class="flex p-3 bg-theme_primary_dark mx-2 rounded-full ">
          <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
        </svg>
        </button>

      <section class="w-full rounded-xl pb-20 flex flex-wrap bg-theme_primary_dark p-4 mt-2">
    
            Group Chat / Meeting Room
        </section>

    
    <input   maxlength="255" v-model="text" placeholder="Katakan sesuatu ..." class="bg-theme_primary_dark w-full rounded-xl fixed lg:relative bottom-0 z-50 lg:z-0 p-3 px-5" />             

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
      text: '',
      quest: "",
      search: "",
      balas_quest: '',
      page: 1,
    };
  },
  mounted(){
    // if(!this.$store.state.user.gender){
    //       this.$router.push("/edit/profile")
    // }else{
    //   if(!this.$store.state.data_quest_following){
    //      this.getData()
    //   }else{
        
    //     this.quest = this.$store.state.data_quest_following.data
    //     this.page = this.$store.state.data_quest_following.page

    //     // this.$nextTick(() => {
    //     //    this.scrollToLast()
    //     // });

    //   }
    // }
  },
  methods:{
    // scrollToLast(){
    //         let lastQuest = this.quest[this.quest.length - 8]
    //           // console.log(lastQuest)
    //           this.$scrollTo("#feed"+lastQuest.id);
    // },
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
