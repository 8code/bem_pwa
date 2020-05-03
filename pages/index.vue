<template>
<div class=" w-full flex flex-wrap" v-if="$auth.user">

    <div class="w-full md:w-1/2 lg:pr-4">
    
        <div class="text-center">
                <h1 class="title lg:mt-0">
                    
                    <div class="mx-auto avatar px-2 hover:menu-active  block mb-3">
                        <img v-if="$auth.user.avatar" :src="$auth.user.avatar"
                            alt="Avatar" >
                        <img v-else src="/icon.png"
                            alt="Avatar" >
                    </div>
                
                        Halo {{ $auth.user.name}}
                </h1>
                <small class="text-gray-700">Semoga hari ini kamu bahagia</small>
        </div>


        <!-- My Group -->
        <div class="p-4">
            <button class="text-yellow-600">Group Member</button>
            /
            <button>StartUp Following</button>
        </div>
        <div class="w-full p-2 " v-for="i in 3" :key="i">
            <nuxt-link to="/group/detail">
                <div class="card w-full flex p-3 flex-wrap">
                    <div class="w-1/5 pt-4 lg:p-4">
                    <img class="logo w-full" src="/icon.png" alt="Logo">
                    </div>
                    <h1 class="w-4/5 p-3 mb-1">
                    <b>Badan Eksekutif Mahasiswa
                    Universitas Siliwangi</b>
                    </h1>
                
                    <small class="label-detail p-1 px-5">
                        <i class="fa fa-eye mr-1"></i>
                        100 Postingan Baru
                    </small>
                </div>
             </nuxt-link>
     </div>
    <button class="text-center w-full p-3">
       <i class="fa fa-sync px-1"></i>
       Load More
     </button>
<!-- End -->
          
    </div>
    
    <div class="w-full md:w-1/2 " v-if="$auth.user">
    
    <div class=" sticky " style="top:120px">
   
    <div class="flex w-full ">
                <div class="w-1/2 py-4  text-white">
                    <span @click="setting = !setting" 
                    class="cursor-pointer px-1 bg-green-500 rounded-full p-1 px-4">
                    <i class="fas fa-cog  rounded-full"> 
                    </i> Settings
                    </span>
                </div>
                <div class="w-1/2 text-right py-4  text-white">
                    <span  class="cursor-pointer px-1 bg-red-600 rounded-full p-1 px-4" @click="$auth.logout()">
                    <i class="fas fa-sign-out-alt p-2 rounded-full">
                    </i>
                    Logout
                    </span>
                </div>
           </div>
    <div class="w-full p-2 bg-yellow-600   items-center text-yellow-100 leading-none rounded-full flex inline-flex" role="alert">
        <span class="flex rounded-full bg-yellow-400  uppercase px-2 py-1 text-xs font-bold mr-3">
            <i class="fa fa-user"></i>
        </span>
        <span class="font-semibold mr-2 text-left flex-auto">
            Data Pribadi
        </span>
        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
    </div>
    
    <form class="w-full mt-6">
        <div class="flex flex-wrap -mx-3 ">
                <div class="w-full md:w-1/2 px-3 mb-6">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Nama
                    </label>
                    <input disabled class="w-full
                border 
                border-gray-200 rounded-full 
                py-2 px-4 
                pl-8
                form-input" id="grid-last-name" type="text" :value="$auth.user.name">
                </div>
                <div class="w-full px-3 md:w-1/2 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="username">
                        Username
                    </label>
                    <input disabled class="w-full
                border 
                border-gray-200 rounded-full 
                py-2 px-4 
                pl-8
                form-input" id="username" type="text" :value="$auth.user.username">
                </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                    Email
                </label>
                <input disabled class="w-full
                border 
                border-gray-200 rounded-full 
                py-2 px-4 
                pl-8
                form-input" id="email" type="text" :value="$auth.user.email">
             </div>
             <div class="w-full md:w-1/2 px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="no_hp">
                    No Hp
                </label>
                <input disabled class="w-full
                border 
                border-gray-200 rounded-full 
                py-2 px-4 
                pl-8
                form-input" id="no_hp" type="text" :value="$auth.user.no_hp">
             </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                 <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="prodi">
                    Program Studi
                </label>
                <input disabled class="w-full
                border 
                border-gray-200 rounded-full 
                py-2 px-4 
                pl-8
                form-input" id="prodi" type="text" >
             </div>

            <div class="w-full px-3 md:w-1/2 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Password
                </label>
                <div  @click="modal = true" class="cursor-pointer w-full bg-yellow-300 hover:bg-yellow-400 text-yellow-700 py-2 px-4 rounded-full inline-flex items-center">
                    <i class="w-8 fas fa-key p-2 bg-yellow-400 rounded-full"></i>
                     <span class="mx-2">Ubah Password</span>
                </div>
            </div>
            
         
            
        </div>
        
        </form>
        </div>
    </div>

