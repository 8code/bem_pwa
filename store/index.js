
import Vuex from 'vuex'

const createStore = () => {
    return new  Vuex.Store({
        state: {
                media_player: '',
                show_media_player: true,
                storage: process.env.storageUrl,
                data:{
                    mygroup: []
                },
                auth: localStorage.getItem("auth") || false,
                user: JSON.parse(localStorage.getItem("user")) || '',
                access_token: localStorage.getItem("access_token") || '',
                errorMessages: '',
                settings: false,
                theme: localStorage.getItem("theme") || 'theme-light',
                primaryColor: localStorage.getItem("primary-color") || 'primary-indigo',
                topMenu: true,
                loading:false,
            },


        mutations:{
            loading(state,to){
                state.loading = to
            },
        
            setTopMenu(state,to){
                state.topMenu = to
            },
            setMediaPlayer(state,to){
                state.media_player = to
                state.show_media_player = true
            },
            setShowMediaPlayer(state,to){
                console.log(to)
                state.show_media_player = to
            },
            setErrorMessages(state,to){
                state.errorMessages = to
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
        
            login(state,data){
            //    Login
                 this.$axios.$post('login',data)
                    .then(res => {
        
                        if(res.user){
                            console.log("berhasil")
        
                            localStorage.setItem("auth",true)
                            localStorage.setItem("user",JSON.stringify(res.user))
                            localStorage.setItem("access_token",res.access_token)
        
                                
                            state.auth = true
                            state.user = res.user
                            state.access_token = res.access_token
        
                            state.showAuth = false
                            state.errorMessages = ''

                            this.$router.push("/")
        
        
                        }else{
                            console.log("gagal")
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
        }
    })
}

export default createStore