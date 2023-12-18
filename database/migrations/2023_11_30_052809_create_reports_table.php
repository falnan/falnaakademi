<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->string('subject_id')->nullable();
            $table->string('teacher_id')->nullable();
            $table->string('student_id')->nullable();
            $table->string('evaluation');
            $table->timestamps();

        //     $table->foreign('subject_id')
        //         ->references('id')
        //         ->on('subjects')
        //         ->constrained()
        //         ->onUpdate('cascade')
        //         ->nullOnDelete();

        //     $table->foreign('teacher_id')
        //         ->references('username')
        //         ->on('teachers')
        //         ->constrained()
        //         ->onUpdate('cascade')
        //         ->nullOnDelete();

        //     $table->foreign('student_id')
        //         ->references('username')
        //         ->on('students')
        //         ->constrained()
        //         ->onUpdate('cascade')
        //         ->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};
