<template>

    
      <div
        class="w-full neu-in p-5 lg:p-10 rounded-xl flex flex-wrap justify-center text-center pb-20"
      >
   
       <button
              @click="$router.back()"
              class="flex p-3 bg-theme_primary_dark mx-2 rounded-full absolute top-0 left-0 m-4"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-left-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </button>
        <h1 class="mb-8 w-full text-primary font-bold text-md">
          
          
          {{ $t("primaryColor") }}
        </h1>
        <div class="flex flex-wrap justify-center">
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
        <h1 class="my-8 w-full text-primary font-bold text-md">
          {{ $t("BackgroundTheme") }}
        </h1>
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



    <h1 class="my-8 w-full text-primary font-bold text-md">
        {{ $t("selectLang") }}
      </h1>

      <div class="w-full flex flex-wrap justify-left">
        <div class="px-2 w-1/2">
          <nuxt-link
            class="bg-theme_primary_light neu-in cursor-pointer justify-center   hover:text-primary rounded-lg flex p-2 px-4 w-full mb-2"
            :to="switchLocalePath('id')"
            >Indonesia</nuxt-link
          >
        </div>
        <div class="px-2 w-1/2">
          <nuxt-link
            :to="switchLocalePath('en')"
            class="bg-theme_primary_light neu-in cursor-pointer justify-center rounded-lg  hover:text-primary flex p-2 px-4 w-full mb-2"
          >
            Enghlish
          </nuxt-link>
        </div>
       
      </div>



        
      

        <button @click="$router.back()"
          
          class="w-full px-10 py-2 text-white font-bold bg-primary neu-in hover:neu-out mt-5 rounded-full"
        >
          {{ $t("Done") }}

        </button>
        <button
        @click="$store.commit('logout')"
        class="w-full px-10 py-2 text-danger font-bold border border-danger neu-in hover:neu-out mt-10 rounded-full"
      >
        Logout
      </button>

      </div>
</template>

<script>
export default {
     layout: "no-header",
     middleware: "auth",
}
</script>