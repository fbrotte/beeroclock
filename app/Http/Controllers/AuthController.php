<?php

namespace App\Http\Controllers;

use App\Models\UserTracking;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index()
    {
        return view('showcase.pages.auth.index');
    }

    public function scan_qrcode(Int $table)
    {
        $user = Auth::user();

        $last_scan = UserTracking::where('users_id', $user->id)->alreadyScan();

        if($last_scan->count() > 0)
            return redirect(route('showcase'))->with('status', 'alreadyScan');

    
        $tracking_created = UserTracking::create([
            'users_id' => $user->id,
            'table' => $table
        ]);

        if ($tracking_created->id % 100 === 0)
             return redirect(route('showcase'))->with('status', 'userWin');
 
         return redirect(route('showcase'))->with('status', 'userLogged');
    }


    public function logout()
    {
        Auth::logout();
        return redirect()->route('login');
    }


   public function login(Request $request)
   {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended(route('showcase'));
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
   }

   public function register(Request $request)
   {

   }
}
