<?php
namespace App;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ShowcaseController;


// Route::get('/', [ShowcaseController::class, 'index'])->name('showcase');

Route::view('/login', 'showcase.pages.auth.index');


Route::get('/espace', [AdminController::class, 'product'])->name('admin');
Route::get('/admin/stats', [AdminController::class, 'index'])->name('admin.stat');
Route::get('/admin/produits', [AdminController::class, 'product'])->name('admin.product');

Route::get('/qrcode/{n_table}', [AuthController::class, 'scan_qrcode'])->name('qrcode');

// LOGOUT
Route::get('/deconnexion', [AuthController::class, 'logout'])->name('logout');

Route::get('/{name?}', [ShowcaseController::class, 'index'])->name('showcase');
require __DIR__.'/auth.php';

//utilities

Route::get('/images/{path}', [ImageController::class, 'show']);