<template>
  <div :class="settings" style="min-height:100vh">
    <loading />

    <div
      class="w-full flex flex-wrap content-start "
    >
    
      <main
        class="w-full mx-auto flex flex-wrap pt-2 content-start  "
         >
        <media-player />
          <transition name="slide-fade">
            <Nuxt class="w-full" />
          </transition>
        </main>
    </div>
  </div>
</template>
<style scoped>
.text-xs2 {
  font-size: 8px;
}
</style>

<script>
import Push from "push.js";
export default {
  data() {
    return {
     
    }
  },
  computed: {
    settings() {
      return this.$store.state.theme + " " + this.$store.state.primaryColor;
    }
  },
  methods: {

    sayHayPush(text) {
      console.log(text);
      Push.create("Halo " + this.$store.state.user.name + " !", {
        body: text,
        icon: "/icon.png",
        timeout: 120000,
        onClick: function() {
          clients.openWindow('https://maba.my.id/notifications')
        }
      });
    }
    
  },

  created() {
    let token = localStorage.getItem("access_token") || "";
    this.$axios.setHeader("Authorization", "Bearer " + token);

    this.$axios
      .$get("/profile-by-id/" + this.$store.state.user.id)
      .then(data => {
        if (data) {
          this.$store.commit("updateProfile", data);
        } else {
          localStorage.clear();
        }
      })
      .catch(res => {
        localStorage.clear();
      });
  },

  mounted() {

    var that = this;

    var notifff = this.$fireDb.ref("notifikasi/" + this.$store.state.user.id);
      notifff.on("value", function(snapshot) {
        if(snapshot.val()){
           if(snapshot.val().text){
           that.sayHayPush(snapshot.val().text);

            that.$store.commit("setNotif",{
              to: that.$store.state.user.id,
              text: ""
            })
              
          }
        }
       
    });

    window.addEventListener("scroll", function() {
      if (window.scrollY > that.windowTop) {
        if (window.scrollY > 10) {
          that.$store.commit("setTopMenu", false);
        }
      } else {
        that.$store.commit("setTopMenu", true);
      }
      that.windowTop = window.scrollY;
    });
  }
};
</script>
