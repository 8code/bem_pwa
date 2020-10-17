<template>
  <div class="w-full" >

      <subheader name="events" />

     
      <balas-quest v-if="balas_quest"  v-on:batal="balas_quest = false" :quest="balas_quest" />

      <section class="w-full rounded-xl pb-20 flex flex-wrap">
      <card-event  v-for="qu in $store.state.data_my_events.data" :key="qu.id" :id="'event'+qu.id" :data="qu" />
      
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

      if(!this.$store.state.data_my_events){
         this.getData()
      }else{
        
        this.quest = this.$store.state.data_my_events.data
        this.page = this.$store.state.data_my_events.page

      }
  },
  methods:{
  
  loadMoregetData($state){
        this.page = this.page+1
        this.$axios.$get("/my-events?search="+this.search+"&page="+this.page)
        .then(res => {
            if(res.data.total > 0){
                this.lastPage = false               
                this.quest = this.quest.concat(Object.values(res.data))

                this.$store.commit("setDataMyEvents",{
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
      this.$axios.$get("/my-events?search="+this.search+"&page="+this.page).then(res => {
        this.quest = Object.values(res.data);
        
        this.$store.commit("setDataMyEvents",{
            data: this.quest,
            page: this.page
          })

        if(this.quest.length == 0){
          this.$router.push("events-explore")
        }
      });
    },
  }
};
</script>
