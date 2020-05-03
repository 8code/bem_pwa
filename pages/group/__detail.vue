<template>
   <div class="flex flex-wrap">
     <div class="w-full text-center lg:text-left">
          <div class="card w-full flex p-3 flex-wrap">
              <div class="w-1/2 mx-auto lg:w-1/4">
                <img  class="rounded-full" style="width:250px"  src="/icon.png" alt="Logo">
              </div>
            <h1 class="w-full lg:w-3/4  p-3 flex flex-wrap">
             <b class="w-full nama p-2">Nama Group</b> 
                 

             <div class="w-full lg:text-right lg:-mt-16">
                    <b class="w-full  lg:w-1/3 my-3 rounded-full p-2 px-10">
                        <i class="fa fa-heart"></i>
                        1000 Member
                    </b>
                    <button class="w-full lg:w-1/4 my-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full p-2 px-10">
                        Gabung
                        <i class="fa fa-plus ml-1"></i>
                    </button>
              </div>
              <span class="w-full p-2 relative">
                <div class="w-full float-left">
                            Deskripsi : <br />
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga praesentium earum officiis est saepe magnam, voluptate dolorum dolor amet sunt impedit? Cupiditate eveniet delectus explicabo, nesciunt quia magnam dolore consectetur!
                            </p> 
                </div>
            </span>
            </h1>


            
          </div>
     </div>

        <div class="w-full flex flex-wrap mt-2">

          

          <div class="mb-2 w-full lg:w-1/2">
             
            
              <!-- Post Timeline -->
              <div class="w-full card p-4 mb-3">
                <h1 class="w-full text-center mb-5">
                  Timeline
                  <hr class="mx-auto w-1/6 rounded-full mb-2" />
                </h1>

                <label class="w-full block" for="text">
                 <span class="float-left">
                   Posting
                 </span>
                  
                <i class="fa fa-camera float-right px-5"></i>
                </label>
                <input type="text" class="rounded-full w-full form-input p-3 px-5 mt-2"
                placeholder="Posting Timeline Baru"
                >
              </div>
            
              <!-- Post Timeline -->
                  <!-- Timeline -->
                 
                      <div class=" w-full mb-2" v-for="i in 5" :key="i"  @click="detailtimeLine(i)">

                          <div class="card w-full flex p-3 flex-wrap">
                            <div class="w-full flex flex-wrap time-line-user">
                                <div class="w-1/6 lg:p-2">
                                  <img class="logo w-full" style="width:70px" src="/icon.png" alt="Logo">
                                </div>
                                <h1 class="w-5/6 lg:p-2 px-3">
                                <h2 style="font-size:24px"> Ari Bahtiar</h2>
                                <b>@Username</b>
                                </h1>
                            </div>
                          
                            
                            <div class="w-full p-2 relative">
                             
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, est? Unde reiciendis doloribus ipsa fugit ducimus doloremque maxime?..
                             
                             <div class="rounded-full timeline-image-preview mt-2" style="background-image:url('/icon.png');" >
                              </div>
                            </div>
                            <div class="w-full p-3">
                              <small class="label-detail p-1 px-4">
                              
                                <i class="fa fa-eye mr-1"></i>
                                1000 View
                              </small>
                            </div>
                          </div>
                          </div>

                         <button class="text-center w-full p-3">
                          <i class="fa fa-sync px-1"></i>
                          Loading
                        </button>
                  <!-- END Timeline -->


                   <!-- Timeline Active -->
                  <div class="modal timeline " v-if="timeLineActive">
                    
                      <div @click="timeLineActive = false" 
                      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                
                    <div class="modal-content w-full lg:w-11/12 lg:mt-8 mx-auto rounded-full" style="z-index:1000">
                      
                      

                      <div class=" w-full">
                          <div class="card w-full flex lg:p-3 flex-wrap timeline-item pt-3">

                            <i  @click="timeLineActive = false" 
                                class="cursor-pointer fas fa-arrow-left text-gray-700 p-2 mt-5 bg-gray-300 rounded-full close-time-line-btn "></i>
                      
                            <div class="w-full lg:w-1/2 p-4">
                              <div class="time-line-user -ml-3 flex flex-wrap">
                                  <div class="w-1/6 lg:p-2">
                                    <img class="rounded-full -mt-2" style="width:100px" src="/icon.png" alt="Logo">
                                  </div>
                                  <h1 class="w-5/6 px-3">
                                    <h2 style="font-size:24px"> Ari Bahtiar</h2>
                                    <b>@Username</b>
                                </h1>
                                </div>
                               <div class="w-full">
                                  <small class="w-full relative">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, est? Unde reiciendis doloribus ipsa fugit ducimus doloremque maxime?..
                                  </small>
                                  <img class="w-full rounded-full py-2 max-w-md" src="/icon.png" alt="Content">
                               </div>
                            </div>

                       
                            <div class="w-full lg:w-1/2 p-3 flex flex-wrap">

                              <div class="w-full p-3 flex flex-wrap">
                                <button class="w-1/3 text-yellow-600 px-4 py-1">
                                  <i class="fa fa-eye mr-1"></i>
                                  1000 Like
                                </button>
                                <button class="w-1/3 text-yellow-600 px-4 py-1">
                                  <i class="fa fa-eye mr-1"></i>
                                  1000 Comment
                                </button>
                                <button class="w-1/3 text-yellow-600 px-4 py-1">
                                  <i class="fa fa-eye mr-1"></i>
                                  1000 View
                                </button>
                                  
                              </div>
                                        <div class="bg-primary rounded-full p-5 px-3">

                                              <div class="w-full flex flex-wrap p-1" v-for="i in 1" :key="i" >

                                                    
                                                    <h1 class="w-5/6 lg:p-2 px-3 block">
                                                      <img class="rounded-full float-left" style="width:30px" src="/icon.png" alt="Logo">
                                                      <b class="px-3 text-yellow-600 float-left">Ari Bahtiar</b>
                                                    </h1>
                                                      
                                                    <div class="w-full pl-3">
                                                        <b class="text-yellow-600">@Username</b> 
                                                        Lorem ipsum, dsdassssssssssssssssssaaaaa adas olor sit amet consectetur adipisicing elit. Alias, est? Unde reiciendis doloribus ipsa fugit ducimus doloremque maxime?..
                                                    
                                                  </div>
                                                    <div class="block w-full text-right">
                                                        <small class="cursor-pointer mx-4 bg-yellow-400 p-1 px-4 rounded-full text-gray-700">
                                                          <i class="fa fa-arrow-down"></i> Balas
                                                      </small>
                                                    </div>
                                                  

                                              </div>

                                            <button class="text-center w-full">
                                              <i class="fa fa-sync px-1"></i>
                                              Loading
                                            </button>
                                    </div>


                              <div class="w-full mt-3" style="height:200px">
                                 
                                <label class="w-full block" for="text">
                                  <span class="float-left px-3">
                                    Komentar
                                  </span>
                                    
                                  <i class="fa fa-camera float-right px-5"></i>
                                  </label>
                                  <input type="text" class="rounded-full w-full form-input p-3 px-5 mt-2"
                                  placeholder="Tambah Komentar Baru"
                                  >
                               </div>    
                              


                            </div>
                          </div>
                    </div>
                  </div>

                </div>
                  <!-- END Timeline -->

            </div>

             <div class="lg:p-3 mb-2 w-full lg:w-1/2 ">
              <div class="card p-3 px-5 review">
                <h1 class="w-full text-center">
                  Diskusi
                  <hr class="mx-auto w-1/6 rounded-full mb-2" />
                </h1>

                      <!--  Review -->
                    <div class="rounded-full p-2 w-full">
                      <div class="card w-full mb-2" v-for="i in 3" :key="i" >
                          <div class="w-full flex p-1 lg:px-3 flex-wrap">
                            <div class="w-full flex flex-wrap time-line-user">
                                <div class="w-1/6 lg:px-5">
                                  <img class="rounded-full" style="width:30px"   src="/icon.png" alt="Logo">
                                </div>
                                <h1 class="w-5/6 lg:p-2 px-3">
                                <b class="-ml-4">@Username</b>
                                </h1>
                            </div>
                            <small class="w-full px-5 relative">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, est? Unde reiciendis doloribus ipsa fugit ducimus doloremque maxime?..
                            </small>
                            <div class="w-full px-3 pt-6">
                              <small class="label-detail p-1 px-4"  @click="detailDiskusi(i)">
                                <i class="fa fa-arrow-down mr-1"></i>
                                1000 Balasan
                              </small>
                            </div>
                          </div>
                          </div>

                         <button class="text-center w-full p-3">
                          <i class="fa fa-sync px-1"></i>
                          Loading
                        </button>

                    </div>
                  <!-- END Review -->




                </div>
            </div>
        
           
        </div>

     


                      <!-- Review Active -->
                <div v-if="diskusiActive" class="modal timeline">
                        <div  @click="diskusiActive = false"  class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                        
                        <div class="modal-container bg-primary w-11/12 md:max-w-md mx-auto rounded-full shadow-lg z-50 overflow-y-auto">

                        <!-- Add margin if you want to see some of the overlay behind the modal-->
                        <div class="modal-content">
                      
                      

                      <div class=" w-full">
                          <div class="card w-full flex p-3 flex-wrap timeline-item">

                            <i  @click="diskusiActive = false" 
                              class="cursor-pointer fas fa-times text-gray-700 p-2 px-3 bg-gray-300 rounded-full close-time-line-btn " style="z-index:1002"></i>
                      
                              
                              
                            <div class="w-full -ml-3 flex flex-wrap text-center px-3 lg:pt-3" style="position:absolute;top:12px;">
                                <h2 class="w-full" style="font-size:24px">Balasan :</h2>
                              
                                <small class="w-full px-4 relative">
                                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, est? Unde reiciendis doloribus ipsa fugit ducimus doloremque maxime?..
                                </small>
                            </div>

                            <div class="bg-primary rounded-full p-1 px-3 kolom-diskusi">

                                    <div class="w-full flex flex-wrap p-1" v-for="i in 1" :key="i" >

                                          <div class="w-1/6 pr-6 lg:pt-2">
                                            <img class="rounded-full" style="width:30px" src="/icon.png" alt="Logo">
                                          </div>
                                          <h1 class="w-5/6 lg:p-2 px-3">
                                            <b class="-ml-8 text-yellow-600">Ari Bahtiar</b>
                                          </h1>
                                            
                                          <div class="w-full pl-3">
                                              <b class="text-yellow-600">@Username</b> 
                                              Lorem ipsum, dsdassssssssssssssssssaaaaa adas olor sit amet consectetur adipisicing elit. Alias, est? Unde reiciendis doloribus ipsa fugit ducimus doloremque maxime?..
                                          
                                        </div>
                                          <div class="block w-full text-right">
                                               <small class="cursor-pointer mx-4 bg-yellow-400 p-1 px-4 rounded-full text-gray-700">
                                                <i class="fa fa-arrow-down"></i> Balas
                                            </small>
                                          </div>
                                         

                                    </div>

                                  <button class="text-center w-full">
                                    <i class="fa fa-sync px-1"></i>
                                    Loading
                                  </button>
                          </div>

                          </div>
                    </div>
                  </div>
                </div>
                </div>
                  <!-- END Review -->

   </div>
</template>
<style scoped>
.review{
  position: sticky;
  top: 60px;
}

.timeline .timeline-item{
  position: relative;
  height: 93vh;
}
.timeline .close-time-line-btn{
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 60;
}
.timeline .time-line-user{
  padding-left: 100px;
}
.timeline-image-preview{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 150px;
  width: 100%;
  opacity: .7;
}
.kolom-diskusi{
  margin-top:120px;
  overflow-y:scroll;
  height:70vh;
  z-index: 1002;
  padding-bottom: 50px;
}
.kolom-diskusi::-webkit-scrollbar{
  display: none;
}
</style>
<script>
export default {
  middleware: ['auth'],
  methods:{
    detailtimeLine(id){
      this.timeLineActive = true
    },
     detailDiskusi(id){
      this.diskusiActive = true
    },
    likePost(){}
  },
  data(){
    return{
      timeLineActive: '',
      diskusiActive: ''
    }
  }
}
</script>