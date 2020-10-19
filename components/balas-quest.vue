<template>

  <div class="w-full p-2" >


      <section class="w-full bg-transparent flex flex-wrap justify-center content-end z-30 fixed top-0 right-0 h-screen">

      <div @click="$emit('batal')"  class="w-full  flex flex-wrap justify-center content-end bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ">
      </div>
      <div class="w-full p-4 lg:w-1/2 flex flex-wrap justify-center items-end z-50 content-end bg-theme_primary rounded-xl">

          <div class="w-full shadow-sm rounded-lg">
                 Membalas @{{ quest.user.username }}
                <input @keyup.enter="kirim" ref="inputText" maxlength="255" v-model="text" placeholder="Katakan sesuatu ..." class="mt-5 p-3 bg-theme_primary_dark w-full rounded-lg" />           
                <!-- <button @click="kirim" class="py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm">
                  Kirim
                </button> -->
           </div>
          </div>
      </section>
  </div>
        
</template>


<script>
export default {
   layout: 'app',
   middleware: 'auth',
   props: ["quest"],
    data(){
      return {
        media: '',
        text: ''
      }
    },
    created(){
          this.$nextTick(() =>  this.$refs.inputText.focus())
    },
    methods:{
      kirim(){
        this.$store.commit("loading",true)
        if(this.text){
           this.$axios.$post("/quest",{
                group_id: this.quest.group_id,
                quest_id: this.quest.id,
                text: this.text,
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