<template>
  <div
    v-if="data.id"
    class="w-full p-2 relative cursor-pointer border-b border-theme_primary_light overflow-hidden"
    
  >
    <div
      class="shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-2 "
      :class="active ? 'bg-theme_primary_dark' : ''"
    >
      <div class="flex content-start">
        <img
          class="w-6 h-6  rounded-full"
          :src="data.user.avatar"
          alt="Avatar"
        />

        <nuxt-link class="px-2" :to="localePath('/@' + data.user.username)">
          <span class="font-semibold text-sm">{{ data.user.name }}</span>
          <span class="text-xs pl-2">
            {{ parseQuestDate(data.created_at) }}
          </span>
        </nuxt-link>

        <span class="text-xs ml-auto flex">
          <span class="px-2" >
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              class="bi bi-three-dots"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              />
            </svg>
          </span>
        </span>
      </div>
      <div class="w-auto flex mt-1">
        <div class="flex flex-wrap items-start">

          <span v-if="!hideBalasan" class="w-full">
            <span
              v-if="data.quest_id"
              class="px-4 text-xs w-full"
            >
              <nuxt-link :to="localePath(`/quest/${data.quest_id}`)">
                membalas :<span class="text-primary">
                  @{{ data.membalas_user }} :
                  <span>{{ data.quest.text.slice(0,25) }}</span>
                </span>
              </nuxt-link>
            </span>
          </span>


          <div
            v-if="data.audio"
            class="w-full  flex flex-wrap p-2  text-theme_secondary "
          >
              <audio :src="data.audio" controls />
            
          </div>

          <div
            v-if="!active"
            class="w-full  flex flex-wrap px-2  text-theme_secondary "
            
          >
            <div
              v-if="data.embed"
              class="pb-2 w-full media-preview"

                
               @click="
                    $store.commit('setMediaPlayer', {
                      data: data,
                      path: $route.path
                    })
                  "
                  
            >
              <div v-if="cekSumber(data.embed) == 'youtube'" 
            
                  
                  >
                <img
                  src="/youtube.png"
                  alt="logo"
                  class="absolute play-button-youtube"
                />
                <img
                
                  class="w-full rounded-xl"
                  :src="imgPreview(data.embed)"
                  alt="Preview"
                />
              </div>

              <div
                v-if="cekSumber(data.embed) == 'spotify'"

                
                class="bg-primary justify-beetween text-secondary w-full flex rounded-xl p-2 px-4 h-auto"
              >
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  class="bi bi-play"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                  />
                </svg>
                <span class="p-1 px-2 font-bold">Play </span>
              </div>
            </div>

            <img v-if="data.video" class="w-full rounded-xl" :src="data.thumb" />
            <img v-if="data.img" class="w-full rounded-xl" :src="data.img" />

            <span @click="showDetail" class="w-full p-1 text-xs lg:text-base" :class="(data.text.length <= 150) ? 'text-base lg:text-lg': ''">
              <span
                v-for="(tx, i) in textToArray(data.text)"
                :key="i"
              >
                <nuxt-link
                  class="text-primary"
                  v-if="tx.slice(0, 1) == '@'"
                  :to="localePath('/' + tx)"
                >
                  {{ tx }}
                </nuxt-link>
                <nuxt-link
                  class="text-primary"
                  v-else-if="tx.slice(0, 1) == '#'"
                  :to="localePath('/' + tx.substring(1))"
                >
                  {{ tx }}
                </nuxt-link>
               
                <span v-else>
                  
                   <span v-if="isLink(tx)" class="w-full" >
                    
                    <a
                    class="text-primary"
                    :href="tx"
                    target="_BLANK"
                    
                    >{{ tx }}</a>
                </span>
                <span v-else> {{ tx }} </span>
                
                 </span>
              </span>
              <span class="text-primary" v-if="data.type != 2">  </span>
            </span>

          </div>
      

          <div v-else class="w-full p-1  text-theme_secondary">
            <div
              v-if="data.embed"
              class="py-2 w-full media-preview"
              @click="
                $store.commit('setMediaPlayer', {
                  data: data,
                  path: $route.path
                })
              "
            >
              <div v-if="cekSumber(data.embed) == 'youtube'">
                <img
                  src="/youtube.png"
                  alt="logo"
                  class="absolute play-button-youtube"
                />
                <img
                  class="w-full rounded-xl"
                  :src="imgPreview(data.embed)"
                  alt="Preview"
                />
              </div>

              <div
                v-if="cekSumber(data.embed) == 'spotify'"
                class="bg-primary justify-beetween text-secondary w-full flex rounded-xl p-2 px-4 h-auto"
              >
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  class="bi bi-play"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                  />
                </svg>
                <span class="p-1 px-2 font-bold">Play</span>
              </div>
            </div>

            <div
              v-if="data.video || data.img"
              class="w-full media-preview py-2"
            >
              <img
                @click="
                  $store.commit('setMediaPlayer', {
                    data: data,
                    path: $route.path
                  })
                "
                v-if="data.video"
                src="/play.svg"
                alt="logo"
                class="absolute play-button-youtube text-primary bg-primary rounded-full p-1"
              />
              <img
                @click="
                  $store.commit('setMediaPlayer', {
                    data: data,
                    path: $route.path
                  })
                "
                v-if="data.video"
                class="w-full rounded-xl"
                :src="data.thumb"
              />
              <img
                @dblclick="followQuest(data.id)"
                v-else
                class="w-full rounded-xl"
                :src="data.img"
              />
            </div>

            <div class="px-2" >


            <span v-for="(tx, i) in textToArray(data.text)" :key="i">
              <nuxt-link
                class="text-primary"
                v-if="tx.slice(0, 1) == '@'"
                :to="localePath('/' + tx)"
              >
                {{ tx }}
              </nuxt-link>
              
              <nuxt-link
                class="text-primary"
                v-else-if="tx.slice(0, 1) == '#'"
                :to="localePath('/' + tx.substring(1))"
              >
                {{ tx }}
              </nuxt-link>

               <span v-else>
                  
                <span v-if="isLink(tx)" class="w-full" >
                    
                    <a
                    class="text-primary"
                    :href="tx"
                    target="_BLANK"
                    
                    >{{ tx }}</a>
                </span>

             
                <span v-else>
                   {{ tx }}
                </span>
              
              </span>
            </span>
            
            </div>

           
          </div>

           

        <div class="flex w-full" v-if="!data.quest_id">
            <nuxt-link
              v-if="data.group"
              class="text-primary font-bold mr-auto px-4 "
              :to="localePath('/' + data.group.username)"
            >
              #{{ data.group.username }}
            </nuxt-link>

             <button v-if="data.type == 2" @click="joinEvent(data.event_id)" class="ml-auto mr-4  bg-theme_primary_dark p-1 px-5 rounded-full text-primary font-bold text-xs">
                  Daftar Acara
              </button>
              <a :href="`https://wa.me/${data.user.whatsapp}?text=Saya%20tertarik%20dengan%20produk%20Anda%20yang%20dijual%20di%20Aplikasi%20Maba%20:%20${(data.text).replace(' ','%20')}`" 
              v-if="data.type == 3"
              class="ml-auto flex mr-4  bg-theme_primary_dark p-2 px-5 rounded-full text-primary text-xs">
                  <img src="/whatsapp.png" width="20px" alt=""> <span class="font-bold px-2">Hubungi Penjual</span>
              </a>
        </div>

          <div class="flex w-full px-4">
           
            
            <div class="flex w-full" >
              
            

            <nuxt-link
              :to="localePath(`/quest/${data.id}`)"
              class="text-xs lg:text-base text-primary p-1"
            >
              {{ data.total_qna }} balasan
            </nuxt-link>

              
            


            </div>
           <div class="flex absolute right-0 px-6" >      


              <div @click="$emit('balas',data)" class="p-1 px-5  flex">
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-chat-dots mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
                <span class="px-2 text-xs mt-1">Balas</span>
              </div>

             <div
                @click="followQuest(data.id)"
                :class="data.followed || followTemp ? btnFollowed : btnFollow"
              >
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 16 16"
                  class="bi bi-heart-fill mr-1 mt-1"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                  
                </svg>
                <span class="mt-1" v-if="data.followed">
                  {{ data.total_follower }}
                </span>
                <span class="mt-1" v-else>
                  {{
                    followTemp
                      ? parseInt(data.total_follower) + 1
                      : data.total_follower
                  }}
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
import util from "~/assets/js/util";

