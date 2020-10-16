<template>
<div class="w-full">

        <subheader name="channels" />
        <br>
        <br>

        <h1 class="text-md text-center w-full">
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

  }
}
</script>