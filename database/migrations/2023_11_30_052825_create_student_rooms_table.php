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
        Schema::create('student_rooms', function (Blueprint $table) {
            $table->id();
            $table->string('student_id');
            $table->string('room_id');
            $table->boolean('is_active');
            $table->timestamps();

            // $table->foreign('student_id')
            //     ->references('username')
            //     ->on('students')
            //     ->constrained()
            //     ->onUpdate('cascade');

            // $table->foreign('room_id')
            //     ->references('id')
            //     ->on('rooms')
            //     ->constrained()
            //     ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_rooms');
    }
};
