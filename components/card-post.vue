<template>
      <div v-if="data.id" class="w-full p-2 relative cursor-pointer border-b border-theme_primary_light overflow-hidden" > 
                                  <div class="shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-3 " :class="(active) ? 'bg-theme_primary_dark' : ''">

                                        <div v-if="!hideBalasan" class="w-full">
                                        <nuxt-link v-if="data.quest_id" class="p-1 text-xs w-full" :to="'/quest/'+data.quest_id" >
                                   
                                           Membalas :
                                           
                                           <nuxt-link :to="`/quest/${data.quest_id}`" class=" text-primary rounded-xl p-1 px-2">
                                        
                                           <b> @{{ data.membalas_user }}</b>
                                               : 
                                            {{ data.quest.text.substring(0, 20) }} 
                                               
                                            </nuxt-link> 

                                      
                                        </nuxt-link>
                                        </div>

                                            <div v-if="data.group">
                                                <span v-if="data.group.user_id == data.user.id" class="bg-primary px-2 rounded-xl  text-xs text-secondary ">admin</span>   
                                                    <nuxt-link v-if="data.group_id "  class="text-primary p-1 px-4 bg-theme_primary_dark rounded-tl-xl rounded-br-xl text-xs" :to="'/'+data.group.username" >
                                                        
                                                    #{{ data.group.username }} 

                                                    </nuxt-link>
                                            </div>
                                            

                                     
                                        <div class="flex pt-2">

                                            <img class="w-10 h-10 rounded-full" :src="data.user.avatar" alt="Event 1">

                                             <nuxt-link class="p-2"  :to="'/@'+data.user.username">
                                                <span class="font-bold text-lg">{{ data.user.name }}
                                                </span> 
                                             
                                                <span class="text-primary text-xs">@{{ data.user.username }}</span> 
                                            </nuxt-link>

                                            <span class="text-xs ml-auto text-primary_light">
                                            {{ parseQuestDate(data.created_at)}}
                                            </span>


                                        </div>
                                        <div class="w-auto flex "> 

                                            <div class="flex flex-wrap items-start pl-8">
                                               
                                            
                                                    <div v-if="data.embed" class="py-2 w-full media-preview" @click="$store.commit('setMediaPlayer',{data: data,path:$route.path})">
                                                     
                                                        <div v-if="cekSumber(data.embed) == 'youtube'">
                                                            <img src="/youtube.png" alt="logo" class="absolute play-button-youtube">
                                                            <img class="w-full rounded-xl" :src="imgPreview(data.embed)" alt="Preview">
                                                        </div>

                                                         <div v-if="cekSumber(data.embed) == 'spotify'" class="bg-primary justify-beetween text-secondary w-full flex rounded-xl p-3 px-4 h-auto" >
                                                      
                                                            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                                            </svg>
                                                            <span class="p-1 px-2 font-bold">Play Podcast</span>

                                                                
                                                        </div>
                                                    </div>

                                                   <div class="w-full media-preview py-2">
                                                        <img @click="$store.commit('setMediaPlayer',{data: data,path:$route.path})" v-if="data.video" src="/play.svg" alt="logo" class="absolute play-button-youtube text-primary bg-primary rounded-full p-1">
                                                        <img @click="$store.commit('setMediaPlayer',{data: data,path:$route.path})" v-if="data.video" class="w-full rounded-xl" :src="data.thumb">
                                                        <img @dblclick="followQuest(data.id)" v-else class="w-full rounded-xl" :src="data.img">
                                                   </div>
                                              

                                                <nuxt-link v-if="!active"  :to="`/quest/${data.id}`" class="w-full pb-4 text-sm" :class="(bigtext) ? 'text-xl' : ''"  >
                                                    <span v-for="(tx,i) in textToArray(data.text.slice(0, 200)+' ...')" :key="i"> 
                                                        
                                                        <nuxt-link class="text-primary" v-if="(tx.slice(0, 1) == '@')" :to="'/'+tx"> {{tx}} </nuxt-link>
                                                        <nuxt-link class="text-primary" v-else-if="(tx.slice(0, 1) == '#')" :to="'/'+tx.substring(1)"> {{tx}} </nuxt-link>
                                                        <span v-else> {{tx}} </span>

                                                    </span>
                                                </nuxt-link>
                                                 <div v-else class="w-full pb-4 text-sm" :class="(bigtext) ? 'text-xl' : ''"  >
                                                    <span v-for="(tx,i) in textToArray(data.text)" :key="i"> 
                                                        
                                                        <nuxt-link class="text-primary" v-if="(tx.slice(0, 1) == '@')" :to="'/'+tx"> {{tx}} </nuxt-link>
                                                        <nuxt-link class="text-primary" v-else-if="(tx.slice(0, 1) == '#')" :to="'/'+tx.substring(1)"> {{tx}} </nuxt-link>
                                                        <span v-else> {{tx}} </span>

                                                    </span>
                                                </div>


                                            <div class="flex text-right ">

                                            
                                            <nuxt-link :to="`/quest/${data.id}`" 
                                            class="text-xs lg:text-lg text-primary ">
                                            {{ data.total_qna }} Balasan
                                            </nuxt-link>

                            
                                            <div class="flex mx-3">
                                                    <button @click="$emit('balas',data)" class="flex relative ml-auto py-1 px-5 mx-2 rounded-tl-xl rounded-br-xl text-xs text-primary  shadow-sm">
                                                        <svg  width="12px" height="12px"  viewBox="0 0 16 16" class="bi bi-plus-circle mt-1 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                                                            <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                                                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                        </svg>
                                                        Balas
                                                    </button>

                                                    <div @click="followQuest(data.id)" :class="(data.followed || followTemp) ? btnFollowed : btnFollow">
                                                        <svg width="12px" height="12px" viewBox="0 0 16 16" class="bi bi-heart-fill mr-1 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                                            </svg>
                                                            <span v-if="data.followed">
                                                                {{ data.total_follower }}
                                                            </span>
                                                            <span v-else>
                                                                {{ (followTemp) ? (parseInt(data.total_follower) +1) : data.total_follower }}
                                                            </span>
                                                            <span class="px-1" v-if="data.followed">Disukai</span>
                                                            <span v-else>
                                                                <span v-if="!followTemp"  class="px-1">Suka</span>
                                                                <span  class="px-1" v-else>Disukai</span>
                                                            </span>
                                                    </div>


                                            </div>

                                            </div>


                                            
                                    </div>

                                </div>
                            </div>
                        </div>
