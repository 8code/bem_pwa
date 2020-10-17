<template>


  <div
    :class="settings"
    class="w-full min-h-screen flex flex-wrap justify-start  content-center "
  >

  
  <loading />

  

    <main
      class="w-full  mx-auto flex flex-wrap   px-10 pt-10"
      style="max-width:400px"
    >
 <span class="mx-auto bg-primary rounded-full p-1 mb-4"> <img src="/logo.png" class="w-16 h-16" alt="Logo Aplikasi Maba"> </span>

    
    

      <div v-if="loginWithUsername" class="flex w-full flex-wrap justify-start">
        <div
          v-if="$store.state.errorMessages"
          class="bg-danger text-white w-full py-1 my-3 px-3 text-center rounded-full"
        >
          {{ $store.state.errorMessages }}
        </div>
        <label class="w-full py-3 px-2">Username / Email</label>
        <input
          v-model="login.username"
          type="text"
          placeholder="Username / Email"
          class=" 
                        bg-theme_primary_dark
                        py-2 px-8 
                        rounded-full mb-3
                        w-full
                        "
        />
        <label class="w-full py-3 px-2">Password</label>
        <input
          @keyup.enter="loginAct"
          v-model="login.password"
          type="password"
          placeholder="Password"
          class=" 
                         bg-theme_primary_dark
                        py-2 px-8 
                        rounded-full mb-3
                        w-full
                        
                        "
        />

        <button
          @click="loginAct"
          class="w-full  py-2 px-4 bg-primary hover:bg-primary_dark  rounded-full mt-5 text-white font-bold"
        >
          Login
        </button>
      </div>



       <div
        @click="cekLoginFb"
        class="w-full p-2 flex justify-center primary-blue bg-primary_dark rounded-full mt-2 text-white cursor-pointer"
      >
          <img src="/fb-login.png" class="w-6 h-6" alt="Login Fb">    
          <span class="px-2"> Login With Facebook    </span>
      </div>

      <!-- <div
        class="w-full p-2 flex justify-center bg-white text-black rounded-full mt-2"
      >
          <img src="/g-login.png" class="w-6 h-6" alt="Login Fb">    
          <span class="px-2"> Login With Google    </span>
      </div> -->

      


       <button
        @click="showModal = true"
        class="text-theme_secondary h-12 w-full p-2 rounded-full bg-theme_primary_light mt-5"
      >
        Daftar Akun Baru
      </button>


      <p class="w-full text-center p-2 pt-10 text-sm">
        <a href="/privacy-policy.html" class="text-primary">{{ $t("tos") }}</a>
      </p>
      <nuxt-link to="/" class="text-center w-full  text-xs text-primary ">

      Tentang Kami
      </nuxt-link>
    </main>


     <div
    class="font-bold w-screen text-center h-screen fixed top-0 right-0 p-3 rounded-lg flex justify-center items-center flex-wrap"
    style="overflow:scroll"
    v-if="showModal"
  >
    <div
      @click="showModal = false"
      class=" opacity-75 bg-theme_primary_light absolute top-0 right-0 h-screen w-screen z-10"
    ></div>

    <div
      class="z-20 w-full bg-theme_primary p-5 shadow-lg rounded-xl neu-out flex flex-wrap"
      style="max-width:600px"
    >
    Daftar Akun :

    
      <button
        @click="cekLoginFb"
        class="text-white font-bold h-12 w-full p-2 rounded-full bg-blue-600 hover:bg-blue-700 mt-5"
      >
        Daftar dengan Facebook
      </button>

       <a href="https://api.maba.my.id/register" target="_BLANK"
        class="text-theme_secondary h-12 w-full p-2 rounded-full bg-theme_primary_light mt-5"
      >
         Daftar dengan Email
      </a>

    </div>
  </div>


  </div>
</template>

<script>
export default {
  middleware: 'noauth',
  data() {
    return {
      showModal: false,
      loginWithUsername: true,
      login: {
        username: "",
        password: ""
      }
    };
  },
  fetch() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: "303728384144081",
        cookie: true,
        xfbml: true,
        version: "v7.0"
      });

      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
  computed: {
    settings() {
      return (
        this.$store.state.theme +
        " " +
        this.$store.state.primaryColor
      );
    }
  },
  methods: {
    cekLoginFb() {
      let that = this;
      FB.getLoginStatus(function(response) {
        // console.log(response);
        if (!response.authResponse) {
          that.loginFb();
        } else {
          that.$store.commit("loginfb", response.authResponse);
        }
      });
    },
    loginFb(){
      let that = this;
      FB.login(
        function(response) {
          // handle the response
          that.$store.commit("loginfb", response.authResponse);
        },
        {
          scope: "email",
          return_scopes: true
        }
      );
    },
    async loginAct() {
      await this.$store.commit("login", this.login);
    }
  }
};
</script>
