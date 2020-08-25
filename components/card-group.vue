<template>
  <div class="w-full p-2 relative flex border-t border-b border-theme_primary_light">
    <div
      class="w-full flex flex-wrap shadow-sm bg-theme_primary hover:bg-theme_primary_dark rounded-xl px-2 lg:py-2 "
    >
     
      <div class="w-full font-bold flex px-2 pt-4 ">
     
        <img
          class="w-16 h-16  rounded-full"
          :src="group.avatar"
          :alt="group.name"
        />

        <div class="w-full pl-5 mt-1 flex flex-wrap items-start ">

        <div v-if="follow">
              <span v-if="group.followed" class=" cursor-pointer absolute top-0 right-0 mt-8 mr-5 bg-secondary text-primary px-4 py-1 rounded-full">
                  Followed
              </span>
              <div v-else >
                <span v-if="!followTemp" @click="followGroup(group.id)" class=" cursor-pointer absolute top-0 right-0 mt-8 mr-5 bg-primary px-4 py-1 rounded-full text-secondary">
                    Follow
                </span>
                <span v-if="followTemp" class=" cursor-pointer absolute top-0 right-0 mt-8 mr-5 bg-secondary text-primary px-4 py-1 rounded-full">
                  Followed
              </span>
              </div>
            
        </div>
      
          
          
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

        <router-link :to="`/${group.username}`"  class="ml-auto text-primary text-sm mt-1 px-3 rounded-full">
          Lihat {{ group.qna_total}} Quest
        </router-link>
      </small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["group","follow"],
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
