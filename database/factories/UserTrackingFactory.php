<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\UserTracking;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserTrackingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = UserTracking::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'users_id' => User::all()->random()->id,
            'table' => rand(1, 5),
            'updated_at' => $this->faker->dateTime('now'),
        ];
    }
}
