<template>

      <div  class="w-full bg-transparent flex flex-wrap justify-center fixed  bottom-0 right-0" style="z-index:1000">
          <div @click="$emit('hide')" class="w-full  flex flex-wrap justify-center items-end  bg-theme_primary_dark opacity-25 z-50 fixed top-0 right-0 h-screen ">
          </div>
          
          <div class="w-full p-4 lg:w-1/2 flex flex-wrap justify-center items-center content-center bg-theme_primary_light rounded-xl" 
          
          style="z-index:1001">
                
                <ul class="mb-3 flex w-full flex-wrap justify-center">
                 
                    <li class="p-4 border-b border-theme_primary w-full text-center hover:rounded-full hover:bg-theme_primary">
                        Halo Mabs ! <br>

                        MabApp Merupakan Startup Aplikasi Media untuk membantu Mahasiswa dan Organisasi Mahasiswa
                        Agar Tetap Terhubung, Berbagi Pengalaman dan Berkolaborasi.
                        <br>
                        Saya Ari Bahtiar Founder MabApp. Dukung saya dengan cara membagikan Aplikasi ini kepada teman kalian
                        agar teman kalian terbantu dengan aplikasi ini. jangan lupa untuk memberi donasi agar aplikasi ini
                        tetap ada dan bisa memberikan pelayanan yang tebaik.
                        <br>

                        <a target="_BLANK" href="https://saweria.co/akew">Klik Untuk Donasi</a>
                         
                    </li>
                   
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
}

</script>