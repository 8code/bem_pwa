<template>

  <div class="w-full p-2">




      <section class="w-full bg-transparent flex flex-wrap justify-center content-center z-30 fixed top-0 right-0 h-screen">

      <div @click="$emit('batal')"  class="w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ">
      </div>

<!-- body -->
      <div class="w-full p-4 lg:w-1/2 flex flex-wrap justify-center z-50 content-center bg-theme_primary rounded-xl">

          <div class="w-full p-4 shadow-sm rounded-lg">
              
                 <textarea ref="inputText" maxlength="255" v-model="text" placeholder="Katakan sesuatu ..." class="mx-2 mt-5 p-3 bg-theme_primary_dark w-full rounded-lg"></textarea>              
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
    created(){
          this.$nextTick(() =>  this.$refs.inputText.focus())
    },
    methods:{
      kirim(){
        this.$axios.$post("/quest",{
          group_id: this.quest.group_id,
          quest_id: this.quest.id,
          text: this.text,
        }).then(res => {
          this.text= ''
          this.media= ''
          this.$emit('kirim')
        })
      }
    }
}

</script>