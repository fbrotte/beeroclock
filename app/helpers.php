<?php
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

function getPrice($price, $qty = NULL, $unit = 'unit'): String
{
    if($unit === '4l')
    {
        $qty = $qty / 25;
        if($qty < 1)
            $price = $price * $qty;
        else
            $price = $price / $qty;
 
        return round($price, 1) . '€ / le demi';
    }

    // if unit
    return $price . '€';
}

function deg($deg)
{
    return $deg . '° d\'alcool';
}

function isActive($path): String
{
    return Route::currentRouteName() === $path ? 'active' : '';
}

function fullname($who = 'auth'): String
{
    if($who === 'auth')
        $who = Auth::user();
    else
        $who = User::find($who);

    return $who->firstname . ' ' . $who->lastname;
}



function image($img, $h = null, $w = null, $q = 10, $fm = 'webp', $crop = 'crop')
{
    return asset("image/" .$img. "?h=".$h."&w=".$w."&q=".$q."&fm=".$fm."&fit=".$crop . '&bg=white'); 
}