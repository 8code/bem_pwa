<template>

  <div class="w-full p-2" >


      <section class="w-full bg-transparent flex flex-wrap justify-center content-end z-50 fixed top-0 right-0 h-screen">

      <div @click="$emit('batal')"  class="w-full  flex flex-wrap justify-center content-end bg-theme_primary_dark opacity-50 z-50 fixed top-0 right-0 h-screen ">
      </div>
      <div class="w-full p-4 lg:w-1/2 flex flex-wrap justify-center items-end content-end bg-theme_primary rounded-xl" style="z-index:10000">

          <div class="lg:hidden flex flex-wrap justify-center my-2">
                  
          <vue-record-audio mode="hold" @result="onResult" class="lg:mx-3" />
            
          <audio v-if="recordings" :src="recordings" controls class="mt-2" />

           <span v-if="recordings" @click="audio = ''; recordings = ''" class="w-full text-center text-danger text-xs mt-2">Hapus Audio</span>

          </div>
          
          <div class="w-full shadow-sm rounded-lg">
                 Membalas @{{ quest.user.username }}
                <input @keyup.enter="kirim" ref="inputText" maxlength="255" v-model="text" placeholder="Katakan sesuatu ..." class="mt-2 p-3 bg-theme_primary_dark w-full rounded-lg" />           
                <!-- <button @click="kirim" class="py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm">
                  Kirim
                </button> -->
           </div>
          </div>
      </section>
  </div>
</template>


<script>


import Vue from "vue";

import VueRecord from '@codekraft-studio/vue-record'
Vue.use(VueRecord)

export default {
   layout: 'app',
   middleware: 'auth',
   props: ["quest"],
    data(){
      return {
        recordings: '',
        media: '',
        text: '',
        audio: '',
      }
    },
    created(){
          this.$nextTick(() =>  this.$refs.inputText.focus())
    },
    methods:{
       onResult (data) {
        var audioURL = window.URL.createObjectURL(data);
          this.recordings  = audioURL;
          var that = this
          var reader = new window.FileReader();
          reader.readAsDataURL(data);
          reader.onloadend = function () {
                // console.log(reader.result)
                that.audio = reader.result;
          }
      },
      kirim(){
        if(!this.$store.state.loading){
         this.$store.commit("loading",true)
           this.$axios.$post("/quest",{
                quest_id: this.quest.id,
                text: this.text,
                audio: this.audio,
              }).then(res => {

            
                  this.$store.commit("loading",false)

                  this.$store.commit("setNotif",{
                      to: this.quest.user_id,
                      text: "@"+this.$store.state.user.username+" membalas : "+this.text
                    })

                this.text= ''
                this.media= ''

                this.$emit('batal')
                this.$emit('kirim')

                this.$router.push("/quest/"+this.quest.id)


              })
        }
       
      }
    }
}

</script>