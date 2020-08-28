<template>
      <div class="w-full p-2 relative cursor-pointer border-b border-theme_primary_light overflow-hidden" > 
                                  <div class="shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-3 ">

                                        <router-link v-if="data.group_id && !data.quest_id"  class="text-primary p-1 px-4 bg-theme_primary_dark rounded-xl text-xs" :to="'/'+data.group.username" >
                                            
                                           #{{ data.group.username }}

                                        </router-link>

                                        <router-link v-if="data.quest_id" class="p-1 px-4 text-xs" :to="data.group.username" >
                                   
                                           Membalas <router-link :to="`/quest/${data.quest_id}`" class="bg-theme_primary_dark rounded-xl p-1 px-2">
                                               
                                           <b> @{{ data.membalas_user }}</b>
                                               : {{ data.quest.text }}
                                               
                                            </router-link> 
                                      
                                        </router-link>

                                        <span class="text-xs float-right">
                                          {{ parseQuestDate(data.created_at)}}
                                        </span>


                                        <div class="w-auto flex p-2 "> 

                                            <img class="w-10 h-10 rounded-full" src="/icon.png" alt="Event 1">
                                            <div class="pl-5 flex flex-wrap items-start">
                                                <router-link :to="'/@'+data.user.username">
                                                   <span class="font-bold">{{ data.user.name }}</span> 
                                                   <span class="text-primary text-xs">@{{ data.user.username }}</span> 
                                                </router-link>
                                            
                                                    <div v-if="data.audio" class="w-full py-2 videoWrapper">
                                                            <!-- Spotify -->
                                                            
                                                          <iframe v-if="cekSumber(data.audio) == 'spotify'" :src="data.audio" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                            <!-- Youtube -->
                                                          <iframe v-if="cekSumber(data.audio) == 'youtube'" width="560" height="315" :src="data.audio" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                    </div>
                                              

                                                <span class="w-full  mb-4 mt-2">
                                                    <span v-for="(tx,i) in textToArray(data.text)" :key="i"> 
                                                        
                                                        <router-link class="text-primary" v-if="(tx.slice(0, 1) == '@')" :to="'/'+tx"> {{tx}} </router-link>
                                                        <router-link class="text-primary" v-else-if="(tx.slice(0, 1) == '#')" :to="'/'+tx.substring(1)"> {{tx}} </router-link>
                                                        <span v-else> {{tx}} </span>

                                                    </span>
                                                </span>

                                        
                                        <div 
                                        class="text-xs lg:text-lg text-primary ">
                                        {{ data.qna_total }} Balasan
                                        </div>

                      
                                     <div class="flex mx-3">
                                            <button @click="$emit('balas',data)" class="flex relative ml-auto py-1 px-5 mx-2 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary">
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
                                                    {{ (followTemp) ? data.total_follower +1 : data.total_follower }}
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
</template>

<script>

import util from '~/assets/js/util'

export default {
    props:['data'],
    data(){
        return{
            btnFollow: 'flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary',
            btnFollowed: 'flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl bg-primary text-xs text-secondary',
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
    }
}
</script>
<style >

.videoWrapper iframe {
  width: 100%;
  min-height: 1-0px;
  border-radius: 10px;
}
</style>