export default {
  props: ["data", "bigtext", "active", "hideBalasan", "link","sumber"],
  data() {
    return {
      btnFollow:
        "flex relative ml-auto p-1 rounded-tl-xl rounded-br-xl text-xs text-theme_secondary",
      btnFollowed:
        "flex relative ml-auto p-1 rounded-tl-xl rounded-br-xl text-xs text-primary",
      followTemp: false
    };
  },
  methods: {
    joinEvent(id){
      this.$axios.get("/join-event/"+id)
        .then(res => {
          this.$router.push(this.localePath("/events"))
        })
    },
    showDetail(){
        if(this.$props.data.quest == null){
          this.$router.push(this.localePath("/quest/"+this.$props.data.id))
        }else{
          this.$emit('balas',this.$props.data)
        }
    },
    isLink(link) {
      if (link) {
        if (link.substring(0, 4) == "http") {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    followQuest(id) {
      // console.log("Follow"+id)
      this.$axios.get("/quest/follow/" + id).then(res => {
        this.followTemp = true;
      });
    },
    parseQuestDate(data) {
      return util.parseQuestDate(data);
    },
    textToArray(text) {
      let str = text.toString();
      let forReplace = [];

      return str.split(" ");
    },
    cekSumber(str) {
      if (str.search("spotify") > 0) {
        return "spotify";
      } else if (str.search("youtube") > 0) {
        return "youtube";
      }
    },
    imgPreview(url) {
      if (url) {
        if (this.cekSumber(url) == "spotify") {
          let split = url.split("/");
          var res =
            "https://open.spotify.com/embed-podcast/" +
            split[3] +
            "/" +
            split[4].split("?")[0];
        } else if (this.cekSumber(url) == "youtube") {
          let split = url.split("/");
          var res = `https://img.youtube.com/vi/${split[4]}/mqdefault.jpg`;
        } else {
          var res = "";
        }

        return res;
      } else {
        return "";
      }
    }
  }
};
</script>
<style>
.videoWrapper iframe {
  width: 100%;
  min-height: 100px;
  border-radius: 10px;
}
.play-button-youtube {
  width: 14%;
  top: 40%;
  left: 43%;
  opacity: 0.8;
}
.media-preview {
  position: relative;
  width: 100%;
}
.media-preview:hover .play-button-youtube {
  opacity: 1;
}
</style>
