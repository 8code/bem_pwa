<template>
  <div
    class="bg-theme_primary h-screen fixed"
    style="max-width:1100px"
    :class="(channel_id) ? 'z-50' : ''"
    v-touch:swipe="swipeHandler"

  >

    <nuxt-link :to="localePath('/msg')"
      class="flex p-3 bg-theme_primary m-4 rounded-full absolute top-0 lg:hidden"
      style="z-index:1008"
      :class="(channel_id) ? 'block' : 'hidden'"
    >
      <svg
        width="1.2em"
        height="1.2em"
        viewBox="0 0 16 16"
        class="bi bi-arrow-left-circle"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fill-rule="evenodd"
          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
        />
      </svg>
    </nuxt-link>

    
    
    <section class="w-full rounded-xl flex flex-wrap p-2 ">
      
      <div class="w-full lg:w-4/12 lg:pr-2 " :class="($route.params.id) ? 'hidden lg:block' : ''">
        <div class="flex bg-theme_primary_light rounded-xl py-4 pt-4" style="height:95vh">
             <ul class="text-xs w-full  overflow-y-auto px-4" ref="listChat">

               
                
                <li
                v-for="(i, index) in users"
                :key="'user-' + index"
                class="relative flex text-xs p-1 mt-2 font-semibold pb-2 hover:bg-theme_primary_dark rounded-full px-2 cursor-pointer"
                >

            <span v-if="roomUsers[i.room_id] > 1" class="text-success flex absolute bottom-0 w-10 mx-2 text-center justify-center left-0 " style="font-size:7px">
              <span class="px-1" v-if="i.event">{{ roomUsers[i.room_id] }}</span>
              online
            </span>


                <div v-if="i.event_id" class="w-full">
                  <nuxt-link :to="localePath('/msg/'+i.room_id)" class="flex  items-start w-full flex-wrap ccursor-pointer" >
                      <img v-if="i.event.image" :src="i.event.image" alt="avatar"
                      class="rounded-lg w-10" />
                      <img v-else src="/icon.png" alt="avatar" class="rounded-lg w-10" 
                      />
                      <span class="pl-4 p-1 text-lg "> {{ i.event.name }}</span>
                      <span class="ml-auto bg-success p-1 px-2 font-bold text-white rounded-full mt-2" 
                      v-if="i.notread > 0"> {{ i.notread }}</span>
              <span class="px-2 text-xs w-full ml-12 text-theme_secondary font-normal -mt-2" v-if="i.message"> {{ i.message.text }}</span>

            </nuxt-link>
        </div>
        <nuxt-link v-else  :to="localePath('/msg/'+i.room_id)" class="flex items-start  w-full flex-wrap ccursor-pointer" >
        <div class="flex w-full items-start">
            <img v-if="!i.anonim" :src="i.user.avatar" alt="avatar" class="rounded-full w-10 h-10"
            :class="(roomUsers[i.room_id] && roomUsers[i.room_id] > 1) ? 'border-2 border-success': ''"
             />
            <img v-else src="/anonim.png" alt="avatar" class="rounded-full w-10 h-10"
            :class="(roomUsers[i.room_id] && roomUsers[i.room_id] > 1) ? 'border-2 border-success': ''"
             />
            <span class="pl-4 p-1 text-lg" v-if="!i.anonim"> {{ i.user.name }}</span>
            <span class="pl-4 p-1 text-lg" v-else> Anonim </span>
            <span class="ml-auto bg-success p-1 px-2 font-bold text-white rounded-full mt-2" v-if="i.notread > 0"> {{ i.notread }}</span>

        </div>
        <span class="px-2 text-xs w-full ml-12 text-theme_secondary font-normal -mt-2" v-if="i.message"> {{ i.message.text }}</span>
        </nuxt-link>

            </li>

            </ul>
        </div>
      </div>

      <div

        v-if="channel_id"
        class="w-full lg:w-8/12 z-50 bg-theme_primary  rounded-xl flex relative flex-wrap"
       
      >

      <div class="flex bg-theme_primary rounded-xl items-start absolute top-0 w-full p-2 z-50 pl-12 lg:pl-0" >

          <span class="font-bold  pl-2 flex" v-if="user"> 

              <img v-if="!anonim" :src="user.avatar" alt="avatar" class="rounded-full w-12 h-12" :class="(userActive.length > 1) ? 'border-2 border-success' : ''">
              <img v-else src="/anonim.png" alt="avatar" 
              class="rounded-full w-12 h-12"
               :class="(userActive.length > 1) ? 'border-2 border-success' : ''">
              <span class="p-2 -mt-1">
                <span v-if="!anonim">{{ user.name }} </span>
                <span v-else>Anonim </span>
                <br>
                <span v-if="userActive.length > 1" class="text-success text-xs font-normal -mt-1">online</span>
              </span>
          </span>

            <span class="font-bold  pl-2 flex" v-if="event"> 

              <img v-if="event.img" :src="event.image" alt="avatar" class="rounded-full w-12 h-12" 
              >
              
              <img v-else src="/icon.png" alt="avatar" class="rounded-full w-12 h-12" 
              >
              <span class="p-2 -mt-1">{{ event.name }} 
                <br>
                <span class="text-success text-xs font-normal -mt-1">
                  {{ userActive.length }} 
                  online</span>
              </span>
          </span>

      <div class="ml-auto flex">

        <div class="flex p-3 bg-theme_primary_light mx-2 rounded-full cursor-pointer">
          <!-- <svg
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
          </svg> -->
        </div>
      </div>
    </div>


        <div class="w-full" >
          <div
            class="w-full bg-theme_primary_light p-4 rounded-xl text-xs pb-20 pt-24"
            style="height:87vh;overflow-y:scroll" id="list-chat" 
          >
                <chat-message
                  
                  v-for="(m, index) in messages"
                  :key="'c-' + index"
                  :id="'c-' + index"
                  :c="m"

                  :anonim="anonim"
                />

          </div>
          <div class="w-full flex  justify-left mt-2  lg:mt-1 items-center">
       
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
  </div>
