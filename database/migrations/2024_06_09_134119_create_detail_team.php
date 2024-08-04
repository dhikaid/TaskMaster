<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('detail_team', function (Blueprint $table) {
            $table->id();
            $table->foreignId('team')->references('id')->on('teams');
            $table->foreignId('member')->nullable()->references('id')->on('users');
            $table->boolean('verified_team')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_team');
    }
};
