<template>
<div class="w-full flex flex-wrap p-4 text-center">

        <h1 class="text-xl text-center w-full">
                Coming Soon
        </h1>

        <br>
     List Room Channel (Event)

     <br>
        Berlangsung
     <br>
        Akan Datang
     <br>
        Selesai

     <br>
     Room Fitur :
     Group Chat,
     Live Podcast,
      dan Video Conference like (Zoom / Google Meet)

          
</div>
        
</template>


<script>
export default {
  layout: 'no-header',
  middleware: 'auth',
  scrollToTop: true,
  data(){
          return{
                  events: '',
          }
  },
  mounted(){

   
     
        this.$axios.get("/events")
        .then(res => {
                this.events = res.data
        })
  }
}
</script>