</template>
<script>


import InfiniteLoading from "vue-infinite-loading";
import util from "~/assets/js/util";

export default {
  components: {
    InfiniteLoading
  },
  scrollToTop: true,
  layout: "no-header",
  middleware: "auth",
  data() {
    return {
      event: '',
      user: '',
      text: "",
      messages: [],
      userActive: [],
      channel_id: '',
      users: [],
      roomUsers: [],
      anonim: ''
    };
  },
  sockets: {
     roomUsers: function({ room, users }) {
        
          this.roomUsers[room] = users.length

           if(room === this.$route.params.id){
              if(users){
                  this.userActive = users;
              }
          }
    
     
    },
    //  activity: function(msg) {
        
    //    console.log(msg)
    
     
    // },
    message: function(message) {
        if(message.room === this.$route.params.id){
          this.messages.push(message);

          if(!this.event){
              this.scrollToLast()
          }
        }

          this.joinMessage();

    }
  },
  created() {

    this.joinMessage()
    
    this.getDataChannel();

  },

  methods: {
    swipeHandler(direction){
        if(direction =='right'){
          this.$router.push('/msg')
        }else if(direction =='left'){
         
        }
    },
    joinMessage(){
      this.$axios.get("/chat_message_user")
        .then(res => {
            res.data.forEach(i => {
              this.$socket.emit("joinRoom", {
                  user: {
                      username: this.$store.state.user.username,
                      name: this.$store.state.user.name,
                      avatar: this.$store.state.user.avatar
                  },
                  room: i.room_id
              });

            });

            this.users = res.data
        })
          
    },
    scrollToLast(){
      if(this.channel_id){
          var container = this.$el.querySelector("#list-chat");
          container.scrollTop = container.scrollHeight;
      }
    
    },
    getDataChannel() {
      this.$axios.get("/chat_by_room_id/"+this.$route.params.id)
        .then(res => {

          if(!res.data.channel_id){
              // this.$router.push('/msg/start')
          }else{
            
          this.channel_id = res.data.channel_id
          this.anonim = res.data.anonim
          console.log(res.data)
          this.user = res.data.user
          this.event = res.data.event

          
          this.$axios.get("/read-message/"+this.$store.state.user.id+"/"+this.channel_id)
         
          if(res.data.message.total > 0){

            let msg = res.data.message.data.reverse();

            for (let index = 0; index < msg.length; index++) {

                let formatTo = {
                      user: {
                        username: msg[index].user.username,
                        name: msg[index].user.name,
                        avatar: msg[index].user.avatar,
                      },
                      message: {
                          text: msg[index].text,
                          audio: msg[index].audio,
                          stiker: msg[index].stiker,
                          image: msg[index].image,
                      },
                      time: util.timeIndo(msg[index].created_at)
                  }

                  this.messages.push(formatTo);
              
            }

            this.scrollToLast()

           
           
          }
          
          }
              
        })

        
    },
    sendMessage() {
      if(this.text){

      
          this.$axios.post("/send-message/"+this.channel_id, {
            text: this.text
          } )
              .then(res => {

                this.$socket.emit("sendMessage", {
                  room: this.$route.params.id,
                  data: res.data
                });
                
                if(this.user){
                      this.$store.commit("setNotif",{
                        to: this.user.id,
                        text: this.$store.state.user.name+ " : "+ this.text
                    })
                }

                this.text = ""
                
                this.scrollToLast()
              })

      }
    }
  }
};
</script>
