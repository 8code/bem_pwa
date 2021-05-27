<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use App\user_follow;
use App\group_follow;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $user =  User::create([
            'avatar' => "/icon.png",
            'name' => $data['name'],
            'username' => rand(1000,100000),
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);


        
        $cek = user_follow::where("user_id",$user->id)->where("followed_id",$user->id)->first();
        if(!$cek){
            $follow = new user_follow;
            $follow->user_id = $user->id;
            $follow->followed_id = $user->id;
            $follow->save();

            $follow2 = new user_follow;
            $follow2->user_id = $user->id;
            $follow2->followed_id = 1;
            $follow2->save();

        }

        $group_id = [2,82,83,84,85,86,87,69];

        foreach($group_id as $id){
            $cek3 = group_follow::where("user_id",$user->id)->where("group_id",$id)->first();
                
            if(!$cek3){
                $follow3 = new group_follow;
                $follow3->user_id = $user->id;
                $follow3->group_id = $id;
                $follow3->save();
            }
        }



        return $user;
    }
}
