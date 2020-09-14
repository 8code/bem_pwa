<template>
  <div class="w-full" v-if="profile">
    <section>
      <div class="w-full flex flex-wrap bg-theme_primary p-2 pt-6 rounded-xl ">
        <div class="w-full font-bold flex justify-start  ">
          <img
            class="w-12 h-12 mt-4 rounded-full"
            :src="profile.avatar"
            :alt="profile.name"
          />

          <div class="w-full pl-5 flex flex-wrap items-start ">
            <div class="w-full text-xl lg:text-2xl mb-2">
              {{ profile.name }}
              <br>
              <small class="text-lg text-primary">@{{ profile.username }}</small>

                    <div v-if="profile.followed" class="float-right text-sm">
                            <span v-if="profile.followed" class="cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full">
                                Diikuti
                            </span>
                            <div v-else >
                                      <span v-if="!followTemp" @click="followGroup(profile.id)" class="cursor-pointer bg-primary px-4 py-1 rounded-full text-secondary">
                                          Ikuti
                                      </span>
                                      <span v-if="followTemp" class="fursor-pointer bg-secondary text-primary px-4 py-1 rounded-full">
                                        Diikuti
                                    </span>
                            </div>
                    </div>

                  <a v-if="igname" :href="`https://instagram.com/${igname}`" class="float-right text-sm">
                    <img  class="cursor-pointer w-12 h-12 p-2 m-1" src="/instagram.png">
                  </a>
                    
                  
                

                    <div v-if="editprofile"  class="float-right text-sm -mt-6">
                        <span @click="$store.commit('toggleSetting',true)" class="mb-2 text-center cursor-pointer bg-theme_primary_dark  px-4 py-1 rounded-full text-primary">
                                Pengaturan
                         </span>
                         <div class="w-full pt-3 text-right">
                            <router-link to="/edit/profile" class="mb-2 text-center cursor-pointer bg-theme_primary_dark px-4 py-1 rounded-full text-primary">
                                    Edit Profile
                            </router-link>

                           </div>
                    </div>

            </div>
          </div>

      
            
        </div>
        
        
        
      </div>
    </section>
    
      <!-- <new-quest v-on:kirim="newQuest" :group="group" /> -->

      <balas-quest v-if="balas_quest" v-on:kirim="newQuest" v-on:batal="balas_quest = false" :quest="balas_quest" />



    <div class="p-2 flex flex-row mt-2" style="overflow-x:scroll">
 
     <div
        :class="(filter == 'Quest Only') ? filterClassActive : filterClass"
        @click="filter = 'Quest Only';getData()"
      >
        <div
          class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"
        ></div>
          Quest Saja
      </div>

      
     <div
        :class="(filter == 'Quest & Balasan') ? filterClassActive : filterClass"
        @click="filter = 'Quest & Balasan';getData()"

      >
        <div
          class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"
        ></div>
          Quest & Balasan
      </div>


      <div
        :class="(filter == 'Media') ? filterClassActive : filterClass"
        @click="filter = 'Media';getData()"

      >
      
      <div
          class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"
        ></div>
          Media
      </div>


    </div>


    <section class="w-full rounded-xl pb-20 flex flex-wrap">
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
  props:['id','editprofile'],
  data() {
    return {
      filterClassActive: "cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",
      filterClass: "cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",
      profile: "",
      quest: "",
      search: "",
      filter: "Quest Only",
      balas_quest: '',
      page: 1,
      loadMore: false,
      last_page: false,
      igname: ''
    };
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
  fetch() {
    // console.log(this.id)
    this.$axios.$get("/profile/" + this.id).then(data => {
      this.profile = data;
      this.getData()

    

        if(this.profile.instagram){
        if(this.profile.instagram.includes("@"))
        {
            this.igname = this.profile.instagram.substring(1)
        }else{
          this.igname = this.profile.instagram
        }
      }

    });
  },
  methods:{
    loadMoregetData(){
        this.loadMore = true
        this.page = this.page+1
        this.$axios.$get("/profile/quest/" + this.profile.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page)
        .then(res => {
          if(res.data.length > 0){
               this.quest.data = this.quest.data.concat(res.data)
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
      this.$axios.$get("/profile/quest/" + this.profile.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page).then(data => {
        // console.log(data)
        this.quest = data;
      });
    }
  }
};
</script>
