<div>
    <form wire:submit.prevent="submit" id="register" x-spread="register_reveal">
        @csrf

        <div class="alert-green">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
            <strong>Info!</strong> <p>Enregistre toi vite ! Si tu es le 100eme tu gagnes un demi au Beer !</p>
        </div>


        <label>Prénom</label>
        @error('firstname') <span class="error">{{ $message }}</span> @enderror
        <input wire:model.defer="firstname" type="text" placeholder="Olivier">

        <label>Nom</label>
        @error('lastname') <span class="error">{{ $message }}</span> @enderror
        <input wire:model.defer="lastname" type="text" placeholder="Faraudo">

        <label>Adresse Mail</label>
        @error('email') <span class="error">{{ $message }}</span> @enderror
        <input wire:model.defer="email" type="email" placeholder="contact@fabriknow.com">

        <label>Telephone</label>
        @error('phone') <span class="error">{{ $message }}</span> @enderror
        <input wire:model.defer="phone" type="tel" placeholder="07 67 54 11 50">

        <label>Mot de passe</label>
        @error('password') <span class="error">{{ $message }}</span> @enderror
        <input wire:model.defer="password" type="password" placeholder="1234 ? x)">

        <label>Confirmation</label>
        @error('password_confirmation') <span class="error">{{ $message }}</span> @enderror
        <input wire:model.defer="password_confirmation" type="password" placeholder="Sûr ?">


        <button type="submit">Creer mon compte</button>
    </form>
</div>
