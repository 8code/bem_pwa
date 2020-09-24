<template>
    <div>
     
        <detail-user :id="'@'+$store.state.user.username" editprofile="true" />
        
         <new-quest  umum="true" />
        
    </div>
</template>
<script>
export default {
     layout: "no-header",
     middleware: "auth",
}
</script>