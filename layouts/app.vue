<template>
<div  :class="settings">
    <main
      class="w-full mx-auto flex flex-wrap pt-2 content-start"
    >
      <transition name="slide-fade">
        <Nuxt class="w-full" />
      </transition>
    </main>
</div>
</template>


<script>
export default {
  computed: {
    settings() {
      return (
     
        this.$store.state.theme +
        " " +
        this.$store.state.primaryColor
      );
    }
  }
};
</script>
