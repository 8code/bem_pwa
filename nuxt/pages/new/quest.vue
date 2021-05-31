<template>
  <div class="w-full p-2">
    <div
      class="w-full content-start max-w-xl bg-theme_primary_light flex flex-wrap justify-center z-50 overflow-y-scroll  rounded-xl p-4"
    >


      <div v-if="d.img" class="w-full">
        <img class="w-full rounded-xl" :src="d.img" />
      </div>

      <h1 v-if="group" class="p-2 font-bold">
        Kirim Ke Group : #{{ group.username }}
      </h1>

      <textarea
        ref="inputTextArea"
        @click="showModal = ''"
        v-model="d.text"
        placeholder="Katakan Sesuatu"
        class="bg-theme_primary_dark w-full rounded-lg p-4 mt-3"
        style="height:120px"
        maxlength="255"
      >

      </textarea>

    <div class="w-full p-2 flex flex-wrap justify-center">

      
   
      <div class="flex my-3 mr-auto cursor-pointer" @click="$store.commit('setAnonim',!$store.state.anonim)">
            <img :src="($store.state.anonim) ? '/anonim.png' : $getImage($store.state.user.avatar)" alt="Anonim" class="rounded-full w-8 h-8">

            <span class="px-2 font-bold mt-1 font-lg" v-if="$store.state.anonim"> {{ $t('as' )}} Anonim </span>
            <span class="px-2 font-bold mt-1 font-lg" v-else> {{ $t('as' )}} {{ $store.state.user.username}} </span>
          </div>
<div class=" lg:hidden">

       <vue-record-audio v-if="!recordings" mode="press" @result="onResult" class="lg:mx-3" />
       
</div>
      
     <audio v-if="recordings" :src="recordings" controls class="mt-2" />
     

    </div>
     <span v-if="recordings" @click="d.audio = ''; recordings = ''" class="text-danger text-xs">Hapus Audio</span>


      <div class="flex w-full mt-3 ">
        <span class="px-2">Upload  :</span>
        <div
          class="ml-8 cursor-pointer text-primary"
          @click="showModalQuest('img')"
        >
          <svg
            class="w-7 h-8 bi bi-card-image"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14.5 3h-13a.5.5 0 0 0-.5.5v9c0 .013 0 .027.002.04V12l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15 9.499V3.5a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm4.502 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
            />
          </svg>
        </div>
      </div>



      <div class="flex w-full mt-2 bg-theme_primary_dark rounded-full">
       
        <button
          @click="d.type = 1"
          class=" text-xs p-2 w-full flex justify-center"
          :class="d.type == 1 ? 'bg-primary text-secondary rounded-full' : ''"
        >
       
          {{ $t("story") }}
        </button>


        
        <button
          @click="d.type = 2"
          class=" text-xs p-2 w-full flex justify-center"
          :class="d.type == 2 ? 'bg-primary text-secondary rounded-full' : ''"
        >
       
          {{ $t("events")}}
        </button>

  

        <button
          v-if="d.type"
          @click="d.type = ''"
          class="bg-danger rounded-full text-white text-xs p-2 w-full flex justify-center"
          :class="d.type == 3 ? 'bg-primary text-secondary' : ''"
        >
          Batalkan
        </button>
      </div>

      <div v-if="d.type" class="flex flex-wrap w-full mt-3">
        <div class="w-full" v-if="d.type == 2">

            <div class="flex flex-wrap">
           
            <div class="flex w-full lg:w-1/2 flex-wrap p-2">
              <label class="py-2">Tanggal Mulai</label>
              <input
                type="datetime-local"
                v-model="d.start"
                placeholder="Tanggal Mulai "
                class="w-full shadow-sm bg-theme_primary_dark py-2 px-4 rounded-lg mb-3"
              />
            </div>
             <div class="flex w-full lg:w-1/2 flex-wrap p-2">
              <label class="py-2">Tanggal Selesai</label>
              <input
                type="datetime-local"
                v-model="d.end"
                
                placeholder="Tanggal Selesai "
                class="w-full  shadow-sm bg-theme_primary_dark py-2 px-4 rounded-lg mb-3"
              />
            </div>
           
            </div>
        
        </div>
         

      </div>

      <div class="w-full" v-if="d.type">
        
        <medium-editor
          class="bg-theme_primary_dark p-2 px-5 rounded-lg"
          v-model="d.desc"
          :prefill="defaultValue"
          :options="options"
          :onChange="onChange"
        >
        </medium-editor>
      </div>


      <button
        @click="kirim"
        class=" py-2 w-full rounded-full mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm flex justify-center"
      >
         <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
          </svg>
        <span class="px-2">Kirim</span>
      </button>

      <button
        @click="$router.back()"
        class=" py-2 w-full rounded-full mt-2  text-primary shadow-sm"
      >
        Batalkan
      </button>

      <section
        v-if="showModal"
        class="w-full  bg-transparent flex flex-wrap justify-center content-end lg:content-conter 
        
        z-30 right-0 "
      >
        <div
          @click="showModal = ''"
          class="w-full  flex flex-wrap justify-center content-end lg:content-conter bg-theme_primary_dark opacity-50 z-40 right-0  "
        ></div>

        <div
          class="overflow-y-scroll  w-full mb-10  justify-center flex flex-wrap z-50 content-end lg:content-conter bg-theme_primary_dark rounded-xl p-5 mx-auto absolute bottom-0
          
          "
          style="z-index:1000000;max-width:600px;height:80vh"
        >
        
          <div class="w-full flex flex-wrap h-full" v-if="showModal == 'img'">
            <span @click="showModal = ''" class="text-danger ml-auto"
              >Tutup</span
            >

            <div class="w-full text-center">
              <croppa
                class="shadow-sm rounded-lg bg-primary"
                v-model="imgTemp"
                prevent-white-space
                :width="img.width"
                :height="img.height"
                :quality="2"
                :placeholder="'Upload Foto'"
              ></croppa>
              <br />
              <button
                @click="img.width = 300;img.height = 200"
                class="px-4 py-2 rounded-lg text-primary"
                :class="(img.width == 300 && img.height == 200) ? 'bg-primary text-secondary ':''"
              >
                2x3
              </button>
              <button
                @click="img.width = 300;img.height = 300"
                class="px-4 py-2 rounded-lg text-primary"
                :class="(img.width == 300 && img.height == 300) ? 'bg-primary text-secondary ':''"

              >
                4x4
              </button>
               <button
                @click="img.width = 300;img.height = 600"
                 class="px-4 py-2 rounded-lg text-primary"
                :class="(img.width == 300 && img.height == 600) ? 'bg-primary text-secondary ':''"

              >
                18x9
              </button>
              <button
                v-if="imgTemp"
                @click="cropImg"
                class="bg-primary px-4 py-2 rounded-lg text-secondary"
              >
                Crop & Simpan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.insert-image-container {
  display: none;
  position: absolute;
  left: -10000000;
}
</style>

