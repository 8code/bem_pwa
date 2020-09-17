<template>

  <div class="w-full p-2">

    <div :class="!$store.state.topMenu ? 'hidden' : ''">
    <button
         v-if="!hiddenbottom"
          @click="createNew"
          class=" bg-primary text-secondary p-3 right-0 rounded-full fixed bottom-0 mr-5 z-30 mb-16 lg:mr-20 flex lg:px-5 "
        >
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-plus-circle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
            />
            <path
              fill-rule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
          </svg>
          <span class="hidden lg:block px-2"> Buat Quest</span>
        </button>
</div>


      <section v-if="modal_quest" class="mx-auto flex flex-wrap  z-30 fixed top-0">

      <div v-if="!hiddenbottom" @click="modal_quest = false" class="w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen " >
      </div>

<!-- body -->
   

    <div
    class="w-full content-start max-w-xl flex flex-wrap justify-center z-50 overflow-y-scroll bg-theme_primary rounded-xl p-4"
    style="height:90vh"
  >
  
  <div class="rounded-xl w-full" v-if="d.video">
   <video   width="100%" controls autoplay>
          <source  :src="d.video" type="video/mp4">
          Your browser does not support the video tag.
        </video>
  </div>
  
     <img v-else class="w-full rounded-xl" :src="d.img">

      
    <div v-if="d.embed" class="w-full pb-4 videoWrapper">
          <!-- Spotify -->
        <iframe v-if="cekSumber(d.embed) == 'spotify'" :src="getUrl(d.embed)" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <!-- Youtube -->
        <iframe v-if="cekSumber(d.embed) == 'youtube'" width="560" height="315" :src="getUrl(d.embed)" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </div>
    <h1 v-if="group" class="p-2 font-bold">
      Kirim Ke Group : #{{group.username}}
    </h1>
    <textarea
      v-model="d.text"
      placeholder="Katakan sesuatu ..."
      class="bg-theme_primary_dark w-full rounded-lg p-4 mt-3 h-48"
     
    ></textarea>

    <div class="flex w-full my-5 ">
      <span class="px-2">Upload Dari :</span>
      <img
        @click="showModalQuest('ig')"
        src="/instagram.png"
        class="ml-8 cursor-pointer w-8 h-8"
      />
      <img
        @click="showModal = 'yt'"
        src="/youtube.png"
        class="ml-8 cursor-pointer w-8 h-8"
      />
      <img
        @click="showModal = 'sp'"
        src="/spotify.png"
        class="ml-8 cursor-pointer w-8 h-8"
      />
    </div>
    <button
      @click="kirim"
      class=" py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm"
    >
      Kirim
    </button>

     <button
      v-if="!hiddenbottom"
      @click="modal_quest = false"
      class=" py-2 w-full rounded-lg mt-2 bg-secondary text-primary shadow-sm"
    >
      Batalkan
    </button>
    <button
      v-else
      @click="$router.back()"
      class=" py-2 w-full rounded-lg mt-2 bg-secondary text-primary shadow-sm"
    >
      Batalkan
    </button>

    <section
      v-if="showModal"
      class="w-full bg-transparent flex flex-wrap justify-center content-end lg:content-center z-30 fixed bottom-0 right-0 "
    >
      <div
        @click="showModal = ''"
        class="w-full  flex flex-wrap justify-center content-end bg-theme_primary_dark opacity-50 z-40 fixed bottom-0 right-0 h-screen "
      
      ></div>

      <div
        class="w-full  lg:w-1/3 justify-center flex flex-wrap z-50 content-end bg-theme_primary rounded-xl mb-16 p-5 mx-auto"
      >

        <div class="w-full flex flex-wrap" v-if="showModal == 'yt'">
            <h1 class="font-bold p-2">Paste Youtube Share Link</h1>

            <input placeholder="Link Youtube contoh: 'https://youtu.be/hH6hI5grCms'" class="  p-3 bg-theme_primary_dark w-full rounded-lg" type="text" v-model="d.embed">    

        </div>
         <div class="w-full flex flex-wrap" v-if="showModal == 'sp'">
            <h1 class="font-bold p-2">Paste Spotify Podcast Link</h1>

            <input placeholder="Spotify Podcast Link contoh: 'https://open.spotify.com/episode/1IJCl8993xjDNdIKR5EVVE?si=K4XrGBSrS12Kcjh3ZHOMZA'" class="  p-3 bg-theme_primary_dark w-full rounded-lg" type="text" v-model="d.embed">    

        </div>
        <div v-if="showModal == 'ig'" class="w-full flex flex-wrap">
           <h1 class="font-bold p-2">Pilih Postingan Instagram</h1>
            <div
              class="w-full p-4 shadow-sm bg-theme_primary_dark rounded-lg flex flex-wrap"
              v-if="feedIg"
            >
              
               <button class="w-full" v-if="group" @click="getPostIggroup">
                  Dari Instagram Pribadi
                </button>
                <div  v-for="f in feedIg" :key="f.thumb" @click="inputIg(f)" class="w-1/3 p-3 rounded-xl flex flex-wrap">
                  <img  :src="f.thumb" class="w-full rounded-xl">
                </div>

                <button class="w-full bg-theme_primary_light rounded-xl p-2 my-2" v-if="group" @click="getPostIggroup">
                  Pilih dari Instagram Group
                </button>
                 <div  v-for="f in feedIgGroup" :key="f.thumb" @click="inputIg(f)" class="w-1/3 p-3 rounded-xl flex flex-wrap">
                  <img  :src="f.thumb" class="w-full rounded-xl">
                </div>

            </div>
            <div v-else class="w-full text-center ">
               <span v-if="$store.state.user.instagram">Loading...</span>
               <span v-else class="px-2 text-danger">
                 Edit profile dan masukan username instagram kamu :)
               </span>
            </div>
        </div>
      </div>
    </section>
  </div>
      </section>
  </div>
        
