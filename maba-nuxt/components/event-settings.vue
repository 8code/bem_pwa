<template>

      <div  class="w-full bg-transparent flex flex-wrap justify-center fixed top-0 right-0 h-screen" style="z-index:1000">
          <div @click="$emit('hide')" class="w-full  flex flex-wrap justify-center  bg-theme_primary_dark opacity-50 z-50 fixed top-0 right-0 h-screen ">
          </div>
          
          <div class="w-full p-4 lg:w-1/2 flex flex-wrap justify-center items-center content-center bg-theme_primary_light rounded-xl" 
          
          style="z-index:1001">
                
            <div class="flex my-3 mr-auto cursor-pointer w-full justify-center" @click="$store.commit('setAnonim',!$store.state.anonim)">
                <img :src="($store.state.anonim) ? '/anonim.png' : $store.state.user.avatar" alt="Anonim" class="rounded-full w-8 h-8">

                <span class="px-2 font-bold mt-1 font-lg" v-if="$store.state.anonim"> {{ $t('as' )}} Anonim </span>
                <span class="px-2 font-bold mt-1 font-lg" v-else> {{ $t('as' )}} {{ $store.state.user.username}} </span>
            </div>
            <label class="mb-2">Nama</label>
        
            <input @keyup.enter="$emit('rejoin',name)" type="text" v-model="name" class="w-full bg-theme_primary rounded-full px-5 py-3 mb-2" placeholder="Login As">
            <button @click="$emit('rejoin',name)"  class="bg-theme_primary py-2 px-10 rounded-full"> 
                    {{ $t("Done")}}
            </button>
                

          </div>
      </div>
</template>


<script>
export default {
   layout: 'app',
   middleware: 'auth',
   props:['loginAs'],
   data(){
       return {
           name: this.$props.loginAs.name
       }
   }
}

</script>