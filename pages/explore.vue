<template>
  <div class="w-full" v-touch:swipe="to">


 <div class="mx-auto text-sm flex content-center justify-center text-center p-2">
    <nuxt-link to="/" class="bg-theme_primary_dark text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 w-1/2 px-10 py-2  rounded-full font-bold"> {{ $t("Home")}} </nuxt-link>
    <nuxt-link to="/explore" class="mx-1 w-1/2 px-10 py-2  bg-primary text-white rounded-full font-bold">
    {{ $t("Explore")}} 
    </nuxt-link>
</div>

      <balas-quest v-if="balas_quest" v-on:kirim="newQuest" v-on:batal="balas_quest = false" :quest="balas_quest" />

    <section class="w-full rounded-xl pb-20 flex flex-wrap">
      <card-post v-on:balas="balasQuest" v-for="quest in quest.data" :key="quest.id" :data="quest" />

      <span v-if="loadMore" class="p-4 text-center w-full">
        Load More ...
      </span>

    </section>
  </div>
</template>

<script>
export default {
  layout: "no-header",
  middleware: "auth",
  data() {
    return {
      quest: "",
      search: "",
      balas_quest: '',
      page: 1,
      loadMore: false,
      last_page: false
    };
  },
  fetch(){
      this.getData()
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
        this.$axios.$get("/quest/home/explore?search="+this.search+"&page="+this.page)
        .then(res => {
          res.data = Object.values(res.data)
          if(res.data.length > 0){
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
      this.$axios.$get("/quest/home/explore?search="+this.search+"&page="+this.page).then(res => {
        this.quest = res;
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