</template>


<script>

export default {
  scrollToTop: true,
  layout: "no-header",
  middleware: "auth",
  props: ["showModalDefault","group","hiddenbottom"],
  data() {
    return {
      modal_quest: false,
      showModal: "",
      d:{},
      feedIg: "",
      feedIgGroup: ""
    };
  },
  created(){
    if(this.$props.showModalDefault){
      this.modal_quest = true
    }
  },
  methods: {
    inputIg(data){

        this.d.video = data.video
        if(!data.video){
          this.d.img = data.thumb
        }
        this.d.text = data.text
        this.d.thumb = data.thumb
        
        this.showModal = ''
    },
    showModalQuest(source){
        if(source == 'ig'){
          this.getPostIg();
          this.showModal = 'ig'
        }
    },
    getPostIg() {
      if(this.$store.state.user.instagram){
         this.$axios
            .$get("/instagram/" + this.$store.state.user.instagram)
            .then(res => {
              // console.log(res)
              this.feedIg = res;
            });
      }
    },
     getPostIggroup() {
      if(this.group){
         this.$axios
            .$get("/instagram/" + this.group.instagram)
            .then(res => {
              this.feedIgGroup = res;
            });
      }
    },
    createNew() {
      this.modal_quest = true;
    },
    cekSumber(str) {
      if (str) {
        if (str.search("spotify") > 0) {
          return "spotify";
        } else if (str.search("youtu.be") > 0) {
          return "youtube";
        }
      }
    },
    textToArray(text) {
      let str = text.toString();
      let forReplace = [];

      return str.split(" ");
    },
    getUrl(url) {
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
          var res = "https://www.youtube.com/embed/" + split[3];
        } else {
          var res = "";
        }

        return res;
      } else {
        return "";
      }
    },
    kirim() {
      if(this.group){
       this.d.group_id = this.group.id
      }
      this.d.embed = this.getUrl(this.d.embed)
      this.$axios
        .$post("/quest", this.d)
        .then(res => {
          // console.log(res)
          this.$router.push("/quest/"+res.id)
        });
    }
  }
};
</script>

