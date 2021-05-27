<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\qna as MetDa;
use App\qna_follow;
use Auth;
use App\group_follow;
use App\user_follow;
use App\join_event;
use App\notif_quest;
use App\qna;
use App\group;
use App\User;
use App\activity;
use App\event;
use App\channel;
use Storage;
use Ramsey\Uuid\Uuid;


class qnaController extends Controller
{

    public function quest_home(Request $req){
        if(Auth::id()){
                
                    $skip = 0;
                    $take = 8;

                    if($req->page > 1){
                        $skip = $take * ($req->page-1);
                    }

               
                    
                    $following = group_follow::where("user_id",Auth::id())->pluck("group_id")->toArray();
                    $following_user = user_follow::where("user_id",Auth::id())->pluck("followed_id")->toArray();
                    

                    // $filterView = activity::where("user_id",Auth::id())->pluck("quest_id")->toArray();
                    
                    $metda = qna::orderBy("id","DESC")
                        ->where(function($da) use ($following,$following_user) {
                            $da->whereIn("group_id",$following);
                            $da->orWhereIn("user_id",$following_user);
                        })
                        ->where("status",1)
                        ->with("group")
                        ->with("user")
                        ->with("quest")
                        ->where("quest_id",null)
                        ->orderBy("created_at","DESC")
                        ->skip($skip)
                        ->take($take)
                        ->get();



                    $metda->map(function($q) {

                        if($q->quest){

                            $q->membalas_user = User::find($q->quest->user_id)->username;
                        }

                        $follow = qna_follow::
                            where("user_id",Auth::id())
                            ->where("quest_id",$q->id)
                            ->first();

                                
                        $dataAct = [
                            "user_id" => Auth::id(),
                            "quest_id" => $q->id,
                            "tipe" => 0
                        ];

                        
                        $cekView = activity::
                        where("user_id",Auth::id())
                        ->where("quest_id",$q->id)
                        ->where("tipe",0)
                        ->first();

                        if(!$cekView){
                            activity::create($dataAct);

                            
                        }

                        
            // Update View
                        $totalView = activity::where("quest_id",$q->id)->where("tipe",0)->count();
                        
                        $updQuest = qna::find($q->id);
                        $updQuest->view = $totalView;
                        $updQuest->save();
                        
                        $q->view = $totalView;
                            
                        if($follow){
                            $q->followed = true;
                        }
                        
                    });

                    $respons = [
                        "data" => $metda,
                        "total" => $metda->count()
                    ];

                    return response()->json($respons);
        }
    }

    public function quest_home_explore(Request $req){
        if(Auth::id()){
                    
                
                   
                    $skip = 0;
                    $take = 8;

                    if($req->page > 1){
                        $skip = $take * ($req->page-1);
                    }


                    if($req->search){
                        $filterSearch = "text like '%".$req->search."%'";
                    }else{
                        $filterSearch = "id != ''";
                    }
            
                    $filterView = activity::where("user_id",Auth::id())->pluck("quest_id")->toArray();
              
                    
                    $metda = qna::whereRaw($filterSearch)
                        ->with("group")
                        ->with("user")
                        ->with("quest")
                        ->where("quest_id",null)
                        ->where("status",1)
                        ->whereNotIn("id",$filterView)
                        ->orderBy("activity","DESC")
                        ->orderBy("id","DESC")
                        ->skip($skip)->take($take)
                        ->get();
                    
                    if(count($metda) == 0){
                        $metda = qna::whereRaw($filterSearch)
                        ->with("group")
                        ->with("user")
                        ->with("quest")
                        ->where("status",1)
                        ->where("quest_id",null)
                        ->orderBy("activity","DESC")
                        ->orderBy("id","DESC")
                        ->skip($skip)->take($take)
                        ->get();
                    }



                    $metda->map(function($q) {

                        if($q->quest){

                            $q->membalas_user = User::find($q->quest->user_id)->username;
                        }


                        $follow = qna_follow::
                            where("user_id",Auth::id())
                            ->where("quest_id",$q->id)
                            ->first();

                        if($follow){
                            $q->followed = true;
                        }

                        $dataAct = [
                            "user_id" => Auth::id(),
                            "quest_id" => $q->id,
                            "tipe" => 0
                        ];
                        $cekView = activity::where("user_id",Auth::id())
                        ->where("quest_id",$q->id)
                        ->where("tipe",0)
                        ->first();

                        if(!$cekView){
                            activity::create($dataAct);
                            
                        }

                        $totalView = activity::where("quest_id",$q->id)->where("tipe",0)->count();
                        
                        $updQuest = qna::find($q->id);
                        $updQuest->view = $totalView;
                        $updQuest->save();
                        
                        $q->view = $totalView;


                        
                    });

                    $res = collect($metda)->toArray();

                    

                    $respons = [
                        "data" => $res,
                        "total" => count($res)
                    ];

                    return response()->json($respons);
        }
    }

