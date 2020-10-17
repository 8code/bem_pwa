<template>
  <div class="w-full" >
    <subheader name="groups" />

    <section class="w-full rounded-xl pb-20">
      <div class="p-2">
        <input
          type="text"
          class="w-full py-2 px-5 rounded-full bg-theme_primary_dark"
          placeholder="Ketikan Nama Group"
          v-model="filter.search"
          @keyup.enter="getData"

        />
      </div>
      <div class="p-2 flex flex-row" style="overflow-x:scroll">
      
       <div
          :class="(filter.type) ? className : classNameActive"
          @click="filterData('')"
        >
          <div
            class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"
          ></div>
           Populer
        </div>

        <div
          v-for="type in data.type" :key="type"
          :class="(filter.type == type) ? classNameActive : className"
          @click="filterData(type)"
        >
          <div
            class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"
          ></div>
           {{ type }}
        </div>
      </div>

   
      <card-group
       
        v-for="group in data.data"
        :key="group.id"
        :group="group"
        follow="true"
      />
            <infinite-loading @infinite="loadMoregetData">

              <div slot="no-more" class="text-center flex w-full p-4"></div>
              <div slot="no-results"></div>

          </infinite-loading>

    </section>
  </div>
</template>

<script>

import InfiniteLoading from 'vue-infinite-loading';

export default {
   components: {
    InfiniteLoading,
  },
  layout: "no-header",
  middleware: "auth",
  data() {
    return {
      className: 'cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2',
      classNameActive: "cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",
      data: "",
      filter:{
        type: '',
        search: '',
        page: 1
      },
      loadMore: false,
      lastPage: false
    };
  },
  created() {
    this.getData()
  },
  methods: {
    getData(){
        this.$axios.$get("/group?type="+this.filter.type+"&search="+this.filter.search+"&page="+this.filter.page).then(res => {
          this.data = res
        });
    },
    loadMoregetData($state){

      
        this.filter.page = this.filter.page+1
        this.$axios.$get("/group?type="+this.filter.type+"&search="+this.filter.search+"&page="+this.filter.page)
        .then(res => {
          if(res.total){
               $state.loaded()
               this.data.data = this.data.data.concat(res.data)
          }else{
            $state.complete()
          
          }
         
        });
    },
    filterData(to){
      this.filter.type = to
      this.filter.page = 1
      this.getData()
    },
    to(directions) {
      if (directions == "right") {
        this.$router.push("/groups");
      }
    },
    
  }
};
</script>
