<template>
<section class="w-full pb-10 px-4">
        <h1 class="text-2xl font-semibold p-2 mb-3 flex">{{ $t('Notif')}}

                  <button class="ml-auto font-semibold">
                        pesan
                </button>
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
         <span v-if="loadMore" class="p-4 text-center w-full">
        Memuat ...
      </span>
</section>
        
</template>


<script>
export default {
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
  methods:{
            textToArray(text){
            
            let str =  text.toString()
            let forReplace = []
            
            return str.split(" ");
        },
          loadMoregetData(){
                this.loadMore = true
                this.page = this.page+1
                       this.$axios.get("/notifications?page="+this.page)
                        .then(res => {
                                if(res.data.length > 0){
                                        let tempp = Object.values(this.notif)
                                        this.notif = tempp.concat(res.data)
                                }else{
                                        this.last_page = true
                                }
                                this.loadMore = false
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