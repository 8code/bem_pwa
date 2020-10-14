<template>
  <div v-if="group" class="w-full p-2 relative flex  border-b border-theme_primary_light">
        <nuxt-link :to="`/${group.username}`"> 
    <div
      class="w-full flex flex-wrap shadow-sm bg-theme_primary hover:bg-theme_primary_dark rounded-xl px-2 lg:py-2 "
    >
     
      <div class="w-full font-bold flex px-2 pt-4 ">

        <img
          class="w-16 h-16  rounded-full"
          :src="group.avatar"
          :alt="group.name"
        />
   

        <div class="w-full pl-5 mt-1 flex flex-wrap items-start">


       


          
          
          <div class="w-full text-xl lg:text-2xl mb-2">
          {{ group.name }}
            <br />
            <div class=" flex w-full justify-between">

                
                   <small>#{{ group.username }}</small>
                  <div v-if="follow" class="text-sm">
                        <span v-if="group.followed" class="cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full">
                            Diikuti
                        </span>
                        <div v-else >
                          <span v-if="!followTemp" @click="followGroup(group.id)" class="cursor-pointer bg-primary px-4 py-1 rounded-full text-secondary">
                              Ikuti
                          </span>
                          <span v-if="followTemp" class="fursor-pointer bg-secondary text-primary px-4 py-1 rounded-full">
                            Diikuti
                        </span>
                        </div>
                      
                  </div>

                    <div v-if="totalFollower" class="text-sm">
                        <span class="cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full">
                            {{ group.follow_total}} Pengikut
                        </span>
                      
                  </div>


              </div>
            
            
          </div>
        </div>
      </div>

      <small class="w-full font-semibold px-4  lg:text-lg py-3 pb-5 flex">
        <div class="h-4 w-4 rounded-full shadow-lg bg-primary mr-3 mt-1"></div>
        {{ group.type }}

        <nuxt-link :to="`/${group.username}`"  class="ml-auto text-primary text-sm mt-1 px-3 rounded-full">
          Lihat {{ group.total_qna}} Quest
        </nuxt-link>
      </small>
    </div>

      </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["group","follow","totalFollower"],
  data(){
    return{
      followTemp: false
    }
  },
  methods:{
    followGroup(id){
      this.$axios.get("/group/follow/"+id)
        .then(res => {
            this.followTemp = true
        })
    }
  }
};
</script>
