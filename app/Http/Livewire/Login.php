<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\Auth;

class Login extends Component
{
    public $email;
    public $password;

    protected $rules = [
        'email' => 'required',
        'password' => 'required',
        // 'password_confirmation' => 'same:password'
    ];

    protected $messages = [
        'email.required' => "l'email est obligatoire",
        'password.required' => "Le mot de passe est obligatoire",
    ];

    public function submit()
    {
        $credentials = $this->validate();

        if(Auth::attempt($credentials))
        {
            $this->reset();
            return redirect()->route('showcase');
        }
        session()->flash('error', 'Mauvais email ou mot de passe');
    }


    public function render()
    {
        return view('auth.livewire.login');
    }
}
