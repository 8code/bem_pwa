<template>

  <div class="w-full p-4">
      <section class="w-full flex flex-wrap">
            <div class="w-full flex p-2">
              <label>Quest untuk {{ group.name }}</label>
              <div class="ml-auto">
                Record Suara
              </div>
            </div>
                              
            <textarea placeholder="Katakan Sesuatu" class="mx-2 mt-5 p-3 bg-theme_primary w-full rounded-lg"></textarea>
        
             <div class="flex w-full justify-center items-center py-4">
                    <record class="flex" />
             </div>
              
            <button class="py-2 w-full rounded-lg mt-2 bg-theme_primary mx-2">
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
        }
    },
    fetch() {
      this.$axios.$get("/group/" + this.$route.params.to).then(data => {
        this.group = data;
      });
    }
    ,
    methods:{
    
    }
}

</script>