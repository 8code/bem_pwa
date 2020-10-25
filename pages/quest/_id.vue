<template>
  <div class="flex flex-wrap w-full pb-20">
    <input type="hidden" ref="inputText">
    
    <button
      @click="$router.back()"
      class="flex p-3 bg-theme_primary_dark mx-2 rounded-full sticky top-0 z-50 lg:-ml-20 mb-auto" style="top:10px"
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
    </button>

    <div class="flex flex-wrap w-full mt-2 " v-if="quest">
      <div class="w-full lg:w-1/2 ">
        <card-post
          style="position:sticky;top:10px"
          v-on:balas="balasQuest"
          active="true"
          bigtext="true"
          :data="data"
          link="true"
        />
      </div>
      <div class="w-full lg:w-1/2">
        <div class="flex flex-wrap px-2 " v-if="data.event">
          <h2
            v-if="data.event.start"
            class="w-full  flex bg-theme_primary_dark rounded-xl px-5 py-3"
          >
            <span class="px-2 font-bold text-sm">
              {{ dateIndo(data.event.start) }}
            </span>

            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              class="bi bi-calendar-range ml-auto"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
              />
              <path
                d="M9 7a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zM1 9h4a1 1 0 0 1 0 2H1V9z"
              />
            </svg>
          </h2>

          <h2
            class="w-1/2  flex bg-theme_primary_dark rounded-xl px-5 py-3 mt-1"
          >
            <span v-if="!data.event.price" class="px-2 font-bold">Gratis</span>
            <span v-else class="px-2 font-bold"
              >Rp. {{ data.event.price }}</span
            >

            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              class="bi bi-credit-card ml-auto"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
              />
              <path
                d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
              />
            </svg>
          </h2>
          
          <button v-if="data.type == 2" @click="joinEvent(data.event_id)" class="w-1/2  flex bg-primary justify-center text-white text-center hover:bg-primary_dark rounded-xl px-5 py-3 mt-1">
                  {{ $t("join_event") }}
          </button>

        </div>
 <div class="flex flex-wrap px-2 cursor-pointer " v-if="data">
        <h2
          v-if="data.event || data.desc"
          class="w-full flex mt-1 bg-theme_primary_dark rounded-xl flex-wrap px-5  py-3 " 
          :class="(showDesc) ? 'fixed lg:relative left-0 right-0 mx-auto z-50 top-0 overflow-y-scroll lg:overflow-y-auto h-screen lg:h-auto ' : ''"
          @click="showDesc = !showDesc"
        >
          <span  class="flex w-full "  >
            <span class="px-2 font-bold" v-if="data.event"> lihat Desckripsi</span>
            <span class="px-2 font-bold" v-if="data.desc"> Baca Cerita</span>

            <svg
              v-if="!showDesc"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              class="bi bi-book-half ml-auto"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8.5 2.687v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
              />
            </svg>
            <svg
              v-else
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              class="bi bi-x-circle ml-auto"
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
          </span>

          <div  class="w-full flex mt-1 py-3" v-if="showDesc">
            <span  v-if="data.event">
              <div v-if="data.event.desc" v-html="data.event.desc"></div>
            </span>
            <div  v-if="data.desc" v-html="data.desc"></div>
          </div>
        </h2>

        
      <div class="w-full">
        <balas-quest
          v-if="balas_quest"
          v-on:kirim="newQuest"
          v-on:batal="balas_quest = false"
          :quest="balas_quest"
        />
     

          <h1 class="mt-2 px-4 lg:px-2">Balasan :</h1>
        </div>



          <card-post
            hideBalasan="true"
            v-on:balas="balasQuest"
            v-for="que in quest"
            :key="que.id"
            :data="que"
            :id="'reply' + que.id"
          />
        


       
        </div>
  <infinite-loading @infinite="loadMoregetData">
            <div slot="no-more" class="text-center flex w-full p-4"></div>
            <div slot="no-results"></div>
          </infinite-loading>

 </div>


      </div>

      
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import util from "~/assets/js/util";

export default {
  components: {
    InfiniteLoading
  },
  layout: "no-header",
  middleware: "auth",
  data() {
    return {
      data: "",
      quest: "",
      balas_quest: "",
      page: 1,
      text: "",
      showDesc: false
    };
  },
  created() {
    this.$axios.get("/quest/" + this.$route.params.id).then(res => {
      this.data = res.data;
      this.getData();
    });
  },

  methods: {
     joinEvent(id){
      this.$axios.get("/join-event/"+id)
        .then(res => {
          this.$router.push(this.localePath("/events"))
        })
    },
    
    async loadMoregetData($state) {
      this.page = this.page + 1;
      this.$axios
        .$get("/quest/balasan/" + this.data.id + "?page=" + this.page)
        .then(res => {
          if (res.total > 0) {
            $state.loaded();
            this.quest = this.quest.concat(Object.values(res.data));
          } else {
            $state.complete();
          }
        });
    },
    newQuest() {
      this.balas_quest = "";
      this.getData();
    },
    balasQuest(data) {
      this.balas_quest = data;
    },
    dateIndo(data) {
      return util.dateTimeIndo(data);
    },
    getData() {
      this.last_page = false;
      this.page = 1;
      this.$axios
        .$get("/quest/balasan/" + this.data.id + "?page=" + this.page)
        .then(res => {
          this.quest = Object.values(res.data);
        });
    }
  }
};
</script>
