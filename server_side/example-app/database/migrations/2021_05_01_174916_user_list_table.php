<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserListTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('user_list',function (Blueprint $table){

           $table->bigIncrements('id');
           $table->string('name',200);
           $table->string('user_name',255);
           $table->string('role',200);
           $table->string('last_activity',200);
           $table->string('password',200);


       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
