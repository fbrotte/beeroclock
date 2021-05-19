<?php

namespace App\Http\Livewire;

use App\Models\User;
use Livewire\Component;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class Register extends Component
{
    public $firstname;
    public $lastname;
    public $email;
    public $phone;
    public $password;
    public $password_confirmation;


    protected $rules = [
        'firstname' => 'required|string|max:255',
        'lastname' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'phone' => 'required|string|max:255',
        'password' => 'required|string|confirmed|min:8',
        // 'password_confirmation' => 'same:password'
    ];

    protected $messages = [
        'firstname.required' => "Le prenom est obligatoire",
        'lastname.required' => "Le nom est obligatoire",
        'email.required' => "l'email est obligatoire",
        'phone.required' => "Le telephone est obligatoire",
        'password.required' => "Le mot de passe est obligatoire",
        'password.confirmed' => "Le mot de passe ne correspond pas",
    ];

    public function submit()
    {
        $this->validate();
        // dump('test');
        $user = User::create([
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'email' => $this->email,
            'phone' => $this->phone,
            'password' => Hash::make($this->password),
        ]);

        // dd('test');

        // event(new Registered($user));

        Auth::login($user);

        $this->reset();

        return redirect()->route('showcase');

    }

    public function render()
    {
        return view('auth.livewire.register');
    }
}
