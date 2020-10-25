<template>
  <div class="w-full p-2">
    <div
      class="w-full content-start max-w-xl bg-theme_primary_light flex flex-wrap justify-center z-50 overflow-y-scroll  rounded-xl p-4"
    >
      <div class="rounded-xl w-full" v-if="d.video">
        <video width="100%" controls autoplay>
          <source :src="d.video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div v-if="d.img" class="w-full">
        <img class="w-full rounded-xl" :src="d.img" />
      </div>

      <div v-if="d.embed" class="w-full pb-4 videoWrapper">
        <!-- Spotify -->
        <iframe
          v-if="cekSumber(d.embed) == 'spotify'"
          :src="getUrl(d.embed)"
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <!-- Youtube -->
        <iframe
          v-if="cekSumber(d.embed) == 'youtube'"
          width="560"
          height="315"
          :src="getUrl(d.embed)"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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
            <img :src="($store.state.anonim) ? '/anonim.png' : $store.state.user.avatar" alt="Anonim" class="rounded-full w-8 h-8">

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
        <!-- <img
          @click="showModalQuest('yt')"
          src="/youtube.png"
          class="ml-8 cursor-pointer w-8 h-8"
        />
        <img
          @click="showModalQuest('sp')"
          src="/spotify.png"
          class="ml-8 cursor-pointer w-8 h-8"
        /> -->
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

  
        <!-- <button
          @click="d.type = 3"
          class=" text-xs p-2 w-full flex justify-center"
          :class="d.type == 3 ? 'bg-primary text-secondary rounded-full' : ''"
        >
        
          Produk
        </button> -->


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
            </div>
            <!-- <div class="flex w-full lg:w-1/2 flex-wrap p-2">
              <label class="py-2">Tanggal Selesai</label>
              <input
                type="date"
                v-model="d.end"
                
                placeholder="Tanggal Selesai "
                class="w-full  shadow-sm bg-theme_primary_dark py-2 px-4 rounded-lg mb-3"
              />
            </div>

          </div>

          <div class="flex p-2 items-start flex-wrap">
            <label class="w-full lg:w-1/2 py-2">Harga :  
              <br> <small class="text-xs">"Kosongkan jika gratis untuk siapa saja"</small>
             
              </label>
            <input
              type="number"
              v-model="d.price"
              placeholder="Rp.0 "
              class="w-full lg:w-1/2 shadow-sm bg-theme_primary_dark py-2 px-4 rounded-lg mb-3"
            />
             <br> <small class="text-xs">"Untuk Verifikasi pembayaran anggota dilakukan oleh admin channel / acara"</small>
          </div> -->

          <!-- <div class="flex w-full text-center flex-wrap p-2">
              "Untuk Membuat Channel / Acara anda harus memebayar Rp.50rb kepada Kami untuk supporting system :)"
          </div> -->
        
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
        <!-- <div class="w-full text-primary text-center my-2" v-if="d.type == 3">
            "Untuk Produk akan langsung di arahkan ke No Whatsapp, jadi isi dulu no Whatsapp di Profil"
        </div> -->
         <!-- <h1 class="text-xs text-center w-full p-2 mb-2 lg:hidden">
          Rekomendasi Menggunakan Laptop / PC *
        </h1> -->
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
          class="w-full  flex flex-wrap justify-center content-end lg:content-conter bg-theme_primary_dark opacity-50 z-40 right-0  "
        ></div>

        <div
          class="w-full  justify-center flex flex-wrap z-50 content-end lg:content-conter bg-theme_primary_dark rounded-xl p-5 mx-auto absolute bottom-0 mb-32 "
          style="z-index:1000000;max-width:600px;"
        >
          <div class="w-full flex flex-wrap" v-if="showModal == 'yt'">
            <h1 class="font-bold p-2">Paste Youtube Share Link</h1>
            <span @click="showModal = ''" class="text-danger ml-auto"
              >Tutup</span
            >
            <input
              ref="inputYT"
              placeholder="Link Youtube contoh: 'https://youtu.be/hH6hI5grCms'"
              class="  p-3 bg-theme_primary_dark w-full rounded-lg"
              type="text"
              v-model="d.embed"
            />
          </div>
          <div class="w-full flex flex-wrap" v-if="showModal == 'sp'">
            <h1 class="font-bold p-2">Paste Spotify Podcast Link</h1>
            <span @click="showModal = ''" class="text-danger ml-auto"
              >Tutup</span
            >

            <input
              ref="inputSP"
              placeholder="Spotify Podcast Link contoh: 'https://open.spotify.com/episode/1IJCl8993xjDNdIKR5EVVE?si=K4XrGBSrS12Kcjh3ZHOMZA'"
              class="  p-3 bg-theme_primary_dark w-full rounded-lg"
              type="text"
              v-model="d.embed"
            />
          </div>
          <div class="w-full flex flex-wrap" v-if="showModal == 'img'">
            <h1 class="font-bold p-2">Coming Soon</h1>
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

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import MediumEditor from "vuejs-medium-editor";
Vue.component("medium-editor", MediumEditor);


export default {
  layout: "no-header",
  middleware: "auth",
  components: {
    "v-select": vSelect
  },

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
      if (this.group) {
        this.d.group_id = this.group.id;
      }
      this.d.embed = this.getUrl(this.d.embed);

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
