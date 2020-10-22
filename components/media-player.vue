<template>


  <div class="w-full flex justify-center flex-wrap" v-if="media_player">




          <button  @click="$store.commit('setShowMediaPlayer',true)" class="
          bg-primary text-secondary p-3 left-0 rounded-full fixed bottom-0 ml-5 z-30 mb-16 lg:ml-20 flex  lg:px-5
          ">
          <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-pause" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
          </svg>
                    <span class="p-1 font-bold hidden lg:block">Lihat </span>

          </button>
      



    <div 
   :class="($store.state.show_media_player) ? 'block' : 'hidden'"
   
   >

  <div 

    class="fixed max-w-xl mx-auto min-h-screen  bg-gray-900 mb-20 inset-x-0 px-4 pb-4 sm:inset-0 flex flex-wrap pt-4 justify-center z-30 overflow-y-scroll"
    
   >

      <div class="fixed inset-0 transition-opacity bg-gray-900 cursor-pointer " @click="$store.commit('setShowMediaPlayer',false)">
          <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>

          <div class="rounded-lg overflow-hidden  transform transition-all w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

                    
              <div class="videoWrapper" v-if="playing.embed">
                      <!-- Spotify -->
                     <iframe  v-if="cekSumber(media_player) == 'spotify'" :src="media_player+'?autoplay=1'" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                      <!-- Youtube -->
                     <iframe  v-if="cekSumber(media_player) == 'youtube'" width="560" height="315" :src="media_player+'?autoplay=1'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>

              
               <div class="videoWrapper" v-if="playing.video">

                  <Media 
                    class="rounded-xl"
                    :kind="'video'"
                    :isMuted="(true)"
                    :src="[playing.video]"
                    :autoplay="true"
                    :controls="true"
                    :loop="true"
                    :ref="'fish'"
                    :style="{width: '100%'}"
                    />
              </div>


              

            <div class="flex flex-wrap z-50 w-full p-2"  @click="hideModal">

                <nuxt-link class="font-bold text-lg py-2 text-primary"  :to="localePath(`@${playing.user.username}`)" >
                  {{ `@${playing.user.username}` }}
                </nuxt-link>
              
                <nuxt-link :to="localePath(`/quest/${playing.id}`)" class="w-full  text-sm" >
                      <span v-for="(tx,i) in textToArray(playing.text)" :key="i"> 
                          
                          <nuxt-link class="text-primary" v-if="(tx.slice(0, 1) == '@')" :to="localePath('/'+tx)"> {{tx}} </nuxt-link>
                          <nuxt-link class="text-primary" v-else-if="(tx.slice(0, 1) == '#')" ::to="localePath('/'+tx.substring(1))"> {{tx}} </nuxt-link>
                          <span v-else> {{tx}} </span>

                      </span>
                  </nuxt-link>
                    
            </div>
            

            
            <div class="flex flex-wrap z-50 float-right">
            


              <div class=" px-2">
                  <!-- <button class="text-white flex float-left rounded-full p-2 ">
                  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                  </svg>
                   <span class="px-2"> {{ playing.view}}</span>

                </button> -->
              
                <button  @click="followQuest(playing.id)" class="flex float-left rounded-full p-2 "  :class="(playing.followed || followTemp) ? 'text-danger' : 'text-white'">

                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                   <span  class="px-2">
                      {{ (followTemp) ? (parseInt(playing.total_follower) +1) : playing.total_follower }}
                  </span>
                   suka
              </button>



<span  @click="hideModal" >

              <nuxt-link  :to="localePath(`/quest/${playing.id}`)"  class=" flex float-left rounded-full p-2  text-white">


                  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chat-square-dots-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>

                  
                <span class="px-2"> {{ playing.total_qna}}</span> balasan

                 
              </nuxt-link>



</span>


               <a v-if="playing.video" :href="playing.video" download target="_BLANK" 
                class="text-white flex float-left rounded-full p-2 ">
                              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-cloud-download-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
              </svg>
                </a>
              </div>
 

         
          </div>

     <div class="w-full flex justify-center pt-5">
        
                 <button @click="hideModal" class="mx-2 flex text-white bg-primary z-50 p-2 px-8 rounded-full mt-3">
                  
                      <span class="p-1 px-2 -mt-1">Tutup</span>
                </button>
                  <button @click="$store.commit('resetMediaPlayer',true)" class="mx-2 flex text-white bg-danger z-50 p-2 px-8 rounded-full mt-3">
                  
                      <span class="p-1 px-2 -mt-1">Hapus</span>
                </button>
      </div>

           
              
            </div>
    </div>

  
    </div>


    


  </div>
</template>
<script>

import Media from '@dongido/vue-viaudio'

import { mapState } from 'vuex';

export default {
   components: {
    Media
  },
  data(){
    return{
      followTemp: false
    }
  },
  computed: mapState(['playing','media_player']),
  methods:{
      hideModal(){
        this.$store.commit('setShowMediaPlayer',false)
      },
      followQuest(id){
                 this.$axios.get("/quest/follow/"+id)
                        .then(res => {
                                        this.followTemp = true

                        })
        },
      textToArray(text){
            
            let str =  text.toString()
            let forReplace = []
            
            return str.split(" ");
        },
       cekSumber(str){
            // console.log(str);
            if(str.search("spotify") > 0){
                return "spotify";
            }else if(str.search("youtube") > 0){
                return "youtube";
            }
        }
  }
}
</script>