<template>
  <div class="w-full  mt-2" v-if="profile">
      <button
          @click="$router.back()"
          v-if="!editprofile"
          class="flex p-3 bg-theme_primary_dark mx-2 rounded-full mr-auto" style="top:10px"
        >
          <svg
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-left-circle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </button>


      <div class="w-full flex flex-wrap bg-theme_primary p-2 rounded-xl justify-center lg:mt-0">

        <div class="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pt-3">
        
          <img
            class="w-16 h-16  rounded-full hidden lg:block"
            :src="profile.avatar"
            :alt="profile.name"
          />
          <div class="text-center lg:text-left  mt-3 lg:pl-3">
                <div class="w-full lg:text-left font-bold ">
                  {{ profile.name }} 
                </div>
                
                <img
                  class="w-20 h-20 mx-auto rounded-full lg:hidden my-2"
                  :src="profile.avatar"
                  :alt="profile.name"
                />
                <router-link :to="localePath(`/@${profile.username}`)" class="text-sm text-primary">@{{ profile.username }}</router-link>
          </div>

        </div>

          <div class="w-full lg:w-1/2 flex flex-wrap justify-center">

        <div class="flex w-full justify-center lg:justify-end mt-2">
                        
                  <nuxt-link :to="localePath('/followed/user/'+profile.id)"  class="font-normal  text-xs text-center px-4">
                       
                      <div class="font-bold text-primary">{{ profile.follower }}</div>
                       {{ $t('Follower') }}
                    </nuxt-link>

                      <nuxt-link :to="localePath('/following/'+profile.id)" class="font-normal text-xs  text-center px-4">
                       
                      
                      <div class="font-bold text-primary">{{ profile.following }}</div>
                       {{ $t('Following') }}
                    </nuxt-link>

            </div>

          <div class="flex w-full justify-center lg:justify-end mt-5">
                    
                    <div v-if="profile.followed || followTemp">
                      <span @click="chatTo" class="cursor-pointer bg-primary text-secondary mr-2 text-primary px-6 py-1 -mt-1 rounded-full">
                          Pesan
                      </span>
                    </div>

                    <div v-if="profile.followed || followTemp" @click="unFollow(profile.id)">
                      <span class="cursor-pointer bg-theme_primary_dark text-primary px-6 py-1 rounded-full">
                          Diikuti
                      </span>
                    </div>
                    <span v-else @click="followUser(profile.id)" class="cursor-pointer -mt-1 bg-danger px-6 py-1 rounded-full text-secondary">
                        Ikuti
                    </span>
                
                <div class="px-3" v-if="usernameIg">
                  <a class="text-primary" :href="`https://instagram.com/${usernameIg}`">
                    <img src="/instagram.png" class="h-6 w-6">
                  </a>
                </div>
          </div>
        
          </div>
            <div class="flex text-sm w-full text-center lg:text-left mt-3 px-4">
            {{ profile.bio }}
          </div>
        
      </div>

      <balas-quest v-if="balas_quest"  v-on:batal="balas_quest = false" :quest="balas_quest" />



    <div class="p-2 flex flex-row mt-2" style="overflow-x:scroll">
 
     <div
        :class="(filter == 'New') ? filterClassActive : filterClass"
        @click="filter = 'New';getData()"
      >
          Terbaru
      </div>

       <div
        :class="(filter == 'Story') ? filterClassActive : filterClass"
        @click="filter = 'Story';getData()"
      >
          Cerita
      </div>

     <div
        :class="(filter == 'Voice') ? filterClassActive : filterClass"
        @click="filter = 'Voice';getData()"
      >
          Suara
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
      filterClassActive: "cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-full rounded-tl-none flex text-sm items-center justify-center p-2",
      filterClass: "cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",
      profile: "",
      quest: "",
      search: "",
      filter: "New",
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
     chatTo(){
       this.$axios.get('/chat_to/'+this.profile.id)
        .then(res => {
          this.$router.push("/messages/"+res.data)
        })
     },
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
       unFollow(id){
         this.$axios.get("/user/unfollow/"+id)
          .then(res => {
              this.followTemp = false
              this.profile.followed = false
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
