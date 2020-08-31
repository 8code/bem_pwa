<template>


  <div class="w-full flex justify-center  flex-wrap" v-if="$store.state.media_player">




          <button :class="!$store.state.topMenu ? 'hidden' : ''"  @click="$store.commit('setShowMediaPlayer',true)" class="
          bg-primary text-secondary p-3 left-0 rounded-full fixed bottom-0 ml-5 z-30 mb-16 lg:ml-20 flex  lg:px-5
          ">
                 <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    </svg>
                    <span class="p-1 font-bold hidden lg:block">Lihat </span>

          </button>
      



    <div 
   :class="($store.state.show_media_player) ? 'block' : 'hidden'">

  <div 
  
    class="fixed max-w-lg mx-auto h-screen mb-20 inset-x-0 px-4 pb-4 sm:inset-0 flex flex-wrap items-center content-center justify-center z-50"
   >

      <div class="fixed inset-0 transition-opacity cursor-pointer" @click="$store.commit('setShowMediaPlayer',false)">
          <div class="absolute inset-0 bg-gray-500 opacity-50"></div>
      </div>

          <div class="rounded-lg overflow-hidden  transform transition-all w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

                     <!-- Spotify -->
              <div class="videoWrapper">
                    <iframe  v-if="cekSumber($store.state.media_player) == 'spotify'" :src="$store.state.media_player" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                      <!-- Youtube -->
                  <iframe  v-if="cekSumber($store.state.media_player) == 'youtube'" width="560" height="315" :src="$store.state.media_player+'?autoplay=1'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>
         
          </div>

          <button @click="$store.commit('setShowMediaPlayer',false)" class="mx-2 flex text-white bg-primary z-50 p-2 px-8 rounded-full mt-3">
             
                <span class="p-1 px-2 -mt-1">Tutup</span>
          </button>
            <button @click="$store.commit('resetMediaPlayer',true)" class="mx-2 flex text-white bg-danger z-50 p-2 px-8 rounded-full mt-3">
            
                <span class="p-1 px-2 -mt-1">Hapus</span>
          </button>
    </div>

  
    </div>


    


  </div>
</template>
<script>
export default {
  methods:{
       cekSumber(str){
            console.log(str);
            if(str.search("spotify") > 0){
                return "spotify";
            }else if(str.search("youtube") > 0){
                return "youtube";
            }
        }
  }
}
</script>