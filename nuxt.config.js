
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
 mode: "spa",
  pwa: {
    meta: {
      title: 'Aplikasi Maba - Sosial Media Mahasiswa',
      author: 'Ari Bahtiar',
    },
    manifest: {
      name: 'Maba - Sosial Media',
      lang: 'id',
      theme_color: '#f1f1f1',
      start_url: "/",
      description: "Aplikasi Sosial Media Mahasiswa untuk berbagai aktifitas kampus"
    },
    // workbox: {
    //   dev: true // or use a global variable to track the current NODE_ENV, etc to determine dev mode
    // }
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Aplikasi Maba - Sosial Medianya Mahasiswa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Aplikasi Maba - Sosial Media Mahasiswa  untuk berbagai aktifitas kampus" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'medium-editor/dist/css/medium-editor.css',
    'vuejs-medium-editor/src/themes/default.css',
    'highlight.js/styles/ocean.css' //if using code highlight
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/v-touch',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-socket-io',
    ['vue-scrollto/nuxt', { duration: 300 }],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDMdSD5HDPkbBa_dKoTGrY5Lj-0da4ksZo",
          authDomain: "aplikasi-maba.firebaseapp.com",
          databaseURL: "https://aplikasi-maba.firebaseio.com",
          projectId: "aplikasi-maba",
          storageBucket: "aplikasi-maba.appspot.com",
          messagingSenderId: "235964714752",
          appId: "1:235964714752:web:ed188a7914ee5f232f2de5",
          measurementId: "G-PXHVCJ8ZV7"
        },
        services: {
          firestore: true,
          realtimeDb: true,
          messaging: true,
        }
      }
    ],
    '@nuxtjs/axios',
    '@nuxtjs/pwa',

    [
      'nuxt-i18n',
      {
        locales: ['en','id'],
        defaultLocale: 'id',
        vueI18n: {
          fallbackLocale: 'id',
          messages: {
            en: {
              welcome: 'Welcome College students!',
              loginwith: 'Login With',
              tos: 'Terms of Service and Privacy Policy',
              selectLang: 'Select Leanguage',
              primaryColor: 'Primary Color',
              BackgroundTheme: 'Background Theme',
              Done: 'Done',
              Settings: 'Settings',
              light: 'Light',
              blue: 'Blue',
              dark: 'Dark',
              Home: 'Home',
              search: 'search',
              Group: 'Group',
              Notif: 'Notif',
              Profile: 'Profile',
              Explore: 'Populer',
              Followed: 'Followed',
              events: 'events',
              Following: 'Following',
              Follower: 'Follower'
            },
            id: {
              welcome: 'Selamat Datang Mahasiswa!',
              loginwith: 'Masuk dengan',
              tos: 'Ketentuan Layanan dan Kebijakan Privasi',
              selectLang: 'Pilih Bahasa',
              primaryColor: 'Warna Primer',
              BackgroundTheme: 'Tema Latar Belakang',
              Done: 'Selesai',
              Settings: 'Pengaturan',
              light: 'Terang',
              blue: 'Biru',
              dark: 'Gelap',
              Home: 'Beranda',
              search: 'Cari',
              Group: 'Grup',
              Notif: 'Notifikasi',
              Profile: 'Saya',
              Explore: 'Untukmu',
              Followed: 'Diikuti',
              events: 'Channels',
              Following: 'Mengikuti',
              Follower: 'Pengikut'
            }
          }
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */

 axios: {
    baseURL: process.env.BASE_URL,
  },

  io: {
    // module options
    sockets: [{
      name: 'main',
      url: process.env.REALTIME_URL
    }]
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  env: {
    storageUrl: process.env.STORAGE_URL
  }
}
