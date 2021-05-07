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
        return [
            'product_name' => $this->faker->word(1),
            'description' => $this->faker->word(10),
            'alcohol' => rand(8,18),
            'origin' => $this->faker->country(),
            'price' => rand(1, 10),
            'cl' => rand(1, 10),
            'product_types_id' => ProductType::all()->random()->id,
        ];
    }
}
