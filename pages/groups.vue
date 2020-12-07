<template>
<div class="w-full min-h-screen" v-touch:swipe="swipeHandler">
        <subheader name="groups" />


        
        <section  class="w-full py-2 rounded-xl bg-theme_primary flex flex-wrap text-center" style="position: sticky;top:45px;z-index:10005">
         
            <a class="w-1/4 text-xs p-2 text-white " target="_BLANK" href="https://login.unsil.ac.id">
                <svg width="3em" height="3em" viewBox="0 0 16 16" class="mx-auto  bg-info p-2 rounded-full bi bi-wifi" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.385 6.115a.485.485 0 0 0-.048-.736A12.443 12.443 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.717 2.164.204.148.489.13.668-.049z"/>
                    <path d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.472 6.472 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .708 0l.707-.707z"/>
                    </svg>
            <span class="text-info">Wifi</span>
            
            </a>
            <a class="w-1/4 text-xs p-2 text-white" target="_BLANK" href="https://simak.unsil.ac.id">
            <svg width="3em" height="3em" viewBox="0 0 16 16" class="mx-auto bg-teal-500 p-2 rounded-full  bi bi-card-heading" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path fill-rule="evenodd" d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"/>
</svg>

           <span class="text-teal-500"> SIMAK</span>
            </a>
            <a class="w-1/4 text-xs p-2" target="_BLANK" href="https://journal.unsil.ac.id">
            <svg width="3em" height="3em" viewBox="0 0 16 16" class="mx-auto bg-indigo-500 text-white p-2 rounded-full bi bi-journals" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2z"/>
  <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2zM1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg>
           <span class="text-indigo-500"> Journal </span></a>
            <a class="w-1/4 text-xs p-2 " target="_BLANK" href="http://digilib.unsil.ac.id">
            <svg width="3em" height="3em" viewBox="0 0 16 16" class="mx-auto bg-yellow-500 text-white p-2 rounded-full bi bi-book" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg>
           <span class="text-yellow-500"> Digilib </span>
            </a>
            <a class="w-1/4 text-xs p-2 " target="_BLANK" href="https://simkkn.unsil.ac.id">
            <svg width="3em" height="3em" viewBox="0 0 16 16" class="mx-auto p-2  rounded-full bg-blue-500 text-white bi bi-people" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
</svg>
           <span class="text-blue-500">SimKKN</span> 
            </a>
            <a class="w-1/4 text-xs p-2" target="_BLANK" href="https://tracer.unsil.ac.id">
            
            <svg width="3em" height="3em" viewBox="0 0 16 16" class="mx-auto text-white rounded-full  bg-green-500 p-2 bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg>
           <span class=" text-green-500">Tracer</span> 
            </a>
             <a class="w-1/4 text-xs p-2" target="_BLANK" href="https://unsil.ac.id/berita.html">
            
       
<svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-newspaper p-2 rounded-full bg-purple-500 text-white mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
</svg>
           <span class=" text-purple-500">Berita</span> 
            </a>
             <div @click="showModal = true" class="w-1/4 text-xs p-2 flex flex-wrap  items-start" >
            
          <span class="mx-auto bg-primary rounded-full"> <img src="/logo.png" class="w-8 h-8" alt="Logo Aplikasi Maba"> </span>
          
           <span class=" text-primary w-full">MabApp?</span> 
            </div>
        </section>
        <section class="w-full rounded-xl pb-20">
                <card-group v-for="group in listGroup" :key="group.id" :group="group" 
                totalFollower="true"
                />
        </section>
        <btn-create link="/new/group" name="Buat Group"
          />


    <modal-aboutme @hide="showModal = false" v-if="showModal" />

</div>
        
</template>

<script>
import modalAboutme from '../components/modal-aboutme.vue'
export default {
  components: { modalAboutme },
    layout: 'no-header',
    middleware: 'auth',
    data(){
        return{
            listGroup: '',
            showModal: false
        }
    },
    created(){
        this.$axios.$get("/mygroup")
            .then(res => {
                this.listGroup = this.sortByKey(Object.values(res),"last_active").reverse()

                if(this.listGroup.length == 0){
                    this.$router.push(this.localePath("/groups-explore"))
                }
            })
    },
    methods:{
         swipeHandler(direction){
                if(direction =='right'){
                this.$router.push('/feed')
                }else if(direction =='left'){
                this.$router.push('/groups-explore')
                }
            },
       sortByKey(array, key) {
                return array.sort(function(a, b) {
                    var x = a[key]; var y = b[key];
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                });
            },
        to(directions){
            if(directions == 'left'){
                this.$router.push(this.localePath('/groups-explore'))
            }
        }
    }
}
</script>

