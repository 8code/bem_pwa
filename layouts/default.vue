<template>
  <div :class="$store.state.mode+' '+$store.state.sidebar_mode">
   <link rel="stylesheet" href="/css/all.min.css" >
   <!--vertical navigations-->
    <div class="p-4 mx-auto flex flex-wrap">

    <div :class="$store.state.sideBarClass">
           
             <nuxt-link class="s-link " to="/" :class="($route.path == '/') ?  menuActiveClass : menuNonActiveClass">
                <div class="hidden lg:block">
                  <div v-if="!$store.state.sidebar_mode">
                    <img width="50px" class="rounded-full mx-auto" v-if="$auth.user.avatar" :src="$auth.user.avatar"
                        alt="Avatar" >
                    <img width="50px" class="rounded-full mx-auto" v-else src="/icon.png"
                        alt="Avatar" >
                        <br>
                    @{{ $auth.user.username}}
                  </div>
                  <span v-else> 
                    @{{ $auth.user.username}}</span>
                </div>

                  <span class="block lg:hidden">
                    <i class="w-8 fas fa-user rounded-full"></i>
                </span>
                <span class="block lg:hidden">Profil</span>
               
              </nuxt-link>
             <nuxt-link class="s-link" to="/startup" :class="(cekMenu('startup')) ?  menuActiveClass : menuNonActiveClass">
                <i class="w-8  fas fa-fire   rounded-full">
                </i>
                <span >Startup</span>
              </nuxt-link>
              <nuxt-link class="s-link" to="/timeline" :class="(cekMenu('timeline')) ?  menuActiveClass : menuNonActiveClass">
                <i class="w-8  fas fa-calendar   rounded-full">
                </i>
                <span >TimeLine</span>
              </nuxt-link>
              <nuxt-link class="s-link" to="/group" :class="(cekMenu('group')) ?  menuActiveClass : menuNonActiveClass">
                  <i class="w-8  fas fa-users   rounded-full">
                  </i>
                <span>Group</span>
              </nuxt-link>
              <nuxt-link class="s-link" to="/info" :class="(cekMenu('info')) ?  menuActiveClass : menuNonActiveClass">
                <i class="w-8  fas fa-bell   rounded-full">
                </i>
                <span >Informasi</span>
              </nuxt-link>
         
    </div>
      <div class="relative w-full p-0 rounded-lg lg:p-5 main sidebar-to-top-main">
          
            <div class="topmenu flex">
                 <span  @click="$store.commit('mode')"  class="block cursor-pointer px-2" 
                    >
                        <i class="fas fa-lightbulb  rounded-full"> 
                      </i>
                  </span>
                  <nuxt-link to="/">
                    <span   class="block cursor-pointer px-2" 
                    >
                        <i class="fas fa-info  rounded-full"> 
                      </i>
                  </span>
                  </nuxt-link>
                  
            </div>

          <nuxt class="content" />
      </div>
      

  </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      setting: false,
      menuActiveClass: "cursor-pointer px-2 py-1 hover: block mb-5 active",
      menuNonActiveClass: "cursor-pointer px-2 py-1 hover: block mb-5",
      menuActiveClassM: "w-1/4 active",
      menuNonActiveClassM: "w-1/4"
    }
  },
  mounted(){
        this.$axios.get(`profile`)
          .then((res) => {
              this.$auth.setUser(res.data)
          })
          .catch((e) => {
              console.log(e)
          })
  },
  methods:{
    cekMenu(m){
      let menu = this.$route.path.split("/")
      if(menu[1] == m){
        return true
      }else{
        return false
      }
    }
  }
}
</script>
<style >

.main{
  border-radius: 50px;
  min-height: 90vh;
  margin-bottom: 30px;
  margin-top: 30px;
  background: var(--primary);
  width: 85%;
}
.topmenu{
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 3;
    text-align: right;
}

.sidebar{
  text-align: center;
  padding-top: 120px;
  width: 15%;
  position: fixed;
  top: 0;
}
.sidebar .active{
  color: var(--active);
}
@media (min-width:800px) {
  .sidebar-top .sidebar-to-top{
      background: var(--primary-1);
      position: fixed;
      top: 20px;
      z-index: 2;
      left: 30px;
      font-size: 12px;
      padding: 0;
      border-radius: 20px;
      width: auto;
  }
  .sidebar-top .sidebar-to-top-right{
      left: auto;
      right: 80px;
  }
  .sidebar-top .sidebar-to-top .s-link{
    margin: 0;
    padding: 10px 12px;
    float: left;
  }
  .sidebar-to-top-main{
    margin-left: 15%;
  }
  .sidebar-top .sidebar-to-top-main{
    width: 100%;
    margin-left: 0
  }
}



/* Card */
.card {
     background: var(--primary-1);
     color: var(--secondary-1); 
     border-radius: 30px;
     position: relative;
}
.label-detail{
    background: var(--secondary-1);
    color: var(--primary-1); 
    position: absolute;
    right: 0;
    bottom: 0;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    cursor: pointer;
}

.logo{
  border-radius: 50%;
}
.nama{
    font-size: 35px;
}


.setting span{
    width: 100%;
    float: left;
    border-radius: 20px;
    padding: 12px 16px;
    background: var(--primary);
    color: var(--secondary);
    margin: 10px 0;
}
.rounded-full{
  border-radius:30px
}
.avatar{
    width: 150px;
    height: 150px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
.avatar img{
    width:100%;
    border-radius: 50%;
}
.title{
    font-size: 40px;
    font-weight: 500;
}
.center-page{
    padding: 5%;
}
.informasi{
    border-radius: 30px;
}
.modal {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.modal .modal-content{
     background: var(--primary-1);
     color: var(--secondary-1);
     max-height: 93vh;
     overflow-y: scroll;
}
.modal .modal-active {
    overflow-x: hidden;
    overflow-y: visible !important;
}
.modal .modal-content::-webkit-scrollbar{
  display: none;
}

.form-input{
    background: var(--primary);
    color: var(--secondary);
}
.form-input:focus{
  outline: none;

}
@media (max-width:800px) {
  .sidebar{
    width: 100%;
    background: var(--primary);
    position: fixed;
    top: auto;
    bottom: 0;
    width: 100%;
    z-index: 2;
    left: 0;
    font-size: 12px;
    padding: 0;
    margin: 0;
    margin-bottom: -1px;
  }
  .sidebar .s-link{
    margin: 0;
    padding: 10px 12px;
    width: 20%;
    float: left;
  }
  .main{
    width: 100%;
  }
   .nama{
        font-size: 24px;
    }
}

button:focus{
  outline: none;
}
</style>
