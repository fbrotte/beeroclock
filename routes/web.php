<?php
namespace App;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ShowcaseController;

require __DIR__ . '/auth.php';

Route::get('/qrcode/{n_table}', [AuthController::class, 'scan_qrcode'])->name('qrcode');


Route::middleware(['auth.admin'])->group(function ()
{
    Route::get('/admin', [AdminController::class, 'product'])->name('admin');
    Route::get('/admin/stats', [AdminController::class, 'index'])->name('admin.stat');
    Route::get('/admin/produits', [AdminController::class, 'product'])->name('admin.product');
});

// utilities
Route::get('/image/{path}', [ImageController::class, 'show']);

    Route::get('/{name?}', [ShowcaseController::class, 'index'])->name('showcase');

Route::middleware(['auth'])->group(function ()
{
    Route::get('/deconnexion', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});