<template>
  <div class="w-full" v-if="group">


    <section>
      <div class="w-full flex flex-wrap bg-theme_primary p-2 pt-6 rounded-xl ">
        <div class="w-full font-bold flex ">
          <img
           
            class="w-16 h-16  rounded-full"
            :src="group.avatar"
            :alt="group.name"
          />

          <div class="w-full pl-5 mt-1 flex flex-wrap items-start ">
            <div class="w-full text-xl lg:text-2xl mb-2">
              {{ group.name }}  
              <br> <small class="text-primary">#{{ group.username }}</small>
              <br />
              <span class="text-sm">
                Admin : 
                <nuxt-link class="text-primary cursor-pointer" :to="'/@'+group.owner.username" >@{{group.owner.username}}</nuxt-link>
              </span>


            <div class="float-right text-sm -mt-12">
              
                            <div v-if="group.followed">
                                <span  class="float-right cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full">
                                  Diikuti
                              </span>
                            </div>
                            <div v-else >
                                      <span v-if="!followTemp" @click="followGroup(group.id)" class="cursor-pointer bg-primary px-4 py-1 rounded-full text-secondary">
                                          Ikuti
                                      </span>
                                      <span v-if="followTemp" class="fursor-pointer bg-secondary text-primary px-4 py-1 rounded-full">
                                        Diikuti
                                    </span>
                            </div>
                      <router-link
                      v-if="group.user_id == $store.state.user.id"
                       :to="`/edit/group/${group.username}`" class="float-right  mt-4  cursor-pointer bg-theme_primary_dark px-4 py-1 rounded-full text-primary">
                                Edit Group
                      </router-link>
            </div>
                  
            </div>

            <div class=" font-normal">
                {{ group.desc }}
            </div>

            
            
          </div>

      
            
        </div>

        
            <div class="px-3 w-full" v-if="usernameIg">
                <a class="text-primary" :href="`https://instagram.com/${usernameIg}`">
                  <img src="/instagram.png" class="h-10 w-10 p-2">
                </a>
            </div>
      </div>
    </section>


    
      <new-quest v-on:kirim="newQuest"  :group="group" />

      <balas-quest v-if="balas_quest"  v-on:batal="balas_quest = false" :quest="balas_quest" />



       <div class="p-2 flex flex-row" style="overflow-x:scroll">




     <div
        :class="(filter == 'Quest Only') ? filterClassActive : filterClass"
        @click="filter = 'Quest Only';getData()"
      >
        <div
          class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"
        ></div>
          Quest
      </div>

      <div
        :class="(filter == 'Event') ? filterClassActive : filterClass"
        @click="filter = 'Event';getData()"

      >
      
      <div
          class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"
        ></div>
          Event
      </div>


      
     <div
        :class="(filter == 'Produk') ? filterClassActive : filterClass"
        @click="filter = 'Produk';getData()"

      >
        <div
          class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"
        ></div>
          Produk
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
      
      filterClassActive: "cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",
      filterClass: "cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",
      group: "",
      quest: "",
      search: "",
      filter: "Quest Only",
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
        this.$router.push("/search?keyword="+this.$route.params.url)
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