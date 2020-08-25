<template>
  <div class="w-full" v-if="group">


    <section>
      <div class="w-full flex flex-wrap bg-theme_primary p-2 pt-6 rounded-xl ">
        <div class="w-full font-bold flex px-2 ">
          <img
            class="w-16 h-16  rounded-full"
            :src="group.avatar"
            :alt="group.name"
          />

          <div class="w-full pl-5 mt-1 flex flex-wrap items-start ">
            <div class="w-full text-xl lg:text-2xl mb-2">
              {{ group.name }}
              <br />
              <small>#{{ group.username }}</small>
            </div>
          </div>
        </div>
      </div>
    </section>



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



    </div>



    
      

    <btn-create :link="`/new/quest/${group.username}`" name="Buat Quest" />

    <section class="w-full rounded-xl pb-20 ">
      <card-post v-for="quest in quest.data" :key="quest.id" :data="quest" />
    </section>
  </div>
</template>

<script>
export default {
  layout: "app",
  middleware: "auth",
  data() {
    return {
      filterClassActive: "cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",
      filterClass: "cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",
      group: "",
      quest: "",
      search: "",
      filter: "Quest Only"
    };
  },
  fetch() {
    this.$axios.$get("/group/" + this.$route.params.username).then(data => {
      this.group = data;
      this.getData()
    });
  },
  methods:{
    getData(){
      this.$axios.$get("/quest/" + this.group.id+"?filter="+this.filter).then(data => {
        console.log(data)
        this.quest = data;
      });
    }
  }
};
</script>
