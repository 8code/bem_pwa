<template>
<div class="w-full">
    <!-- Content -->
    <section class="w-full shadow-sm rounded-xl mb-20">
          <div class="shadow-sm rounded-xl px-5 pb-5">

              <div class="flex flex-wrap">
                <div class="w-full  px-5 flex flex-wrap">
                 <label class=" pl-2 w-full my-3 flex" for="nama">Cover Image</label>

                  <div  class="flex w-full">
                       <button @click="uploadImage = false" class="py-2 px-8 bg-theme_primary_light rounded-lg text-primary">
                          Select Cover
                       </button>
                       <button @click="uploadImage = true" class="py-2 px-8 bg-theme_primary rounded-lg ml-auto">
                          Upload Cover
                       </button>
                  </div>

                  <label class="text-left  pl-2 w-full my-3" for="nama">Name</label>
                      <input class="w-full
                      shadow-sm bg-theme_primary_light
                      py-2 px-4 
                      rounded-lg mb-3
                      " 
                      type="text"
                      v-model="d.name"
                      placeholder="Name">

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

                      <button 
                      @click="save"
                      class="w-full  py-2 px-4 bg-primary_dark hover:opacity-75 rounded-lg mt-5">
                          <i class="fa fa-plus"></i>
                          Create Group
                      </button>

                       <router-link to="/"
                      class="w-full text-center py-2 px-4 bg-theme_primary_light hover:opacity-75 rounded-lg mt-5">
                          <i class="fa fa-plus"></i>
                          Cancel
                      </router-link>

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
  layout: 'app',
  middleware: 'auth',
  data(){
    return {
      uploadImage: false,
       image: {},
       d:{
         image: '',
         name: '',
         desc: '',
         type: ''
         
       }
    }
  },
  methods:{
    async save(){
       this.image.generateBlob(
                blob => {
                  // write code to upload the cropped image file (a file is a blob)
                },
                'image/jpeg',
                0.8
              ); // 80% compressed jpeg file

        if(this.d.name != '' && this.d.desc != '' && this.d.type != ''){
          this.d.image = this.image.generateDataUrl()
          await this.$store.commit("createGroup",this.d)
          await this.$router.push("/")
        }
    }
  }
}

</script>