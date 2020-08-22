<template>
  <div class="w-full" v-if="group">


    <section>
      <div class="w-full flex flex-wrap bg-theme_primary p-2 pt-6 rounded-xl ">
        <div class="w-full font-bold flex px-2 ">
          <img
            class="w-16 h-16  rounded-full"
            :src="group.avatar"
            :alt="group.name"
          />

          <div class="w-full pl-5 mt-1 flex flex-wrap items-start ">
            <div class="w-full text-xl lg:text-2xl mb-2">
              {{ group.name }}
              <br />
              <small>#{{ group.username }}</small>
            </div>
          </div>
        </div>
      </div>
    </section>


       <router-link
      :to="`/new/quest/${group.username}`"
      class="w-full bg-theme_primary p-5 mb-3 mt-3  rounded-xl flex"
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
      <span class="mx-2">Buat Quest Baru</span>
    </router-link>


    <section class="w-full rounded-xl pb-20 ">
      <card-post v-for="i in 10" :key="i" />
    </section>
  </div>
</template>

<script>
export default {
  layout: "app",
  middleware: "auth",
  data() {
    return {
      group: ""
    };
  },
  fetch() {
    this.$axios.$get("/group/" + this.$route.params.username).then(data => {
      this.group = data;
    });
  }
};
</script>
