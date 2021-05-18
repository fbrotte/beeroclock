<?php

namespace Database\Seeders;

use App\Models\ProductType;
use Illuminate\Database\Seeder;

class ProductTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product_type = [
            [
                'name' => 'Bières Pression',
                'slug' => 'draft_beer',
                'description' => '',
                'position' => 1,

                'alcohol' => true,
                'origin' => true,
                'qty' => '4l'
            ],
            [
                'name' => 'Bières Frigo',
                'slug' => 'fridge_beer',
                'description' => '',
                'position' => 2,

                'alcohol' => true,
                'origin' => true,
                'qty' => 'unit'
            ],
            [
                'name' => 'Plateaux',
                'slug' => 'food',
                'description' => '',
                'position' => 3,

                'alcohol' => false,
                'origin' => false,
                'qty' => 'unit'
            ],
            [
                'name' => 'Planteur',
                'slug' => 'planteur',
                'description' => '',
                'position' => 4,

                'alcohol' => true,
                'origin' => false,
                'qty' => 'unit'
            ],
            [
                'name' => 'Shooter',
                'slug' => 'shooter',
                'description' => '',
                'position' => 5,

                'alcohol' => true,
                'origin' => false,
                'qty' => 'unit'
            ],
            [
                'name' => 'Vins',
                'slug' => 'vine',
                'description' => '',
                'position' => 6,

                'alcohol' => true,
                'origin' => true,
                'qty' => 'false'
            ],
            [
                'name' => 'Soft',
                'slug' => 'soft',
                'description' => '',
                'position' => 7,

                'alcohol' => false,
                'origin' => false,
                'qty' => 'unit'
            ]
            
        ];


        foreach ($product_type as $item)
        {
            ProductType::create($item);
        }
    }
}
