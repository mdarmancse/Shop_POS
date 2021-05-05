<?php

namespace App\Http\Controllers;

use App\Models\CategoryModel;
use App\Models\ProductModel;
use Illuminate\Http\Request;

class DashBoardController extends Controller
{
    public function countProduct(){

        $result=ProductModel::count();
        return $result;
    }

    public function countCategory(){

        $result=CategoryModel::count();
        return $result;
    }
}
