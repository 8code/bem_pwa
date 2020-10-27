<template>
  <div
    class="w-full  bg-theme_primary pt-10"
  >

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


      <span class="p-2 font-bold" v-if="event"> {{ event.name.substring(0, 25) }} ... </span>

      <div class="ml-auto flex">
        <!-- <button class="flex p-3 bg-theme_primary_light mx-2 rounded-full  ">

        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-mic-mute" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M12.734 9.613A4.995 4.995 0 0 0 13 8V7a.5.5 0 0 0-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 0 1 4 8V7a.5.5 0 0 0-1 0v1a5 5 0 0 0 4.5 4.975V15h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-2.025a4.973 4.973 0 0 0 2.43-.923l-.718-.719zM11 7.88V3a3 3 0 0 0-5.842-.963l.845.845A2 2 0 0 1 10 3v3.879l1 1zM8.738 9.86l.748.748A3 3 0 0 1 5 8V6.121l1 1V8a2 2 0 0 0 2.738 1.86zm4.908 3.494l-12-12 .708-.708 12 12-.708.707z"/>
        </svg>
        </button> -->

        <!-- <div class="flex p-3 bg-theme_primary_light mx-2 rounded-full cursor-pointer" @click="showSettings = !showSettings">
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
        </div> -->
      </div>
    </div>

    <section class="w-full rounded-xl flex flex-wrap p-2 pt-5">
      <div class="hidden lg:block w-full lg:w-2/12 pr-2">
        <div class="flex bg-theme_primary_light rounded-xl p-4" style="height:90vh">
          <ul class="text-xs w-full  overflow-y-auto" >
            <li class="flex text-xs py-2 font-bold cursor-pointer">
              Online ({{ userList.length }})
            </li>
            <li
              v-for="(i, index) in userList"
              :key="'online-user-' + index"
              class="flex text-xs p-1 text-success font-semibold hover:bg-theme_primary_dark rounded-full px-2 cursor-pointer"
            >
              <img :src="i.user.avatar" class="w-6 h-6 rounded-full">
               <span class="p-1">{{ i.user.name }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="w-full lg:w-8/12 z-50 bg-theme_primary  rounded-xl flex relative flex-wrap"
        style="height:90vh"
      >
        <div class="w-full">
          <div
            class="w-full bg-theme_primary_light p-4 rounded-xl text-xs pb-20 pt-10"
            style="height:82vh;overflow-y:scroll" id="list-chat"
          >

    <video ref="video" playsinline  muted autoplay ></video>

    <button @click="enableAudio">Enable audio</button>


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

      <div class=" w-full lg:w-2/12 lg:pl-2">
        <div class="flex bg-theme_primary_light rounded-xl p-4 min-h-full">
          <ul class="text-xs w-full">
            <li class="flex text-xs py-2 font-bold cursor-pointer">
              Activity
            </li>
            <li
              v-for="(i, index) in activity"
              :key="'act-' + index"
              class="flex text-xs p-1 font-semibold cursor-pointer"
              :class="i.type == 0 ? 'text-danger' : 'text-success'"
            >
              {{ i.text }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

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
