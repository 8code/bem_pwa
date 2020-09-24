<template>
  <div class="w-full" >

    <div class="mx-auto text-sm flex  px-2">
        <nuxt-link to="/" class="px-5 bg-theme_primary_dark text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 py-2  rounded-full font-bold"> {{ $t("Home")}} </nuxt-link>
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



      <ul class="p-2">
        <li class="bg-theme_primary_dark my-2 rounded-xl p-3">
          <span class="p-2 text-theme_secondary">Tagar Populer</span>
          <div class="p-2 text-primary font-bold text-xl" v-for="(tagar,index) in tagarPopuler" :key="tagar.tagar">
            {{index+1}}. 
            <nuxt-link :to="'/search?keyword='+(tagar.tagar).substring(1)">
            {{ tagar.tagar}}
             </nuxt-link>
            ({{tagar.total}})
          </div>
        </li>
        <li class="bg-theme_primary_dark my-2 rounded-xl py-3">
          <span class="p-2 text-theme_secondary">Group Populer</span>
           <!-- <nuxt-link class="p-2 text-primary flex font-bold text-xl" v-for="(g,index) in groupPopuler" :key="g.id" :to="g.username">
            {{index+1}}. 
            <img :src="g.avatar" class="w-8 h-8 mx-2" />
            {{ g.name }}
          </nuxt-link> -->
            <card-group v-for="g in groupPopuler" :key="g.id" :group="g" follow="true" />
          <nuxt-link to="/groups/explore" class="p-2 text-primary flex font-bold text-sm">
            Lihat Group Lainnya
          </nuxt-link>
        </li>
         <li class="bg-theme_primary_dark my-2 rounded-xl py-3">
           <span class="p-2 text-theme_secondary">Mahasiswa Populer</span>
           
            <card-user v-for="q in userPopuler" :key="q.id" :data="q.user" />

          <!-- <nuxt-link class="p-2 text-primary flex font-bold text-xl" v-for="(u,index) in userPopuler" :key="u.user.id" :to="'/@'+u.user.username">
              {{index+1}}. 
              <img :src="u.user.avatar" class="w-8 h-8 mx-2" />
              {{ u.user.name }} 
            </nuxt-link> -->

              <!-- <nuxt-link to="/users/explore" class="p-2 text-primary flex font-bold text-sm">
                Lihat Mahasiswa Lainnya
              </nuxt-link> -->
        </li>
      </ul>
      


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
      tagarPopuler: '',
      groupPopuler: '',
      userPopuler: '',
    };
  },
  fetch(){
      this.getData()
      this.getTagarPopuler()
      this.getGroupPopuler()
      this.getUserPopuler()
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
     getTagarPopuler(){
      this.$axios.get("/tagar-populer")
        .then(res => {
          this.tagarPopuler = res.data
        })
    },
    getGroupPopuler(){
      this.$axios.get("/group-populer")
        .then(res => {
          this.groupPopuler = res.data
        })
    },
    getUserPopuler(){
      this.$axios.get("/user-populer")
        .then(res => {
          this.userPopuler = res.data
        })
    },
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
