<?php

namespace Tests\Feature\Http\Controller;

use Tests\TestCase;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     * 
     */
    public function test_connect_to_showcase()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }
    public function test_user_list()
    {
        $user_controller = new UserController();
        $user_controller = $user_controller->user_list();
        // $user_controller->
        
    }
}
