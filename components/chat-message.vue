<template>
    <div class="w-full relative flex mb-2">
          <div class="rounded-lg p-2 flex flex-wrap " :class="(c.user.username == $store.state.user.username) ? 'ml-auto bg-primary hover:bg-primary_dark text-white' : 'mr-auto bg-theme_primary hover:bg-theme_primary_dark'">
            <div class="flex flex-wrap">
                    <img
                    class="w-6 h-6  rounded-full"
                    :src="c.user.avatar"
                    alt="Avatar"
                    />
                    <div class="pl-2">
                        <span class="font-semibold text-sm">{{ c.user.name }}</span>
                      
                    </div>
                    <br>
                    <div class="w-full flex pl-6">
                        {{ c.message.text }}
                          <span class="text-xs pl-2 ml-auto">
                            {{ c.time }}
                        </span>
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