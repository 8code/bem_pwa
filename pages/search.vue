<template>
    <div class="pb-20">
    
       <div class="p-2">
        <input
          type="text"
          class="w-full py-2 px-5 rounded-full bg-theme_primary_dark"
          placeholder="Ketikan Sesuatu"
          v-model="filter.search"
          @keyup.enter="getData"

          ref="keyword"

        />
        
<div v-if="filter.search">
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

          

      <div v-if="filter.search">
      <section class="w-full rounded-xl pb-20 flex flex-wrap"  v-if="filter.type == 'Quest'" >
        <card-post v-for="q in quest" :key="q.id" :data="q" />
          <infinite-loading  @infinite="loadMoregetData">

              <div slot="no-more" class="text-center flex w-full p-4"> ... </div>

          </infinite-loading>
      </section>

        <section class="w-full rounded-xl pb-20 flex flex-wrap"  v-if="filter.type == 'Group'" >

        <card-group v-for="g in group" :key="g.id" :group="g" follow="true" />
         <infinite-loading  @infinite="loadMoregetData">

              <div slot="no-more" class="text-center flex w-full p-4"> ... </div>

          </infinite-loading>
      </section>

        <section class="w-full rounded-xl pb-20 flex flex-wrap"  v-if="filter.type == 'User'" >
        <card-user v-for="q in user" :key="q.id" :data="q" />
        <infinite-loading  @infinite="loadMoregetData">

              <div slot="no-more" class="text-center flex w-full p-4"> ... </div>

          </infinite-loading>
      </section>

      </div>


</div>
<div v-else>



      <ul class="p-2">
        <li class="bg-theme_primary_dark my-2 rounded-xl p-3">
          <span class="p-2 text-theme_secondary">Tagar Populer</span>
          <div class="p-2 text-primary font-bold text-xl" v-for="(tagar,index) in tagarPopuler" :key="tagar.tagar">
            {{index+1}}. 
            <nuxt-link :to="'/search?keyword='+(tagar.tagar).substring(1)">
            {{ tagar.tagar}}
             </nuxt-link>
            ({{tagar.total}})
          </div>
        </li>
        <li class="bg-theme_primary_dark my-2 rounded-xl py-3">
          <span class="p-2 text-theme_secondary">Group Populer</span>
           
            <card-group v-for="g in groupPopuler" :key="g.id" :group="g" follow="true" />
          <nuxt-link to="/groups/explore" class="p-2 text-primary flex font-bold text-sm">
            Lihat Group Lainnya
          </nuxt-link>
        </li>
         <li class="bg-theme_primary_dark my-2 rounded-xl py-3">
              <span class="p-2 text-theme_secondary">User Populer</span>
              
                <card-user v-for="q in userPopuler" :key="q.id" :data="q.user" />

                <nuxt-link to="/users/explore" class="p-2 text-primary flex font-bold text-sm">
                  Lihat User Lainnya
                </nuxt-link>
            </li>
          </ul>
    </div>

      </div>
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
            quest: '',
            group: '',
            user: '',
            last_page: false,
             tagarPopuler: '',
            groupPopuler: '',
            userPopuler: '',
         }
     },
     watch:{
         $route (to, from){
              if(this.$route.query.keyword){
                this.filter.search = this.$route.query.keyword
                this.getData()
              }
        }
     },
     mounted(){

      if(this.$route.query.keyword){
         this.filter.search = this.$route.query.keyword
         this.getData()
       }else{
           this.getTagarPopuler()
          this.getGroupPopuler()
          this.getUserPopuler()
       }

     },
     methods:{
           getTagarPopuler(){
      this.$axios.get("/tagar-populer")
        .then(res => {
          this.tagarPopuler = res.data
        })
    },
    getGroupPopuler(){
      this.$axios.get("/group-populer")
        .then(res => {
          this.groupPopuler = res.data
        })
    },
    getUserPopuler(){
      this.$axios.get("/user-populer")
        .then(res => {
          this.userPopuler = res.data
        })
    },
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
          loadMoregetData($state){
              this.filter.page = this.filter.page+1
               if(this.filter.type == 'Quest'){
                  this.$axios.get("/search/quest/"+this.filter.search+"?page="+this.filter.page)
                    .then(res => {
                      if(res.data.total > 0){
                        $state.loaded()
                          this.quest = Object.values(this.quest).concat(Object.values(res.data.data))
                      }else{
                        $state.complete()
                      }
                      
                    })
                }else if(this.filter.type == 'Group'){
                      this.$axios.get("/search/group/"+this.filter.search+"?page="+this.filter.page)
                          .then(res => {
                            if(res.data.total > 0){
                               $state.loaded()
                                this.group = Object.values(this.group).concat(Object.values(res.data.data))
                            }else{
                               $state.complete()
                            }
                            
                          })
                 }else if(this.filter.type == 'User'){
                      this.$axios.get("/search/user/"+this.filter.search+"?page="+this.filter.page)
                            .then(res => {
                              if(Object.values(res.data).length > 0){
                                 $state.loaded()
                                  this.user = Object.values(this.user).concat(Object.values(res.data))
                              }else{
                                  $state.complete()
                              }
                            })
                 }


          },
     }
}
</script>