<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('teacher_id')->nullable();
            $table->string('subject_id')->nullable();
            $table->integer('grade');
            $table->string('program');
            $table->string('day');
            $table->string('time');
            $table->string('idRoom');
            $table->string('passwordRoom');
            $table->string('linkRoom');
            $table->timestamps();

            // $table->foreign('teacher_id')
            //     ->references('username')
            //     ->on('teachers')
            //     ->constrained()
            //     ->onUpdate('cascade')
            //     ->nullOnDelete();

            // $table->foreign('subject_id')
            //     ->references('id')
            //     ->on('subjects')
            //     ->constrained()
            //     ->onUpdate('cascade')
            //     ->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};
