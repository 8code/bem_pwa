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
