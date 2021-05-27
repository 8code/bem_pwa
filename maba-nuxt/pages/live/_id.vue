<template>
 <div
    class="w-full  bg-theme_primary pt-10"
  >

  
    <div  class="w-full bg-transparent flex flex-wrap justify-end fixed top-0 right-0 h-screen" style="z-index:1000" :class="(showSettings) ? '' : 'hidden'">
          <div @click="showSettings = !showSettings"  class="w-full  flex flex-wrap justify-end  bg-theme_primary_dark opacity-50 z-50 fixed top-0 right-0 h-screen ">
          </div>
          
          <div class="w-full p-4 lg:w-1/3 flex flex-wrap justify-center items-center content-center bg-theme_primary_light rounded-xl" 
          
          style="z-index:1001">
                
         
            <label class="mb-2 w-full text-center">Live Settings </label>
        

          
                

          </div>
      </div>


    <div class="flex fixed top-0 mt-3 w-full">
      <button
        @click="leaveChannel()"
        class="flex p-3 bg-theme_primary_light mx-2 rounded-full "
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-x-circle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fill-rule="evenodd"
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>

      </button>


      <span class="p-2 font-bold flex" v-if="event">
        <span class="hidden lg:block">{{ event.name }}</span> 
        <span class="text-success text-xs p-1 px-2"> ( {{ userList.length }}  Online )</span>
      </span>

      <div class="ml-auto flex items-start">
     
        <div class="flex p-2 bg-theme_primary_light mx-2 rounded-full cursor-pointer" @click="showSettings = !showSettings">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-gear"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
            />
            <path
              fill-rule="evenodd"
              d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
            />
          </svg>
        </div>
      </div>
    </div>

    <section class="w-full rounded-xl flex flex-wrap p-2 pt-5">
  

      <div
        class="w-full lg:w-8/12 z-50 bg-theme_primary  rounded-xl flex relative flex-wrap"
        style="height:90vh"
      >
              <div class="flex w-full flex-wrap justify-center bg-theme_primary_light rounded-xl p-4 min-h-full">

            <video class="videoLive"  ref="video" playsinline  autoplay controls muted></video>
            



        </div>
      </div>

 
      <div class="w-full z-0 lg:w-4/12 lg:pl-2 mt-16 lg:mt-0  lg:block fixed lg:relative top-0 right-0  lg:h-auto"
       
       
       :style="(showChat) ? 'z-index:1006': ''"
       
       >
        <div class="flex w-full flex-wrap bg-theme_primary_light rounded-xl p-4 min-h-full">

           <div
            class="w-full bg-theme_primary_light p-4 rounded-xl text-xs pb-20 pt-10"
            style="height:75vh;overflow-y:scroll" id="list-chat"
          >

          
        

                <chat-message
                  v-for="(m, index) in messages"
                  :key="'c-' + index"
                  :id="'c-' + index"
                  :c="m"
                />


          </div>

          
          <div class="w-full flex justify-left mt-2  lg:mt-1 items-center">
            <textarea
              maxlength="255"
              v-model="text"
              placeholder="Katakan sesuatu ..."
              class="bg-theme_primary_light w-full rounded-full border-2 border-theme_primary bottom-0 p-3  px-5 z-50"
              style="height:52px"
               @keyup.enter="sendMessage"
            ></textarea>

            <button class="bg-theme_primary_light rounded-full  p-2" @click="sendMessage">
                      <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-cursor" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
                      </svg>

          </button>

           </div>

        </div>
      </div>
    </section>


     <nav @click="showChat = !showChat" class="fixed bottom-0 flex lg:hidden w-full bg-theme_primary  " style="z-index:1006">
        <div class="flex w-full text-primary font-bold p-2 text-center justify-center ">
            <span class="p-1 "> Pesan </span>
        </div>
     </nav>
  </div>
</template>
<style scoped>

.videoLive{
  height:100%;
  border-radius: 30px;
}
</style>
<script>



