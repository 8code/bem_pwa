<template>

    <div class="pb-20 min-h-screen  w-screen  " >
        <!--Nav-->


        
        <div class="w-full container mx-auto p-6">
                
            <div class="w-full flex flex-wrap items-center justify-center lg:justify-between">
                <div class="flex">
                    
                <nuxt-link :to="localePath('/')" class="flex items-center text-primary  font-bold text-2xl " > 
                   <span class="bg-primary  border-primary border-2 rounded-full">
                        <img class="w-8 h-8" src="/logo.png" alt="Logo Aplikasi Maba">
                   </span>
                    <span class="px-2"> Aplikasi Maba</span>
                </nuxt-link>
                
                </div>

                    
                
                <div class="hidden lg:flex  justify-end content-center font-bold">	
                        <nuxt-link :to="localePath('/login')" class="text-center cursor-pointer bg-theme_primary_dark  px-4 my-2 py-1 rounded-full text-primary" > 
                            Masuk
                        </nuxt-link>	

                </div>
                
            </div>

        </div>

	<!--Main-->
	<div class="container pt-10  px-6   mx-auto flex flex-wrap flex-col md:flex-row items-center">
		
		<!--Left Col-->
		<div class="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden">
			<h1 class="text-primary my-4 text-3xl md:text-5xl font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
               Sosial Medianya Mahasiswa
            </h1>
			<p class="leading-normal md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-theme_secondary">
              Diskusi Organisasi, Live Event dan Cari Teman. dan jadilah Mahasiswa yang berguna.
            </p>
		
			<p class="font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Masuk / Download:</p>
			<div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
				<nuxt-link :to="localePath('/login')" class="py-2 px-12 mr-2 bg-primary hover:bg-primary_dark rounded-lg text-white font-bold text-xl">Masuk</nuxt-link>
				<a href="https://play.google.com/store/apps/details?id=xyz.appmaker.gyqacr">
                    <img src="/Play Store.svg" class="h-12 bounce-top-icons" alt="Aplikasi Maba PlayStore">
                </a>
			</div>

		</div>
		
		<!--Right Col-->
		<div class="w-full xl:w-1/2 pb-6 hover:p-0 overflow-y-hidden relative cursor-pointer">
            <a href="https://www.youtube.com/watch?v=GSdKaaH0D04&t=107s" target="_BLANK" class="absolute bg-primary p-2 rounded-full text-secondary" style="top:50%;right:0">
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
            </a>
			<img @click="$store.commit('setTheme', 'theme-dark')" v-if="$store.state.theme == 'theme-light'" class="px-4 lg:px-10 mx-auto lg:mr-0 " style="transition: all 2s ease-in-out" alt="Aplikasi Maba" src="/demo/u-light-mobile.png">
			<img @click="$store.commit('setTheme', 'theme-dark-blue')" v-if="$store.state.theme == 'theme-dark'" class="px-4 lg:px-10 mx-auto lg:mr-0 " style="transition: all 2s ease-in-out" alt="Aplikasi Maba" src="/demo/u-dark-mobile.png">
			<img @click="$store.commit('setTheme', 'theme-light')" v-if="$store.state.theme == 'theme-dark-blue'" class="px-4 lg:px-10 mx-auto lg:mr-0 " style="transition: all 2s ease-in-out" alt="Aplikasi Maba" src="/demo/u-light-desktop.png">
		</div>


        <div class="w-full flex mt-10 lg:mt-20 flex-wrap">
            
      <!-- Primary Color Set  -->
      <div
        class="w-full lg:w-1/2  rounded-xl flex flex-wrap "
      >
    
        <div class="flex flex-wrap justify-center lg:justify-left mb-5">
          <div
            @click="$store.commit('setPrimaryColor', 'primary-red')"
            class=" cursor-pointer border-4 w-12 h-12 primary-red bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-bg-theme_primary_light"
            :class="
              $store.state.primaryColor == 'primary-red'
                ? 'rounded-full bg-primary_dark border-primary'
                : ''
            "
          ></div>
          <div
            @click="$store.commit('setPrimaryColor', 'primary-orange')"
            class=" cursor-pointer border-4 w-12 h-12 primary-orange bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-bg-theme_primary_light"
            :class="
              $store.state.primaryColor == 'primary-orange'
                ? 'rounded-full bg-primary_dark border-primary'
                : ''
            "
          ></div>
          <div
            @click="$store.commit('setPrimaryColor', 'primary-yellow')"
            class=" cursor-pointer border-4 w-12 h-12 primary-yellow bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-bg-theme_primary_light"
            :class="
              $store.state.primaryColor == 'primary-yellow'
                ? 'rounded-full bg-primary_dark border-primary'
                : ''
            "
          ></div>

          <div
            @click="$store.commit('setPrimaryColor', 'primary-green')"
            class=" cursor-pointer border-4 w-12 h-12 primary-green bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-bg-theme_primary_light"
            :class="
              $store.state.primaryColor == 'primary-green'
                ? 'rounded-full bg-primary_dark border-primary'
                : ''
            "
          ></div>
          <div
            @click="$store.commit('setPrimaryColor', 'primary-teal')"
            class=" cursor-pointer border-4 w-12 h-12 primary-teal bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-bg-theme_primary_light"
            :class="
              $store.state.primaryColor == 'primary-teal'
                ? 'rounded-full bg-primary_dark border-primary'
                : ''
            "
          ></div>
          <div
            @click="$store.commit('setPrimaryColor', 'primary-blue')"
            class=" cursor-pointer border-4 w-12 h-12 primary-blue bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-bg-theme_primary_light"
            :class="
              $store.state.primaryColor == 'primary-blue'
                ? 'rounded-full bg-primary_dark border-primary'
                : ''
            "
          ></div>

          <div
            @click="$store.commit('setPrimaryColor', 'primary-indigo')"
            class=" cursor-pointer border-4 w-12 h-12 primary-indigo bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-bg-theme_primary_light"
            :class="
              $store.state.primaryColor == 'primary-indigo'
                ? 'rounded-full bg-primary_dark border-primary'
                : ''
            "
          ></div>
          <div
            @click="$store.commit('setPrimaryColor', 'primary-purple')"
            class=" cursor-pointer border-4 w-12 h-12 primary-purple bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-bg-theme_primary_light"
            :class="
              $store.state.primaryColor == 'primary-purple'
                ? 'rounded-full bg-primary_dark border-primary'
                : ''
            "
          ></div>
          <div
            @click="$store.commit('setPrimaryColor', 'primary-pink')"
            class=" cursor-pointer border-4 w-12 h-12 primary-pink bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-bg-theme_primary_light"
            :class="
              $store.state.primaryColor == 'primary-pink'
                ? 'rounded-full bg-primary_dark border-primary'
                : ''
            "
          ></div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex flex-wrap justify-end">
          
        <!-- Theme Set -->

        <div class="px-2 w-full lg:w-1/3">
          <div
            @click="$store.commit('setTheme', 'theme-light')"
            class="cursor-pointer theme-light rounded-lg text-yellow-600 flex p-2 px-4 justify-center border-4 w-full border-bg-theme_primary_light mb-2 "
            :class="
              $store.state.theme == 'theme-light'
                ? 'rounded-full border-theme_secondary text-theme_secondary'
                : ''
            "
          >
            <svg
              class="bi bi-sun mr-2 "
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z" />
              <path
                fill-rule="evenodd"
                d="M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"
              />
            </svg>
            {{ $t("light") }}
          </div>
        </div>
        <div class="px-2 w-full lg:w-1/3">
          <div
            @click="$store.commit('setTheme', 'theme-dark-blue')"
            class="cursor-pointer rounded-lg text-white theme-dark-blue hover:text-secondary flex p-2 px-4 justify-center border-4 w-full border-bg-theme_primary_light mb-2 "
            :class="
              $store.state.theme == 'theme-dark-blue'
                ? 'rounded-full border-theme_secondary text-theme_secondary'
                : ''
            "
          >
            <svg
              class="bi bi-moon mr-2"
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
              /></svg
            >{{ $t("blue") }}
          </div>
        </div>
        <div class="px-2 w-full lg:w-1/3">
          <div
            @click="$store.commit('setTheme', 'theme-dark')"
            class="cursor-pointer rounded-lg text-white theme-dark hover:text-secondary flex p-2 px-4 justify-center border-4 w-full border-bg-theme_primary_light mb-2 "
            :class="
              $store.state.theme == 'theme-dark'
                ? 'rounded-full border-theme_secondary text-theme_secondary'
                : ''
            "
          >
            <svg
              class="bi bi-moon mr-2"
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
              />
            </svg>
            {{ $t("dark") }}
          </div>
        </div>

      </div>
        </div>

	</div>
	

</div>
</template>

<script>
export default {
      layout: "app",
      middleware: 'noauth',
}
</script>