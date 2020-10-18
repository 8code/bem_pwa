<template>
  <div class="w-full h-screen z-50">
    <div class="flex">
      <button
        @click="$router.back()"
        class="flex p-3 bg-theme_primary_dark mx-2 rounded-full "
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

      <div class="ml-auto flex">
        <button class="flex p-3 bg-theme_primary_dark mx-2 rounded-full  ">
          <svg
            width="1.2em"
            height="1.2em"
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

        <button class="flex p-3 bg-theme_primary_dark mx-2 rounded-full  ">
          <svg
            width="1.2em"
            height="1.2em"
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

        <button class="flex p-3 bg-theme_primary_dark mx-2 rounded-full  ">
          <svg
            width="1.2em"
            height="1.2em"
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
        </button>
      </div>
    </div>

    <section
      class="w-full rounded-xl flex flex-wrap bg-theme_primary_light p-2 mt-2"
    >
      <div class="hidden lg:block w-full lg:w-1/4 pr-2">
        <div class="flex bg-theme_primary rounded-xl p-4 min-h-full">
          <ul class="text-xs w-full">
           
            <li class="flex text-xs p-2 font-semibold cursor-pointer">
              Fitur Aplikasi
            </li>
            <li class="flex p-2 font-semibold cursor-pointer">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-volume-up-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"
                />
                <path
                  d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"
                />
                <path
                  d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"
                />
              </svg>
              <span class="px-2">Live Podcast</span>
            </li>
            <li class="flex p-2 font-semibold cursor-pointer">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-camera-reels"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
              <span class="px-2">Video Conference</span>
            </li>
            <li class="flex px-2 p-1 font-semibold cursor-pointer">
               <input
                maxlength="20"
                placeholder="Cari Nama"
                class="bg-theme_primary_light w-full rounded-lg p-1 px-3"
              />
            </li>
               <li class="flex text-xs px-2 mt-2 font-semibold cursor-pointer">
              20K Aktif
            </li>
             <li class="flex px-2 font-semibold cursor-pointer">
              @nama
            </li>
             <li class="flex px-2 font-semibold cursor-pointer">
              @nama
            </li>
             <li class="flex px-2 font-semibold cursor-pointer">
              @nama
            </li>
           
             <li class="flex text-xs px-2 mt-2 font-semibold cursor-pointer">
              20K Member
            </li>
          </ul>
        </div>
      </div>
      <div
        class="w-full lg:w-3/4  bg-theme_primary_light rounded-xl flex relative flex-wrap"
        style="height:85vh"
      >
        <div class="w-full bg-theme_primary p-4 rounded-xl text-xs" style="height:90%">
          Pesan / Video / Audio
        </div>
        <div class="w-full">
          <input
            maxlength="255"
            v-model="text"
            placeholder="Katakan sesuatu ..."
            class="bg-theme_primary w-full text-xs rounded-xl absolute  bottom-0 p-3 px-5 z-50"
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
  layout: "no-header",
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
