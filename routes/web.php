<?php
namespace App;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
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

Route::get('/', [ShowcaseController::class, 'index'])->name('showcase');

Route::get('/admin', [AdminController::class, 'user_list'])->name('dashboard');;

Route::get('/qrcode/{n_table}', [AuthController::class, 'scan_qrcode'])->name('qrcode');

// LOGOUT
Route::get('/deconnexion', [AuthController::class, 'logout'])->name('logout');

require __DIR__.'/auth.php';
