<template>
    <div>

    <div  class="text-sm flex p-2">
        <span @click="$store.commit('toggleSetting',true)" class="mb-2 text-center cursor-pointer bg-theme_primary_dark  px-4 py-1 rounded-full text-primary">
                Pengaturan
        </span>
        <router-link to="/edit/profile" class="ml-auto mb-2 text-center cursor-pointer bg-theme_primary_dark px-4 py-1 rounded-full text-primary">
                Edit Profile
        </router-link>
        </div>
     
        <detail-user :id="'@'+$store.state.user.username" editprofile="true" />
        
       
        
    </div>
</template>
<script>
export default {
      scrollToTop: true,
     layout: "no-header",
     middleware: "auth",
}
</script>