import InfiniteLoading from "vue-infinite-loading";

export default {
  components: {
    InfiniteLoading
  },
  scrollToTop: true,
  layout: "channel",
  middleware: "auth",
  data() {
    return {
        tactiveClass:
        "text-lg font-bold rounded-full flex w-1/5 px-1 py-2 mx-1 flex-wrap content-center justify-center items-center pt-2",
      tnonActiveClass:
        "text-lg font-bold rounded-full flex w-1/5 px-1 py-2 mx-1 flex-wrap content-center justify-center items-center text-default pt-2",
      
      showChat:false,
      showSettings: false,
      event: "",
      text: "",
      messages: [],
      activity: [],
      userList: [],
      loginAs: '',
      peerConnection: '',
      config: {
        iceServers: [
            { 
              "urls": "stun:stun.l.google.com:19302",
            },
            { 
              "urls": "turn:TURN_IP?transport=tcp",
              "username": "TURN_USERNAME",
              "credential": "TURN_CREDENTIALS"
            }
        ]
      }
    };
  },
  sockets: {
    offer: function (data) {
      let id = data[0]
      let description = data[1]
      this.peerConnection = new RTCPeerConnection(this.config);
      this.peerConnection
        .setRemoteDescription(description)
        .then(() => this.peerConnection.createAnswer())
        .then(sdp => this.peerConnection.setLocalDescription(sdp))
        .then(() => {
          this.$socket.emit("answer", id, this.peerConnection.localDescription);
        });
        this.peerConnection.ontrack = event => {
        this.$refs.video.srcObject = event.streams[0];
      };
      this.peerConnection.onicecandidate = event => {

        if (event.candidate) {
          this.$socket.emit("candidate", id, event.candidate);
        }
        
      }
    },
    candidate: function ( data) {

       let id = data[0]
       let candidate = data[1]
          this.peerConnection
            .addIceCandidate(new RTCIceCandidate(candidate))
            .catch(e => console.error(e));
        },

        connect: function () {
          this.$socket.emit("watcher");
        },

        broadcaster: function() {

          this.$socket.emit("watcher");
        },
        disconnectPeer : function () {
          this.peerConnection.close();
        },

      roomUsers: function({ room, users }) {
        this.userList = users;
      },
      message: function(message) {
        this.messages.push(message);
      },
      activity: function(act) {
        this.activity = act;
      }
  },
  mounted() {
    this.getDataChannel();

    this.$socket.emit("watcher");

    if(this.$store.state.anonim == true){
      
      this.loginAs = {
          username: this.$store.state.user.username,
          name: "Anonim",
          avatar: "/anonim.png",
        };

    }else{

       this.loginAs = {
          username: this.$store.state.user.username,
          name: this.$store.state.user.name,
          avatar: this.$store.state.user.avatar,
        };

    }
    
    this.$socket.emit("joinRoom", {
      user: this.loginAs,
      room: this.$route.params.id
    });


    window.onunload = window.onbeforeunload = () => {
      this.$socket.close();
    }


  },

  methods: {
    enableAudio() {
        console.log("Enabling audio")
        this.$refs.video.muted = false;
      },
  
    scrollToLast(){
      var container = this.$el.querySelector("#list-chat");
      container.scrollTop = container.scrollHeight;
    },
    getDataChannel() {
      this.$axios.get("/event_by_room_id/"+this.$route.params.id)
        .then(res => {
          this.event = res.data
        })
    },
    leaveChannel() {
      this.$router.back();
    },
    sendMessage() {

      if(this.text){
          let dt = {
              text: this.text
          };
          this.$socket.emit("sendMessage", dt);
          this.text = ""
          
          this.scrollToLast()
      }
    },
    getUserregistered() {
      this.$axios.get("/user-channel/" + this.$route.params.id).then(res => {
        this.userJoin = res.data;
      });
    }
  }
};
</script>
