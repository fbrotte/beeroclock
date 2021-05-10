<?php

namespace App\Http\Controllers;

use App\Models\UserTracking;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class UserTrackingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

   public function scan_qrcode(Int $table)
   {
        $user = Auth::user();

        //dd($table);
        $last_scan = UserTracking::where('users_id', $user->id)->alreadyScan();

        if($last_scan->count() > 0)
        // $request->session()->flash('status', 'Task was successful!');
            return redirect(route('showcase'))->with('status', 'alreadyScan');

    
        $tracking_created = UserTracking::create([
            'users_id' => $user->id,
            'table' => $table
        ]);

        return $this->result($tracking_created);
   }

   private function result($tracking_created)
   {
        if ($tracking_created->id % 100 === 0)
            return redirect(route('showcase'))->with('status', 'userWin');

        return redirect(route('showcase'))->with('status', 'userLogged');
   }
}
