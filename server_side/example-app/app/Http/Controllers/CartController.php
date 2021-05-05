<?php

namespace App\Http\Controllers;

use App\Models\CartModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CartController extends Controller
{
    public function addCart(Request $request){

        $invoice_no=$request->input('invoice_no');
        $invoice_date=$request->input('invoice_date');
        $product_name=$request->input('product_name');
        $qty=$request->input('product_qty');
        $unit_price=$request->input('unit_price');
        $total_price=$request->input('total_price');
        $seller_name=$request->input('seller_name');
        $image_path=$request->file('product_icon')->store('public');



        $data=array(

            'invoice_no'=>$invoice_no,
            'invoice_date'=>$invoice_date,
            'product_name'=>$product_name,
            'product_qty'=>$qty,
            'unit_price'=>$unit_price,
            'total_price'=>$total_price,
            'seller_name'=>$seller_name,
            'product_icon' =>$image_path


        );

        $result= CartModel::insert($data);
        return $result;



    }

    public function cartItemPlus(Request $request){
        $id=$request->id;
        $quantity=$request->quantity;
        $price=$request->price;
        $new_qty=$quantity+1;
        $total_price=$new_qty*$price;


        $data=array(

            'product_qty' => $new_qty,
            'total_price' =>$total_price

        );

        $result=CartModel::where('id',$id)->update($data);
        return $result;



    }
    public function cartItemMinus(Request $request){
        $id=$request->id;
        $quantity=$request->quantity;
        $price=$request->price;
        $new_qty=$quantity-1;
        $total_price=$new_qty*$price;


        $data=array(

            'product_qty' => $new_qty,
            'total_price' =>$total_price

        );

        $result=CartModel::where('id',$id)->update($data);
        return $result;



    }
    public function removeItem(Request $request){

        $id=$request->id;

        $result=CartModel::where('id',$id)->delete();
        return $result;

    }

    public function cartList(Request $request){

        $invoice=$request->invoice;

        $result=CartModel::where('invoice_no',$invoice)->get();
        return $result;

    }
}
