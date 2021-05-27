<template>

  <div class="w-full p-2" v-if="quest">


      <section class="w-full bg-transparent flex flex-wrap justify-center content-end z-50 fixed top-0 right-0 h-screen">

      <div @click="$emit('batal')"  class="w-full  flex flex-wrap justify-center content-end bg-theme_primary_dark opacity-50 z-50 fixed top-0 right-0 h-screen ">
      </div>
      <div class="w-full p-4 lg:w-1/2 flex flex-wrap justify-center items-end content-end bg-theme_primary_light rounded-xl" style="z-index:10000">

          <div class="flex my-3 mr-auto" @click="$store.commit('setAnonim',!$store.state.anonim)">
            <img :src="($store.state.anonim) ? '/anonim.png' : $store.state.user.avatar" alt="Anonim" class="rounded-full w-8 h-8">

            <span class="px-2 font-bold mt-1 font-lg" v-if="$store.state.anonim"> {{ $t('as' )}} Anonim </span>
            <span class="px-2 font-bold mt-1 font-lg" v-else> {{ $t('as' )}} {{ $store.state.user.username}} </span>
          </div>
          <div class="lg:hidden flex flex-wrap justify-center my-2">
                  
          <vue-record-audio v-if="!recordings" mode="press" @result="onResult" class="lg:mx-3" />
            
          <audio v-if="recordings" :src="recordings" controls class="mt-2" />

           <span v-if="recordings" @click="audio = ''; recordings = ''" class="w-full text-center text-danger text-xs mt-2">Hapus Audio</span>

          </div>
          
          <div class="w-full shadow-sm rounded-lg">
                {{ $t('reply') }} <span v-if="!quest.anonim">@{{ quest.user.username }}</span>
                <input @keyup.enter="kirim" ref="inputText" maxlength="255" v-model="text" placeholder="Katakan sesuatu ..." class="mt-2 p-3 bg-theme_primary_dark w-full rounded-lg" />           
              
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
                anonim: this.$store.state.anonim,
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

                this.$router.push(this.localePath("/quest/"+this.quest.id))


              })
        }
       
      }
    }
}

</script>