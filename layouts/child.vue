<template>
  <div
    :class="settings"
    class="w-full min-h-screen flex flex-wrap content-start bg-theme_primary_light "
  >
    <main
      class="w-full  mx-auto flex flex-wrap  pt-16 content-start min-h-screen bg-theme_primary_light "
      style="max-width:600px"
    >
      <transition name="slide-fade">
        <Nuxt class="w-full" />
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowTop: 0
    };
  },
  computed: {
    settings() {
      return (
        this.$store.state.leftMenu +
        " " +
        this.$store.state.theme +
        " " +
        this.$store.state.primaryColor
      );
    }
  },
  created() {
    let token = localStorage.getItem("access_token") || "";
    this.$axios.setHeader("Authorization", "Bearer " + token);
  },
  mounted() {
    var that = this;
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
