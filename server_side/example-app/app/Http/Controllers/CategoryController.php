<?php

namespace App\Http\Controllers;

use App\Models\CategoryModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    public function addCategory(Request $request){

        $name=$request->input('cat_name');
        $image_path=$request->file('cat_icon')->store('public');
        $code=time();


            $data=array(

                'cat_name'=>$name,
                'cat_code'=>$code,
                'cat_icon'=>$image_path,


            );

            $result= CategoryModel::insert($data);
            return $result;



    }

    public function deleteCategory(Request $request){
        $id=$request->id;

        $cat_icon=CategoryModel::where('id',$id)->get(['cat_icon']);
        Storage::delete($cat_icon[0]['cat_icon']);
        $result=CategoryModel::where('id',$id)->delete();
        return $result;



    }
    public function selectCategory(){
        $result=CategoryModel::all();
        return $result;


    }
    public function updateCategoryWithoutImage(Request $request){


        $id=$request->input('id');
        $name=$request->input('cat_name');




        $data=array(

            'cat_name'=>$name,


        );

        $result= CategoryModel::where('id',$id)->update($data);
        return $result;


    }

    public function updateCategoryWithImage(Request $request){


        $id=$request->input('id');
        $name=$request->input('cat_name');


        //old_image
        $cat_icon=CategoryModel::where('id',$id)->get(['cat_icon']);
        Storage::delete($cat_icon[0]['cat_icon']);
        //new_image
        $image_path=$request->file('cat_icon')->store('public');



        $data=array(

            'cat_name'=>$name,
            'cat_icon'=>$image_path


        );

        $result= CategoryModel::where('id',$id)->update($data);
        return $result;


    }
}
