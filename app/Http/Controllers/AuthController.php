<?php

namespace App\Http\Controllers;

use App\Models\UserTracking;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function scan_qrcode(Request $request, Int $table)
    {
        // dd('test');
        $request->session()->push('qrcode', $table);
        return redirect()->route('login');
    }
}
