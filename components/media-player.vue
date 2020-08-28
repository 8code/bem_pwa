<template>


  <div class="w-full flex justify-center  flex-wrap" v-if="$store.state.media_player">




          <div  @click="$store.commit('setShowMediaPlayer',true)" class="fixed z-50  text-primary cursor-pointer opacity-75 hover:opacity-100 right-0  mr-3 flex bg-theme_primary_dark
          
          px-3 p-1 rounded-xl">
                 <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    </svg>
                    <span class="p-1 font-bold">Lihat </span>

          </div>
      



    <div 
   :class="($store.state.show_media_player) ? 'block' : 'hidden'">

  <div 
  
    class="fixed bottom-0 mb-20 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50"
   >

      <div class="fixed inset-0 transition-opacity cursor-pointer" @click="$store.commit('setShowMediaPlayer',false)">
          <div class="absolute inset-0 bg-gray-500 opacity-50"></div>
      </div>

        <div class="rounded-lg overflow-hidden  transform transition-all sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            

       <!-- Spotify -->
              <div class="videoWrapper">
                    <iframe  v-if="cekSumber($store.state.media_player) == 'spotify'" :src="$store.state.media_player" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                      <!-- Youtube -->
                  <iframe  v-if="cekSumber($store.state.media_player) == 'youtube'" width="560" height="315" :src="$store.state.media_player+'?autoplay=1'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>
         
          </div>
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