    public function follow($id){
        if(Auth::id()){
            
            $cek = qna_follow::where("user_id",Auth::id())->where("quest_id",$id)->first();
            if(!$cek){
                $follow = new qna_follow;
                $follow->user_id = Auth::id();
                $follow->quest_id = $id;
                $follow->save();

                $dataAct = [
                    "user_id" => Auth::id(),
                    "quest_id" => $id,
                    "tipe" => 1,
                    "link" => "/quest/$id",
                ];
                activity::create($dataAct);

                $update = qna::find($id);
                if($update){
                    $update->total_qna = qna::where("quest_id",$id)->count();
                    $update->total_follower = qna_follow::where("quest_id",$id)->count();
                    $update->activity = $update->total_qna + $update->total_follower;
                    $update->update();
                }
    

            }

         
       
        }
    }

    public function index()
    {
        $metda = MetDa::latest()->paginate(5);
        return response($metda);
    }
    public function create(Request $req)
    {


      
        try {
            if(Auth::id()){

                
                    $userId = Auth::id();


                $metda = new MetDa;
               
                if($req->quest_id){
                    $metda->quest_id = $req->quest_id;
                }
                if($req->anonim){
                    $metda->anonim = $req->anonim;
                }

                if($req->type){
                    $metda->type = $req->type;
                }

                if($req->group_id){
                    $metda->group_id = $req->group_id;
                }
                $metda->text =  preg_replace('/\s+/',' ',$req->text);

                // if($req->audio){
                //     $metda->audio =  $req->audio;
                // }
                if($req->embed){
                    $metda->embed = $req->embed;
                }
                if($req->thumb){
                    $metda->thumb = $req->thumb;
                }
                if($req->img){
                
                    $image_64 = $req->img; //your base64 encoded data
            
                    $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
            
                    // find substring fro replace here eg: data:image/png;base64,
            
                    $image = str_replace($replace, '', $image_64); 
            
                    $image = str_replace(' ', '+', $image); 
            
                    $imageName = Auth::id() ."/". time().'.jpg';
            
                    Storage::disk('public')->put($imageName, base64_decode($image));

                    $metda->img = env("APP_URL")."/storage/".$imageName;

                    $metda->thumb = "";
                }
                if($req->audio){
                

                    $replace = substr($req->audio, 0, strpos($req->audio, ',')+1); 
            
                    // find substring fro replace here eg: data:image/png;base64,
            
                    $audio = str_replace($replace, '', $req->audio); 
            
                    $audio = str_replace(' ', '+', $audio); 
            
                    $audioName = Auth::id() ."/audio/". time().'.mp3';
            
                    Storage::disk('public')->put($audioName, base64_decode($audio));

                    $metda->audio = env("APP_URL")."/storage/".$audioName;
    
                }
                if($req->video){
                    $metda->video = $req->video;
                }
                
                $metda->user_id = $userId;
            

                if($req->desc && $req->type != 2){
                    $metda->desc = $req->desc;
                }

                if($req->price){
                    $metda->price = $req->price;
                }

                $metda->save();


          

                if($req->type == 2){
                    // Event
                    $newEvent = new event;
                    $newEvent->name = $req->text;
                    $newEvent->image = $metda->img;
                    $newEvent->desc = $req->desc;
                    $newEvent->price = $req->price;
                    $newEvent->start = $req->start;
                    $newEvent->end = $req->end;
                    $newEvent->group_id = $metda->group_id;
                    $newEvent->user_id = $userId;
                    $newEvent->save();


                    // Create Channel Event
                    $newChannel = new channel;
                    $newChannel->room_id = Uuid::uuid1();
                    $newChannel->event_id = $newEvent->id;
                    if($req->anonim){
                        $newChannel->anonim = "ya";
                    }
                    $newChannel->save();


                    // Join Event

                    $joinEvent = new join_event;
                    $joinEvent->user_id = Auth::id();
                    $joinEvent->event_id = $newEvent->id;
                    $joinEvent->status = 1;
                    $joinEvent->price = 0;
                    $joinEvent->message = "Admin";
                    $joinEvent->save();


                    $update2 = MetDa::find($metda->id);

                    $update2->event_id = $newEvent->id;

                    $update2->save();
                }
               


                if($req->quest_id){
                    $update = qna::find($req->quest_id);

                    if($update){
                        $update->total_qna = qna::where("quest_id",$req->quest_id)->count();
        
                        $update->total_follower = qna_follow::where("quest_id",$req->quest_id)->count();
            
                        $update->activity = $update->total_qna + $update->total_follower;
            
                        $update->update();
                        
                            $dataAct = [
                                "user_id" => $userId,
                                "quest_id" => $req->quest_id,
                                "group_id" => $metda->group_id,
                                "quest_balas_id" => $metda->id,
                                "tipe" => 2,
                                "link" => "/quest/$metda->id",
                            ];
                            activity::create($dataAct);
                    }
                }
              

                if($req->group_id){
                    $updateg = group::find($req->group_id);
                       
                    if($updateg){
                        $updateg->last_active= strtotime($metda->created_at);
                        $updateg->update();
                    }
                }
              


                if($req->text){
                    $textToArray =  explode(" ",$req->text);

                    foreach($textToArray as $text){
                        if(substr($text, 0, 1) == "@"){
                           
                            // Mentions
                            $dataAct0 = [
                                "user_id" => $userId,
                                "quest_id" => $metda->id,
                                "tipe" => 3,
                                "link" => "/quest/$metda->id",
                                "mention" => $text,
                            ];

                            activity::create($dataAct0);


                        }else if(substr($text, 0, 1) == "#"){

                             // Tagar
                             $dataAct0 = [
                                "user_id" => $userId,
                                "quest_id" => $metda->id,
                                "tipe" => 4,
                                "link" => "",
                                "tagar" => $text,
                            ];

                            activity::create($dataAct0);

                        }
                    }

                }

              

                return response()->json([
                    'success' => true,
                    'id'=> $metda->id
                ]);
             }
        } catch (\Throwable $th) {

            return response()->json([
                'success' => false,
                'data'=> $th
            ]);
        }
       
        
    }

