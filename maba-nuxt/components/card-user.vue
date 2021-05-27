<template>
  <div class="w-full p-2 relative flex  border-b border-theme_primary_light">
    <div
      class="w-full flex flex-wrap shadow-sm bg-theme_primary hover:bg-theme_primary_dark rounded-xl px-2 lg:py-2 "
    >
     
      <div class="w-full flex px-2 pt-2 ">
     
        <img
          class="w-10 h-10  rounded-full"
          :src="data.avatar"
          :alt="data.name"
        />

        <div class="w-full pl-3  flex flex-wrap items-start">

          
          <div class="w-full mb-2">
           <nuxt-link class="font-bold" :to="localePath(`/@${data.username}`)"> {{ data.name }}</nuxt-link>
            <br />
            <div class=" flex w-full justify-between">

                
                    <nuxt-link class="font-semibold text-primary" :to="localePath(`/@${data.username}`)">@{{ data.username }}</nuxt-link>
               
                        <div  v-if="data.followed" class="text-sm" >
                           <span class=" cursor-pointer bg-theme_primary_light text-primary px-4 py-1 rounded-full">
                              Diikuti
                          </span>
                        </div>
                        <div v-else class="text-sm">
                          <span v-if="!followTemp" @click="followUser(data.id)" class="cursor-pointer bg-primary px-4 py-1 rounded-full text-secondary">
                              Ikuti
                          </span>
                          <span v-if="followTemp" class="fursor-pointer bg-theme_primary_light text-primary px-4 py-1 rounded-full">
                            Diikuti
                        </span>
                        </div>

              </div>
            
            
          </div>
        </div>
      </div>

      <!-- <small class="w-full font-semibold px-2 lg:px-4 text-xs pb-2 flex">
        <div class="h-2 w-2 rounded-full shadow-lg bg-primary mr-1 mt-1"></div>
        {{ data.study_program }} 
        {{ data.angkatan }}

        <span class="ml-auto text-primary text-xs mt-1 text-right rounded-full">
         {{ data.university}}
        </span>
      </small> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data(){
    return{
      followTemp: false
    }
  },
  methods:{
  
    followUser(id){
      this.$axios.get("/user/follow/"+id)
        .then(res => {
            this.followTemp = true
            this.$store.commit("setNotif",{
              to: id,
              text: "@"+this.$store.state.user.username+" Mengikuti anda"
            })
            
        })
    }
  }
};
</script>
