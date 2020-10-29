<template>
<section class="w-full pb-10 px-4 mb-20  mt-4">
        <h1 class=" font-bold mb-5 flex">{{ $t('Notif')}} 


        <nuxt-link to="/messages" class="ml-auto flex w-auto text-primary">
        
        <svg width="1.5em" height="1.5em"  viewBox="0 0 16 16" class="bi bi-chat-text-fill text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
          </svg>

         <span class="px-2"> {{ $t("messages")}}</span>
          
          </nuxt-link>
        </h1>


        <div v-for="(n,index) in notif" :key="index" class="w-full flex flex-wrap border-b border-theme_primary_light rounded-lg
        hover:bg-theme_primary_light
         my-2">
            
            
            <div @click="balas_quest = n.for_balasan" class="w-full mb-1  rounded-lg flex flex-wrap">
              

                <img class=" float-left rounded-xl h-8 w-8 -mt-1" :src="n.avatar" alt="Avatar">
                <span class=" float-left  pl-1"> 
                        <nuxt-link class="text-primary" :to="localePath('/@'+n.username)">{{n.name}}</nuxt-link>
                        <span v-if="n.tipe == 1" > <span v-if="n.total > 1">dan {{ n.total}} lainnya</span> menyukai quest anda</span>
                        <span v-if="n.tipe == 2" > membalas</span>
                        <span v-if="n.tipe == 3" > menandai anda </span>
                        <span v-if="n.tipe == 6" > mengikuti Anda</span>
                        :
                </span>
                <nuxt-link :to="`@${n.username}`" v-if="n.tipe == 6"  
                class="bg-success px-5 py-1 text-white rounded-lg ml-auto cursor-pointer">
                       Lihat Profil
                </nuxt-link>

                <span v-if="n.tipe == 2" class="w-full text-sm flex flex-wrap p-1 mb-1 rounded-full pl-8">
                   {{ n.balasan }}

                      <div 
                        class="mr-3 bg-primary px-5 py-1 text-white rounded-full ml-auto cursor-pointer">
                         Balas
                        </div>
                        <br>
                        

                        <div
                        v-if="n.audio"
                        class="w-full  flex flex-wrap p-2  text-theme_secondary "
                        >
                        <audio :src="n.audio" controls />
                        
                        </div>
                   <blockquote v-if="n.text" class="text-xs opacity-50 w-full">
                         " {{ n.text.substring(0, 50) }} ... "
                   </blockquote>
                </span>
                 <nuxt-link :to="localePath('/quest/'+n.quest_id)" v-else class=" text-sm  p-1 mb-1 rounded-sm" >
                  <span v-if="n.text"> {{ n.text.substring(0, 50) }} ... </span>
                </nuxt-link>
               
            </div>
        </div>


      <balas-quest v-if="balas_quest"  v-on:batal="balas_quest = false" :quest="balas_quest" />



        <router-link :to="localePath('/users/explore')" class="bg-theme_primary_light mb-3 rounded-full flex justify-center text-center font-bold text-md p-2 px-4 w-full">
              Ikuti Seseorang
        </router-link>

          <nuxt-link :to="localePath('/groups-explore')" class="bg-theme_primary_light mb-3 rounded-full flex justify-center text-center font-bold text-md p-2 px-4 w-full">
              Ikuti Sebuah Grup
        </nuxt-link>

        
          <infinite-loading @infinite="loadMoregetData">
                <div slot="no-more"></div>
                <div slot="no-results"></div>

          </infinite-loading>


</section>
        
</template>


<script>

import InfiniteLoading from 'vue-infinite-loading';

export default {
   components: {
    InfiniteLoading,
  },
  layout: 'no-header',
  middleware: 'auth',
  data(){
          return {
                notif: '',
                page: 1,
                loadMore: false,
                last_page: false,
                balas_quest: ''
          }
  },


  methods:{
        followUser(id){
        this.$axios.get("/user/follow/"+id)
                .then(res => {

                this.$store.commit("setNotif",{
                to: id,
                text: "@"+this.$store.state.user.username+" Mengikuti anda"
                })
                        
                })
        },
            textToArray(text){
            
            let str =  text.toString()
            let forReplace = []
            
            return str.split(" ");
        },
          loadMoregetData($state){
                this.page = this.page+1
                       this.$axios.get("/notifications?page="+this.page)
                        .then(res => {
                                if(res.data.length > 0){
                                        $state.loaded()
                                        let tempp = Object.values(this.notif)
                                        this.notif = tempp.concat(res.data)
                                }else{
                                        $state.complete()
                                        
                                }
                        })
                        
        },
        getData(){
                this.$axios.get("/notifications?page="+this.page)
                        .then(res => {
                                this.notif = res.data
                        })
        }
  },
  created(){

       this.page = 1
       this.getData()

  }
}
</script>