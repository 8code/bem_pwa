<template>
<section class="w-full pb-10 p-4">
        <h1 class="text-2xl font-bold p-2 mb-3">Aktivitas</h1>
        <div v-for="(n,index) in notif" :key="index" class="w-full flex flex-wrap border-b border-theme_primary_light">
            
            <nuxt-link :to="n.link" class="w-full mb-1 p-2 bg-theme_primary_light hover:bg-theme_primary_dark rounded-lg">
                 <div class="flex bg-theme_primary p-1 mb-1 rounded-sm">
                    Quest : {{ n.text.substring(0, 20) }}
                </div>

                <img class=" float-left rounded-xl" width="30px" height="30px" :src="n.avatar" alt="Avatar">
                <span class=" float-left text-md pl-1" v-for="(tx,i) in textToArray(n.activity)" :key="i"> 
                        <nuxt-link class="text-primary" v-if="(tx.slice(0, 1) == '@')" :to="'/'+tx"> {{tx}}</nuxt-link>
                        <span v-else> {{tx}} </span>
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
  created(){
          

        Notification.requestPermission().then(function(result) {
                console.log(result);
        });
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