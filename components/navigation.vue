<template>
    <div>
          
        <div @mouseover="$store.commit('toggleLeftMenu','')"  class="hidden w-full sidebar-bg-close bg-theme_primary text-theme_primary opacity-75" ></div>
  
         <nav class="content-center bg-theme_primary_dark hidden fixed top-0 w-2/3 lg:w-1/5 xl:w-1/6 p-5 flex-wrap sidebar font-semibold">                                
            <div class="w-full flex flex-wrap">   
                    <div class="rounded-lg p-1">
                        <div class="flex  rounded-lg flex-wrap">


                               <ul class="w-full">
                                    <li >
                                        <div class="flex flex-wrap">
                                            <img :src="$store.state.user.avatar" alt="avatar" class="rounded-full">

                                            <div class="w-full mt-2">
                                                {{ $store.state.user.name}}
                                            </div>
                                        </div>
                                        <span class="text-primary border-t flex w-full border-primary font-semibold py-3 mt-3">
                                           Profile
                                        </span>
                                    </li>
                                     

                                   <li v-for="(menu,i) in listMenu" :key="i+menu.path">
                                        <span v-if="!menu.path" class="border-t flex w-full border-primary font-semibold py-3 px-4 text-primary mt-2">
                                            {{ menu.name }}
                                        </span>
                                        <router-link v-if="menu.path" :to="menu.path" :class="($route.path == menu.path) ? ActiveClass : nonActiveClass">
                                            {{ menu.name}}
                                        </router-link>
                                        <template v-if="menu.sub">
                                            <ul v-for="subMenu in menu.sub" :key="subMenu.path" class="rounded-lg w-full ">
                                                <li :class="($route.path == subMenu.path) ? ActiveClass : nonActiveClass">
                                                    <router-link :to="subMenu.path" class="flex w-full">
                                                       {{ subMenu.name}}
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </template>
                                   </li>
                               </ul>
                              
                        </div>
                    </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nonActiveClass : 'flex w-full hover:bg-theme_primary hover:font-semibold rounded-lg py-2 px-4 hover:text-primary my-1',
            ActiveClass : 'flex w-full bg-theme_primary font-semibold rounded-lg py-2 px-4 text-primary my-1'
        }
    },
    computed:{
        listMenu(){
            let menuu = this.$store.state.listMenu;
           
            return  menuu.filter(data => {
                if(!data.admin){
                    return data
                }else{
                    if(this.$store.state.user.admin){
                        return data
                    }
                }
            })
        }
    }
}
</script>