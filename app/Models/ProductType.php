<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductType extends Model
{
    use HasFactory;
    public $timestamps = false;

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function scopeList($query, $type)
    {
        return $query->where('slug', $type)->first()->products;
    }
}

