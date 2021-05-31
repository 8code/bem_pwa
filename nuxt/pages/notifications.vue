<template>
<section class="w-full pb-10 px-4 mb-20  mt-4">

            
    <div class="mx-auto text-sm flex mb-5">
            
        <h1 class=" font-bold flex">{{ $t('Notif')}} </h1>
          <nuxt-link :to="localePath('/msg')" class="ml-auto  text-primary font-bold">
         <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
        </nuxt-link>
        
    </div>


        <div v-for="(n,index) in notif" :key="index" class="w-full flex flex-wrap border-b border-theme_primary_light rounded-lg
        hover:bg-theme_primary_light
         my-2">
            
            
            <div  class="w-full mb-1  rounded-lg flex flex-wrap">
              
                <div class="w-full">
                        
                        <span class=" float-left  pl-1 text-xs"> 
                                <nuxt-link class="text-primary" :to="localePath('/@'+n.username)">
                                <img class=" float-left rounded-xl h-8 w-8 -mt-1 mx-1" :src="$getImage(n.avatar)" alt="Avatar">
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
                   
                   
                   <nuxt-link :to="localePath('/quest/'+n.quest_balas_id)" >
                     {{ n.balasan }}
                   </nuxt-link>

                      <div 
                         @click="balas_quest = n.for_balasan"
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
                        <nuxt-link :to="localePath('/quest/'+n.quest_id)" >
                                
                                " {{ n.text.substring(0, 50) }} ... "
                        </nuxt-link>
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