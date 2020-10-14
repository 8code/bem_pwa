<template>
  <div :class="settings">
    <loading />

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

      <nav class="fixed bottom-0 flex lg:hidden w-full bg-theme_primary">
        <div class="mx-auto flex content-start text-primary font-bold">
          <nuxt-link
            to="/groups"
            :class="
              $route.path.includes('/groups') ? tactiveClass : tnonActiveClass
            "
          >
            <svg
              width="1.2em"
              height="1.2em"
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
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              class="bi bi-chat-square-dots"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
            <span
              :class="$route.path == '/channels' ? activeClass : nonActiveClass"
            >
              {{ $t("Channel") }}
            </span>
          </nuxt-link>

          <nuxt-link
            to="/search"
            :class="$route.path == '/search' ? tactiveClass : tnonActiveClass"
          >
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              class="bi bi-search"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
            <span
              :class="$route.path == '/search' ? activeClass : nonActiveClass"
            >
              {{ $t("Search") }}
            </span>
          </nuxt-link>

          <nuxt-link
            to="/notifications"
            :class="
              $route.path == '/notifications' ? tactiveClass : tnonActiveClass
            "
          >
            <svg
              width="1.2em"
              height="1.2em"
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
              width="1.2em"
              height="1.2em"
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
            to="/groups"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover"
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
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover"
          >
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-chat-square-dots"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
            <span
              :class="
                $route.path == '/channels' ? activeClassLg : nonActiveClassLg
              "
              >{{ $t("Channels") }}</span
            >
          </nuxt-link>

          <nuxt-link
            to="/search"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover"
          >
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-search"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
            <span
              :class="
                $route.path == '/search' ? activeClassLg : nonActiveClassLg
              "
              >{{ $t("Search") }}</span
            >
          </nuxt-link>

          <nuxt-link
            to="/notifications"
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover"
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
            class="w-full rounded-full flex px-1 py-2 mx-1 my-1 to-hover"
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
        "text-lg font-bold rounded-full flex px-1 py-2 mx-1 flex-wrap content-center justify-center items-center pt-2",
      tnonActiveClass:
        "text-lg font-bold rounded-full flex px-1 py-2 mx-1 flex-wrap content-center justify-center items-center text-default pt-2",
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
