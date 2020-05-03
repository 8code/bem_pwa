<template>
   <div class="flex flex-wrap">

     <div class="floating-menu w-full" v-if="floatingMenu">
     <div class="w-full flex flex-wrap">
        <div class="w-full lg:w-1/3 p-3 lg:pr-20">
         <button 
         @click="form = true"
         class="w-full  rounded-full py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-gray-700">
            <i class="fa fa-plus"></i>
            Daftarkan Group
         </button>

        </div>
        <div class="w-full lg:w-2/3 p-3 flex flex-wrap">
          <div class="w-full lg:w-1/4 px-1 relative mb-3">
            <i class="fa fa-filter absolute top-0 mt-3 text-gray-700 mx-3"></i>
            <select class="
                        w-full
                        border 
                        border-gray-200 rounded-full 
                        py-2 px-4 
                        pl-8
                        form-input
                        ">
                        <option value="">Semua</option>
                        <option value="kategori">Kategori</option>
                        </select>
          </div>
          <div class="w-full lg:w-1/4 px-1 relative mb-3">
            <i class="fa fa-arrow-down absolute top-0 mt-3 text-gray-700 mx-3"></i>
            <select class="w-full
                        border 
                        border-gray-200 rounded-full 
                        py-2 px-4 
                        pl-8
                        form-input
                        ">
                        <option value="populer">Populer</option>
                        <option value="terbaru">Terbaru</option>
                        </select>
          </div>
          <div class="w-full lg:w-2/4 px-1 relative mb-3">
               <input class="
                w-full
                border 
                border-gray-200 rounded-full 
                py-2 px-4 
                pl-8
                form-input
                "
                placeholder="Cari Group" 
                type="text" >
                <i class="fa fa-search absolute top-0 mt-3 text-gray-700 -ml-8" style="cursor:pointer"></i>
          </div>
        </div>
     </div>
     </div>

     <button class="btn-menu bg-primary p-3 px-4" @click="floatingMenu = !floatingMenu">
       <i v-if="!floatingMenu" class="fa fa-list"></i>
       <i v-else class="fa fa-times"></i>
     </button>


     <div class="w-full lg:w-1/3 p-2 " v-for="i in 18" :key="i">
          <div class="card w-full flex p-3 flex-wrap">
              <div class="w-1/4">
              <img class="logo w-full" src="/icon.png" alt="Logo">
            </div>
            <h1 class="w-3/4 p-3">
             <b>BEM UNSIL</b> 
            </h1>
            <small class="w-full p-2 relative">
              <button class="bg-yellow-400 hover:bg-yellow-500 text-black float-right -mt-10 btn-follow rounded-full p-1 px-4">
                Gabung
                <i class="fa fa-plus ml-1"></i>
              </button>
              Deskripsi : <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, est? Unde reiciendis doloribus ipsa fugit ducimus doloremque maxime?..
            </small>
            <nuxt-link to="/group/detail">
              <small class="label-detail p-1 px-5">
                  <i class="fa fa-eye mr-1"></i>
                Detail
              </small>
            </nuxt-link>
          </div>
     </div>
     <button class="text-center w-full p-3">
       <i class="fa fa-sync px-1"></i>
       Loading
     </button>



     
<!-- Modal form -->
  <div v-if="form" class="modal modal-active fixed w-full h-full top-0 left-0 flex items-center justify-center">
                        <div  @click="form = !form"  class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                        <div class="modal-container bg-primary w-11/12 md:max-w-md mx-auto rounded-full shadow-lg z-50 overflow-y-auto">

                        <!-- Add margin if you want to see some of the overlay behind the modal-->
                        <div class="modal-content py-4 text-left px-6 w-full text-center setting">
                             
                               <!--Title-->
                                <div class="flex justify-between items-center pb-3">
                                <p class="text-2xl font-bold">
                                    <i class="key-icon fas fa-plus p-2  rounded-full"></i>
                                    Daftar Group </p>
                                <i  @click="form = false" class="cursor-pointer fas fa-times p-2 bg-red-300 rounded-full text-black "></i>
                                </div>
                                
                                <div class="text-left">

                                   <label class="text-left  pl-2" for="nama">Logo</label>
                                   <input class="w-full
                                    border 
                                    border-gray-200 rounded-full 
                                    py-2 px-4 
                                    pl-8 mb-2
                                    form-input" 
                                    type="file"
                                    placeholder="Upload Logo">

                                <label class="text-left  pl-2" for="nama">Nama</label>
                                   <input class="w-full
                                    border 
                                    border-gray-200 rounded-full 
                                    py-2 px-4 
                                    pl-8 mb-2
                                    form-input" 
                                    type="text"
                                    placeholder="Nama">
                                <label class="text-left  pl-2" for="username">Username</label>
                                <input class="w-full
                                        border 
                                        border-gray-200 rounded-full 
                                        py-2 px-4 
                                        pl-8 mb-2
                                        form-input" 
                                        type="text"
                                        placeholder="Username">
                                <label class="text-left  pl-2" for="no_hp">No Hp</label>
                                <input class="w-full
                                        border 
                                        border-gray-200 rounded-full 
                                        py-2 px-4 
                                        pl-8 mb-2
                                        form-input" 
                                        type="text"
                                        placeholder="No Hp">
                                <label class="text-left  pl-2" for="email">Email</label>
                               <input class="w-full
                                        border 
                                        border-gray-200 rounded-full 
                                        py-2 px-4 
                                        pl-8 mb-2
                                        form-input" 
                                        type="text"
                                        placeholder="Email">
                                  <label class="text-left pl-2" for="email">Deskripsi</label>
                                   <textarea class="w-full
                                        border 
                                        border-gray-200 rounded-full 
                                        py-2 px-4 
                                        pl-8 mb-2
                                        form-input" 
                                        type="text"
                                        placeholder="Deskripsikan Bisnis Anda">
                                   </textarea>

                                    <button 
                                    @click="form = true"
                                    class="w-full  rounded-full py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-gray-700">
                                        <i class="fa fa-plus"></i>
                                        Daftarkan
                                    </button>


                             </div>


                        </div>
                    </div>
                </div>
<!-- End Modal forms -->
 

   </div>
</template>
<style scoped>
.btn-menu{
  display: none;
}

@media (max-width:800px){
  
.btn-menu{
  display: block;
  position: fixed;
  bottom: 60px;
  right: 30px;
  border-radius: 50%;
  z-index: 3;
  border: 2px solid var(--primary-1);
}
.floating-menu{
 
  position: fixed;
  z-index: 4;
  background: var(--primary);
  left: 5%;
  padding: 20px 10px;
  bottom: 115px;
  width: 90%;
  border-radius: 30px;
  border: 2px solid var(--primary-1);
}
}
</style>
<script>
export default {
  middleware: ['auth'],
  methods:{
  },
  data(){
    return{
      floatingMenu: true,
      form: false
    }
  },
  created(){
  }
}
</script>
