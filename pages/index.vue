<template>
  <div class="flex flex-wrap pb-40 ">
    <section class="w-full p-5 relative">
      <div class="flex pb-5 items-start ">
        <img
          width="50px"
          :src="$store.state.user.avatar"
          alt="avatar"
          class="rounded-full"
        />

        <div class="ml-5">
          {{ $store.state.user.name }}
          <br />
          <small class="text-sm"> @{{ $store.state.user.username }}</small>
        </div>

        <div class=" ml-auto">
          <nuxt-link
            to="/edit/profile"
            class="mt-3 text-primary text-sm float-right px-3  cursor-pointer flex"
          >
            Edit Profile
          </nuxt-link>
        </div>
      </div>
    </section>

    <h1 class="px-4 mb-5">Group Saya</h1>
    <card-group v-for="group in myGroup" :key="group.id" :group="group" />
    <router-link
      to="/new/group"
      class="w-full bg-theme_primary p-5 m-2 rounded-xl flex"
    >
      <svg
        width="1.5em"
        height="1.5em"
        viewBox="0 0 16 16"
        class="bi bi-plus-circle"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
        />
        <path
          fill-rule="evenodd"
          d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
        />
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
      </svg>
      <span class="mx-2">Buat Group Baru</span>
    </router-link>

    <button
      @click="$store.commit('logout')"
      class="w-full bg-theme_primary py-3 text-danger m-2 rounded-xl flex justify-center"
    >
      Keluar
    </button>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  layout: "app",
  middleware: "auth",
  fetch() {
    this.$store.commit("getMyGroup");
  },
  computed: {
    myGroup() {
      return this.$store.state.data.mygroup;
    }
  }
};
</script>
