<template>
<div class="w-full flex flex-wrap relative">
        <h1 class="font-bold text-left text-xl p-2 px-4 w-full">
                Donasi
        </h1>

        <div class="p-2 flex flex-row bg-theme_primary_dark rounded-xl" style="overflow-x:scroll">
                <div v-for="quest in donations" :key="quest.id" class="cursor-pointer w-full relative mx-1  rounded-xl flex items-center justify-center" >
                        <card-post  donasi="true" :data="quest"  style="min-width:320px" />
                </div>   
                  <div v-if="donations" class="cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center" >
                          Lihat Donasi Lainnya 
                </div>   
                  <div v-else class="cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center" >
                       Tidak Ada Donasi
                </div> 
        </div>


        <h1 class="font-bold text-left text-xl p-2 px-4 w-full">
                Acara
        </h1>

        <div  class="p-2 flex flex-row bg-theme_primary_dark rounded-xl" style="overflow-x:scroll">
                <div v-for="quest in events" :key="quest.id" class="cursor-pointer w-full relative mx-1  rounded-xl flex items-center justify-center" >
                        <card-post  donasi="true" :data="quest"  style="min-width:320px" />
                </div>   
                <div v-if="events" class="cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center" >
                          Lihat Acara Lainnya 
                </div>   
                 <div v-else class="cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center" >
                       Tidak Ada Acara
                </div>   
        </div>


        
        <h1 class="font-bold text-left text-xl p-2 px-4 w-full">
               Loker
        </h1>

        <div class="p-2 flex flex-row bg-theme_primary_dark rounded-xl" style="overflow-x:scroll">
                <div v-for="quest in donations" :key="quest.id" class="cursor-pointer w-full relative mx-1  rounded-xl flex items-center justify-center" >
                        <card-post  donasi="true" :data="quest"  style="min-width:320px" />
                </div>   
                <div v-if="events" class="cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center" >
                          Lihat Loker Lainnya 
                </div>   
                 <div v-else class="cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center" >
                       Tidak Ada Loker
                </div>   
        </div>


        
        <h1 class="font-bold text-left text-xl p-2 px-4 w-full">
              Cari Teman
        </h1>

        <div class="p-2 flex flex-row bg-theme_primary_dark rounded-xl" style="overflow-x:scroll">
                <div v-for="quest in events" :key="quest.id" class="cursor-pointer w-full relative mx-1  rounded-xl flex items-center justify-center" >
                        <card-post  donasi="true" :data="quest"  style="min-width:320px" />
                </div>   
                <div  class="cursor-pointer px-6 font-bold text-xl relative mx-1 bg-primary text-secondary rounded-xl flex items-center justify-center" >
                          Lihat Saran Lainnya 
                </div>
        </div>
        
        <section class="w-full mb-20 pb-20 ">
                <ul>
                        <li class="w-full flex flex-wrap relative justify-center">
                        <a class="text-center mt-4 w-full font-bold p-2 px-6 rounded-full bg-theme_primary_dark text-primary" target="_BLANK" href="https://trello.com/b/cEeYmDi1/aplikasi-maba">

                                Pengembangan Aplikasi
                        </a>
                        <a class="text-center mt-4 w-full font-bold p-2 px-6 rounded-full bg-primary text-secondary" target="_BLANK" href="https://saweria.co/akew">
                        Dukung Kami :)
                        </a>
                                        
                </li>
                
                        
                </ul>


        </section> 


          
</div>
        
</template>


<script>
export default {
  layout: 'no-header',
  middleware: 'auth',
  data(){
          return{
                  donations: '',
                  events: ''
          }
  },
  mounted(){
     this.$axios.get("/donations")
        .then(res => {
                this.donations = res.data
                // console.log(res);
        })
     
        this.$axios.get("/events")
        .then(res => {
                this.events = res.data
                // console.log(res);
        })
  }
}
</script>