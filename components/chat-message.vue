<template>
    <div class="w-full relative flex mb-2">
        
          <div class="rounded-xl rounded-tl-none p-1 flex flex-wrap " 
          
          :class="(c.user.username == $store.state.user.username) ? 'ml-auto bg-primary hover:bg-primary_dark text-white' : 'mr-auto bg-theme_primary hover:bg-theme_primary_dark'">
            <div class="flex flex-wrap">

               
                    <img
                    v-if="!anonim"
                    class="w-5 h-5  rounded-full"
                    :src="c.user.avatar"
                    alt="Avatar"
                    />
                   
                    <div class="pl-1">
                        <span class="font-semibold text-xs"
                        v-if="!anonim"
                        
                        >{{ c.user.name }}</span>
                        
                    </div>
                    <span class="pr-2 ml-auto" style="font-size:10px">
                                {{ c.time }}
                            </span>
                    <br>
                    <div class="w-full flex " :class="(anonim) ? 'pl-2' : 'pl-4'">
                       

                       <img width="300px" class="rounded-xl mx-auto" v-if="c.message.image" :src="c.message.image" />
                       <audio v-if="c.message.audio" :src="c.message.audio" controls class="mt-2" />

                        {{ c.message.text }}

                    </div>
            </div>

               
            </div>

          

    </div>
</template>
<script>
export default {
    props: ['c','anonim']
}
</script>