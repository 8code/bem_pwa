<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/loginfb', 'Api\AuthController@loginfb');

Route::post('/login', 'Api\AuthController@login');


Route::middleware('auth:api')->group(function(){
Route::post('upload-image','Api\AuthController@uploadImage');


Route::get('/notifications','activityController@notif');


// Profile

Route::get('profile/{id}','profileController@profile');//group
Route::get('profile-by-id/{id}','profileController@profileById');//group
Route::get('profile/quest/{id}','profileController@quest');//group
Route::post('update-profile','profileController@updateProfile');

// Group
    Route::get('mygroup','groupController@myGroup');
    Route::get('group','groupController@index');
    Route::get('group/follow/{id}','groupController@follow');
    Route::get('group/unfollow/{id}','groupController@unfollow');
    Route::get('group/{username}','groupController@show');
    Route::post('group','groupController@create');
    Route::post('group/edit/{id}','groupController@edit');
    Route::get('group/delete/{id}','groupController@delete');
    Route::get('group/quest/{id}','groupController@quest');//group

// QNA

    Route::get('quest/home','qnaController@quest_home');//home
    Route::get('quest/home/explore','qnaController@quest_home_explore');//home
    Route::post('quest','qnaController@create');
    Route::get('quest/follow/{id}','qnaController@follow');
    Route::get('quest/{id}','qnaController@show');

    Route::get('quest/balasan/{id}','qnaController@questBalasan');


    Route::get("/delete-quest/{id}",'qnaController@delete');
    Route::get("/notif_quest/{id}",'qnaController@notifQuest');

// User    
Route::get('user/follow/{id}','userController@follow');
Route::get('user/unfollow/{id}','userController@unfollow');
Route::get('users','userController@index');



// Helper
Route::get('list-prodi','helperController@listProdi');
Route::get('list-univ','helperController@listUniv');



// Populer

Route::get("tagar-populer", "populerController@tagar");
Route::get("group-populer", "populerController@group");
Route::get("user-populer", "populerController@user");


// Search
Route::get("search/quest/{keyword}", "searchController@quest");
Route::get("search/group/{keyword}", "searchController@group");
Route::get("search/user/{keyword}", "searchController@user");


// Quest Donations

Route::get('donations', "donationController@questDonations");

// Quest Events

Route::get('events', "eventController@questEvents");
Route::get('event/explore','eventController@event_explore');

Route::get('join-event/{id}', "eventController@joinEvent");
Route::get('my-events', "eventController@myEvent");

Route::get("/event_by_room_id/{id}","eventController@byRoomBy");





// Room Channel /Event

Route::get("/user-channel/{id}","channelController@index");




// Report
Route::get("/report/{id}/{text}","reportController@store");


// Messages


Route::get("/chat_message_user","messageController@index");
Route::get("/chat_by_room_id/{id}","messageController@chatRoom");
Route::get("/chat_to/{id}","messageController@chatTo");


Route::post("/send-message/{id}","messageController@sendMessage");
Route::get("/read-message/{user_id}/{channel_id}","messageController@readMessage");






    
});