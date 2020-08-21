<template>
<div class="w-full">
    <!-- Content -->
    <section class="w-full flex flex-wrap">
       
          <div class="w-full p-2 relative cursor-default" > 
                    <div class="border-b rounded-lg border-bg-theme_primary_light bg-theme_primary hover:bg-theme_primary_light px-2 pb-5 ">
                    <router-link class="p-1 px-4 bg-theme_primary_light rounded-tl-xl rounded-br-xl text-xs" to="#ombus2020" >#ombus2020</router-link>
                     <div class="w-auto flex p-2 "> 
                        <img class="w-8 h-8 rounded-full" src="/icon.png" alt="Event 1">

                        <div class="pl-5 flex flex-wrap items-start">
                          <b class="font-bold">@bemunsil</b>
                            
                            <span class="w-full  mb-2">
                                Kenapa kita bayar UKT Full tapi kuliah Online, Apakah itu bla bla bla.. diskusikan disini ya :)
                            </span>
                        </div>

                    </div>
                </div>
            </div>
          <div class="w-full flex p-2">
              <label>Answer @bemunsil</label>
            <!-- <label>New Question For @bemunsil</label> -->
             <div class="ml-auto">
              Record Suara
            </div>
          </div>
           <textarea class="mx-2 mt-5 p-3 bg-theme_primary_light w-full rounded-lg"></textarea>
           <button class="py-2 w-full rounded-lg mt-2 bg-theme_primary_light mx-2">
             Send
           </button>
    </section>
</div>
        
</template>

<script>

export default {
   layout: 'app',
   middleware: 'auth',
  data(){
    return {
    }
  }
}

</script>