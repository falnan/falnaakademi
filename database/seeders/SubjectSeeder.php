<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('subjects')->insert([
            [
                'id' => 'iqr',
                'subject' => 'Ngaji Iqra',
                'program' => 'Grup',
                'is_reguler' => 1,
                'is_private' => 0,
                'is_english' => 0,
                'is_kids' => 0,
                'is_islam' => 1,
                'is_it' => 0,
                'price' => 140000,
                'duration' => 60,
                'meetingPerWeek' => 4,
                'maxMember' => 6,
                'is_ps' => 1,
                'is_ms' => 1,
                'is_hs' => 1,
                'is_public' => 1,
            ],
            [
                'id' => 'mtk',
                'subject' => 'Matematika',
                'program' => 'Grup',
                'is_reguler' => 1,
                'is_private' => 0,
                'is_english' => 0,
                'is_kids' => 0,
                'is_islam' => 1,
                'is_it' => 0,
                'price' => 140000,
                'duration' => 60,
                'meetingPerWeek' => 4,
                'maxMember' => 6,
                'is_ps' => 1,
                'is_ms' => 1,
                'is_hs' => 1,
                'is_public' => 1,
            ],
        ]);

    }
}
