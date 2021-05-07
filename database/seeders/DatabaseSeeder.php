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
        User::factory()->create([
            'firstname' => 'Florian',
            'lastname' => 'BROTTE',
            'email' => 'f.brotte@comon-real.fr',
            'password' => Hash::make('lsd2CBmeska!'),
            'role' => 1,
        ]);
        User::factory(10)->create();
        
        UserTracking::factory(100)->create();
        
        $product_type = [
            [
                'name' => 'Bières Pression',
                'slug' => 'draft_beer',
                'description' => '',
                'position' => 1,
            ],
            [
                'name' => 'Bières Frigo',
                'slug' => 'fridge_beer',
                'description' => '',
                'position' => 2,
            ],
            [
                'name' => 'Plateaux',
                'slug' => 'food',
                'description' => '',
                'position' => 3,
            ],
            [
                'name' => 'Planteur',
                'slug' => 'planteur',
                'description' => '',
                'position' => 4,
            ],
            [
                'name' => 'Shooter',
                'slug' => 'shooter',
                'description' => '',
                'position' => 5,
            ],
            [
                'name' => 'Vins',
                'slug' => 'vine',
                'description' => '',
                'position' => 6,
            ],
            [
                'name' => 'Soft',
                'slug' => 'soft',
                'description' => '',
                'position' => 7,
            ]
            
            ];
            foreach ($product_type as $item)
            {
               ProductType::create($item);
            }
        Product::factory(20)->create();
    }
}
