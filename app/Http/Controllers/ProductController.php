<?php

namespace App\Http\Controllers;

use App\Models\ProductType;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $softs = ProductType::list('soft')->pluck('name', 'product_id');
        $softs = ProductType::draftBeer();
        // return $soft;
        return view('pages.vitrine.home', compact('softs'));
    }
}
