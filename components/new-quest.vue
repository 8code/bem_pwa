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
  
  
  <div v-if="d.img" class="w-full">
       <img class="w-full rounded-xl" :src="d.img">
  </div>

      
    <div v-if="d.embed" class="w-full pb-4 videoWrapper">
          <!-- Spotify -->
        <iframe v-if="cekSumber(d.embed) == 'spotify'" :src="getUrl(d.embed)" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <!-- Youtube -->
        <iframe v-if="cekSumber(d.embed) == 'youtube'" width="560" height="315" :src="getUrl(d.embed)" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </div>
  
    <h1 v-if="group" class="p-2 font-bold">
      Kirim Ke Group : #{{group.username}}
    </h1>
    
    <div v-if="!umum" class="w-full flex">
      
     <label class="text-left  pl-2 w-full my-3" for="type">Type</label>
      <select
      class="w-full
      shadow-sm bg-theme_primary_light
      py-2 px-4 
      rounded-lg mb-3
      "
      placeholder="Type"
      v-model="d.type"
        >
        <option value="" selected>Umum</option>
        <option value="1">Pertanyaan </option>
        <option value="2">Event</option>
        <option value="3">Donasi</option>
        <option value="4">Katalog</option>
        <option value="5">Loker</option>

      </select>

    </div>

    <textarea
      ref="inputTextArea"
      @click="showModal = ''"
      v-model="d.text"
      placeholder="Katakan sesuatu ..."
      class="bg-theme_primary_dark w-full rounded-lg p-4 mt-3 h-48"
     
    ></textarea>

    <div class="flex w-full my-5 ">
      <span class="px-2">Upload Dari :</span>
      <div class="ml-8 cursor-pointer text-primary"  @click="showModalQuest('img')">
        <svg class="w-7 h-8 bi bi-card-image" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9c0 .013 0 .027.002.04V12l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15 9.499V3.5a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm4.502 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
      </div>
      <img
        @click="showModalQuest('yt')"
        src="/youtube.png"
        class="ml-8 cursor-pointer w-8 h-8"
      />
      <img
        @click="showModalQuest('sp')"
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
      class="w-full bg-transparent flex flex-wrap justify-center content-end lg:content-conter z-30 right-0 "
    >
      <div
        @click="showModal = ''"
        class="w-full  flex flex-wrap justify-center content-end lg:content-conter bg-theme_primary_dark opacity-50 z-40 right-0 h-screen "
      
      ></div>

      <div
        class="w-full  justify-center flex flex-wrap z-50 content-end lg:content-conter bg-theme_primary rounded-xl p-5 mx-auto absolute bottom-0 mb-32" 
        style="z-index:1000000"
      >

        <div class="w-full flex flex-wrap" v-if="showModal == 'yt'">
            <h1 class="font-bold p-2">Paste Youtube Share Link</h1>
            <span  @click="showModal = ''" class="text-danger ml-auto">Tutup</span>
            <input 
           ref="inputYT"
          
             placeholder="Link Youtube contoh: 'https://youtu.be/hH6hI5grCms'" class="  p-3 bg-theme_primary_dark w-full rounded-lg" type="text" v-model="d.embed">    

        </div>
         <div class="w-full flex flex-wrap" v-if="showModal == 'sp'">
            <h1 class="font-bold p-2">Paste Spotify Podcast Link</h1>
            <span  @click="showModal = ''" class="text-danger ml-auto">Tutup</span>


            <input ref="inputSP" placeholder="Spotify Podcast Link contoh: 'https://open.spotify.com/episode/1IJCl8993xjDNdIKR5EVVE?si=K4XrGBSrS12Kcjh3ZHOMZA'" class="  p-3 bg-theme_primary_dark w-full rounded-lg" type="text" v-model="d.embed">    

        </div>
        <div class="w-full flex flex-wrap"  v-if="showModal == 'img'">
             <h1 class="font-bold p-2">Coming Soon</h1>
            <span  @click="showModal = ''" class="text-danger ml-auto">Tutup</span>

             <div class="w-full text-center">

                    <croppa
                class="shadow-sm rounded-lg bg-primary"
                v-model="imgTemp"
                prevent-white-space
                :width="img.width"
                :height="img.height"
                :placeholder="'Upload Foto'"
              ></croppa>
  <br>
              <button v-if="imgTemp"  @click="cropImg" class="bg-primary px-4 py-2 rounded-lg text-secondary">
                Crop & Simpan
              </button>


             </div>
        </div>
      </div>
    </section>
  </div>
      </section>
  </div>
        
</template>


<script>
import Vue from "vue";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";

Vue.use(Croppa);

export default {
  scrollToTop: true,
  layout: "no-header",
  middleware: "auth",
  props: ["showModalDefault","group","hiddenbottom","umum"],
  data() {
    return {
      modal_quest: false,
      showModal: "",
      d:{},
      img:{
        width: 320,
        height: 320
      },
      imgTemp: null
    };
  },
  created(){
          

    if(this.$props.showModalDefault){
      this.modal_quest = true
    }
  },
  methods: {
    cropImg(){
      this.imgTemp.generateBlob(
          blob => {
            // write code to upload the cropped image file (a file is a blob)
          },
          "image/jpeg",
          0.8
        ); // 80% compressed jpeg file

          if(this.imgTemp){
                this.d.img = this.imgTemp.generateDataUrl();

                // console.log(this.d.img)
                this.showModal = ''
                this.$nextTick(() =>  this.$refs.inputTextArea.focus())

          }
    },
    showModalQuest(source){
        if(source == 'img'){
          this.showModal = 'img'
        }else  if(source == 'sp'){
          this.showModal = 'sp'
          this.$nextTick(() =>  this.$refs.inputSP.focus())
        } if(source == 'yt'){
          this.showModal = 'yt'
          this.$nextTick(() =>  this.$refs.inputYT.focus())
        }
    },
    createNew() {
      this.modal_quest = true;
      this.$nextTick(() =>  this.$refs.inputTextArea.focus())
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