<script>
import Vue from "vue";

import VueRecord from '@codekraft-studio/vue-record'
Vue.use(VueRecord)

import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";

Vue.use(Croppa);


import MediumEditor from "vuejs-medium-editor";
Vue.component("medium-editor", MediumEditor);


export default {
  layout: "no-header",
  middleware: "auth",

  data() {
    return {
      recordings: '',
      group: '',
      defaultValue: ``,
      options: {
        uploadUrl: "https://api.imgur.com/3/image",
        uploadUrlHeader: { Authorization: "Client-ID 8e88bc43a6e7aa9" },
        file_input_name: "image",
        imgur: true,
        placeholder: {
          text: "Deskripsi Lengkap"
        },
        toolbar: {
          buttons: [
            "bold",
            "italic",
            {
              name: "anchor",
              action: "createLink",
              aria: "link",
              tagNames: ["a"],
              contentDefault: "<b>🔗</b>",
              contentFA: '<i class="fa fa-link"></i>'
            },
            "underline",
            "quote",
            "h5",
            "h6",
            "unorderedlist",
            "orderedlist"
          ]
        }
      },
      modal_quest: false,
      showModal: "",
      d: {
        desc: "",
        type: ""
      },
      img: {
        audio: '',
        width: 300,
        height: 200
      },
      imgTemp: null
    };
  },
  created() {
     this.$nextTick(() =>  this.$refs.inputTextArea.focus())

        if(this.$route.query.group_id){
          this.group = {
            id: this.$route.query.group_id,
            username: this.$route.query.group_username,
          }
          // this.d.text = '#'+this.group.username+' '
        }else if(this.$route.query.text){
          this.d.text = '#'+this.$route.query.text+' '
        }
    },
  methods: {

 
    onResult (data) {
      var audioURL = window.URL.createObjectURL(data);
        this.recordings  = audioURL;
        var that = this
        var reader = new window.FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = function () {
              // console.log(reader.result)
              that.d.audio = reader.result;
        }
    },
    onChange() {
      // console.log(this.d.desc);
    },
    cropImg() {
      if (this.imgTemp) {
        this.d.img = this.imgTemp.generateDataUrl("image/jpeg", 0.8);

        // console.log(this.d.img);
        this.showModal = "";
        this.$nextTick(() => this.$refs.inputTextArea.focus());
      }
    },
    showModalQuest(source) {
      if (source == "img") {
        this.showModal = "img";
      } else if (source == "sp") {
        this.showModal = "sp";
        this.$nextTick(() => this.$refs.inputSP.focus());
      }
      if (source == "yt") {
        this.showModal = "yt";
        this.$nextTick(() => this.$refs.inputYT.focus());
      }
    },
    createNew() {
      this.modal_quest = true;
      this.$nextTick(() => this.$refs.inputTextArea.focus());
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
    
    kirim() {
      if (this.group) {
        this.d.group_id = this.group.id;
      }
      this.d.anonim = this.$store.state.anonim

      if (this.d.text) {

        this.$store.commit("loading", true);
        
        
        this.$axios.$post("/quest", this.d).then(res => {
          this.$store.commit("loading", false);
          this.$router.push(this.localePath("/quest/" + res.id));
        });
      }
    }
  }
};
</script>
