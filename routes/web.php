<?php
namespace App;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserTrackingController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages.vitrine.home');
})->name('showcase');

Route::get('admin', [UserController::class, 'user_list']);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/qrcode/{n_table}', [UserTrackingController::class, 'scan_qrcode'])->name('qrcode');


// LOGOUT
Route::get('/deconnexion', function()  {
    Auth::logout();
    return redirect()->route('showcase');
})->name('logout');

require __DIR__.'/auth.php';
