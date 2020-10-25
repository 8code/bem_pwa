<template>
  <div class="w-full min-h-screen" v-touch:swipe="swipeHandler" >

      <div class="mx-auto text-sm flex mt-2">
            <nuxt-link :to="localePath('/messages')" class="px-5 mx-1 py-2 font-bold"> 
             {{ $t("messages")}} 
             </nuxt-link>
            <div class="px-5 mx-1  text-primary py-2 font-bold">
              {{ $t("events")}} 
            </div>

            <nuxt-link :to="localePath('/search')" class="px-5 mx-1 ml-auto py-2  font-bold mt-1">
              <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              </svg>
          </nuxt-link>
          
      </div>

     
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

     swipeHandler(direction){
       if(direction =='right'){
          this.$router.push('/messages')
        }
    },
  
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
          this.$router.push(this.localePath("/events-explore"))
        }
      });
    },
  }
};
</script>
