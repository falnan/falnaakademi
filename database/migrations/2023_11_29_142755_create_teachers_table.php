<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->string('username')->primary();
            $table->string('name');
            $table->string('subject_id')->nullable();
            $table->string('ttl');
            $table->string('adress');
            $table->string('phone');
            $table->timestamps();

        //     $table->foreign('subject_id')
        //         ->references('id')
        //         ->on('subjects')
        //         ->constrained()
        //         ->onUpdate('cascade')
        //         ->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
