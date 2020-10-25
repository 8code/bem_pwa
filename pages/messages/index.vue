<template>
  <div
    class="w-full  bg-theme_primary"
  >


    <button
      @click="$router.back()"
      class="flex p-3 bg-theme_primary m-4 rounded-full absolute top-0"
    >
      <svg
        width="1.2em"
        height="1.2em"
        viewBox="0 0 16 16"
        class="bi bi-arrow-left-circle"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fill-rule="evenodd"
          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
        />
      </svg>
    </button>

    
    
    <section class="w-full rounded-xl flex flex-wrap p-2 ">
      
      <div class="w-full lg:w-4/12 lg:pr-2">
        <div class="flex bg-theme_primary_light rounded-xl p-4" style="height:95vh">
          <ul class="text-xs w-full  overflow-y-auto" >
            <li class="flex text-xl font-bold cursor-pointer ml-12 mb-5">
              Messages
            </li>
            <li
              v-for="(i, index) in users"
              :key="'user-' + index"
              class="flex text-xs p-1 mt-2 font-semibold hover:bg-theme_primary_dark rounded-full px-2 cursor-pointer"
            >
               <nuxt-link :to="localePath('/messages/'+i.room_id)" class="flex w-full flex-wrap ccursor-pointer" >
                  <div class="flex w-full">
                      <img :src="i.user.avatar" alt="avatar" class="rounded-full w-10 h-10" />
                    <span class="pl-4 p-1 text-lg "> {{ i.user.name }}</span>

                  </div>
                  <span class="px-2 text-xs w-full ml-10 text-theme_secondary" v-if="i.messages"> {{ i.messages.text }}</span>
               </nuxt-link>
            </li>

          </ul>
        </div>
      </div>

      <div
       
        class="w-full hidden lg:flex  lg:w-8/12 z-50 bg-theme_primary  rounded-xlrelative flex-wrap"
       
      >


        <div class="w-full">
          <div
            class="w-full bg-theme_primary_light p-4 rounded-xl text-xs pb-20 pt-10"
            style="height:95vh;overflow-y:scroll" id="list-chat"
          >

          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>


export default {
  scrollToTop: true,
  layout: "no-header",
  middleware: "auth",
  data() {
    return {
      users: '',
    };
  },
  created(){
    this.getDataChannel()
  },
  methods: {
    getDataChannel() {
      this.$axios.get("/chat_message_user")
        .then(res => {
          this.users = res.data
        })
    }
  }
};
</script>
