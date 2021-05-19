<form class="mt-6" wire:submit.prevent="submit" x-data="formController()" x-cloak>

    @if (session()->has('message'))
        <div class="alert alert-success">
            {{ session('message') }}
        </div>
    @endif

    <x-forms.category-select :options="$productType"></x-forms.category-select>
    
    <x-dashboard.product-form button="Ajouter ce produit"/>
</form>


