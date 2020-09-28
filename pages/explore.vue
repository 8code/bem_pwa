<template>
  <div class="w-full" >

    <div class="mx-auto text-sm flex  px-2">
        <nuxt-link to="/" class="px-5 bg-theme_primary_dark text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 py-2  rounded-full font-bold"> {{ $t("Followed")}} </nuxt-link>
          <nuxt-link to="/explore" class="px-5 mx-1  py-2  bg-primary text-white rounded-full font-bold">
          {{ $t("Explore")}} 
          </nuxt-link>
          <nuxt-link to="/search" class="px-5 mx-1 ml-auto py-2  bg-theme_primary_dark text-primary  border-primary rounded-full font-bold">
          <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  </svg>
        </nuxt-link>
        
    </div>



      <balas-quest v-if="balas_quest" v-on:kirim="newQuest" v-on:batal="balas_quest = false" :quest="balas_quest" />

        <section class="w-full rounded-xl pb-20 flex flex-wrap">

          <!-- <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@lialiulialiu/video/6858238623725161729" data-video-id="6858238623725161729" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@lialiulialiu" href="https://www.tiktok.com/@lialiulialiu">@lialiulialiu</a> <p>mertua mana mertua?  <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp">##fyp</a> <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou">##foryou</a> <a title="samasamadirumah" target="_blank" href="https://www.tiktok.com/tag/samasamadirumah">##samasamadirumah</a></p> <a target="_blank" title="♬ berbeza kasta - TSIC💟'gunawan" href="https://www.tiktok.com/music/berbeza-kasta-6855537853565291265">♬ berbeza kasta - TSIC💟'gunawan</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script> -->

          <card-post v-on:balas="balasQuest" v-for="quest in quest.data" :key="quest.id" :data="quest" />

          <span v-if="loadMore" class="p-4 text-center w-full">
            Memuat ...
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
      last_page: false,
     
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
