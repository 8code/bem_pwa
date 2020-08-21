<template>
<div class="w-full" v-touch:swipe="to">
    
</div>
        
</template>

<script>
export default {
    layout: 'app',
    middleware: 'auth',
    data(){
        return{
            listGroup: ''
        }
    },
    created(){
        this.$axios.$get("/group")
            .then(res => {
                this.listGroup = res.data
            })
    },
    methods:{
        to(directions){
            if(directions == 'left'){
                this.$router.push('/groups/explore')
            }
        }
    }
}
</script>

