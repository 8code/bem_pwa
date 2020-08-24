const state = () => ({
    storage: process.env.storageUrl,
    data:{
        mygroup: []
    },
    auth: localStorage.getItem("auth") || false,
    user: JSON.parse(localStorage.getItem("user")) || '',
    access_token: localStorage.getItem("access_token") || '',
    errorMessages: '',
    leftMenu: '',
    showAuth: false,
    settings: false,
    theme: localStorage.getItem("theme") || 'theme-light',
    primaryColor: localStorage.getItem("primary-color") || 'primary-green',
    topMenu: true,
    loading:false,
    listMenu: [
        {
            name: 'Dashboards',
            admin: true,
            path: '/',
        },
        {
            name: 'Controls',
            path: '',
            admin: true,
            sub: [
                {
                    name: 'Users',
                    path: '/users'
                },
                {
                    name: 'Groups',
                    path: '/groups'
                },
                {
                    name: 'Events',
                    path: '/events'
                },
                {
                    name: 'Donations',
                    path: '/doncations'
                }
            ]
        },
        {
            name: 'Transactions',
            path: '',
            admin: true,
            sub: [
                {
                    name: 'Events',
                    path: '/transactions/events'
                },
                {
                    name: 'Donations',
                    path: '/transactions/donations'
                }
            ]
        }
    ]
  });

  const mutations = {
    loading(state,to){
        state.loading = to
    },

    setTopMenu(state,to){
        state.topMenu = to
    },
    setErrorMessages(state,to){
        state.errorMessages = to
    },
    toggleLeftMenu(state, to) {
        state.leftMenu = to;
    },
    setTheme(state, to) {
        state.theme = to
        localStorage.setItem("theme", to)
    },
    setPrimaryColor(state,to){
        state.primaryColor = to
        localStorage.setItem("primary-color", to)
    },
    toggleSetting(state,to){
        if(state.settings){
            state.settings = false
        }else{
            state.settings = true
        }
    },
    toggleShowAuth(state,to){
        if(state.showAuth){
            state.showAuth = false
        }else{
            state.showAuth = true
        }
    },
    login(state,data){
    //    Login
    this.$axios.$post('login',data)
                .then(res => {

                    // console.log(res)

                    if(res.user){
                        localStorage.setItem("auth",true)
                        localStorage.setItem("user",JSON.stringify(res.user))
                        localStorage.setItem("access_token",res.access_token)

                        this.$axios.setHeader('Authorization', 'Bearer '+res.access_token)

                            
                        state.auth = true
                        state.user = res.user
                        state.access_token = res.access_token

                        state.showAuth = false
                        state.errorMessages = ''
                        
                        this.$router.push("/")


                    }else{
                         state.errorMessages = res.message
                     }
                })
                 .catch(err => {
                        state.errorMessages = "Invalid Request"
                })
    },
    loginfb(state,data){
        //    Login

        this.$axios.$post('loginfb',data)
                .then(res => {

                    if(res.user){
                        localStorage.setItem("auth",true)
                        localStorage.setItem("user",JSON.stringify(res.user))
                        localStorage.setItem("access_token",res.access_token)

                        this.$axios.setHeader('Authorization', 'Bearer '+res.access_token)
                            
                        state.auth = true
                        state.user = res.user
                        state.access_token = res.access_token

                        state.showAuth = false

                        state.errorMessages = ''

                        this.$router.push("/")


                    }else{
                            state.errorMessages = res.message
                        }
                })
                .catch(err => {
                        console.log(err.response.data.message)
                        state.errorMessages = err.response.data.message
                })
    },
     logout(){
        localStorage.clear()
        location.reload()

    },
    createGroup(state,data){
        this.$axios.$post("/upload-image",{
            image: data.avatar
        }).then(res => {
                data.user_id = state.user.id
                data.avatar = state.storage + res.url
                this.$axios.$post("/group",data)
                    .then(res => {
                        console.log(res)
                        if(res.success){
                            this.commit("getMyGroup")
                        }else{
                            this.commit("errorMessages")
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
        })
        .catch(err => {
            console.log(err)
        })
        
    },
    getMyGroup(state){
        this.$axios.$get("/mygroup")
            .then(res => {
                state.data.mygroup = res
                // console.log(res)
            })
    }
    ,
   
  };

  const actions = {
  
  };

  const getters = {
   
  };

  export default {
    state,
    actions,
    getters,
    mutations
  };
