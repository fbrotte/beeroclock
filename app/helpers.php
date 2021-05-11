<?php

function getPrice($price, $qty = NULL, $unit = 'cl')
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