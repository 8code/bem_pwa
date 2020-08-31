<template>

  <div class="w-full p-2">




      <section class="w-full bg-transparent flex flex-wrap justify-center content-center z-30 fixed top-0 right-0 h-screen">

      <div @click="$emit('batal')"  class="w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ">
      </div>

<!-- body -->
      <div class="w-full p-4 lg:w-3/4 flex flex-wrap justify-center z-50 content-center bg-theme_primary rounded-xl">


            

          <div class="w-full lg:w-1/2 p-4 shadow-sm bg-theme_primary_dark rounded-lg">
          <div class="pl-5 flex flex-wrap items-start">
           <div class="flex">
                    <img class="w-10 h-10 rounded-full" :src="$store.state.user.avatar" alt="Event 1">

                    <router-link class="p-2" :to="'/@'+quest.user.username">
                      <span class="font-bold">{{ quest.user.name }}</span> 
                      <span class="text-primary text-xs">@{{quest.user.username }}</span> 
                  </router-link>
                 </div>
                  <!-- <br>
                  <div v-if="quest.audio" class="w-full py-2 videoWrapper">
                           
                        <iframe v-if="cekSumber(quest.audio) == 'spotify'" :src="quest.audio" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                         <iframe v-if="cekSumber(quest.audio) == 'youtube'" width="560" height="315" :src="quest.audio" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div> -->
            

              <span class="w-full  mb-4 mt-2">
                  <span v-for="(tx,i) in textToArray(quest.text)" :key="i"> 
                      
                      <router-link class="text-primary" v-if="(tx.slice(0, 1) == '@')" :to="'/'+tx"> {{tx}} </router-link>
                      <router-link class="text-primary" v-else-if="(tx.slice(0, 1) == '#')" :to="'/'+tx.substring(1)"> {{tx}} </router-link>
                      <span v-else> {{tx}} </span>

                  </span>
              </span>

  </div>


 <b class="px-4 font-bold">Membalas :</b>
  
            <div class="px-4" v-if="media || text " >
                   

                   <!-- <div v-if="media" class="w-full py-2 videoWrapper">
                         <iframe v-if="cekSumber(media) == 'spotify'" :src="getUrl(media)" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                         <iframe v-if="cekSumber(media) == 'youtube'" width="560" height="315" :src="getUrl(media)" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     
                   </div> -->
                     <span v-for="(tx,i) in textToArray(text)" :key="i"> 
                      
                      <router-link class="text-primary" v-if="(tx.slice(0, 1) == '@')" :to="'/'+tx"> {{tx}} </router-link>
                      <router-link class="text-primary" v-else-if="(tx.slice(0, 1) == '#')" :to="'/'+tx.substring(1)"> {{tx}} </router-link>
                      <span v-else> {{tx}} </span>

                  </span>
            </div>
            </div>


          <div class="w-full lg:w-1/2 p-4 shadow-sm rounded-lg">
              
               <!-- <label class="mx-2 text-xs" >Opsional*</label>
               <input placeholder="Link Podcast -  Spotify / Youtube" class="mx-2  p-3 bg-theme_primary_dark w-full rounded-lg" type="text" v-model="media">     -->
  

                <textarea @keyup.enter="kirim" v-model="text" placeholder="Katakan sesuatu ..." class="mx-2 mt-5 p-3 bg-theme_primary_dark w-full rounded-lg"></textarea>
                  
              
                <button @click="kirim" class="mx-2 py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm">
                  Kirim
                </button>
                 <button @click="$emit('batal')" class="mx-2 py-2 w-full rounded-lg mt-2 shadow-sm hover:bg-theme_primary_dark">
                  Batalkan
                </button>
           </div>
          </div>
      </section>
  </div>
        
</template>


<script>
export default {
   scrollToTop: true,
   layout: 'app',
   middleware: 'auth',
   props: ["quest"],
    data(){
      return {
        media: '',
        text: ''
      }
    },
    methods:{
       cekSumber(str){
            if(str){
               if(str.search("spotify") > 0){
                  return "spotify";
              }else if(str.search("youtube") > 0){
                  return "youtube";
              }
            }
           
        },
      textToArray(text){
            let str =  text.toString()
            let forReplace = []
            
            return str.split(" ");
        },
      getUrl(url){
            if(url){
              if(this.cekSumber(url) == 'spotify'){
                let split = url.split("/")
                var res = "https://open.spotify.com/embed-podcast/"+split[3]+"/"+split[4].split("?")[0]
                // https://open.spotify.com/show/5ixPRjtMnO92teoj5Vxbuf?si=3EP-mdiWRZer9xm4pcSg5g
                // https://open.spotify.com/episode/3etjFQgUuH7e7SPc6K6qXF?si=7JKD8-G_Q_qiZlXKeQ-OhA
              // <iframe src="https://open.spotify.com/embed-podcast/show/5ixPRjtMnO92teoj5Vxbuf" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              // <iframe src="https://open.spotify.com/embed-podcast/episode/3etjFQgUuH7e7SPc6K6qXF" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                // https://open.spotify.com/embed-podcast/episode/5RxFtUxpr4d5DFh2BqvpU2 - spotify format

              }else if(this.cekSumber(url) == 'youtube'){
              
               let split = url.split("/")
                var res = "https://www.youtube.com/embed/"+split[3]
                   
              //  https://youtu.be/pRuzdbwOJWM
              //  https://www.youtube.com/embed/pRuzdbwOJWM - youtube format
              
              }else{
                var res = ""
              }

              // console.log(res)
            
               return res
            }else{
              return ""
            }
      
      
      
      },
      kirim(){
        this.$axios.$post("/quest",{
          group_id: this.quest.group_id,
          quest_id: this.quest.id,
          text: this.text,
          audio: this.getUrl(this.media),
        }).then(res => {
          this.text= ''
          this.media= ''
          this.$emit('kirim')
        })
      }
    }
}

</script>