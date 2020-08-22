<template>
  <div class="w-full" v-if="group">
    <section>
      <div class="w-full flex flex-wrap bg-theme_primary p-2 ">
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
