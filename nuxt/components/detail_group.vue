<template>
  <div class="w-full" v-if="group">


    <button
          @click="$router.back()"
          class="flex p-3 bg-theme_primary_dark mx-2 rounded-full mr-auto mt-2" style="top:10px"
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


    <section>
      <div class="w-full flex flex-wrap bg-theme_primary p-2 pt-6 rounded-xl ">
        <div class="w-full font-bold flex ">
          <img
           
            class="w-16 h-16  rounded-full"
            :src="$getImage(group.avatar)"
            :alt="group.name"
          />

          <div class="w-full pl-5 mt-1 flex flex-wrap items-start ">
            <div class="w-full lg:text-md mb-2 flex">
              <div>
                {{ group.name }}  
              <br> <small class="text-primary">#{{ group.username }}</small>
              </div>
             


            <div class="ml-auto text-sm flex items-start">
              
            <div v-if="group.followed || followTemp" @click="unFollow(group.id)">
                <span  class="float-right cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full">
                  Diikuti
              </span>
            </div>
            <span v-else @click="followGroup(group.id)" class="float-right cursor-pointer bg-primary text-secondary px-4 py-1 rounded-full">
                Ikuti
            </span>
              <div class="px-3" v-if="usernameIg">
                <a class="text-primary" :href="`https://instagram.com/${usernameIg}`">
                  <img src="/instagram.png" class="h-8 w-8">
                </a>
            </div>
                        
                          
                     
            </div>
            
                  
            </div>
      <div class="w-full pr-4 -mt-2">
          <span class="text-sm">
            <nuxt-link class="text-primary cursor-pointer" :to="localePath('/@'+group.owner.username)" >@{{group.owner.username}}</nuxt-link>
          </span>
        <nuxt-link :to="localePath('/followed/group/'+group.id)"  class="font-bold mb-2 float-right mr-2">
        <span class="text-primary"> {{ $t('Follower') }}
          {{ group.follower }}</span>
      </nuxt-link>
      </div>
       
          


            <div class=" font-normal text-sm pr-4">
                {{ group.desc }}
            </div>


             <router-link
              v-if="group.user_id == $store.state.user.id"
                :to="`/edit/group/${group.username}`" class="text-sm ml-auto cursor-pointer bg-theme_primary_dark px-4 py-1 rounded-full text-primary">
                        Edit Group
              </router-link>

            
            
          </div>

      
            
        </div>

        
           
      </div>
    </section>


    
      <new-quest v-on:kirim="newQuest"  :group="group" />

      <balas-quest v-if="balas_quest"  v-on:batal="balas_quest = false" :quest="balas_quest" />



       <div class="p-2 flex flex-row" style="overflow-x:scroll">




     <div
        :class="(filter == 'New') ? filterClassActive : filterClass"
        @click="filter = 'New';getData()"
      >
          Terbaru
      </div>

   


      <div
        :class="(filter == 'Event') ? filterClassActive : filterClass"
        @click="filter = 'Event';getData()"

      >
          Acara
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
  data() {
    return {
      filterClassActive: "cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-full rounded-tl-none flex text-sm items-center justify-center p-2",
      filterClass: "cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",
      group: "",
      quest: "",
      search: "",
      filter: "New",
      balas_quest: '',
      page: 1,
      usernameIg: '',
      feedIg: [],
      followTemp: false
    };
  },
  fetch() {

    
    this.$axios.$get("/group/" + this.$route.params.url).then(data => {
      this.group = data;
      if(!this.group.id){
      // alert(data)
        this.$router.push(this.localePath("/search?keyword="+this.$route.params.url))
      }
      
      this.getData()


      if(this.group.instagram){
        if(this.group.instagram.includes("@"))
        {
          this.usernameIg = this.group.instagram.substring(1)
          // this.cekIgData()
        }else{
          this.usernameIg = this.group.instagram
          // this.cekIgData()
        }
      }
      
   
   
   });

  },
  methods:{
    unFollow(id){
         this.$axios.get("/group/unfollow/"+id)
          .then(res => {
              this.followTemp = false
              this.group.followed = false
          })
    },
     followGroup(id){
      this.$axios.get("/group/follow/"+id)
        .then(res => {
            this.followTemp = true
        })
    },
    loadMoregetData($state){
        this.page = this.page+1
        this.$axios.$get("/group/quest/" + this.group.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page)
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
      this.$axios.$get("/group/quest/" + this.group.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page).then(data => {
        // console.log(data)
        this.quest = data;
      });
    }
  }
};
</script>