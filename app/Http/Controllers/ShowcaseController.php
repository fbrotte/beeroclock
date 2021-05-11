<?php

namespace App\Http\Controllers;

use App\Models\ProductType;
use Illuminate\Http\Request;

class ShowcaseController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('pages.vitrine.home', [
            'draft_beers' => ProductType::list('draft_beer'),
            'fridge_beers' => ProductType::list('fridge_beer'),
            'foods' => ProductType::list('food'),
            'planteurs' => ProductType::list('planteur'),
            'shooters' => ProductType::list('shooter'),
            'vines' => ProductType::list('vine'),
            'softs' => ProductType::list('soft'),
        ]);
    }
}
