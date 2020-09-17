<template>
<div class="w-full" v-touch:swipe="to">
        <subheader name="groups" />
        <section class="w-full rounded-xl pb-20">
                <card-group v-for="group in listGroup" :key="group.id" :group="group" 
                totalFollower="true"
                />
        </section>
        <btn-create link="/new/group" name="Buat Group"
          />
</div>
        
</template>

<script>
export default {
    layout: 'no-header',
    middleware: 'auth',
    data(){
        return{
            listGroup: ''
        }
    },
    created(){
        this.$axios.$get("/mygroup")
            .then(res => {
                this.listGroup = this.sortByKey(Object.values(res),"last_active").reverse()

                if(this.listGroup.length == 0){
                    this.$router.push("/groups/explore")
                }
            })
    },
    methods:{
       sortByKey(array, key) {
                return array.sort(function(a, b) {
                    var x = a[key]; var y = b[key];
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                });
            },
        to(directions){
            if(directions == 'left'){
                this.$router.push('/groups/explore')
            }
        }
    }
}
</script>

