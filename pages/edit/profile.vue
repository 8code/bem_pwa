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
              ></croppa>

              <div class="pl-4 flex flex-wrap w-full">
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
                    v-model="d.username"
                    placeholder="Username"
                  />
              </div>
            </div>

        

            <label class="text-left  pl-2 w-full my-3" for="nama">Name</label>
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


           <div class="flex flex-wrap">
              <label class="text-left  pl-2 w-full my-3" for="email"
              >Gender</label>

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
              >Program Studi</label>
             </div>


             <div class="flex flex-wrap w-full">
              <label class="text-left  pl-2 w-full my-3" for="email"
              >Universitas</label>
             </div>


        

            <button
              @click="save"
              class="w-full  py-2 px-4 bg-primary rounded-lg mt-5"
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

export default {
  scrollToTop: true,
  layout: "no-header",
  middleware: "auth",
  data() {
    return {
      avatar: {},
      d: ''
    };
  },
  created(){
      this.d = this.$store.state.user
  },
  methods: {
    onInit() {
      this.avatar.addClipPlugin(function(ctx, x, y, w, h) {
        ctx.beginPath();
        ctx.arc(x + w / 2, y + h / 2, w / 2, 0, 2 * Math.PI, true);
        ctx.closePath();
      });
    },
    async save() {
      this.avatar.generateBlob(
        blob => {
          // write code to upload the cropped image file (a file is a blob)
        },
        "image/jpeg",
        0.8
      ); // 80% compressed jpeg file

      if (this.d.name != "" && this.d.desc != "" && this.d.type != "") {
        this.d.avatar = this.avatar.generateDataUrl();
        if (this.d.avatar) {
          await this.$store.commit("createGroup", this.d);
          await this.$router.push("/");
        }
      }
    }
  }
};
</script>
