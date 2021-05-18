<form class="mt-6" wire:submit.prevent="submit" x-data="formController()" x-cloak>

    @if (session()->has('message'))
    <div class="alert alert-success">
        {{ session('message') }}
    </div>
    @endif

    <h3 x-text="choice"> </h3>
    
    <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Catégorie</label>
    @error('product_type_id') <span class="error">{{ $message }}</span> @enderror
    <select x-model.number="choice"
        class="border border-gray-300 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
        wire:model.defer="product_type_id">

        <option value="" selected>Choisis une categorie</option>
        @foreach($productType as $item)
        <option :value="{{ $item->id }}">{{ $item->name }}</option>
        @endforeach
    </select>
    
    <div x-spread="all">
        <x-forms.create-product.input type="text" id="product_name">Nom</x-forms.create-product.input>
        <x-forms.create-product.input type="text" id="description">Description</x-forms.create-product.input>
        <x-forms.create-product.input type="number" id="alcohol">Alcool</x-forms.create-product.input>
        <x-forms.create-product.input type="text" id="origin">Origine</x-forms.create-product.input>
        <x-forms.create-product.input type="number" step="1" id="qty">Quantité</x-forms.create-product.input>
        <x-forms.create-product.input type="number" step="0.01" id="price">Prix</x-forms.create-product.input>
    </div>


    <button type="submit"
        class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        créer
    </button>

</form>


<script>
    
function formController() {

    let alcohol = [1, 2, 4, 5, 6]
    let origin = [1, 2, 6]


    return {
        choice: 0,

        all: {
            ['x-show']() {
                return this.choice != 0
            },
        },

        product_name: {},
        description: {},
        alcohol: {
            ['x-show']() {
                return alcohol.includes(this.choice)
            },
        },
        origin: {
            ['x-show']() {
                return origin.includes(this.choice)
            },
        },
        qty: {},
        price: {},


        // alcohol: {
        //     ['x-show']() {
        //         return alcohol.includes(this->choice)
        //     },
        // },
    }
}
    
</script>