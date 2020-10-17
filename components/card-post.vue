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
          class="w-5 h-5 rounded-full"
          :src="data.user.avatar"
          alt="Avatar"
        />

        <nuxt-link class="px-2" :to="'/@' + data.user.username">
          <span class="font-semibold text-sm">{{ data.user.name }}</span>
          <span class="text-primary text-xs">@{{ data.user.username }}</span>
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
              :to="'/quest/' + data.quest_id"
            >
              <nuxt-link :to="`/quest/${data.quest_id}`">
                membalas :<span class="text-primary">
                  @{{ data.membalas_user }}</span
                >
              </nuxt-link>
            </span>
          </span>

          <nuxt-link
            v-if="!active"
            :to="`/quest/${data.id}`"
            class="w-full items-start flex px-2  text-theme_secondary"
          >
            <div
              v-if="data.embed"
              class="pb-2 w-1/2 media-preview"
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
                <span class="p-1 px-2 font-bold">Play </span>
              </div>
            </div>

            <img v-if="data.video" class="w-1/4 rounded-xl" :src="data.thumb" />
            <img v-if="data.img" class="w-1/4 rounded-xl" :src="data.img" />

            <span class="w-full px-4 mt-2 text-xs lg:text-base" :class="(data.text.length <= 150) ? 'text-base lg:text-xl': ''">
              <span
                v-for="(tx, i) in textToArray(data.text.slice(0, 200))"
                :key="i"
              >
                <nuxt-link
                  class="text-primary"
                  v-if="tx.slice(0, 1) == '@'"
                  :to="'/' + tx"
                >
                  {{ tx }}
                </nuxt-link>
                <nuxt-link
                  class="text-primary"
                  v-else-if="tx.slice(0, 1) == '#'"
                  :to="'/' + tx.substring(1)"
                >
                  {{ tx }}
                </nuxt-link>
                <span v-if="isLink(tx)" class="w-full" >
                    
                    <a
                    class="text-primary"
                    :href="tx"
                    target="_BLANK"
                    
                    >{{ tx }}</a>
                </span>
                <span v-else> {{ tx }} </span>
              </span>
              <span class="text-primary" v-if="data.type != 2"> ... </span>
            </span>
          
            

          </nuxt-link>
      

          <div v-else class="w-full p-2  text-theme_secondary">
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

            <div class="px-2">


            <span v-for="(tx, i) in textToArray(data.text)" :key="i">
              <nuxt-link
                class="text-primary"
                v-if="tx.slice(0, 1) == '@'"
                :to="'/' + tx"
              >
                {{ tx }}
              </nuxt-link>
              <nuxt-link
                class="text-primary"
                v-else-if="tx.slice(0, 1) == '#'"
                :to="'/' + tx.substring(1)"
              >
                {{ tx }}
              </nuxt-link>
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
            
            </div>

           
          </div>

            <button v-if="data.type == 2" class="ml-auto bg-primary p-1 px-5 rounded-full text-secondary text-xs mr-2">
                   Daftar Acara
              </button>

        
          <div class="flex w-full px-4 mt-2">
           
            
            <div class="flex " >
              
            <nuxt-link
              :to="`/quest/${data.id}`"
              class="text-xs lg:text-base text-primary p-1 mt-1 lg:mt-0"
            >
              {{ data.total_qna }} balasan
            </nuxt-link>
                <div @click="$emit('balas',data)" class="p-1 px-5 text-primary">
                   <svg width="22px" height="22px" viewBox="0 0 16 16" class="bi bi-chat-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                  </svg>
                </div>
              <div
                @click="followQuest(data.id)"
                :class="data.followed || followTemp ? btnFollowed : btnFollow"
              >
                <svg
                  width="20px"
                  height="20px"
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

            <nuxt-link
              v-if="data.group"
              class="text-primary  text-xs flex p-1 mt-1 px-4"
              :to="'/' + data.group.username"
            >
              #{{ data.group.username }}
            </nuxt-link>

            

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from "~/assets/js/util";

export default {
  props: ["data", "bigtext", "active", "hideBalasan", "link"],
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
}
.media-preview:hover .play-button-youtube {
  opacity: 1;
}
</style>
