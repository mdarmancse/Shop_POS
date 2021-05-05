<?php

namespace App\Http\Controllers;

use App\Models\ProductModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function addProduct(Request $request){

        $name=$request->input('product_name');
        $category=$request->input('product_category');
        $price=$request->input('product_price');
        $remarks=$request->input('product_remarks');
        $image_path=$request->file('product_icon')->store('public');
        $code=time();


        $data=array(

            'product_name'=>$name,
            'product_code'=>$code,
            'product_category'=>$category,
            'product_price'=>$price,
            'product_remarks'=>$remarks,
            'product_icon'=>$image_path,


        );

        $result= ProductModel::insert($data);
        return $result;



    }

    public function deleteProduct(Request $request){
        $id=$request->id;

        $product_icon=ProductModel::where('id',$id)->get(['product_icon']);
        Storage::delete($product_icon[0]['cat_icon']);
        $result=ProductModel::where('id',$id)->delete();
        return $result;



    }
    public function selectProduct(){
        $result=ProductModel::all();
        return $result;


    }
    public function selectProductByCategory(Request $request){
        $category=$request->category;
        $result=ProductModel::where('product_category',$category)->get();
        return $result;


    }

    public function updateProductWithoutImage(Request $request){


        $id=$request->input('id');
        $name=$request->input('product_name');
        $category=$request->input('product_category');
        $price=$request->input('product_price');
        $remarks=$request->input('product_remarks');




        $data=array(

            'product_name'=>$name,
            'product_category'=>$category,
            'product_price'=>$price,
            'product_remarks'=>$remarks,


        );

        $result= ProductModel::where('id',$id)->update($data);
        return $result;


    }

    public function updateProductWithImage(Request $request){


        $id=$request->input('id');
        $name=$request->input('product_name');
        $category=$request->input('product_category');
        $price=$request->input('product_price');
        $remarks=$request->input('product_remarks');


        //old_image
        $product_icon=ProductModel::where('id',$id)->get(['product_icon']);
        Storage::delete($product_icon[0]['product_icon']);
        //new_image
        $image_path=$request->file('product_icon')->store('public');



        $data=array(

            'product_name'=>$name,
            'product_category'=>$category,
            'product_price'=>$price,
            'product_remarks'=>$remarks,
            'product_icon'=>$image_path,


        );

        $result= ProductModel::where('id',$id)->update($data);
        return $result;


    }
}