    public function show($id)
    {
        $metda = MetDa::with("group")
        ->with("user")
        ->with("quest")
        ->with("event")
        ->find($id);

        if($metda->quest){

            $metda->membalas_user = User::find($metda->quest->user_id)->username;
        }

        $follow = qna_follow::
                where("user_id",Auth::id())
                ->where("quest_id",$id)
                ->first();

            if($follow){
                $metda->followed = true;
            }
        return response($metda);
    }

    public function edit(Request $request,$id)
    {
        try {
            MetDa::find($id)->update($request->all());
            return response()->json([
                'success' => true
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'data'=> $th
            ]);
        }
       
  
    }

    public function delete($id)
    {
        //
         try {
            $metda = MetDa::find($id);

            // cek Event
            if($metda->event_id){
                $event = event::find($metda->event_id);
                $event->status = 0;
                $event->save();
            }
            $metda->status = 0;
            $metda->save();

            return "success";
        } catch (\Throwable $th) {
            return "failed";
        }
    }

    public function notifQuest($id){

        $newNotif = new notif_quest;
        $newNotif->user_id = Auth::id();
        $newNotif->quest_id = $id;
        $newNotif->save();

        return "success";
    }
    public function questBalasan(Request $req, $id){
        if(Auth::id()){
                
            $skip = 0;
            $take = 5;

            if($req->page > 1){
                $skip = $take * ($req->page-1);
            }

            $metda = qna::
                 with("group")
                ->with("user")
                ->with("quest")
                ->where("status",1)
                ->where("quest_id", $id)
                ->orderBy("activity","DESC")
                ->orderBy("created_at","DESC")
                ->skip($skip)->take($take)
                ->get();


            $metda->map(function($q) {

                if($q->quest){

                    $q->membalas_user = User::find($q->quest->user_id)->username;
                }


                $follow = qna_follow::
                    where("user_id",Auth::id())
                    ->where("quest_id",$q->id)
                    ->first();

                if($follow){
                    $q->followed = true;
                }
                
            });

            return response()->json(
                [
                    "data"=> $metda->toArray(),
                    "total" => count($metda->toArray())
                ]
            );
            
            }
    }
}
