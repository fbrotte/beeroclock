<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
use App\Models\ProductType;
use App\Models\UserTracking;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        // ALL TIME
        $this->call([
            ProductTypeSeeder::class,
        ]);
        
        // IN DEBUG MODE
        if(config('app.debug'))
        { 
            $this->call([
                UserSeeder::class,
                ProductSeeder::class,
            ]);
        }
    }
}
