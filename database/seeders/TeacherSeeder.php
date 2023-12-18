<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeacherSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('teachers')->insert([
            [
                'username' => 'tuti',
                'name' => 'Tuti Ariani',
                'subject_id' => 'iqr',
                'ttl' => 'Bengkalis, 12-09-2000',
                'adress' => 'Wonosari Tengah',
                'phone' => '+62822-6943-3711',
            ],
        ]);
    }
}
