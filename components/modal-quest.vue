<template>

      <div  class="w-full bg-transparent flex flex-wrap justify-center fixed  bottom-0 right-0" style="z-index:1000">
          <div @click="$emit('hide')" class="w-full  flex flex-wrap justify-center items-end  bg-theme_primary_dark opacity-25 z-50 fixed top-0 right-0 h-screen ">
          </div>
          
          <div class="w-full p-4 lg:w-1/2 flex flex-wrap justify-center items-center content-center bg-theme_primary_light rounded-xl" 
          
          style="z-index:1001">
                
                <ul class="mb-3 flex w-full flex-wrap justify-center">
                    <li v-if="quest.user_id == $store.state.user.id"
                    @click="$emit('delete')"
                     class="p-4 text-danger border-b border-theme_primary w-full text-center hover:rounded-full hover:bg-theme_primary">
                        Hapus Quest
                    </li>
                   <li @click="report = true" class="p-4 border-b border-theme_primary w-full text-center hover:rounded-full hover:bg-theme_primary">
                        <span > Laporkan </span> 
                        <select v-model="data_report" v-if="report" 
                        
                         class="w-full bg-theme_primary_light rounded-full px-5 py-3 mb-2 text-center">
                           <option value="">Kenapa denga quest ini ?</option>
                            <option value="Spam">Spam</option>
                            <option value="Sensitif">Sensitif</option>
                            <option value="Hoak">Hoak</option>
                        </select>
                          <button  v-if="report"  @click="sendReport" class="bg-primary text-secondary py-2 px-10 rounded-full"> 
                                Kirim
                        </button>
                    </li>
                    <!-- <li @click="notifme" class="p-4 border-b border-theme_primary w-full text-center hover:rounded-full hover:bg-theme_primary">
                        Beri saya notifikasi quest ini
                    </li> -->
                    <!-- <li @click="save" class="p-4 border-b border-theme_primary w-full text-center hover:rounded-full hover:bg-theme_primary">
                        Simpan Quest
                    </li> -->
                    <!-- <li v-if="quest.user_id == $store.state.user.id" @click="$emit('activity')" class="p-4 border-b border-theme_primary w-full text-center hover:rounded-full hover:bg-theme_primary">
                        Lihat Aktivitas Quest
                    </li> -->
                   
                </ul>
        
                <button @click="$emit('hide')" class="bg-theme_primary py-2 px-10 rounded-full"> 
                        Tutup
                </button>
                

          </div>
      </div>
</template>


<script>
export default {
   layout: 'app',
   middleware: 'auth',
   props:['quest'],
   data(){
       return{
           report: false,
           data_report: ''
       }
   },
   methods:{
       sendReport(){
           if(this.data_report){
            this.$axios.get("/report/"+this.$props.quest.id+"/"+this.data_report)
                .then(res => {
                    this.$emit("hide")
                })
           }
       }
   }
}

</script>