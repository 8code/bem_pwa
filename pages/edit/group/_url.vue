<template>
<div class="w-full bg-theme_primary">
    <!-- Content -->
    <section class="w-full shadow-sm rounded-xl mb-20">
          <div class="shadow-sm rounded-xl px-5 pb-5">

              <div class="flex flex-wrap">
                <div class="w-full  px-5 flex flex-wrap">

                  <div class="flex w-full">
                       <croppa class="shadow-sm rounded-lg"
                          v-model="avatar"
                          :width="100"
                          prevent-white-space
                          :height="100"
                          :placeholder="'100x100px'"
                          @init="onInit"
                          :initial-image="d.avatar"
                          ></croppa>
                


                  <div class="w-full p-5 flex flex-wrap">
                    
                              <label class="text-left  pl-2 w-full mb-3" for="usernama">TagName</label>
                                  <input class="w-full
                                  shadow-sm bg-theme_primary_light
                                  py-2 px-4 
                                  rounded-lg mb-3
                                  " 
                                  type="text"
                                  v-model="d.username"
                                  @keyup="updateToString('username')"
                                  placeholder="Username">

                                  
                  </div>
                  </div>


                  <div class="w-full flex flex-wrap">
                        <label class="text-left  pl-2 w-full my-3" for="nama">Nama</label>
                          <input class="w-full
                          shadow-sm bg-theme_primary_light
                          py-2 px-4 
                          rounded-lg mb-3
                          " 
                          type="text"
                          v-model="d.name"
                          placeholder="Nama">
                  </div>
                    <div class="w-full flex flex-wrap">
                        <label class="text-left  pl-2 w-full my-3" for="instagram">Instagram</label>
                          <input class="w-full
                          shadow-sm bg-theme_primary_light
                          py-2 px-4 
                          rounded-lg mb-3
                          " 
                          type="text"
                          v-model="d.instagram"
                          placeholder="Instagram">
                  </div>


                    <label class="text-left  pl-2 w-full my-3" for="type">Type</label>
                      <select
                      class="w-full
                      shadow-sm bg-theme_primary_light
                      py-2 px-4 
                      rounded-lg mb-3
                      "
                      v-model="d.type"
                        >
                        <option value="Ormawa">Ormawa</option>
                        <option value="UKM">UKM</option>
                        <option value="StartUp">StartUp</option>
                        <option value="Komunitas">Komunitas</option>
                        <option value="Lainnya">Lainnya</option>


                      </select>
               
                    <label class="text-left  pl-2 w-full my-3"  for="email">Descriptions</label>
                      <textarea class="w-full
                          shadow-sm bg-theme_primary_light
                          py-2 px-4 
                          rounded-lg mb-3
                          " 
                          v-model="d.desc"
                          placeholder="Descriptions">
                      </textarea>


                        <div class="w-full flex flex-wrap">
                          <label class="text-left  pl-2 w-full my-3" for="admin">Admin* (Masukkan Username Akun)</label>
                            <input class="w-full
                            shadow-sm bg-theme_primary_light
                            py-2 px-4 
                            rounded-lg mb-3
                            " 
                            type="text"
                            v-model="d.admin"
                            placeholder="Admin">
                    </div>

                         <span class="w-full text-danger font-bold text-center">
                          {{ errMessges }}
                        </span>

                      <button 
                      @click="save"
                      class="w-full  py-2 px-4 bg-primary_dark text-white hover:opacity-75 rounded-lg mt-5">
                          <i class="fa fa-plus"></i>
                          Simpan Perubahan
                      </button>

                       <nuxt-link to="/groups"
                      class="w-full text-center py-2 px-4 bg-theme_primary_light hover:opacity-75 rounded-lg mt-5">
                          <i class="fa fa-plus"></i>
                          Batal
                      </nuxt-link>

                </div>
                 
              </div>

        </div>
    </section>
</div>
        
</template>


<script>
import Vue from 'vue'
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'


 Vue.use(Croppa) 

export default {
  scrollToTop: true,
  layout: 'no-header',
  middleware: 'auth',
  data(){
    return {
       avatar: {},
       d: '',
       errMessges: ''
    }
  },
  created(){
           this.$axios.$get("/group/" + this.$route.params.url).then(data => {
            if(data){
              console.log(data)
               this.d = data;
            }else{
              this.$router.push("/groups")
            }
           
          });
  },
  methods:{
     updateToString(to){
      if(to == 'username'){
        this.d.username = this.d.username.replace(/[^a-zA-Z0-9]/g,'_');
      }
    },
     onInit() {
          this.avatar.addClipPlugin(function (ctx, x, y, w, h) {
              ctx.beginPath()
              ctx.arc(x + w / 2, y + h / 2, w / 2, 0, 2 * Math.PI, true)
              ctx.closePath()
          })

          

    },
    async save(){
       this.avatar.generateBlob(
                blob => {
                  // write code to upload the cropped image file (a file is a blob)
                },
                'image/jpeg',
                0.8
              ); // 80% compressed jpeg file

      this.d.avatar = this.avatar.generateDataUrl()

        if(this.d.name != '' && this.d.desc != '' && this.d.type != ''){
         
              this.$axios.post("/group/edit/"+this.d.id, this.d)
                .then(res => {
                    if(res.data.info){
                        this.errMessges = "Username Telah digunakan";
                    }else{
                        this.$router.push(`/${this.d.username}`)
                    }
                 
                })

        }
    }
  }
}

</script>