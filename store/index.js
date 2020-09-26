
import Vuex from 'vuex'

const createStore = () => {
    return new  Vuex.Store({
        state: {
                notif: [],
                playing_path: '',
                playing: '',
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
                primaryColor: localStorage.getItem("primary-color") || 'primary-yellow',
                topMenu: true,
                loading:false,
                data_quest_profile: '',
                data_quest_home: '',
                data_quest_search: '',
                data_group: '',
                data_group_search: '',
                data_notifications: '',
            },


        mutations:{
        
            setNotif (state, data) {
                console.log(data)
                this.$fireDb.ref('notifikasi/'+data.to).update({
                   text: data.text,
                }).then(function(snapshot) {
                    console.log(snapshot)
                });
              },
            loading(state,to){
                state.loading = to
            },
        
            setTopMenu(state,to){
                state.topMenu = to
            },
            setMediaPlayer(state,to){
                state.playing_path = to.path


                state.playing = to.data
                if(to.data.video){
                    console.log(to.data.video);
                    state.media_player = to.data.video
                }else{
                    state.media_player = to.data.embed
                }
               
                state.show_media_player = true
            },
            setShowMediaPlayer(state,to){
                state.show_media_player = to
            },
            resetMediaPlayer(state){
                state.media_player = ""
                state.show_media_player = true
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
            updateProfile(state,data){
                localStorage.setItem("user",JSON.stringify(data))
                state.user = data
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
        },
        getters:{
            getNotif (state) {
                return state.notif
              }
        }
    })
}

export default createStore