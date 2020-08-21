<template>
<div class="w-full" v-if="group">

    <section>

            <div class="w-full flex flex-wrap bg-theme_primary p-2 ">

            <div class="w-full font-bold flex px-2 "> 
                <img class="w-10 h-10  rounded-full" :src="$store.state.storage+group.avatar" :alt="group.name">

                <div class="w-full pl-5 mt-1 flex flex-wrap items-start ">
                    
                    <div class="w-full text-xl lg:text-2xl mb-2">
                        {{ group.name }}
                        <br>
                       <small>@{{ group.username }}</small> 
                    </div>
                </div>

            </div>
        </div>
    </section>
   
         
            <section class="w-full rounded-xl pb-20 ">
            
                        <div class="w-full p-2 relative cursor-default" v-for="i in 10" :key="i"> 
                                  <div class="border-b rounded-lg border-bg-theme_primary_light bg-theme_primary_light hover:bg-theme_primary px-2 pb-5 ">
                                        <router-link class="p-1 px-4 bg-theme_primary_light rounded-tl-xl rounded-br-xl text-xs" to="#ombus2020" >#ombus2020</router-link>
                                        <div class="w-auto flex p-2 "> 
                                            <img class="w-8 h-8 rounded-full" src="/icon.png" alt="Event 1">

                                            <div class="pl-5 flex flex-wrap items-start">
                                            <b class="font-bold">@bemunsil</b>
                                            
                                            <span class="w-full  mb-2">
                                                Kenapa kita bayar UKT Full tapi kuliah Online, Apakah itu bla bla bla.. diskusikan disini ya :)
                                            </span>

                                        
                                        <div 
                                        class="text-xs lg:text-lg text-primary ">
                                        100 Balasan
                                        </div>

                      
                                        <router-link to="/explore?event" class="flex relative ml-auto py-1 px-5 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-default -mr-4 -mb-3">
                                            <svg  width="12px" height="12px"  viewBox="0 0 16 16" class="bi bi-plus-circle mt-1 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                                                <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            </svg>
                                            Balas
                                        <div class="h-5 w-5  lg:h-6 lg:w-6  rounded-xl  bg-primary border-4 border-theme_primary top-0 right-0 absolute -mt-1 -mr-1"></div>
                                        </router-link>

                                                          <div class="flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary mr-4 -mb-3">
                                         
                                            <svg width="12px" height="12px" viewBox="0 0 16 16" class="bi bi-heart-fill mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                                </svg>
                                           Bagikan
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
            </section>
</div>
        
</template>

<script>
export default {
    layout: 'app',
    middleware: 'auth',
    data(){
        return{
            group : ''
        }
    },
    fetch(){
        this.$axios.$get("/group/"+this.$route.params.username)
            .then(data => {
                this.group = data
            })
    }
}
</script>

