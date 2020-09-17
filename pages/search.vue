<template>
    <div>

         <!-- <div class="mx-auto text-sm flex  px-2">
                    <nuxt-link to="/" class="px-5 bg-theme_primary_dark text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 py-2  rounded-full font-bold"> {{ $t("Home")}} </nuxt-link>
                    <nuxt-link to="/explore" class=" bg-theme_primary_dark px-5 text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 py-2  rounded-full font-bold">
                    {{ $t("Explore")}} 
                    </nuxt-link>
                    <nuxt-link to="/search" class="px-5 mx-1  py-2  bg-primary text-white rounded-full font-bold ml-auto">
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>
                    </nuxt-link>
                    
                </div> -->
                
       <div class="p-4">
        <input
          type="text"
          class="w-full py-2 px-5 rounded-full bg-theme_primary_dark"
          placeholder="Ketikan Sesuatu"
          v-model="search"
          @keyup.enter="getData"

        />

  <div class="py-3 flex flex-row" style="overflow-x:scroll">
      
    
            <div
                :class="(filter.type == type) ? classNameActive : className"
                >
                 <div class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"></div>
              Quest
            </div>

              <div
                :class="(filter.type == type) ? classNameActive : className"
                >
                 <div class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"></div>
              Group
            </div>

            <div
                :class="(filter.type == type) ? classNameActive : className"
                >
                 <div class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"></div>
              Pengguna
            </div>




        </div>
      </div>
    </div>
</template>
<script>
export default {
     layout: "no-header",
     middleware: "auth",
     data(){
         return {
             search: '',
             className: 'cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2',
            classNameActive: "cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",
            data: "",
            filter:{
                type: '',
                search: '',
                page: 1
            },
            loadMore: false
         }
     },
     methods:{
         getData(){}
     }
}
</script>