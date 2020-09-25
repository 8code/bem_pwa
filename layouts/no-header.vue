<template>
  <div :class="settings">
    <div
      class="w-full min-h-screen flex flex-wrap content-start bg-theme_primary"
    >
      <settings class="z-50" />
      <main
        class="w-full mx-auto flex flex-wrap pt-2 content-start min-h-screen bg-theme_primary "
        style="max-width:600px;"
      >

    
        <media-player />
        <transition name="slide-fade">

          <Nuxt class="w-full" />
        </transition>
      </main>

      <nav
        class="fixed bottom-0 flex lg:hidden w-full bg-theme_primary"
        :class="!$store.state.topMenu ? 'hidden' : ''"
      >
        <div class="mx-auto flex content-start text-primary font-bold">
          <nuxt-link
            to="/"
            :class="$route.path == '/' ? tactiveClass : tnonActiveClass"
          >
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            <span :class="$route.path == '/' ? activeClass : nonActiveClass">
              {{ $t("Home") }}
            </span>
          </nuxt-link>

          <nuxt-link
            to="/groups"
            :class="
              $route.path.includes('/groups') ? tactiveClass : tnonActiveClass
            "
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-people"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zm7.973.056v-.002.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
              />
            </svg>
            <span
              :class="
                $route.path.includes('/groups') ? activeClass : nonActiveClass
              "
            >
              {{ $t("Group") }}
            </span>
          </nuxt-link>

          <nuxt-link
            to="/apps"
            :class="$route.path == '/apps' ? tactiveClass : tnonActiveClass"
          >
            <img width="30px" src="/icon.png" alt="Logo Aplikasi Maba">
            <span
              :class="$route.path == '/apps' ? activeClass : nonActiveClass"
            >
              Maba
            </span>
          </nuxt-link>

            <!-- <nuxt-link
            to="/new/quest"
            :class="$route.path == '/new/quest' ? tactiveClass : tnonActiveClass"
          >
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
            <span
              :class="$route.path == '/new/quest' ? activeClass : nonActiveClass"
            >
              Quest
            </span>
          </nuxt-link> -->

          <nuxt-link
                  to="/notifications"
                  :class="
                    $route.path == '/notifications' ? tactiveClass : tnonActiveClass
                  "
                >
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-square-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
            <span
              :class="
                $route.path == '/notifications' ? activeClass : nonActiveClass
              "
            >
              {{ $t("Notif") }}
            </span>
          </nuxt-link>

          <nuxt-link
            to="/profile"
            :class="$route.path == '/profile' ? tactiveClass : tnonActiveClass"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-person"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
              />
            </svg>
            <span
              :class="$route.path == '/profile' ? activeClass : nonActiveClass"
            >
              {{ $t("Profile") }}
            </span>
          </nuxt-link>
        </div>
      </nav>

      <nav class="hidden left-0 fixed pb-3 lg:flex h-screen ml-10 w-64 text-lg">
        <div
          class="mx-auto flex flex-wrap content-center text-theme_secondary font-bold"
        >
          <nuxt-link
            to="/"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1"
          >
           <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>
            <span
              :class="$route.path == '/' ? activeClassLg : nonActiveClassLg"
              >{{ $t("Home") }}</span
            >
          </nuxt-link>

          <nuxt-link
            to="/groups"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1"
          >
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-people"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zm7.973.056v-.002.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
              />
            </svg>
            <span
              :class="
                $route.path.includes('/groups')
                  ? activeClassLg
                  : nonActiveClassLg
              "
              >
              {{ $t("Group") }}
              </span
            >
          </nuxt-link>

          <nuxt-link
            to="/apps"
            class="w-full rounded-full justify-start content-center items-center flex px-1 py-2 mx-1 my-1"
          >
            <img width="30px" height="30px" src="/icon.png" alt="Logo Aplikasi Maba">

            <span
              :class="$route.path == '/apps' ? activeClassLg : nonActiveClassLg"
              >
              Maba
            </span>
          </nuxt-link>


           <!-- <nuxt-link
            to="/new/quest"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1"
          >
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
            <span
              :class="$route.path == '/new/quest' ? activeClassLg : nonActiveClassLg"
              >
              Quest
            </span>
          </nuxt-link>
           -->

          <nuxt-link
            to="/notifications"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1"
          >
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chat-square-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            <span
              :class="
                $route.path == '/notifications'
                  ? activeClassLg
                  : nonActiveClassLg
              "
              >{{ $t("Notif") }}</span
            >
          </nuxt-link>

          <nuxt-link
            to="/profile"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1"
          >
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-person"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
              />
            </svg>
            <span
              :class="
                $route.path == '/profile' ? activeClassLg : nonActiveClassLg
              "
              >{{ $t("Profile") }}</span
            >
          </nuxt-link>
        </div>
      </nav>
    </div>




  </div>
</template>
<style scoped>
.text-xs2{
  font-size: 8px;
}

</style>

<script>

import Push from 'push.js'
export default {
  data() {
    return {
      notifikasi: [],
      windowTop: 0,
      tactiveClass: "text-lg font-bold rounded-full flex px-1 py-2 mx-1 flex-wrap content-center justify-center items-center pt-2",
      tnonActiveClass:"text-lg font-bold rounded-full flex px-1 py-2 mx-1 flex-wrap content-center justify-center items-center text-default pt-2",
      activeClass: "text-center text-xs2 w-full rounded-lg mt-1  text-primary",
      nonActiveClass: "text-center text-xs2 w-full  text-default mt-1",
      activeClassLg:
        "text-left text-lg p-1 px-8 mx-4 rounded-full bg-theme_primary_dark text-primary",
      nonActiveClassLg:
        "text-left text-lg p-1 px-8 mx-4 rounded-full text-default hover:bg-theme_primary_dark hover:text-primary"
    };
  },
  computed: {
    settings() {
      return this.$store.state.theme + " " + this.$store.state.primaryColor;
    }
  },
  methods:{
 
    sayHayPush(text){


        console.log(text)
        Push.create("Halo "+this.$store.state.user.name+" !", {
            body: text,
            icon: '/icon.png',
            timeout: 50000,
            onClick: function () {
                window.location.href = "https://maba.my.id/notifications"
            }
        });
 

    }
  },

  created() {

  

    let token = localStorage.getItem("access_token") || "";
    this.$axios.setHeader("Authorization", "Bearer " + token);


      this.$axios.$get("/profile-by-id/" + this.$store.state.user.id)
      .then(data => {
          if(data){
            this.$store.commit("updateProfile",data)
          }else{
            localStorage.clear()
          }
      }).catch(res => {
            localStorage.clear()
      });

  },

  mounted() {



    
    var that = this;

      var notifff = this.$fireDb.ref('notifikasi');
         notifff.on('value', function(snapshot) {
            that.sayHayPush((snapshot.val().text))
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
