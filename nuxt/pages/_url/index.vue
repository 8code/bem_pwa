<template>
    <div>
        <detail-group v-if="forpage == 'group'" :id="$route.params.url" />
        <detail-user v-if="forpage == 'user'"  :id="$route.params.url" />
        <div v-if="!page">
            404
        </div>
    </div>
</template>
<script>
export default {
     scrollToTop: true,
     layout: "no-header",
     middleware: "auth",
    data(){
        return {
            page: false,
            forpage: ''
        }
    },
    created(){
       if(this.$route.params.url.includes("@")){
           // user    
           this.page = true
           this.forpage = 'user'
       }else{
           // group
           this.page = true
           this.forpage = 'group'
       }
    }
}
</script>