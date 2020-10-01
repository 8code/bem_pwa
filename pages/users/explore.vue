<template>
  <div class="w-full" >

    <section class="w-full rounded-xl pb-20">
      <div class="p-2">
        <input
          type="text"
          class="w-full py-2 px-5 rounded-full bg-theme_primary_dark"
          placeholder="Ketikan Nama User (Mahasiswa) "
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
           Semua
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

   
      <card-user
       
        v-for="user in data.data"
        :key="user.id"
        :data="user"
      />
      <span v-if="loadMore" class="p-4 text-center w-full flex flex-wrap">
        Memuat ...
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
   mounted() {

        var that = this;
        window.addEventListener("scroll", function() {
        
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

            if(bottomOfWindow){
                if(!that.lastPage){
                    that.loadMoregetData()
                }else{
                    that.loadMore = false
                  }
             
            }
        });
      },
  methods: {
    getData(){
        this.$axios.$get("/users?type="+this.filter.type+"&search="+this.filter.search+"&page="+this.filter.page).then(res => {
          this.data = res
        });
    },
    loadMoregetData(){
      this.lastPage = true

        this.loadMore = true
      
        this.filter.page = this.filter.page+1
        this.$axios.$get("/users?type="+this.filter.type+"&search="+this.filter.search+"&page="+this.filter.page)
        .then(res => {
          console.log(res.data);
          if(res.data){
            this.lastPage = false
               this.data.data = this.data.data.concat(res.data)
          }else{
            this.lastPage = true
          }

          this.loadMore = false
         
        });
    },
    filterData(to){
      this.filter.type = to
      this.filter.page = 1
      this.getData()
    },
    
  }
};
</script>
