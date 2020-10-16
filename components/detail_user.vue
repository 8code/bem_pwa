<template>
  <div class="w-full" v-if="profile">
    <section>
      <div class="w-full flex flex-wrap bg-theme_primary p-2 pt-6 rounded-xl ">
        <div class="w-full font-bold flex justify-start  ">
          <img
            class="w-12 h-12  rounded-full"
            :src="profile.avatar"
            :alt="profile.name"
          />

          <div class="w-full pl-3 flex flex-wrap items-start ">
            <div class="w-full lg:text-md ">
              {{ profile.name }}
              <br>

            

              <router-link :to="`@${profile.username}`" class="text-sm text-primary">@{{ profile.username }}</router-link>

                    <div class="float-right text-sm flex">
                    
                              <div v-if="profile.followed">
                                <span class="cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full">
                                  Diikuti
                              </span>
                              </div>
                              <div v-else >
                                  <span v-if="!followTemp" @click="followUser(profile.id)" class="cursor-pointer bg-primary px-4 py-1 rounded-full text-secondary">
                                      Ikuti
                                  </span>
                                  <span v-if="followTemp" class="cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full">
                                    Diikuti
                                </span>
                            </div>
                          
                          <div class="px-3 -mt-2" v-if="usernameIg">
                            <a class="text-primary" :href="`https://instagram.com/${usernameIg}`">
                              <img src="/instagram.png" class="h-10 w-10 p-2">
                            </a>
                          </div>

                    </div>


                    <div class="flex text-sm  float-right">
                         
                          <span class="font-normal text-center px-4">
                              Follower
                              <div class="font-bold text-primary">{{ profile.follower }}</div>
                            </span>

                             <span class="font-normal text-center px-4">
                              Following
                              <div class="font-bold text-primary">{{ profile.following }}</div>
                            </span>

                    </div>
                    <div class="flex text-sm float-left pt-2 font-normal">
                      {{ profile.bio }}
                    </div>

             

            </div>
          </div>
        </div>
        
      </div>
    </section>

      <balas-quest v-if="balas_quest"  v-on:batal="balas_quest = false" :quest="balas_quest" />



    <div class="p-2 flex flex-row mt-2" style="overflow-x:scroll">
 
     <div
        :class="(filter == 'Quest') ? filterClassActive : filterClass"
        @click="filter = 'Quest';getData()"
      >
          Quest
      </div>

      
     <div
        :class="(filter == 'Group') ? filterClassActive : filterClass"
        @click="filter = 'Group';getData()"

      >
     
          Group
      </div>

  
     <div
        :class="(filter == 'Event') ? filterClassActive : filterClass"
        @click="filter = 'Event';getData()"

      >
         Channels
      </div>


    </div>


    <section class="w-full rounded-xl pb-20 flex flex-wrap">
      <card-post v-on:balas="balasQuest" v-for="quest in quest.data" :key="quest.id" :data="quest" />

      <infinite-loading @infinite="loadMoregetData">

          <div slot="no-more" class="text-center flex w-full p-4"></div>
          <div slot="no-results"></div>

      </infinite-loading>
      
    </section>
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
  props:['id','editprofile'],
  data() {
    return {
      filterClassActive: "cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",
      filterClass: "cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",
      profile: "",
      quest: "",
      search: "",
      filter: "Quest",
      balas_quest: '',
      page: 1,
      loadMore: false,
      last_page: false,
      usernameIg: '',
      followTemp: false
    };
  },

  fetch() {
    // console.log(this.id)
    this.$axios.$get("/profile/" + this.id).then(data => {
      this.profile = data;
      this.getData()

    

        if(this.profile.instagram){
        if(this.profile.instagram.includes("@"))
        {
            this.usernameIg = this.profile.instagram.substring(1)
        }else{
          this.usernameIg = this.profile.instagram
        }
      }

    });
  },
  methods:{
     followUser(id){
      this.$axios.get("/user/follow/"+id)
        .then(res => {
            this.followTemp = true

              this.$store.commit("setNotif",{
                  to: id,
                  text: "@"+this.$store.state.user.username+" Mengikuti anda"
                })
                
        })
    },
    loadMoregetData($state){
        this.page = this.page+1
        this.$axios.$get("/profile/quest/" + this.profile.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page)
        .then(res => {
          if(res.data.length > 0){
                $state.loaded()
               this.quest.data = this.quest.data.concat(res.data)
          }else{
                $state.complete()
          }
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
