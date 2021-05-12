<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductType;
use Illuminate\Http\Request;

class ShowcaseController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function index()
    {
        // $draft_beer->first()->category->name;

        return view('showcase.pages.home', [
            'draft_beer' => ProductType::list('draft_beer'),
            'fridge_beer' => ProductType::list('fridge_beer'),
            'food' => ProductType::list('food'),
            'planteur' => ProductType::list('planteur'),
            'shooter' => ProductType::list('shooter'),
            'vine' => ProductType::list('vine'),
            'soft' => ProductType::list('soft'),
        ]);
    }
}
