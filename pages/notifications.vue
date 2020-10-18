<template>
<section class="w-full pb-10 px-4 mb-20">
        <h1 class=" font-semibold p-2 mb-3 flex">{{ $t('Notif')}} </h1>

      

        <div v-for="(n,index) in notif" :key="index" class="w-full flex flex-wrap border-b border-theme_primary_light rounded-lg
        hover:bg-theme_primary_light
         my-2">
            
            
            <nuxt-link :to="n.link" class="w-full mb-1  rounded-lg flex flex-wrap">
              

                <img class=" float-left rounded-xl h-8 w-8 -mt-1" :src="n.avatar" alt="Avatar">
                <span class=" float-left  pl-1"> 
                        <nuxt-link class="text-primary" :to="'/@'+n.username">@{{n.username}}</nuxt-link>
                        <span v-if="n.tipe == 1" > <span v-if="n.total > 1">dan {{ n.total}} lainnya</span> menyukai quest anda</span>
                        <span v-if="n.tipe == 2" > membalas quest anda</span>
                        <span v-if="n.tipe == 3" > menandai anda di sebuah quest</span>
                        <span v-if="n.tipe == 6" > mengikuti Anda</span>
                        :
                </span>
                <span v-if="n.tipe == 2" class="text-sm  p-1 mb-1 rounded-sm">
                   {{ n.balasan }}
                </span>
                 <span v-else class=" text-sm  p-1 mb-1 rounded-sm">
                   {{ n.text.substring(0, 150) }} ...
                </span>
               
            </nuxt-link>
        </div>



        <router-link to="/users/explore" class="bg-theme_primary_light mb-3 rounded-full flex justify-center text-center font-bold text-md p-2 px-4 w-full">
              Ikuti Seseorang
        </router-link>

          <nuxt-link to="/groups-explore" class="bg-theme_primary_light mb-3 rounded-full flex justify-center text-center font-bold text-md p-2 px-4 w-full">
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
                last_page: false
          }
  },


  methods:{
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