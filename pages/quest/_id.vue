<template>
    <div>
      <card-post v-on:balas="balasQuest"  active="true" bigtext="true" v-if="quest" :data="data" link="true" />
      <h1  v-if="balas_quest" class="px-4">Balasan :</h1>

      <balas-quest v-if="balas_quest" v-on:kirim="newQuest" v-on:batal="balas_quest = false" :quest="balas_quest" />

      <card-post hideBalasan="true" v-on:balas="balasQuest" v-for="que in quest" :key="que.id" :data="que" />
      <span v-if="loadMore" class="p-4 text-center w-full">
        Memuat...
      </span>
    </div> 
</template>

<script>
export default {
  layout: "no-header",
  middleware: "auth",
  data() {
    return {
        data: '',
        quest: '',
        balas_quest: '',
        page: 1,
        loadMore: false,
        last_page: false
    }
  },
  created(){
      this.$axios.get("/quest/"+this.$route.params.id)
        .then(res => {
            this.data = res.data

            this.getData();
        })

        
  },
  mounted() {

      var that = this;
      window.addEventListener("scroll", function() {
      
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

          if(bottomOfWindow){
            if(!that.last_page){
                that.loadMoregetData()
            }else{
              this.loadMore = false
            }
           
          }
      });
    },

  methods:{
    loadMoregetData(){
        this.loadMore = true
        this.page = this.page+1
        this.$axios.$get("/quest/balasan/"+this.data.id+"?page="+this.page)
        .then(res => {
          res.data = Object.values(res.data)
          if(Object.values(res.data).length > 0){
               let tempp = Object.values(this.quest.data)
               this.quest.data = tempp.concat(res.data)
          }else{
            this.last_page = true
          }
          this.loadMore = false
        });
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
        this.quest = res;
      });
    }
  }
}
  </script>