<template>
<div class="w-full">

        <subheader name="channels" />
      

      <ul>
              <li>
                      List Channel (Event)
              </li>
      </ul>
          
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