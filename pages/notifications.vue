<template>
<section class="w-full pb-10 px-4">
        <h1 class="text-2xl font-semibold p-2 mb-3 flex">{{ $t('Notif')}}

                  <!-- <button class="ml-auto font-semibold">
                        pesan
                </button> -->
        </h1>

      

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
                <span v-if="n.tipe == 2" class="font-bold text-sm  p-1 mb-1 rounded-sm">
                   {{ n.balasan }}
                </span>
                 <span v-else class="font-bold  text-sm  p-1 mb-1 rounded-sm">
                   {{ n.text.substring(0, 200) }}
                </span>
               
            </nuxt-link>
        </div>

          <infinite-loading @infinite="loadMoregetData">

              <div slot="no-more" class="text-center flex w-full p-4"> ... </div>

          </infinite-loading>


          <h1 v-if="userPopuler" class="font-bold text-left text-xl p-2 px-4 w-full">
              Cari Teman
        </h1>

        <div v-if="userPopuler" class="p-2 flex flex-row bg-theme_primary_dark rounded-xl mb-20" style="overflow-x:scroll">
                <div  v-for="q in userPopuler" :key="q.id" class="cursor-pointer w-full relative mx-1  rounded-xl flex items-center justify-center" >
                    <card-user :data="q.user" style="min-width:320px"  />
                </div>   
                <router-link to="/users/explore"  class="cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center" >
                        Lihat Saran Lainnya 
                </router-link>
        </div>

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
  scrollToTop: true,
  data(){
          return {
                userPopuler: '',
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


        this.$axios.get("/user-populer")
        .then(res => {
          this.userPopuler = res.data
        })

  }
}
</script>