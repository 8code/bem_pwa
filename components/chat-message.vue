<template>
    <div class="w-full relative flex mb-2">
          <div class="rounded-full rounded-tl-none p-2 flex flex-wrap " :class="(c.user.username == $store.state.user.username) ? 'ml-auto bg-primary hover:bg-primary_dark text-white' : 'mr-auto bg-theme_primary hover:bg-theme_primary_dark'">
            <div class="flex flex-wrap">
                    <img
                    class="w-5 h-5  rounded-full"
                    :src="c.user.avatar"
                    alt="Avatar"
                    />
                    <div class="pl-2">
                        <span class="font-semibold text-xs">{{ c.user.name }}</span>
                        
                    </div>
                    <span class="pr-2 ml-auto" style="font-size:10px">
                                {{ c.time }}
                            </span>
                    <br>
                    <div class="w-full flex pl-8">
                        {{ c.message.text }}
                         
                    </div>
            </div>
            </div>
    </div>
</template>
<script>
export default {
    props: ['c']
}
</script>