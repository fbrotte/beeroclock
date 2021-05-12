<?php
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

function getPrice($price, $qty = NULL, $unit = 'cl'): String
{
    if($unit === 'l')
        $qty = $qty / 100;

    if($unit === '4l')
    {
        $qty = $qty / 25;
        if($qty < 1)
            $price = $price * $qty;
        else
            $price = $price / $qty;
 
        return $price . '€ / le demi';
    }

    if($qty === NULL)
        return $price . '€';

    return $price . '€ / ' . $qty . $unit;
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