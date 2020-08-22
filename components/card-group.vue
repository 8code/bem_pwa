<template>
  <router-link :to="`/g/${group.username}`" class="w-full px-2 pb-2 relative flex">
    <div
      class="w-full flex flex-wrap bg-theme_primary_light hover:bg-theme_primary rounded-xl px-2 lg:py-2 "
    >
      <div class="w-full font-bold flex px-2 pt-4 ">
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

      <small class="w-full font-semibold px-4  lg:text-lg py-3 pb-5 flex">
        <div class="h-4 w-4 rounded-full shadow-lg bg-primary mr-3 mt-1"></div>
        {{ group.type }}

        <div class="ml-auto text-primary text-sm mt-1 px-3 rounded-full">
          100 Postingan Baru
        </div>
      </small>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["group"]
};
</script>
