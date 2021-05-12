<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\ProductType;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $product_id = ProductType::all()->random()->id;
        switch($product_id)
        {
            //boisse pour adulte
            case 1: case 2: case 4: case 5: case 6:
                return [
                    'product_name' => $this->faker->word(1),
                    'description' => $this->faker->sentence(10),
                    'alcohol' => rand(8,18),
                    'origin' => $this->faker->country(),
                    'price' => rand(1, 10),
                    'cl' => rand(1, 100),
                    'product_type_id' => $product_id,
                ];
            break;
            //bouffe
            case 3:
                return [
                    'product_name' => $this->faker->word(1),
                    'description' => $this->faker->sentence(10),
                    'price' => rand(1, 10),
                    'product_type_id' => $product_id,
                ];
            break;
            //boisse pour enfant
            case 7:
                return [
                    'product_name' => $this->faker->word(1),
                    'description' => $this->faker->sentence(10),
                    'price' => rand(1, 10),
                    'cl' => rand(1, 100),
                    'product_type_id' => $product_id,
                ];
            break;
        }
    }
}
