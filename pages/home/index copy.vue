<template>
  <div class="w-full">

        <subheader name="home" />


      <balas-quest v-if="balas_quest" v-on:kirim="newQuest" v-on:batal="balas_quest = false" :quest="balas_quest" />



    <div class="p-2 flex flex-row mt-2" style="overflow-x:scroll">




     <div
        :class="(filter == 'Quest Only') ? filterClassActive : filterClass"
        @click="filter = 'Quest Only';getData()"
      >
        <div
          class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"
        ></div>
          Quest Saja
      </div>

      
     <div
        :class="(filter == 'Quest & Balasan') ? filterClassActive : filterClass"
        @click="filter = 'Quest & Balasan';getData()"

      >
        <div
          class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"
        ></div>
          Quest & Balasan
      </div>


      <div
        :class="(filter == 'Media') ? filterClassActive : filterClass"
        @click="filter = 'Media';getData()"

      >
      
      <div
          class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"
        ></div>
          Media
      </div>

    </div>


    <section class="w-full rounded-xl pb-20 flex flex-wrap">
      <card-post v-on:balas="balasQuest" v-for="quest in quest.data" :key="quest.id" :data="quest" />

      <span v-if="loadMore" class="p-4 text-center w-full">
        Load More ...
      </span>

    </section>
  </div>
</template>

<script>
export default {
  layout: "no-header",
  middleware: "auth",
  data() {
    return {
      filterClassActive: "cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",
      filterClass: "cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",
     
      quest: "",
      search: "",
      filter: "Quest & Balasan",
      balas_quest: '',
      page: 1,
      loadMore: false
    };
  },
  fetch(){
      this.getData()
  },
    mounted() {

      var that = this;
      window.addEventListener("scroll", function() {
      
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

          if(bottomOfWindow){
            that.loadMoregetData()
          }
      });
    },
  methods:{
    loadMoregetData(){
        this.loadMore = true
        this.page = this.page+1
        this.$axios.$get("/quest/home?filter="+this.filter+"&search="+this.search+"&page="+this.page)
        .then(res => {
          if(res.data){
               this.quest.data = this.quest.data.concat(res.data)
          }else{
            this.page = this.page-1
          }
          this.loadMore = false
        });
    },
    newQuest(){
      this.balas_quest = ""
      this.getData()
    },
    balasQuest(data){
        this.balas_quest = data
    },
    getData(){
      this.$axios.$get("/quest/home?filter="+this.filter+"&search="+this.search+"&page="+this.page).then(data => {
        console.log(data)
        this.quest = data;
        this.page = 1 
      });
    }
  }
};
</script>
