<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReportSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('reports')->insert([
            [
                'subject_id' => 'iqr',
                'student_id' => 'abu bakar',
                'teacher_id'=> 'tuti',
                'evaluation' => 'tingkatkan belajar',
                'created_at'=> Carbon::now(),
            ],
            [
                'subject_id' => 'mtk',
                'student_id' => 'abu bakar',
                'teacher_id'=> 'tuti',
                'evaluation' => 'bagus',
                'created_at'=> Carbon::now(),
            ],
            [
                'subject_id' => 'mtk',
                'student_id' => 'abu bakar',
                'teacher_id'=> 'tuti',
                'evaluation' => 'lanjutkan',
                'created_at'=> Carbon::now(),
            ],
            [
                'subject_id' => 'mtk',
                'student_id' => 'umar',
                'teacher_id'=> 'tuti',
                'evaluation' => 'mantap',
                'created_at'=> Carbon::now(),
            ],
        ]);

    }
}
