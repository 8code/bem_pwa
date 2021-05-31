
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
 mode: "spa",
  pwa: {
    meta: {
      title: 'MabApp - Sosial Media Mahasiswa',
      author: 'Ari Bahtiar',
    },
    manifest: {
      name: 'MabApp',
      lang: 'id',
      theme_color: '#f1f1f1',
      start_url: "/",
      description: "Aplikasi Sosial Media Mahasiswa , tempat Untuk Curhat, Cari Teman atau Diskusi dan tentunya bisa atasin permasalahan mahasiswa"
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
    title: 'MabApp - Sosial Media Mahasiswa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "MabApp Media Mahasiswa , tempat Untuk Curhat, Cari Teman atau Diskusi dan tentunya bisa atasin permasalahan mahasiswa (GABUT)" }
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
    '~/plugins/getImage',
    '~/plugins/v-touch',
    '~/plugins/socket.js',
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
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
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
        locales: ['id','en'],
        defaultLocale: 'id',
        vueI18n: {
          fallbackLocale: 'id',
          messages: {
            en: {
              welcome: 'Welcome Back Mabs!',
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
              Explore: 'Explore',
              Followed: 'Followed',
              events: 'Event',
              Following: 'Following',
              Follower: 'Follower',
              messages: 'Messages',
              story: 'Story',
              join_event: 'Join Event',
              as: 'As',
              reply: 'reply'
            },
            id: {
              welcome: 'Selamat Datang Mabs!',
              loginwith: 'Masuk dengan',
              tos: 'Ketentuan Layanan dan Kebijakan Privasi',
              selectLang: 'Pilih Bahasa',
              primaryColor: 'Warna Primer',
              BackgroundTheme: 'Tema Latar Belakang',
              Done: 'Selesai',
              SettingsX: 'Pengaturan',
              light: 'Terang',
              blue: 'Biru',
              dark: 'Gelap',
              Home: 'Beranda',
              search: 'Cari',
              Group: 'Grup',
              Notif: 'Notifikasi',
              Profile: 'Saya',
              Explore: 'Jelajahi',
              Followed: 'Diikuti',
              events: 'Acara',
              Following: 'Mengikuti',
              Follower: 'Pengikut',
              messages: 'Pesan',
              story: 'Cerita',
              join_event: 'Ikuti Acara',
              as: 'Sebagai',
              reply: 'balasan'
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


  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  sitemap:{
      path: '/sitemap.xml',
      hostname: process.env.BASE_URL_NOT_API,
      exclude: [
        '/en/**',
      ],
  
  },
  build: {
  },
  env: {
    socketUrl: process.env.SOCKET_URL,
    storageUrl: process.env.STORAGE_URL
  }
}
