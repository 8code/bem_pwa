<template>

  <div class="w-full p-4">
      <section class="w-full flex flex-wrap">
            <div class="w-full flex p-2">
              <label>Quest untuk <b>{{ group.name }}</b></label>
            </div>
                              
            <textarea @keyup.enter="kirim" v-model="text" placeholder="Tanyakan Sesuatu ..." class="mx-2 mt-5 p-3 bg-theme_primary w-full rounded-lg"></textarea>
              
            <button @click="kirim" class="py-2 w-full rounded-lg mt-2 bg-primary text-white mx-2">
              Kirim
            </button>
      </section>
  </div>
        
</template>


<script>
export default {
   scrollToTop: true,
   layout: 'app',
   middleware: 'auth',
    data(){
      return {
        group: '',
        text: ''
      }
    },
    fetch() {
      this.$axios.$get("/group/" + this.$route.params.to).then(data => {
        this.group = data;
      });
    }
    ,
    methods:{
      kirim(){
        this.$axios.$post("/quest",{
          group_id: this.group.id,
          text: this.text,
          audio: '',
          quest_id: '',
        }).then(res => {
          this.$router.push("/"+this.group.username)
        })
      }
    }
}

</script>