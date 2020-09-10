<template>
<div class="w-full flex flex-wrap relative justify-center">
<!-- Content -->

       <div :class="!$store.state.topMenu ? 'hidden' : ''" class="fixed bottom-0 mb-20 flex flex-wrap">
                <a class="mx-4 text-center mt-4 w-full font-bold p-2 px-6 rounded-full bg-theme_primary_dark text-primary" target="_BLANK" href="https://trello.com/b/cEeYmDi1/aplikasi-maba">Pengembangan Aplikasi</a>
                <a class="mx-4 text-center mt-4 w-full font-bold p-2 px-6 rounded-full bg-primary text-secondary" target="_BLANK" href="https://saweria.co/akew">
                        Belikan Saya Kopi
                </a>
       </div>
      

        <section class="w-full text-center">
            
                <h1 class="text-4xl w-full">Coming Soon </h1>
                <ul>
                        <li>Event</li>
                        <li>Donasi</li>
                        <li>Cari Teman</li>

                        <li>Penjualan</li>
                        <li>Catatan Keuangan</li>
                </ul>


        </section>


          
</div>
        
</template>


<script>
export default {
  layout: 'no-header',
  middleware: 'auth'
}
</script>