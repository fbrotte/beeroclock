<div>
    <div x-spread="all">
        <x-forms.input type="text" id="product_name">Nom</x-forms.input>
        <x-forms.input type="text" id="description">Description</x-forms.input>
        <x-forms.input type="number" step="0.1" id="alcohol">Alcool</x-forms.input>
        <x-forms.input type="text" id="origin">Origine</x-forms.input>
        <x-forms.input type="number" step="1" id="qty">Quantité</x-forms.input>
        <x-forms.input type="number" step="0.01" id="price">Prix</x-forms.input>
        
        <input type="file" wire:model="img">
        @error('image') <span class="error">{{ $message }}</span> @enderror
    </div>

    <button type="submit"
        class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        {{ $button }}
    </button>


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
        }
    }
        
    </script>

</div>