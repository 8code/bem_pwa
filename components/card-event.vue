<template>
  <div v-if="data" class="w-full" >
        <nuxt-link class="w-full p-2 relative flex  border-b border-theme_primary_light"  :to="localePath(`/channel/${data.channel.room_id}`)"> 
    <div
      class="w-full flex flex-wrap shadow-sm bg-theme_primary hover:bg-theme_primary_dark rounded-xl px-2 lg:py-2 "
    >
     
      <div class="w-full font-bold flex px-2 pt-4 ">

        <img v-if="data.image"
          class="w-12 rounded-lg"
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
        <div class="h-4 w-4 rounded-full shadow-lg bg-primary mr-3"></div>
        {{ dateIndo(data.start) }}
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
      return util.dateTimeIndo(data);
    },
  }
};
</script>