<!--Modal-->
  <div v-if="modal" class="modal modal-active fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div  @click="modal = false"  class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
    <div class="modal-container bg-primary w-11/12 md:max-w-md mx-auto rounded-full shadow-lg z-50 overflow-y-auto">

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content py-4 text-left px-6 w-full">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold">
               <i class="key-icon fas fa-key p-2  rounded-full"></i>
              Ubah Password</p>
          <i  @click="modal = false" class="cursor-pointer fas fa-times p-2 bg-red-300 rounded-full text-black "></i>
        </div>

        <div v-if="error" class="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-3 rounded-full relative" role="alert">
            <strong class="font-bold">Maaf !</strong>
            <span class="block sm:inline">{{ error }}</span>
            <span @click="error = ''" class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
        </div>
        
            <div class="mt-4 w-full">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password Baru</label>
                <input placeholder="Password Baru" id="password" v-model="d.password" class="form-input bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 block w-full appearance-none" type="password">
            </div>
            <div class="mt-4 w-full">
                <label for="v_password" class="block text-gray-700 text-sm font-bold mb-2">Verifikasi Password Baru</label>
                <input placeholder="Verifikasi Password Baru" @keyup.enter="ubahPassword" id="v_password" v-model="d.v_password" class="form-input bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 block w-full appearance-none" type="password">
            </div>


        <!--Footer-->
        <div class="flex justify-end pt-2">
            
            <div class="w-full mt-8">
                <button @click="ubahPassword" class="bg-yellow-700 text-white font-bold py-2 px-4 w-full rounded-full hover:bg-yellow-600">
                    Simpan
                </button>
            </div>
        
        </div>



        
      </div>
    </div>
  </div>
  <!-- End Modal -->


<!-- Modal Setting -->
  <div v-if="setting" class="modal modal-active fixed w-full h-full top-0 left-0 flex items-center justify-center">
                        <div  @click="setting = !setting"  class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                        <div class="modal-container bg-primary w-11/12 md:max-w-md mx-auto rounded-full shadow-lg z-50 overflow-y-auto">

                        <!-- Add margin if you want to see some of the overlay behind the modal-->
                        <div class="modal-content py-4 text-left px-6 w-full text-center setting">
                             
                               <!--Title-->
                                <div class="flex justify-between items-center pb-3">
                                <p class="text-2xl font-bold">
                                    <i class="key-icon fas fa-cog p-2  rounded-full"></i>
                                    Settings </p>
                                <i  @click="setting = false" class="cursor-pointer fas fa-times p-2 bg-red-300 rounded-full text-black "></i>
                                </div>
                                
                                <span  @click="$store.commit('mode')"  class="cursor-pointer px-1" 
                                >
                            
                                    <i class="fas fa-lightbulb  rounded-full"> 
                                </i>
                                <small v-if="$store.state.mode == 'dark-mode'">Light Mode</small>
                                <small v-else> Dark Mode</small>
                                </span>
                                <span  @click="$store.commit('sidebarMode')"  class="hidden lg:block cursor-pointer px-1" 
                                >
                                
                                    <i class="fas fa-cog  rounded-full"> 
                                </i> 
                                <small  v-if="$store.state.sidebar_mode == ''">Sidebar Top</small>
                                <small  v-else>Sidebar Left</small>
                                </span>

                                 <span  v-if="$store.state.sidebar_mode !== ''" 
                                  @click="$store.commit('sidebarTopRight')"  class="hidden lg:block cursor-pointer px-1" 
                                >
                                
                                    <i class="fas fa-arrow-right  rounded-full"> 
                                </i> 
                                <small >Sidebar Top Right</small>
                                </span>
                             
                        </div>
                    </div>
                </div>
<!-- End Modal Settings -->
 
<div v-if="success" class="
    w-full lg:w-1/3 bg-yellow-100 border
    border-yellow-400 text-yellow-700 px-4 py-3 my-3 rounded-full fixed top-0 right-0 lg:mr-10 lg:mt-10" role="alert"
    style="z-index:1000;"
    >
    <strong class="font-bold">Selamat !</strong>
    <span class="block sm:inline">{{ success }}</span>
    <span @click="success = ''" class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg class="fill-current h-6 w-6 text-yellow-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
    </span>
</div>



</div>
</template>

<script>
export default {
    middleware: ['auth'],
    data(){
        return {
            setting: false,
            modal: false,
            d:{
                password : '',
                v_password : ''
            },
            error: '',
            success : ''
        }
    },
    methods: {
        ubahPassword(){
            let th = this
            if(this.d.password == ''){
                 this.error = 'Password Tidak Boleh Kosong'
            }
            else if(this.d.password !== this.d.v_password){
                this.error = 'Verifikasi Password Tidak Sama'
                this.d.v_password = ''
            }else{
                this.error = '';
                this.$axios.post('ubah-password',this.d)
                    .then((res) => {
                        if(res.data == 'berhasil'){
                            this.success = 'Password berasil di Ubah';
                            this.modal =  false
                            setTimeout(function() { 
                               th.success = ''
                            }, 2000)
                            this.d = {
                                password: '',
                                v_password: ''
                            }
                        }else{
                            this.error = 'Password gagal di Ubah'
                        }

                        
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            }
        }
    }
}
</script>

