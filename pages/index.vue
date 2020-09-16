<template>
  <div class="w-full" v-touch:swipe="to">



    <div class="mx-auto text-sm flex content-center justify-center text-center p-2">
        <nuxt-link to="/" class="mx-1 w-1/2 px-10 py-2  bg-primary text-white rounded-full font-bold"> {{ $t("Home")}} </nuxt-link>
        <nuxt-link to="/explore" class="bg-theme_primary_dark text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 w-1/2 px-10 py-2  rounded-full font-bold">
        {{ $t("Explore")}}
        </nuxt-link>
    </div>



      <ul class="p-4">
        <li class="bg-theme_primary_dark my-2 rounded-xl p-3">
          <span class="p-2 text-theme_secondary">Tagar Populer</span>
          <div class="p-2 text-primary font-bold text-xl" v-for="(tagar,index) in tagarPopuler" :key="tagar.tagar">
            {{index+1}}. 
            <nuxt-link :to="'/tag/'+tagar.tagar">{{ tagar.tagar}} </nuxt-link>
            ({{tagar.total}})
          </div>
        </li>
        <li class="bg-theme_primary_dark my-2 rounded-xl p-3">
          <span class="p-2 text-theme_secondary">Group Populer</span>
           <nuxt-link class="p-2 text-primary flex font-bold text-xl" v-for="(g,index) in groupPopuler" :key="g.id" :to="g.username">
            {{index+1}}. 
            <img :src="g.avatar" class="w-8 h-8 mx-2" />
            {{ g.name }}
          </nuxt-link>
        </li>
         <li class="bg-theme_primary_dark my-2 rounded-xl p-3">
           <span class="p-2 text-theme_secondary">User Populer</span>
          <nuxt-link class="p-2 text-primary flex font-bold text-xl" v-for="(u,index) in userPopuler" :key="u.id" :to="'/@'+u.username">
              {{index+1}}. 
              <img :src="u.user.avatar" class="w-8 h-8 mx-2" />
              {{ u.user.name }} ({{u.total}})
            </nuxt-link>
        </li>
      </ul>
      
     

      <balas-quest v-if="balas_quest" v-on:kirim="newQuest" v-on:batal="balas_quest = false" :quest="balas_quest" />

      <section class="w-full rounded-xl pb-20 flex flex-wrap">
      <card-post v-on:balas="balasQuest" v-for="quest in quest.data" :key="quest.id" :data="quest" />

      <span v-if="loadMore" class="p-4 text-center w-full">
        Memuat...
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
      this.getTagarPopuler()
      this.getGroupPopuler()
      this.getUserPopuler()
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
        this.$axios.$get("/quest/home?search="+this.search+"&page="+this.page)
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
      this.$axios.$get("/quest/home?search="+this.search+"&page="+this.page).then(res => {
        this.quest = res;
      });
    },
    to(directions) {
      if (directions == "left") {
        this.$router.push("/explore");
      }
    },
  }
};
</script>
