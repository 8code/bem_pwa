<template>
  <div :class="settings"  style="height:100vh;overflow-y:scroll">
    <loading />

    <div
      class="w-full min-h-screen flex flex-wrap content-start "
    >
    
      <main
        class="w-full mx-auto flex flex-wrap pt-2 content-start min-h-screen  "
        style="max-width:600px;"
      >
        <media-player />
        <transition name="slide-fade">
          <Nuxt class="w-full" />
        </transition>
      </main>

      <nav class="fixed bottom-0 flex lg:hidden w-full bg-theme_primary  ">
        <div class="flex w-full text-primary font-bold">

           <nuxt-link
            to="/feed"
            :class="
              $route.path.includes('/feed') ? tactiveClass : tnonActiveClass
            "
          >
           <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
            <span
              :class="
                $route.path.includes('/feed') ? activeClass : nonActiveClass
              "
            >
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
            to="/channels"
            :class="$route.path == '/channels' ? tactiveClass : tnonActiveClass"
          >
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
  <path fill-rule="evenodd" d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
</svg>
            <span
              :class="$route.path == '/channels' ? activeClass : nonActiveClass"
            >
              {{ $t("Channels") }}
            </span>
          </nuxt-link>

        

          <nuxt-link
            to="/notifications"
            :class="
              $route.path == '/notifications' ? tactiveClass : tnonActiveClass
            "
          >
            <svg
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
            to="/feed"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover hover:text-primary"
          >
          <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>
            <span
              :class="
                $route.path.includes('feed')
                  ? activeClassLg
                  : nonActiveClassLg
              "
            >
              {{ $t("Home") }}
            </span>
          </nuxt-link>
          <nuxt-link
            to="/groups"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover hover:text-primary"
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
            </span>
          </nuxt-link>

          <nuxt-link
            to="/channels"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover hover:text-primary"
          >
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chat-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
  <path fill-rule="evenodd" d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
</svg>
            <span
              :class="
                $route.path == '/channels' ? activeClassLg : nonActiveClassLg
              "
              >{{ $t("Channels") }}</span
            >
          </nuxt-link>


          <nuxt-link
            to="/notifications"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover hover:text-primary"
          >
            <svg
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
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover hover:text-primary"
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
        "hovered text-left text-lg p-1 px-8 mx-4 rounded-full bg-theme_primary_dark text-primary",
      nonActiveClassLg:
        "hovered text-left text-lg p-1 px-8 mx-4 rounded-full text-default hover:bg-theme_primary_dark hover:text-primary"
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
          window.location.href = "https://maba.my.id/notifications";
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
          localStorage.clear();
        }
      })
      .catch(res => {
        localStorage.clear();
      });
  },

  mounted() {
    var that = this;

    var notifff = this.$fireDb.ref("notifikasi/" + this.$store.state.user.id);
    notifff.on("value", function(snapshot) {
      console.log(snapshot.val());
      that.sayHayPush(snapshot.val().text);
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
