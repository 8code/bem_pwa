<template>

  <div class="w-full p-2">

    <div :class="!$store.state.topMenu ? 'hidden' : ''">
      <nuxt-link :to="localePath((group) ? `/new/quest?group_id=${group.id}&group_username=${group.username}`: urlQuest)"
           
            class="bg-theme_primary_dark text-primary p-3 right-0 rounded-full fixed bottom-0 mr-5 z-30 mb-16 lg:mr-20 flex lg:px-5 "
          >
         <svg  width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
                      <span class="hidden lg:block px-2 text-xs"> Buat </span>
        </nuxt-link>
      </div>

  </div>
        
</template>


<script>
export default {
  layout: "no-header",
  middleware: "auth",
  props:['group','text'],
  computed:{
    urlQuest(){
      if(this.$props.text){
        return `/new/quest?text=${this.$props.text}`
      }else{
        return `/new/quest`
      }
    }
  }
};
</script>

