<template>

  <div class="w-full p-2">

   

    <div
    class="w-full content-start max-w-xl bg-theme_primary_light flex flex-wrap justify-center z-50 overflow-y-scroll  rounded-xl p-4" 
  
    
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
    
    
    <textarea
      ref="inputTextArea"
      @click="showModal = ''"
      v-model="d.text"
      placeholder="Deskripsi Singkat"
      class="bg-theme_primary_dark w-full rounded-lg p-4 mt-3"
      style="height:120px"
      maxlength="255"
    ></textarea>

   <div class="flex w-full mt-2">


    <button @click="d.type = 1" class="bg-theme_primary_dark text-xs p-2 w-full flex justify-center" :class="(d.type == 1) ? 'bg-primary text-secondary': ''">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle mt-1 mx-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
      Cerita
    </button>

    <button @click="d.type = 2" class="bg-theme_primary_dark text-xs p-2 w-full flex justify-center" :class="(d.type == 2) ? 'bg-primary text-secondary': ''">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle mt-1 mx-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
      Event 
    </button>

     <button @click="d.type = 3" class="bg-theme_primary_dark text-xs p-2 w-full flex justify-center" :class="(d.type == 3) ? 'bg-primary text-secondary': ''">
       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle mt-1 mx-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
      Katalog
    </button>

   </div>

  <div v-if="d.type" class="flex flex-wrap w-full mt-3">
    
    

    <div class="w-full" v-if="d.type == 1">
       <medium-editor
             class="bg-theme_primary_dark p-2 px-5 rounded-lg"
            v-model="content"
            :prefill="defaultValue"
            :options="options"
            :onChange="onChange"
            >
        </medium-editor>

    </div>
    <div class="w-full" v-if="d.type == 2">
      Event (Channel)
    </div>
    <div class="w-full" v-if="d.type == 3">
      Katalog (Produk)
    </div>

      <button @click="d.type = ''" class="bg-danger text-white p-1 rounded-full px-3 mt-1 text-xs ml-auto">
       x batalkan
      </button>


  </div>


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
      class=" py-2 w-full rounded-full mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm"
    >
      Kirim
    </button>

    <button
      @click="$router.back()"
      class=" py-2 w-full rounded-full mt-2  text-primary shadow-sm"
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
                 :quality="1"
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
  </div>
        
</template>


<script>
import Vue from "vue";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";

Vue.use(Croppa);

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import MediumEditor from 'vuejs-medium-editor'

Vue.component('medium-editor', MediumEditor)



export default {
  scrollToTop: true,
  layout: "no-header",
  middleware: "auth",
  props: ["showModalDefault","group","hiddenbottom","umum"],
    components: {
    "v-select": vSelect
  },


  data() {
    return {
        content: ``,
      defaultValue: `<h5>Vuejs <b>Medium Editor</b></h5>

             <a href="https://bit.ly/aplikasi-maba">Download Aplikasi</a>
             
             
             <p>
             
             
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora voluptas in quae dolore dolor enim, nulla alias facere aspernatur, inventore qui maxime nostrum quisquam exercitationem, sint magnam possimus? Numquam.

             </p>`,
      options: {
        
        imgur: false,
        toolbar: {
          buttons: ["bold", "italic",
          {
              name: 'anchor',
              action: 'createLink',
              aria: 'link',
              tagNames: ['a'],
              contentDefault: '<b>🔗</b>',
              contentFA: '<i class="fa fa-link"></i>',
          },
          "underline", "quote","h5", "h6",
          'unorderedlist', 'orderedlist',
          ]
        }
      },
      modal_quest: false,
      showModal: "",
      d:{
        type: ''
      },
      img:{
        width: 320,
        height: 320
      },
      imgTemp: null,
      typeOptions: [
    
      {
        id: 1,
        text: "Pertanyaan"
      },
      {
        id: 2,
        text: "Event (Channel)"
      },
      {
        id: 3,
        text: "Katalog (Produk)"
      }]
    };
  },
  created(){
          

    if(this.$props.showModalDefault){
      this.modal_quest = true
    }
  },
  methods: {
    onChange() {
        console.log(this.content)
    },
    cropImg(){

          if(this.imgTemp){
     

                this.d.img = this.imgTemp.generateDataUrl('image/jpeg', 0.8)

                console.log(this.d.img)
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

      if(this.d.text){
          this.$store.commit("setLoading",true)
          this.$axios
            .$post("/quest", this.d)
            .then(res => {
              this.$store.commit("setLoading",false)
              this.$router.push("/quest/"+res.id)
            });
      }
    
    }
  }
};
</script>

