<template>
<div class="w-full" v-touch:swipe="to">
          <subheader name="home" />
            <section class="w-full rounded-xl pb-20">
                    <card-group v-for="group in listGroup" :key="group.id" :group="group" />
            </section>
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

