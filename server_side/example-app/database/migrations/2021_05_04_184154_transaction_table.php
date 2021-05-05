<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TransactionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaction_list',function (Blueprint $table){

            $table->bigIncrements('id');
            $table->string('invoice_no',200);
            $table->string('invoice_date',200);
            $table->string('product_name',200);
            $table->string('product_qty',200);
            $table->string('unit_price',200);
            $table->string('total_price',200);
            $table->string('seller_name',200);


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
