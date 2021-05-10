@extends('layouts.showcase')
@section('title', 'Beer\'o Clock')
@section('slogan', 'Bienvenue')
@section('content') 

<style>
    [x-cloak] {
        display: none !important;
    }
</style>
{{-- <main x-data="{step: 'home'}"> --}}
<main x-data="formController()" x-cloak>

    <div id="home" x-show.transition.opacity.duration.2000ms="step == 'home'">
        <button @click="btnLogin()">
            <b>Connexion</b><br/>
            <p>Je suis consomateur</p>
        </button>
        <button @click="btnRegister()">
            <b>S'enregister</b><br/>
            <p>Consomateur en devenir</p>
        </button>
    </div>

    <button x-spread="home" @click="btnHome"> Retour </button>

    <form id="login" method="post" x-spread="login_reveal">
        <label for="email">Adresse Mail</label>
        <input type="email" placeholder="Contact@example.com">
        <label for="Password">Mot de passe</label>
        <input type="password">
        <button type="submit">Envoyer</button>
    </form>

    <form id="register" method="post" x-spread="register_reveal">
        <input type="text" placeholder="jean dupont">
        <input type="email" placeholder="Contact@example.com">
        <input type="password">
        <input type="tel" placeholder="0123456789">
        <button type="submit">Envoyer</button>
    </form>
</main>
<script>
    function formController() {
    // ['x-transition:enter']: 'transition ease-out duration-1000',
    // ['x-transition:enter-start']: 'opacity-0 transform scale-90',
    // ['x-transition:enter-end']: 'opacity-100 transform scale-100',
    // ['x-transition:leave']: 'transition ease-in duration-1000',
    // ['x-transition:leave-start']: 'opacity-100 transform scale-100',
    // ['x-transition:leave-end']: 'opacity-0 transform scale-90,"

    return {
        step: 'home',

        btnHome() {
            this.step = 'home'
        },
        btnLogin() {
            this.step = 'login'
        },
        btnRegister() {
            this.step = 'register'
        },

        home: {
            ['x-show']() {
                return this.step != 'home'
            },
        },

        login_reveal: {
            ['x-show.transition']() {
                return this.step == 'login'
            },
        },

        register_reveal: {
            ['x-show.transition']() {
                return this.step == 'register'
            },
        },
    }
}
    
</script>
@endsection