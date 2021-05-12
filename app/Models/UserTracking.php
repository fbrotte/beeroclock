<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class UserTracking extends Model
{
    use HasFactory;

    protected $guarded = [''];

    public function scopeAlreadyScan($query)
    {
        return $query->where('created_at', '>', Carbon::now()->subHours(3));
    }
}
