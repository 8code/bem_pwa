<template>
  <div :class="settings" style="min-height:100vh">
    <loading />

    <div
      class="w-full flex flex-wrap content-start "
    >
      <main
        class="w-full mx-auto flex flex-wrap content-start  "
        :style="$route.path.includes('quest/') || $route.path.includes('msg') || $route.path.includes('finder') || $route.path.includes('find/') ? 'max-width:1100px' : `max-width:600px`"
      >
          <Nuxt class="w-full" />
      </main>

      <nav class="fixed bottom-0 flex lg:hidden w-full bg-theme_primary  ">
        <div class="flex w-full text-primary font-bold ">

           <nuxt-link
            :to="localePath('/feed')"
            :class="
              $route.path.includes('feed') ? tactiveClass : tnonActiveClass
            "
          >
            <svg  v-if="$route.path.includes('feed')" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
           <svg v-else width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>

       
            <span
              :class="
                $route.path.includes('feed') ? activeClass : nonActiveClass
              "
            >
              {{ $t("Home") }}
            </span>
          </nuxt-link>

          

          <nuxt-link
             :to="localePath('/search')"
            :class="$route.path.includes('search') ? tactiveClass : tnonActiveClass"
          >

         <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
</svg>

    <span
              :class="
                $route.path.includes('search') ? activeClass : nonActiveClass
              "
            >
              {{ $t("Explore") }}
            </span>
          </nuxt-link>

        <nuxt-link
             :to="localePath('/groups')"
            :class="
              $route.path.includes('groups') ? tactiveClass : tnonActiveClass
            "
          >

          <span class="mx-auto bg-primary rounded-full"> <img src="/logo.png" class="w-8 h-8" alt="Logo Aplikasi Maba"> </span>
        

          </nuxt-link>

          <nuxt-link
             :to="localePath('/notifications')"
            :class="
              $route.path.includes('/notifications') ? tactiveClass : tnonActiveClass
            "
          >
          <svg v-if="$route.path.includes('notifications')" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bell-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
      </svg>

            <svg v-else
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-bell"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
              <path
                fill-rule="evenodd"
                d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
              />
            </svg>
            <span
              :class="
                $route.path.includes('notifications') ? activeClass : nonActiveClass
              "
            >
              {{ $t("Notif") }}
            </span>
          </nuxt-link>

          <nuxt-link
            :to="localePath('/profile')"
            :class="$route.path.includes('profile') ? tactiveClass : tnonActiveClass"
          >

             <img :src="$getImage($store.state.user.avatar)" alt="Avatar" class="w-5 h-5 rounded-full">

            <span
              :class="$route.path.includes('/profile') ? activeClass : nonActiveClass"
            >
              {{ $t('Profile')}}
            </span>
          </nuxt-link>
        </div>
      </nav>

      <nav class="hidden left-0 fixed pb-3 lg:flex h-screen ml-5 w-10 text-lg">
        <div
          class="mx-auto flex flex-wrap content-center text-theme_secondary font-bold"
        >
          <nuxt-link
             :to="localePath('/feed')"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover hover:text-primary"
          >
           <svg  v-if="$route.path.includes('feed')" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-house-fill text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>

          <svg v-else width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
          
          </nuxt-link>

          
            <nuxt-link
             :to="localePath('/search')"
           class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover hover:text-primary"

          >

         
         <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
</svg>

          </nuxt-link>
          <nuxt-link
             :to="localePath('/groups')"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover hover:text-primary"
          >
 <span class="mx-auto bg-primary rounded-full"> <img src="/logo.png" class="w-6 h-6" alt="Logo Aplikasi Maba"> </span>

          </nuxt-link>

        



          <nuxt-link
           :to="localePath('/notifications')"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover hover:text-primary"
          >
            <svg v-if="$route.path.includes('notifications')" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="text-primary bi bi-bell-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
      </svg>
            <svg v-else
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-bell"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
              <path
                fill-rule="evenodd"
                d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
              />
            </svg>
            
          </nuxt-link>

            <nuxt-link
           :to="localePath('/profile')"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover hover:text-primary"
          >
       
           <img :src="$getImage($store.state.user.avatar)" alt="Avatar" class="w-6 h-6 rounded-full">

          </nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>
<style scoped>
.text-xs2 {
  font-size: 8px;
}
</style>

<script>
import Push from "push.js";
export default {
  data() {
    return {
      notifikasi: [],
      windowTop: 0,
      tactiveClass:
        "text-lg font-bold rounded-full flex w-1/5 px-1 py-2 mx-1 flex-wrap content-center justify-center items-center pt-2",
      tnonActiveClass:
        "text-lg font-bold rounded-full flex w-1/5 px-1 py-2 mx-1 flex-wrap content-center justify-center items-center text-default pt-2",
      activeClass: "text-center text-xs2 w-full rounded-lg mt-1  text-primary",
      nonActiveClass: "text-center text-xs2 w-full  text-default mt-1",
      activeClassLg:
        "hovered absolute text-left text-lg p-1 px-8 ml-10 rounded-full bg-theme_primary_dark text-primary",
      nonActiveClassLg:
        "hovered absolute text-left text-lg p-1 px-8 ml-10 rounded-full text-default hover:bg-theme_primary_dark hover:text-primary"
    };
  },
  computed: {
    settings() {
      return this.$store.state.theme + " " + this.$store.state.primaryColor;
    }
  },
  methods: {
    sayHayPush(text) {
      console.log(text);
      Push.create("Halo " + this.$store.state.user.name + " !", {
        body: text,
        icon: "/icon.png",
        timeout: 120000,
        onClick: function() {
          clients.openWindow('https://maba.my.id/notifications')
        }
      });
    }
  },

  created() {
    let token = localStorage.getItem("access_token") || "";
    this.$axios.setHeader("Authorization", "Bearer " + token);

    this.$axios
      .$get("/profile-by-id/" + this.$store.state.user.id)
      .then(data => {
        if (data) {
          this.$store.commit("updateProfile", data);
        } else {
          // localStorage.clear();
        }
      })
      .catch(res => {
        // localStorage.clear();
      });
  },

  mounted() {


    

    var that = this;

    var notifff = this.$fireDb.ref("notifikasi/" + this.$store.state.user.id);
      notifff.on("value", function(snapshot) {
        if(snapshot.val()){
           if(snapshot.val().text){
           that.sayHayPush(snapshot.val().text);

            that.$store.commit("setNotif",{
              to: that.$store.state.user.id,
              text: ""
            })
              
          }
        }
       
    });

    window.addEventListener("scroll", function() {
      if (window.scrollY > that.windowTop) {
        if (window.scrollY > 10) {
          that.$store.commit("setTopMenu", false);
        }
      } else {
        that.$store.commit("setTopMenu", true);
      }
      that.windowTop = window.scrollY;
    });
  }
};
</script>
