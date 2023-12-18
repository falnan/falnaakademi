<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('subjects', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('subject');
            $table->string('program');
            $table->boolean('is_reguler');
            $table->boolean('is_private');
            $table->boolean('is_english');
            $table->boolean('is_kids');
            $table->boolean('is_islam');
            $table->boolean('is_it');
            $table->integer('price');
            $table->integer('duration');
            $table->integer('meetingPerWeek')->nullable();
            $table->integer('maxMember');
            $table->boolean('is_ps');
            $table->boolean('is_ms');
            $table->boolean('is_hs');
            $table->boolean('is_public');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('subjects');
    }
};
