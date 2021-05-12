<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class AdminController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function index()
    {
        return view('admin.home');
    }

    public function product()
    {
        return view('admin.product');
    }

    public function user_list()
    {
       return User::paginate(10);
    }
}
