<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'username' => 'falnan',
                'name' => 'Fadilah Kurniawan',
                'role' => 'admin',
                'password' => Hash::make(123),
                'confirmPassword' => 123,
            ],
            [
                "role" => 'teacher',
                'username' => 'tuti',
                'name' => 'Tuti Ariani',
                'password' => Hash::make(123),
                'confirmPassword' => 123,
            ],
            [
                'role' => 'student',
                'username' => 'abu bakar',
                'name' => 'Abu Bakar',
                'password' => Hash::make(123),
                'confirmPassword' => 123,
            ],
            [
                'role' => 'student',
                'username' => 'umar',
                'name' => 'Umar',
                'password' => Hash::make(123),
                'confirmPassword' => 123,
            ],
            [
                'role' => 'student',
                'username' => 'usman',
                'name' => 'Usman',
                'password' => Hash::make(123),
                'confirmPassword' => 123,
            ],
            [
                'role' => 'student',
                'username' => 'ali',
                'name' => 'Ali',
                'password' => Hash::make(123),
                'confirmPassword' => 123,
            ],

        ]);

    }
}
