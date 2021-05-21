@extends('showcase.layouts.showcase')
@section('title', 'Beer\'o Clock')
@section('slogan', 'We keep in touch')
@section('content') 

<style>
    [x-cloak] {
        display: none !important;
    }
</style>

{{-- <main x-data="{step: 'home'}"> --}}
<main x-data="formController()" x-cloak>
    <div id="home" x-spread="btn_reveal">
        <button  @click="btnLogin()">
            <b>Connexion</b><br/>
            <p>Je suis consomateur</p>
        </button>
        <button @click="btnRegister()">
            <b>S'enregister</b><br/>
            <p>Consomateur en devenir</p>
        </button>
    </div>

    <img src="/images/boutton.svg" x-spread="home" @click="btnHome">

    {{-- <form action="{{route('post_login')}}" id="login" method="post" x-spread="login_reveal">
        @csrf
        <label for="email">Adresse Mail</label>
        <input name="email" type="email" placeholder="Contact@example.com">
        <label for="Password">Mot de passe</label>
        <input name="password" type="password">
        <button type="submit">Envoyer</button>
    </form> --}}
    <livewire:login/>
    <livewire:register/>
</main>
<script>
    
    function formController() {
    // ['x-transition:enter']: 'transition ease-out duration-1000',
    // ['x-transition:enter-start']: 'opacity-0 transform scale-90',
    // ['x-transition:enter-end']: 'opacity-100 transform scale-100',
    // ['x-transition:leave']: 'transition ease-in duration-1000',
    // ['x-transition:leave-start']: 'opacity-100 transform scale-100',
    // ['x-transition:leave-end']: 'opacity-0 transform scale-90,"
    let animation = 'x-show.transition.in.duration.800ms.out.duration.0ms'
    return {
        step: 'home',

        btnHome() {
            this.step = 'home'
            
        },
        btnLogin() {
            this.step = 'login'
            twPleinEcran();
        },
        btnRegister() {
            this.step = 'register'
            twPleinEcran();
        },

        home: {
            ['x-show']() {
                return this.step != 'home'
            },
        },

        login_reveal: {
            [animation]() {
                return this.step == 'login'
            },
        },

        register_reveal: {
            [animation]() {
                return this.step == 'register'
            },
        },
        btn_reveal: {
            [animation]() {
                return this.step == 'home'
            },
        },
    }
}
    
</script>
@endsection