<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('url_stub');
            $table->text('overview');
            $table->integer('category_id');
            $table->timestamps();
        });
        Schema::create('variants', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('url_stub');
            $table->integer('stock_id');
            $table->integer('product_id');
            $table->timestamps();
        });
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('url_stub');
            $table->text('overview');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
        Schema::dropIfExists('variants');
        Schema::dropIfExists('categories');
    }
}
