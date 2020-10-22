<template>
  <div class="w-full z-50 bg-theme_primary_dark " style="height:100%;padding-top:5vh">
    <div class="flex fixed top-0 mt-2 w-full rounded-xl">

      <button
        @click="$router.back()"
        class="flex p-3 bg-theme_primary mx-2 rounded-full "
      >
        <svg
          width="1em"
          height="1em"
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

      <span class="p-2 hidden lg:block font-bold"> Find Friend 


        - <span class="text-primary cursor-pointer"> (Universitas Siliwangi) </span>
      </span>

      <div class="ml-auto flex">
        <button class="flex p-3 bg-theme_primary mx-2 rounded-full  ">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-camera-video-off"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518l.605.847zM1.428 4.18A.999.999 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634l.58.814zM15 11.73l-3.5-1.555v-4.35L15 4.269v7.462zm-4.407 3.56l-10-14 .814-.58 10 14-.814.58z"
            />
          </svg>
        </button>

        <button class="flex p-3 bg-theme_primary mx-2 rounded-full  ">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-mic-mute"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.734 9.613A4.995 4.995 0 0 0 13 8V7a.5.5 0 0 0-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 0 1 4 8V7a.5.5 0 0 0-1 0v1a5 5 0 0 0 4.5 4.975V15h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-2.025a4.973 4.973 0 0 0 2.43-.923l-.718-.719zM11 7.88V3a3 3 0 0 0-5.842-.963l.845.845A2 2 0 0 1 10 3v3.879l1 1zM8.738 9.86l.748.748A3 3 0 0 1 5 8V6.121l1 1V8a2 2 0 0 0 2.738 1.86zm4.908 3.494l-12-12 .708-.708 12 12-.708.707z"
            />
          </svg>
        </button>

        <nuxt-link to="/settings" class="flex p-3 bg-theme_primary mx-2 rounded-full  ">
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
        </nuxt-link>
      </div>
    </div>

    <section
      class="w-full rounded-xl flex flex-wrap p-2 pt-5"
    >
   
      <div
        class="w-full lg:w-9/12  rounded-xl flex relative flex-wrap"
        style="height:90vh"
      >

      <div class="w-full">
            
              <div class="w-full bg-theme_primary p-4 rounded-xl text-xs" style="height:100%">
                    <b class="w-full text-lg text-center font-bold">Coming Soon Fitur</b>
                Video / Audio 
              </div>
        </div>
       
      </div>
      <div
        class="w-full lg:w-3/12  rounded-xl hidden lg:flex relative flex-wrap px-2"
      >
        

         <div class="w-full bg-theme_primary p-4 rounded-xl text-xs" style="height:83vh">
          Pesan
        </div>
          <div class="w-full flex justify-center">
            
            <input
              height="10vh"
                maxlength="255"
                v-model="text"
                placeholder="Katakan sesuatu ..."
                class="bg-theme_primary w-11/12 text-xs rounded-xl absolute border border-theme_primary_light bottom-0 p-3  px-5 z-50"
              />

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
  layout: "no-menu",
  middleware: "auth",
  data() {
    return {
      text: "",
      quest: "",
      search: "",
      balas_quest: "",
      page: 1
    };
  },
  mounted() {},
  methods: {
    loadMoregetData($state) {
      this.page = this.page + 1;
      this.$axios
        .$get("/quest/home?search=" + this.search + "&page=" + this.page)
        .then(res => {
          if (res.total > 0) {
            this.lastPage = false;
            this.quest = this.quest.concat(res.data);

            this.$store.commit("setDataQuestFollowing", {
              data: this.quest,
              page: this.page
            });

            $state.loaded();
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
    getData() {
      this.lastPage = false;
      this.page = 1;
      this.$axios
        .$get("/quest/home?search=" + this.search + "&page=" + this.page)
        .then(res => {
          this.quest = res.data;

          this.$store.commit("setDataQuestFollowing", {
            data: this.quest,
            page: this.page
          });

          if (this.quest.length == 0) {
            this.$router.push("feed-explore");
          }
        });
    }
  }
};
</script>
