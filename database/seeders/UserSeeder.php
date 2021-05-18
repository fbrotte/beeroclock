<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserTracking;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'firstname' => 'Florian',
            'lastname' => 'BROTTE',
            'email' => 'f.brotte@comon-real.fr',
            'password' => Hash::make('lsd2CBmeska!'),
            'role' => 1,
        ]);
        User::factory(10)->create();

        UserTracking::factory(100)->create();
    }
}
