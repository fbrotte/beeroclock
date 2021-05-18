<?php

namespace App\Models;

use App\Models\ProductType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    public $timestamps = true;

    protected $guarded = [''];

    public function category()
    {
        return $this->belongsTo(ProductType::class, 'product_type_id');
    }
}
