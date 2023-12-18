<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentRoomSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('student_rooms')->insert([
            [
                'student_id' => 'abu bakar',
                'room_id' => 'iqr-3',
                'is_active' => true,
            ],
            [
                'student_id' => 'abu bakar',
                'room_id' => 'mtk-8',
                'is_active' => true,
            ],
            [
                'student_id' => 'umar',
                'room_id' => 'iqr-9',
                'is_active' => true,
            ],
            [
                'student_id' => 'umar',
                'room_id' => 'mtk-8',
                'is_active' => true,
            ],

        ]);

    }
}
