<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductType;
use App\Models\UserTracking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ShowcaseController extends Controller
{
    public function index(Request $request)
    {
        if($request->session()->get('qrcode') != null)
        {
            $qrcode = $this->qrcode($request->session()->get('qrcode')[0]);
            $request->session()->flash('message', $qrcode);
            $request->session()->forget('qrcode');
        }


        return view('showcase.pages.home', [
            'product_type' => ProductType::all(),
        ]);
    }

    private function qrcode(Int $table)
    {
        $user = Auth::user();

        $last_scan = UserTracking::where('users_id', $user->id)->alreadyScan();

        if($last_scan->count() > 0)
            return 'Vous avez deja scanner le qr code';
            // return redirect(route('showcase'))->with('status', 'alreadyScan');

    
        $tracking_created = UserTracking::create([
            'users_id' => $user->id,
            'table' => $table
        ]);

        if ($tracking_created->id % 100 === 0)
            return 'Tu as gagné un demi, va vite voir Olivier !';
            //  return redirect(route('showcase'))->with('status', 'userWin');
 
        return "Tu peux maintenant découvir la carte du Beer !";
        //  return redirect(route('showcase'))->with('status', 'userLogged');
    }
}
