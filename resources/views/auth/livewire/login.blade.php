<div>
    @if (session()->has('error'))
        <div class="alert-red">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
            <strong>Attention!</strong> <p>{{  session('error') }}</p>
        </div>
    @endif
    
    <form wire:submit.prevent="submit" id="login" x-spread="login_reveal">
        @csrf
        <label>Adresse Mail</label>
        <input wire:model.defer="email" type="email" placeholder="contact@example.com">

        <label>Mot de passe</label>
        <input wire:model.defer="password" type="password">
        <button type="submit">Envoyer</button>
    </form>
</div>
