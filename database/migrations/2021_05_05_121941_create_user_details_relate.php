<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserDetailsRelate extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_details_relate', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('picture_id')->index();
            $table->unsignedBigInteger('user_id')->index();
            $table->timestamps();
            $table->foreign('picture_id')->references('id')->on('user_details')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_details_relate');
    }
}
