<template>
<div class="w-full">
          <subheader name="groups" />

            <section class="w-full rounded-xl pb-20">
                        <div class="p-2">
                            <input type="text" class="w-full py-2 px-5 rounded-full bg-theme_primary hover:bg-theme_primary_dark"
                            placeholder="Search"
                            >
                        </div>
                        <div class="p-2 flex flex-row" style="overflow-x:scroll">
                                <div class="relative h-20 mx-1 px-6 bg-theme_primary neu-out hover:bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2">
                                    <div class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"></div>
                                    Student Organization
                                </div>
                                 <div class="relative h-20 mx-1 px-6 bg-theme_primary neu-out hover:bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2">
                                    <div class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-success mr-3"></div>
                                    Student Organization
                                </div>
                                <div class="relative h-20 mx-1 px-6 bg-theme_primary neu-out hover:bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2">
                                    <div class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-warning mr-3"></div>
                                    Student Organization
                                </div>
                                <div class="relative h-20 mx-1 px-6 bg-theme_primary neu-out hover:bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2">
                                    <div class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-info mr-3"></div>
                                    Student Organization
                                </div>
                                  <div class="relative h-20 mx-1 px-6 bg-theme_primary neu-out hover:bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2">
                                    <div  class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-danger mr-3"></div>
                                    Student Organization
                                </div>
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

