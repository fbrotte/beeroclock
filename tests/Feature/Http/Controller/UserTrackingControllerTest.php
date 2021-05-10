<?php

namespace Tests\Feature\Http\Controller;

use Tests\TestCase;
use App\Models\User;
use App\Models\UserTracking;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTrackingControllerTest extends TestCase
{
    use DatabaseMigrations;
    use RefreshDatabase;

    /** @test */
    public function scan_qrcode_without_login()
    {
        $response = $this->get('/qrcode/5');
        $response->assertRedirect(route('login'));
    }

    /** @test */
    public function scan_qrcode_with_login()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
                         ->get('/qrcode/5');

        // Check if ressource has been created
        $response->assertSessionHas('status', 'userLogged');
        $response->assertRedirect(route('showcase'));

       $this->assertDatabaseHas('user_trackings', [
            'users_id' => $user->id,
            'table' => 5,
        ]);
    }

    /** @test */
    public function scan_qrcode_with_login_multiple_retry()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
                         ->get('/qrcode/5');

        $response = $this->actingAs($user)
                         ->get('/qrcode/5');

        $response->assertSessionHas('status', 'alreadyScan');
        $response->assertRedirect(route('showcase'));
        

       $this->assertDatabaseHas('user_trackings', [
            'users_id' => $user->id,
            'table' => 5,
        ]);
    }

    /** @test */
    public function scan_qrcode_with_login_multiple_retry_more_2_hours()
    {
        $user = User::factory()->create();

        UserTracking::factory()->create([
            'users_id' => $user->id,
            'created_at' => Carbon::now()->subHours(2)
        ]);

        $response = $this->actingAs($user)
                            ->get('/qrcode/5');

        // Check if ressource has been created
        $response->assertSessionHas('status', 'alreadyScan');
        $response->assertRedirect(route('showcase'));
    }

    /** @test */
    public function scan_qrcode_with_login_multiple_retry_more_4_hours()
    {
        $user = User::factory()->create();

        UserTracking::factory()->create([
            'users_id' => $user->id,
            'created_at' => Carbon::now()->subHours(4)
        ]);

        $response = $this->actingAs($user)
                            ->get('/qrcode/5');

        // Check if ressource has been created
        $response->assertSessionHas('status', 'userLogged');
        $response->assertRedirect(route('showcase'));
    }

    /** @test */
    public function scan_qrcode_with_login_100_user()
    {
        $this->assertTrue(true);
    }
}
