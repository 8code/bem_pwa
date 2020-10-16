<template>
    <div class="min-h-screen pb-20 mb-20">
      <card-post v-on:balas="balasQuest"  active="true" bigtext="true" v-if="quest" :data="data" link="true" />
      <h1  v-if="balas_quest" class="px-4">Balasan :</h1>

      <balas-quest v-if="balas_quest" v-on:kirim="newQuest" v-on:batal="balas_quest = false" :quest="balas_quest" />

      <button  @click="balasQuest(data)" class="flex w-full rounded-tl-xl rounded-br-xl  p-2 px-5  text-primary  shadow-sm">
          <svg  width="18px" height="18px"  viewBox="0 0 16 16" class="bi bi-plus-circle mt-1 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
              <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
              <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          </svg>
          Komentar
      </button>

      
      <card-post hideBalasan="true" v-on:balas="balasQuest" v-for="que in quest" :key="que.id" :data="que" />
            <infinite-loading @infinite="loadMoregetData">

              <div slot="no-more" class="text-center flex w-full p-4"></div>
              <div slot="no-results"></div>

          </infinite-loading>
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
        data: '',
        quest: '',
        balas_quest: '',
        page: 1,
    }
  },
  created(){
      this.$axios.get("/quest/"+this.$route.params.id)
        .then(res => {
            this.data = res.data
            this.getData();
        })

        
  },

  methods:{
    loadMoregetData($state){
        this.page = this.page+1
        this.$axios.$get("/quest/balasan/"+this.data.id+"?page="+this.page)
        .then(res => {
          if(res.total > 0){
               $state.loaded()
               let tempp = Object.values(this.quest.data)
               this.quest.data = tempp.concat(res.data)
          }else{
             $state.complete()
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
      this.$axios.$get("/quest/balasan/"+this.data.id+"?page="+this.page).then(res => {
        this.quest = res.data;
      });
    }
  }
}
  </script>