</template>

<script>

import util from '~/assets/js/util'

export default {
    props:['data','bigtext','active','hideBalasan'],
    data(){
        return{
            btnFollow: 'flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl shadow-sm text-xs text-theme_secondary',
            btnFollowed: 'flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl shadow-sm text-xs text-primary',
            followTemp: false
          
        }
    },
    methods:{
        followQuest(id){
                 this.$axios.get("/quest/follow/"+id)
                        .then(res => {
                                        this.followTemp = true

                        })
        },
        parseQuestDate(data){
            return util.parseQuestDate(data)
        },
        textToArray(text){
            
            let str =  text.toString()
            let forReplace = []
            
            return str.split(" ");
        },
        cekSumber(str){
            if(str.search("spotify") > 0){
                return "spotify";
            }else if(str.search("youtube") > 0){
                return "youtube";
            }
        }
        ,imgPreview(url){
            if(url){
              if(this.cekSumber(url) == 'spotify'){
                let split = url.split("/")
                var res = "https://open.spotify.com/embed-podcast/"+split[3]+"/"+split[4].split("?")[0]

              }else if(this.cekSumber(url) == 'youtube'){
              
               let split = url.split("/")
                var res = `https://img.youtube.com/vi/${split[4]}/mqdefault.jpg`
              
              }else{
                var res = ""
              }

            
               return res
            }else{
              return ""
            }
        }
    }
}
</script>
<style >

.videoWrapper iframe {
  width: 100%;
  min-height: 100px;
  border-radius: 10px;
}
.play-button-youtube{
    width:14%;top:40%;left:43%;
    opacity: .8;
}
.media-preview{
    position: relative;
}
.media-preview:hover .play-button-youtube{
    opacity: 1;
}

</style>