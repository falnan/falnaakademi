<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('students')->insert([
            [
                'username' => 'abu bakar',
                'name' => 'Abu Bakar',
                'coin' => 30,
                'school' => 'SMAN 1 Bengkalis',
                'grade' => 10,
                'ttl' => 'Bengkalis, 01-01-2001',
                'adress' => 'Mana',
                'phone' => '082285567722',
            ],
            [
                'username' => 'umar',
                'name' => 'Umar',
                'coin' => 30,
                'school' => 'SMAN 2 Bengkalis',
                'grade' => 10,
                'ttl' => 'Bengkalis, 02-02-2002',
                'adress' => 'Mana',
                'phone' => '082285567722',
            ],
            [
                'username' => 'usman',
                'name' => 'Usman',
                'coin' => 30,
                'school' => 'SMAN 3 Bengkalis',
                'grade' => 10,
                'ttl' => 'Bengkalis, 02-02-2002',
                'adress' => 'Mana',
                'phone' => '082285567722',
            ],
            [
                'username' => 'ali',
                'name' => 'Aku',
                'coin' => 30,
                'school' => 'SMAN 4 Bengkalis',
                'grade' => 10,
                'ttl' => 'Bengkalis, 02-02-2002',
                'adress' => 'Mana',
                'phone' => '082285567722',
            ],
        ]);

    }
}
