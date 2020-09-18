<template>
    <div>
    
       <div class="p-4">
        <input
          type="text"
          class="w-full py-2 px-5 rounded-full bg-theme_primary_dark"
          placeholder="Ketikan Sesuatu"
          v-model="filter.search"
          @keyup.enter="getData"

          ref="keyword"

        />

  <div class="py-3 flex flex-row" style="overflow-x:scroll">
    
      <div @click="filter.type = 'Quest';getData()"
          :class="(filter.type == 'Quest') ? classNameActive : className"
          >
            <div class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"></div>
        Quest
      </div>

        <div
          @click="filter.type = 'Group';getData()"
          :class="(filter.type == 'Group') ? classNameActive : className"
          >
            <div class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"></div>
        Group
      </div>

        <div
            @click="filter.type = 'User';getData()"
            :class="(filter.type == 'User') ? classNameActive : className"
            >
              <div class="-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"></div>
          Pengguna
        </div>


        </div>

          
      <section class="w-full rounded-xl pb-20 flex flex-wrap"  v-if="filter.type == 'Quest'" >
        <card-post v-for="q in quest" :key="q.id" :data="q" />
        <span v-if="loadMore" class="p-4 text-center w-full">
          Memuat ...
        </span>
      </section>

        <section class="w-full rounded-xl pb-20 flex flex-wrap"  v-if="filter.type == 'Group'" >

        <card-group v-for="g in group" :key="g.id" :group="g" follow="true" />
        <span v-if="loadMore" class="p-4 text-center w-full">
          Memuat ...
        </span>
      </section>

        <section class="w-full rounded-xl pb-20 flex flex-wrap"  v-if="filter.type == 'User'" >
        <card-user v-for="q in user" :key="q.id" :data="q" />
        <span v-if="loadMore" class="p-4 text-center w-full">
          Memuat ...
        </span>
      </section>


      </div>
    </div>
</template>
<script>
export default {
     layout: "no-header",
     middleware: "auth",
     data(){
         return {
            className: 'cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2',
            classNameActive: "cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",
            data: "",
            type: '',
            filter:{
                type: 'Quest',
                search: '',
                page: 1
            },
            loadMore: false,
            quest: '',
            group: '',
            user: '',
            last_page: false
         }
     },
     created(){

      //  console.log(this.$route.query)
      

       if(this.$route.query.keyword){
         this.filter.search = this.$route.query.keyword
         this.getData()
       }else{
          this.$nextTick(() =>  this.$refs.keyword.focus())
       }

       
      
     },
     mounted(){
        var that = this;
        window.addEventListener("scroll", function() {
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            if(bottomOfWindow){
              if(!that.last_page){
                that.loadMoregetData()
              }else{
                that.loadMore = false
              }
            }
        });
     },
     methods:{
         getData(){
          this.last_page = false
           if(this.filter.type == 'Quest'){
            this.$axios.get("/search/quest/"+this.filter.search+"?page="+this.filter.page)
              .then(res => {
                this.quest = res.data.data
                // console.log(res.data)
              })
           }else if(this.filter.type == 'Group'){
              this.$axios.get("/search/group/"+this.filter.search+"?page="+this.filter.page)
              .then(res => {
                this.group = res.data.data
                console.log(res.data.data)
              })
           }else if(this.filter.type == 'User'){
              this.$axios.get("/search/user/"+this.filter.search+"?page="+this.filter.page)
              .then(res => {
                this.user = res.data
              })
           }
         },
          loadMoregetData(){
              this.loadMore = true
              this.filter.page = this.filter.page+1

               if(this.filter.type == 'Quest'){
                  this.$axios.get("/search/quest/"+this.filter.search+"?page="+this.filter.page)
                    .then(res => {
                      if(res.data.total > 0){
                          this.quest = Object.values(this.quest).concat(Object.values(res.data.data))
                      }else{
                        this.last_page = true
                      }
                      this.loadMore = false
                      
                    })
                }else if(this.filter.type == 'Group'){
                      this.$axios.get("/search/group/"+this.filter.search+"?page="+this.filter.page)
                          .then(res => {
                            if(res.data.total > 0){
                                this.group = Object.values(this.group).concat(Object.values(res.data.data))
                            }else{
                              this.last_page = true
                            }
                            this.loadMore = false
                            
                          })
                 }else if(this.filter.type == 'User'){
                      this.$axios.get("/search/user/"+this.filter.search+"?page="+this.filter.page)
                            .then(res => {
                              if(Object.values(res.data).length > 0){
                                  this.user = Object.values(this.user).concat(Object.values(res.data))
                              }else{
                                this.last_page = true
                              }
                              this.loadMore = false
                            })
                 }


          },
     }
}
</script>