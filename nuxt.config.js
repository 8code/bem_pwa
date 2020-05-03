require('dotenv').config()

export default {
    mode: 'spa',
    // PWA

    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
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
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/workbox',
        '@nuxtjs/onesignal',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',

    ],
    oneSignal: {
        init: {
            appId: 'f4910a8c-83d9-4843-90da-67099056e0c7',
            allowLocalhostAsSecureOrigin: true,
            welcomeNotification: {
                disable: true
            }
        }
    },
    pwa: {
        manifest: {
            name: 'BEM UNSIL',
            short_name: 'BEM',
            display: "standalone",
            start_url: 'https://bem.citumangview.com/',
            theme_color: '#00171F',
            background_color: '#00171F',
            lang: 'id'
        }
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: 'https://api.bem.citumangview.com/api/v1/'
    },
    auth: {
        redirect: {
            login: "/login",
            logout: "/login"
        },
        strategies: {
            password_grant: {
                _scheme: "local",
                endpoints: {
                    login: {
                        url: "/oauth/token",
                        method: "post",
                        propertyName: "access_token"
                    }
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}