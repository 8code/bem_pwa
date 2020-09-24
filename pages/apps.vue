<template>
<div class="w-full flex flex-wrap relative justify-center p-4">
<!-- Content -->

       <!-- <div :class="!$store.state.topMenu ? 'hidden' : ''" class="fixed bottom-0 mb-20 flex"> -->
           
       <!-- </div> -->

        <section class="w-full ">
            
                <!-- <h1 class="text-4xl w-full text-center">Coming Soon </h1> -->
                <ul>
                        <li class="flex flex-wrap">
                                <h1 class="w-full p-2 font-bold">Events</h1>
                                <div v-for="i in 2" :key="i" class="w-1/2 p-1 relative">
                                        <img class="rounded-xl z-20 opacity-50" :src="`/sample/event-${i}.jpg`" alt="Event">
                                        <span class="absolute bottom-0 mb-5 mx-2 font-bold bg-theme_primary px-2 rounded-full">Nama Event</span>
                                </div>
                        </li>
                        <li class="flex flex-wrap">
                                <h1 class="w-full p-2 font-bold">Donasi</h1>
                                <div v-for="i in 2" :key="i" class="w-1/2 p-1 relative">
                                        <img class="rounded-xl z-20 opacity-50" :src="`/sample/donasi-${i}.jpg`" alt="Donasi">
                                        <span class="absolute bottom-0 mb-5 mx-2 font-bold bg-theme_primary px-2 rounded-full">Nama Donasi</span>
                                </div>
                        </li>
                            <li class="flex flex-wrap">
                                <h1 class="w-full p-2 font-bold">Cari Teman</h1>
                                <div v-for="i in 2" :key="i" class="w-1/2 p-1">
                                        <img class="rounded-xl" :src="`/sample/group-${i}.jpg`" alt="Group">
                                </div>
                        </li>
                        <li class="w-full flex flex-wrap relative justify-center p-4">
                        <a class="mx-2 text-center mt-4 w-full font-bold p-2 px-6 rounded-full bg-theme_primary_dark text-primary" target="_BLANK" href="https://trello.com/b/cEeYmDi1/aplikasi-maba">
        
                                Pengembangan Aplikasi
                        </a>
                        <a class="mx-2 text-center mt-4 w-full font-bold p-2 px-6 rounded-full bg-primary text-secondary" target="_BLANK" href="https://saweria.co/akew">
                        Dukung Kami :)
                        </a>
                                        
                        </li>
                    
                        
                </ul>

                
                <!-- <div class="w-full flex flex-wrap">
                        
                    <div class="flex flex-wrap bg-primary text-secondary rounded-xl text-center my-3 py-3 w-full">
                                <h1 class="w-full p-2 font-bold">Catatan Keuangan</h1>
                        </div>
                          <div class="flex flex-wrap bg-primary text-secondary rounded-xl text-center my-3 py-3 w-full">
                                <h1 class="w-full p-2 font-bold">Fun Game</h1>
                        </div>
                </div> -->



        </section>


          
</div>
        
</template>


<script>
export default {
  layout: 'no-header',
  middleware: 'auth'
}
</script>