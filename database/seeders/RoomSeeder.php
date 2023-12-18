<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoomSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('rooms')->insert([
            [
                'id' => 'iqr-9',
                'teacher_id' => 'tuti',
                'subject_id' => 'iqr',
                'grade' => 9,
                'program' => 'Grup',
                'day' => 'senin, selasa',
                'time' => '17.00 WIB',
                'idRoom' => 'random',
                'passwordRoom' => 'random',
                'linkRoom' => 'random',
                'created_at'=> Carbon::now(),
            ],
            [
                'id' => 'iqr-3',
                'teacher_id' => 'tuti',
                'subject_id' => 'iqr',
                'grade' => 9,
                'program' => 'Grup',
                'day' => 'selasa, rabu',
                'time' => '17.00 WIB',
                'idRoom' => 'random',
                'passwordRoom' => 'random',
                'linkRoom' => 'random',
                'created_at'=> Carbon::now(),
            ],
            [
                'id' => 'mtk-8',
                'teacher_id' => 'tuti',
                'subject_id' => 'mtk',
                'grade' => 9,
                'program' => 'Grup',
                'day' => 'selasa, rabu',
                'time' => '17.00 WIB',
                'idRoom' => 'random',
                'passwordRoom' => 'random',
                'linkRoom' => 'random',
                'created_at'=> Carbon::now(),
            ],

        ]);

    }
}
