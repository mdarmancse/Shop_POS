<?php

namespace App\Http\Controllers;

use App\Models\CartModel;
use App\Models\TransactionModel;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function cartSell(Request $request){

        $invoice=$request->invoice;

        $cartList=CartModel::where('invoice_no',$invoice)->get();

        $cartResult='';
        foreach ($cartList as $cart){

            $data=array(
                'invoice_no'=>$cart['invoice_no'],
                'invoice_date'=>$cart['invoice_date'],
                'product_name'=>$cart['product_name'],
                'product_qty'=>$cart['product_qty'],
                'unit_price'=>$cart['unit_price'],
                'total_price'=>$cart['total_price'],
                'seller_name'=>$cart['seller_name'],
                'product_icon' =>$cart['product_icon']
            );

            $result=TransactionModel::insert($data);

            if ($result==1){
                $resultDelete=CartModel::where('id',$cart['id'])->delete();

                if ($resultDelete==1){
                        $cartResult=1;
                }else{
                    $cartResult=0;
                }

            }


        }

            return $cartResult;
    }


    public function transList(){
        $result=TransactionModel::orderById('id','desc')->get();
        return $result;


    }

    public function recentTransList(){
        $result=TransactionModel::orderById('id','desc')->limit(20)->get();
        return $result;


    }
}
