<template>
    <div class="mx-auto text-sm flex px-2">
            <nuxt-link  :to="'/'+name"  :class="($route.path == '/'+name) ? activeClass : nonActiveClass">
            {{ $t("Followed")}}
            </nuxt-link>
            <nuxt-link :to="'/'+name+'/explore'" :class="($route.path == '/'+name+'/explore') ? activeClass : nonActiveClass">
            {{ $t("Explore") }}
            </nuxt-link>
        </div>
</template>

<script>
export default {
    props: ['name'],
     data(){
        return {
            activeClass: 'mx-1 px-5 py-2  bg-primary text-white rounded-full font-bold',
            nonActiveClass: 'px-5 mx-1 py-2  bg-theme_primary_dark text-primary  border-primary rounded-full font-bold'
        }
    },
}
</script>