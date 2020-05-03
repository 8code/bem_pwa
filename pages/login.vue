<template>
<div class="container h-screen flex items-center py-6">
  <div class="mt-6 w-full flex rounded-lg md:shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl ">
   
   <div class="hidden lg:block lg:w-1/2  text-gray-600 text-center lg:mx-6">
  
    <img class="mt-3 mx-auto w-2/3" :src="$store.state.baseUrl+'/img/logo.png'" alt="login">

    <h1 class="text-xl mt-6">
      Aplikasi BEM US
      <br>
      (Badan Eksekutif Mahasiswa Universitas Siliwangi)
   </h1>
   <p class="mt-3">
       Jejaring Sosial untuk Ormawa, UKM dan Mahasiswa                        
   </p>

   </div>
   
   <div class="w-full p-8 lg:w-1/2 lg:mx-6">
            <p class="text-xl text-gray-600 text-center">Selamat Datang!</p>
           
            <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/5 lg:w-1/4"></span>
                <h6 class="text-xs text-center text-gray-500 uppercase">Silahkan Masuk</h6>
                <span class="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div class="mt-4">
                <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input id="username" v-model="d.username" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 block w-full appearance-none" type="email">
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <nuxt-link to="/lupa-password" class="text-xs text-gray-500">Lupa Password?</nuxt-link>
                </div>
                <input @keyup.enter="login" id="password" v-model="d.password" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 block w-full appearance-none" type="password">
            </div>
            <div class="mt-8 flex flex-wrap">
                <button @click="login" class="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-full rounded-full ">Login</button>
                <a class="border text-center mt-5 w-full p-2 px-5 border-yellow-500 hover:border-yellow-600 text-yellow-500 rounded-full " href="https://mahasiswa.test/register">Daftar Akun Baru</a>
            </div>
            <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/5 md:w-1/4"></span>
                <a href="http://unsil.ac.id" class="text-xs text-gray-500 uppercase">Universitas Siliwangi</a>
                <span class="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
    layout: 'auth',
    middleware: ['auth'],
    data(){
        return {
            d: {
                username: 'aribahtiar',
                password: '2019bisa',
            }
        }
    },
    computed: {
        auth () {
            return this.$store.state.auth
        }
    },
    methods: {
         async login() {
              try {
                    // this.$toast.show('Loading...')
                    await this.$auth.loginWith("password_grant", {
                        data: {
                        grant_type: "password",
                        client_id: 2,
                        client_secret: 'wlAo2puIg3cubRd8DFvKGiw6KlhJS7U4xi23QGSH',
                        scope: "*",
                        username: this.d.username,
                        password: this.d.password
                        }
                    });
                    this.$router.replace("/");
                } catch(e){
                    // this.$toast.error('Username atau Password Salah')
                }
        }
    }
}
</script>
