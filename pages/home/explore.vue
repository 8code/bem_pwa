<template>
<div class="w-full">
          <subheader name="home" />

            <section class="w-full rounded-xl pb-20">
                        <div class="p-2">
                            <input type="text" class="w-full py-2 px-5 rounded-full bg-theme_primary hover:bg-theme_primary_dark"
                            placeholder="Search"
                            >
                        </div>
                      
                        <card-group v-touch:swipe="to" v-for="group in listGroup" :key="group.id" :group="group" />

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
            if(directions == 'right'){
                this.$router.push('/groups')
            }
        }
    }
}
</script>

