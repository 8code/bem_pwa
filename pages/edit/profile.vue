<template>
  <div class="w-full">
    <!-- Content -->
    <section class="w-full shadow-sm rounded-xl mb-20">
      <div class="shadow-sm rounded-xl px-5 pb-5">
        <div class="flex flex-wrap">
          <div class="w-full  px-5 flex flex-wrap">
            <div
              class="w-full my-3 flex"
            >
              <croppa
                class="shadow-sm rounded-lg"
                v-model="avatar"
                :width="100"
                prevent-white-space
                :height="100"
                :placeholder="'100x100px'"
                @init="onInit"
                :initial-image="$store.state.user.avatar"
                :quality="1"

              ></croppa>

              <div class="pl-4 flex flex-wrap w-full">
                 
                <label class="text-left  pl-2 w-full my-3" for="nama">Nama</label>
                <input
                  class="w-full
                          shadow-sm bg-theme_primary_light
                          py-2 px-4 
                          rounded-lg mb-3
                          "
                  type="text"
                  v-model="d.name"
                  placeholder="Name"
                />
              </div>
            </div>

        
          <div class="w-full px-1 flex flex-wrap">
            
               <label class="text-left  pl-2 w-full my-3" for="usernama"
                    >Username*</label
                  >
                  <input
                    class="w-full
                            shadow-sm bg-theme_primary_light
                            py-2 px-4 
                            rounded-lg mb-3
                            " 
                    type="text"
                    @keyup="updateToString('username')"
                    v-model="d.username"
                    placeholder="Username"
                  />
                  
                  
          </div>


                     
          <div class="w-full px-1 flex flex-wrap">
            
               <label class="text-left  pl-2 w-full my-3" for="password"
                    >Ubah Bio</label
                  >
               <textarea
                      v-model="d.bio"
                      placeholder="Biografi singkat untuk ditampikan di profile"
                      class="bg-theme_primary_light w-full rounded-lg p-4 mt-3 h-20"
                    
                    ></textarea>
                  
          </div>
          
            
          <div class="w-full px-1 flex flex-wrap">
            
               <label class="text-left  pl-2 w-full my-3" for="password"
                    >Ubah Password</label
                  >
                  <input
                    class="w-full
                            shadow-sm bg-theme_primary_light
                            py-2 px-4 
                            rounded-lg mb-3
                            "
                    type="text"
                    v-model="d.password"
                    placeholder="Ubah Password"
                  />
                  
          </div>
        

           <div class="flex flex-wrap">
              <label class="text-left  pl-2 w-full my-3" for="email"
              >Gender*</label>

                 <label class="inline-flex items-center px-2">
                  <input  class="border-2 border-primary" type="radio" v-model="d.gender" name="gender" value="L"> 
                  <span class="ml-2">Laki Laki</span>
                </label>
                   <label class="inline-flex items-center px-2">
                      <input  class="border-2 border-primary" type="radio" v-model="d.gender" name="gender" value="P"> 
                    <span class="ml-2">Perempuan</span>
                </label>
             

           </div>

             <div class="flex flex-wrap w-full">
              <label class="text-left  pl-2 w-full my-3" for="email"
              >Program Studi*</label>
              <v-select placeholder="Program Studi" class="bg-theme_primary_light w-full"  taggable  v-model="d.study_program" :options="listProdi" />
             </div>


             <div class="flex flex-wrap w-full">
              <label class="text-left  pl-2 w-full my-3" for="email"
              >
                Universitas*

              </label>
              <v-select placeholder="Universitas" class="bg-theme_primary_light w-full"  taggable  v-model="d.university" :options="listUniv" />

             </div>


         <div class="w-full flex flex-wrap">
            
            <label class="text-left  pl-2 w-full my-3" for="nama">Angkatan*</label>
            <input
              class="w-full
                      shadow-sm bg-theme_primary_light
                      py-2 px-4 
                      rounded-lg mb-3
                      "
              type="text"
              v-model="d.angkatan"
              placeholder="Contoh '2020'"
            />
          </div>


          
            <div class="w-full px-1 flex flex-wrap">
            
            <label class="text-left  pl-2 w-full my-3" for="nama">Instagram</label>
            <input
              class="w-full
                      shadow-sm bg-theme_primary_light
                      py-2 px-4 
                      rounded-lg mb-3
                      "
              type="text"
              v-model="d.instagram"
              placeholder="Instagram"
                  @keyup="updateToString('instagram')"

            />
          </div>
          
            <div class="w-full px-1 flex flex-wrap">
         
            <label class="text-left  pl-2 w-full my-3" for="nama">WhatsApp</label>
            <input
              class="w-full
                      shadow-sm bg-theme_primary_light
                      py-2 px-4 
                      rounded-lg mb-3
                      "
              type="text"
              v-model="d.whatsapp"
              placeholder="WhatsApp"
            />
          </div>


            <span class="w-full text-danger font-bold text-center">
              {{ messageErr }}
            </span>

            <button
              @click="save"
              class="w-full  py-2 px-4 bg-primary text-secondary rounded-lg mt-5"
            >
              <i class="fa fa-plus"></i>
              Simpan Perubahan
            </button>

            <nuxt-link
              to="/profile"
              class="w-full text-center py-2 px-4 bg-theme_primary_light hover:opacity-75 rounded-lg mt-5"
            >
              <i class="fa fa-plus"></i>
              Batalkan
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    
  </div>
</template>

<script>
import Vue from "vue";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";

Vue.use(Croppa);

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';


export default {
  scrollToTop: true,
  layout: "no-header",
  middleware: "auth",
  components: {
    "v-select": vSelect
  },
  data() {
    return {
      avatar: {},
      d: '',
      listUniv: [],
      listProdi: [],
      messageErr: ""
    };
  },
  created(){
      this.d = this.$store.state.user
      this.$axios.get("/list-univ")
        .then(res => {
          // console.log(res)
          this.listUniv = res.data
        })
        this.$axios.get("/list-prodi")
        .then(res => {
          // console.log(res)
          this.listProdi = res.data
        })
  },
  methods: {
    updateToString(to){
      if(to == 'username'){
        this.d.username = this.d.username.replace(/[^a-zA-Z0-9]/g,'_');
        this.d.username = this.d.username.toLowerCase().slice(0, 20)
      }
    },
    onInit() {
      this.avatar.addClipPlugin(function(ctx, x, y, w, h) {
        ctx.beginPath();
        ctx.arc(x + w / 2, y + h / 2, w / 2, 0, 2 * Math.PI, true);
        ctx.closePath();
      });
    },
    async save() {

        if(this.avatar){
              this.d.avatar = this.avatar.generateDataUrl('image/jpeg', 0.8)
        }
       
      if (this.d.name != null && this.d.username != null && this.d.gender != null && this.d.angkatan != null && this.d.study_program != null && this.d.university != null) {
        
        this.messageErr = ""
      
          //  console.log(this.d)
            this.$axios.post("/update-profile",this.d)
              .then(res => {
                if(res.data.info){
                    this.messageErr = "Username Telah digunakan";
                }else{
                    this.$store.commit("updateProfile",res.data.data)
                    this.$router.push("/profile")
                                      
                }
              })
      }else{
        this.messageErr = "*Wajib di isi"
      }
    }
  }
};
</script>
