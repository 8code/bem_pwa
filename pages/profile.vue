<template>
    <div>

    <div  class="text-sm flex ">
            <span @click="$store.commit('toggleSetting',true)" class="mb-2 text-center cursor-pointer bg-theme_primary_dark  px-4 py-1 rounded-full text-primary">
                    Pengaturan
                </span>
                <div class="w-full pt-3 text-right">
                <router-link to="/edit/profile" class="mb-2 text-center cursor-pointer bg-theme_primary_dark px-4 py-1 rounded-full text-primary">
                        Edit Profile
                </router-link>

                </div>
        </div>
     
        <detail-user :id="'@'+$store.state.user.username" editprofile="true" />
        
         <new-quest  umum="true" />
        
    </div>
</template>
<script>
export default {
    scrollToTop: true,
     layout: "no-header",
     middleware: "auth",
}
</script>