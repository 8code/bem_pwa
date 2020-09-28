<template>
    <div v-if="$store.state.loading" class="bg-theme_primary_dark opacity-75 fixed top-0 right-0 w-screen h-screen flex content-center items-center justify-center" style="z-index:10000">
        <b class="font-bold text-2xl">
            Loading...
        </b>
    </div>
</template>