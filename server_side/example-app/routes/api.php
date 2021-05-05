<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//DashBoard
Route::get('/countProduct',[\App\Http\Controllers\DashBoardController::class,'countProduct']);

//User
Route::post('/addUser',[\App\Http\Controllers\UserController::class,'addUser']);
Route::get('/deleteUser/{id}',[\App\Http\Controllers\UserController::class,'deleteUser']);
Route::get('/selectUser',[\App\Http\Controllers\UserController::class,'selectUser']);
Route::post('/updateUser',[\App\Http\Controllers\UserController::class,'updateUser']);

//Category
Route::post('/addCategory',[\App\Http\Controllers\CategoryController::class,'addCategory']);
Route::get('/deleteCategory/{id}',[\App\Http\Controllers\CategoryController::class,'deleteCategory']);
Route::get('/selectCategory',[\App\Http\Controllers\CategoryController::class,'selectCategory']);
Route::post('/updateCategoryWithoutImage',[\App\Http\Controllers\CategoryController::class,'updateCategoryWithoutImage']);
Route::post('/updateCategoryWithImage',[\App\Http\Controllers\CategoryController::class,'updateCategoryWithImage']);

//Product
Route::post('/addProduct',[\App\Http\Controllers\ProductController::class,'addProduct']);
Route::get('/deleteProduct/{id}',[\App\Http\Controllers\ProductController::class,'deleteProduct']);
Route::get('/selectProduct',[\App\Http\Controllers\ProductController::class,'selectProduct']);
Route::get('/selectProductByCategory/{category}',[\App\Http\Controllers\ProductController::class,'selectProductByCategory']);
Route::post('/updateProductWithoutImage',[\App\Http\Controllers\ProductController::class,'updateProductWithoutImage']);
Route::post('/updateProductWithImage',[\App\Http\Controllers\ProductController::class,'updateProductWithImage']);



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
