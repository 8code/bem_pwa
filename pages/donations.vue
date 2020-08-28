<template>
<div class="w-full">
            <!-- Content -->
            <section class="w-full rounded-xl pb-5">
<h1 class="text-xl text-center mt-5 font-bold">
    Cooming Soon
</h1>
                 
                    <div class="w-full flex flex-wrap">

                                <div class="w-full flex flex-wrap font-semibold">
                                        <div class="w-full p-2 relative" v-for="i in 3" :key="i"  > 
                                             <div class="neu-out bg-theme_primary rounded-xl p-2 " style="min-height:280px;max-width:600px">
                                                <h1 class="w-full font-semibold px-4 py-3 pb-5 flex"> 
                                                    #covid19
                                                </h1>
                                                <div class="w-full bg-theme_primary_light rounded-xl" style="filter: brightness(30%);">
                                                        <div class="w-full rounded-xl absolute" :style="`height:200px;
                                                         background-image: url('/sample/donasi-${i}.jpg')
                                                        `"  >
                                                        
                                                        </div>
                                                </div>
                                                <div class="w-full font-bold px-4 py-3 flex flex-wrap items-center relative text-gray-200 "> 
                                                    <span class="w-full text-2xl px-2">Long Name Of donasi - Long Name Example Title donasi </span>
                                                    <span class="w-full text-sm md:text-xl  flex py-4">
                                                        <div class="h-6 w-6 rounded-full shadow-lg bg-primary mr-3"></div>
                                                        <span class="-mt-1">Group Name</span>
                                                    </span>
                                                </div>
                                               <div class="px-2 relative flex flex-wrap  text-gray-200 font-bold ">
                                                
                                                <router-link to="/explore?donasi" 
                                                    class="text-xs md:text-lg md:px-6 text-primary absolute bottom-0 left-0 pl-2 pb-1">
                                                    1000 Join
                                                    </router-link>

                                                    <router-link to="/explore?donasi" class="relative ml-auto py-2 px-8 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary -mr-4 -mb-2">
                                                    Join donasi
                                                         <div class="h-5 w-5  md:h-6 md:w-6  rounded-xl  bg-success border-4 border-theme_primary top-0 right-0 absolute -mb-1 -mr-1"></div>
                                                   
                                                    </router-link>

                                                      
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
  layout: 'no-header',
  middleware: 'auth'
}
</script>