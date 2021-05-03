<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function addUser(Request $request){

        $name=$request->input('name');
        $user_name=$request->input('user_name');
        $password=$request->input('password');
        $roll=$request->input('role');


        $user_count=UserModel::where('user_name',$user_name)->count();

        if ($user_count>0){

            return 'Sorry..! User already exist!!';
        }else{

            $data=array(

                'name'=>$name,
                'user_name'=>$user_name,
                'password'=>$password,
                'last_activity'=>"No Activity",
                'role'=>$roll,

            );

           $result= UserModel::insert($data);
           return $result;

        }

    }

    public function deleteUser(Request $request){
        $id=$request->id;

        $result=UserModel::where('id',$id)->delete();
        return $result;



    }
    public function selectUser(){
        $result=UserModel::all();
        return $result;


    }
    public function updateUser(Request $request){

        $id=$request->input('id');
        $name=$request->input('name');
        $user_name=$request->input('user_name');
        $password=$request->input('password');
        $roll=$request->input('role');



            $data=array(

                'name'=>$name,
                'user_name'=>$user_name,
                'password'=>$password,
                'last_activity'=>"No Activity",
                'role'=>$roll,

            );

            $result= UserModel::where('id',$id)->update($data);
            return $result;



    }
}
