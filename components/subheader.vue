<template>
<div class="mb-12 w-full">
    <div class="text-sm flex fixed top-0 z-50 bg-theme_primary w-full mx-auto pt-2"
    
       style="max-width:600px;"
       >
            <nuxt-link  :to="'/'+name"  :class="($route.path == '/'+name) ? activeClass : nonActiveClass">
            {{ $t("Followed")}}
            </nuxt-link>
            <nuxt-link :to="'/'+name+'/explore'" :class="($route.path == '/'+name+'/explore') ? activeClass : nonActiveClass">
            {{ $t("Explore") }}
            </nuxt-link>
             <nuxt-link to="/search" class="px-5 mx-1 ml-auto py-2 font-bold">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg>
            </nuxt-link>
    </div>
</div>
</template>

<script>
export default {
    props: ['name'],
     data(){
        return {
            activeClass: 'mx-1 px-5 py-2  text-primary rounded-full font-bold',
            nonActiveClass: 'px-5 mx-1 py-2  border-primary  font-bold'
        }
    },
}
</script>