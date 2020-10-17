<template>

  <div class="w-full p-2">

    <div :class="!$store.state.topMenu ? 'hidden' : ''">
      <nuxt-link :to="(group) ? `/new/quest?group_id=${group.id}&group_username=${group.username}`: `/new/quest`"
           
            class="bg-theme_primary_dark text-primary p-3 right-0 rounded-full fixed bottom-0 mr-5 z-30 mb-16 lg:mr-20 flex lg:px-5 "
          >
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
            </svg>
                      <span class="hidden lg:block px-2 text-xs"> Buat Quest</span>
        </nuxt-link>
      </div>

  </div>
        
</template>


<script>
export default {
  layout: "no-header",
  middleware: "auth",
  props:['group']
};
</script>

