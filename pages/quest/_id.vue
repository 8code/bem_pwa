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
     

          <h1 class="mt-2 px-4 lg:px-2">
            
            {{ $t('reply') }} :</h1>
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


<!-- 
<div
           
  class="cursor-pointer bg-theme_primary_dark text-primary p-3 right-0 rounded-full fixed bottom-0 mr-5 z-30 mb-16 lg:mr-20 flex lg:px-5 "
>
<svg width="1em" height="1em" fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
<g>
	<g>
		<path d="M466.45,49.374c-7.065-8.308-17.368-13.071-28.267-13.071H402.41v-11.19C402.41,11.266,391.143,0,377.297,0H134.705
			c-13.848,0-25.112,11.266-25.112,25.112v11.19H73.816c-10.899,0-21.203,4.764-28.267,13.071
			c-6.992,8.221-10.014,19.019-8.289,29.624c9.4,57.8,45.775,108.863,97.4,136.872c4.717,11.341,10.059,22.083,16.008,32.091
			c19.002,31.975,42.625,54.073,68.627,64.76c2.635,26.644-15.094,51.885-41.794,57.9c-0.057,0.013-0.097,0.033-0.153,0.046
			c-5.211,1.245-9.09,5.921-9.09,11.513v54.363h-21.986c-19.602,0-35.549,15.947-35.549,35.549v28.058
			c0,6.545,5.305,11.85,11.85,11.85H390.56c6.545,0,11.85-5.305,11.85-11.85v-28.058c0-19.602-15.947-35.549-35.549-35.549h-21.988
			V382.18c0-5.603-3.893-10.286-9.118-11.52c-0.049-0.012-0.096-0.028-0.145-0.04c-26.902-6.055-44.664-31.55-41.752-58.394
			c25.548-10.86,48.757-32.761,67.479-64.264c5.949-10.009,11.29-20.752,16.008-32.095c51.622-28.01,87.995-79.072,97.395-136.87
			C476.465,68.392,473.443,57.595,466.45,49.374z M60.652,75.192c-0.616-3.787,0.431-7.504,2.949-10.466
			c2.555-3.004,6.277-4.726,10.214-4.726h35.777v21.802c0,34.186,4.363,67.3,12.632,97.583
			C89.728,153.706,67.354,116.403,60.652,75.192z M366.861,460.243c6.534,0,11.85,5.316,11.85,11.85v16.208H134.422v-16.208
			c0-6.534,5.316-11.85,11.85-11.85H366.861z M321.173,394.03v42.513H191.96V394.03H321.173z M223.037,370.331
			c2.929-3.224,5.607-6.719,8.002-10.46c7.897-12.339,12.042-26.357,12.228-40.674c4.209,0.573,8.457,0.88,12.741,0.88
			c4.661,0,9.279-0.358,13.852-1.036c0.27,19.239,7.758,37.45,20.349,51.289H223.037z M378.709,81.803
			c0,58.379-13.406,113.089-37.747,154.049c-23.192,39.03-53.364,60.525-84.956,60.525c-31.597,0-61.771-21.494-84.966-60.523
			c-24.342-40.961-37.748-95.671-37.748-154.049V25.112c0-0.78,0.634-1.413,1.412-1.413h242.591c0.78,0,1.414,0.634,1.414,1.413
			V81.803z M451.348,75.192c-6.702,41.208-29.074,78.51-61.569,104.191c8.268-30.283,12.631-63.395,12.631-97.58V60.001h35.773
			c3.938,0,7.66,1.723,10.214,4.726C450.915,67.688,451.963,71.405,451.348,75.192z"/>
	</g>
</g>
<g>
	<g>
		<path d="M327.941,121.658c-1.395-4.288-5.103-7.414-9.566-8.064l-35.758-5.196l-15.991-32.402
			c-1.997-4.044-6.116-6.605-10.626-6.605c-4.511,0-8.63,2.561-10.626,6.605l-15.991,32.402l-35.758,5.196
			c-4.464,0.648-8.172,3.775-9.566,8.065c-1.393,4.291-0.231,8.999,2.999,12.148l25.875,25.221l-6.109,35.613
			c-0.763,4.446,1.064,8.938,4.714,11.59c3.648,2.651,8.487,3,12.479,0.902L256,190.32l31.982,16.813
			c1.734,0.911,3.627,1.36,5.512,1.36c2.456,0,4.902-0.763,6.966-2.263c3.65-2.652,5.477-7.144,4.714-11.59l-6.109-35.613
			l25.875-25.221C328.172,130.658,329.334,125.949,327.941,121.658z M278.064,146.405c-2.793,2.722-4.068,6.644-3.408,10.489
			l3.102,18.09l-16.245-8.541c-1.725-0.908-3.62-1.36-5.514-1.36c-1.894,0-3.788,0.454-5.514,1.36l-16.245,8.541l3.102-18.09
			c0.66-3.844-0.615-7.766-3.408-10.489l-13.141-12.81l18.162-2.64c3.859-0.56,7.196-2.985,8.922-6.482l8.123-16.458l8.122,16.458
			c1.727,3.497,5.062,5.921,8.922,6.482l18.162,2.64L278.064,146.405z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

<span class="hidden lg:block px-2 text-xs"> Reword </span>

</div> -->
      
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
          this.$router.push(this.localePath("/msg"))
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
