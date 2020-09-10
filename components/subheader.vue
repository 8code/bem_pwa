<template>
    <div class="w-full text-center p-2">
    <div class="mx-auto text-sm flex content-center justify-center ">
            <nuxt-link :to="'/'+name" :class="($route.path == '/'+name) ? activeClass : nonActiveClass"> Followed </nuxt-link>
            <nuxt-link :to="'/'+name+'/explore'" :class="($route.path == '/'+name+'/explore') ? activeClass : nonActiveClass">
            {{ $t("Explore")}} 
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name'],
     data(){
        return {
            activeClass: 'mx-1 w-1/2 px-10 py-2  bg-primary text-white rounded-full font-bold',
            nonActiveClass: 'bg-theme_primary_dark text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 w-1/2 px-10 py-2  rounded-full font-bold'
        }
    },
}
</script>