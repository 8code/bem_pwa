<template>
  <div v-if="data" class="w-full" >
        <nuxt-link class="w-full p-2 relative flex  border-b border-theme_primary_light"  :to="localePath(`/channel/${data.id}`)"> 
    <div
      class="w-full flex flex-wrap shadow-sm bg-theme_primary hover:bg-theme_primary_dark rounded-xl px-2 lg:py-2 "
    >
     
      <div class="w-full font-bold flex px-2 pt-4 ">

        <img
          class="w-12 h-12  rounded-full"
          :src="data.image"
          :alt="data.name"
        />
   

        <div class="w-full pl-3 mt-1 flex flex-wrap items-start">

          
          <div class="w-full text-sm lg:text-lg">
          {{ data.name }}
          </div>
        </div>
      </div>

      <small class="w-full font-semibold px-4 text-xs py-3 flex">
        <div class="h-4 w-4 rounded-full shadow-lg bg-primary mr-3 mt-1"></div>
        {{ dateIndo(data.start) }}

        <div  class="ml-auto text-primary text-xs mt-1 px-3 rounded-full">
          <span v-if="data.status == null">
            Menunggu
          </span>
        </div>
      </small>
    </div>

      </nuxt-link>
  </div>
</template>

<script>
import util from "~/assets/js/util";
export default {
  props: ["data"],
  data(){
    return{
      
    }
  },
  methods:{
    dateIndo(data) {
      return util.dateIndo(data);
    },
  }
};
</script>
