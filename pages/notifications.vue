<template>
<section class="w-full pb-10 px-4 mb-20  mt-4">

            
    <div class="mx-auto text-sm flex mb-5">
            
        <h1 class=" font-bold flex">{{ $t('Notif')}} </h1>
          <nuxt-link :to="localePath('/search')" class="ml-auto  text-primary font-bold">
          <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          </svg>
        </nuxt-link>
        
    </div>


        <div v-for="(n,index) in notif" :key="index" class="w-full flex flex-wrap border-b border-theme_primary_light rounded-lg
        hover:bg-theme_primary_light
         my-2">
            
            
            <div @click="balas_quest = n.for_balasan" class="w-full mb-1  rounded-lg flex flex-wrap">
              
                <div class="w-full">
                        
                        <span class=" float-left  pl-1 text-xs"> 
                                <nuxt-link class="text-primary" :to="localePath('/@'+n.username)">
                                <img class=" float-left rounded-xl h-8 w-8 -mt-1 mx-1" :src="n.avatar" alt="Avatar">
                                {{n.name}}</nuxt-link>
                                
                                <span v-if="n.tipe == 1" > <span v-if="n.total > 1">dan {{ n.total}} lainnya</span> menyukai quest anda</span>
                                <span v-if="n.tipe == 2" > membalas</span>
                                <span v-if="n.tipe == 3" > menandai anda </span>
                                <span v-if="n.tipe == 6" > mengikuti Anda</span>
                                : 
                        </span>
                </div>
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
                        class="w-full  flex flex-wrap py-2  text-theme_secondary "
                        >
                        <audio :src="n.audio" controls />
                        
                        </div>
                   <blockquote v-if="n.text" class=" text-xs opacity-50 w-full">
                         " {{ n.text.substring(0, 50) }} ... "
                   </blockquote>
                </span>
                 <nuxt-link :to="localePath('/quest/'+n.quest_id)" v-else class="pl-8  text-sm  p-1 mb-1 rounded-sm" >
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