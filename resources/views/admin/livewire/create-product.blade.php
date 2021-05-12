
<form class="mt-6" wire:submit.prevent="submit">

    @if (session()->has('message'))
        <div class="alert alert-success">
            {{ session('message') }}
        </div>
    @endif

    <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Catégorie</label>
    <select class="border border-gray-300 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none" wire:model="product_type_id">

        @foreach($productType as $item)
            <option value="{{ $item->id }}">{{ $item->name }}</option>
        @endforeach
    </select>

    @error('product_name') <span class="error">{{ $message }}</span> @enderror
    <label class="block text-xs font-semibold text-gray-600 uppercase">Nom</label>
    <input type="text" wire:model="product_name"
        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        required />

    @error('description') <span class="error">{{ $message }}</span> @enderror
    <label class="block text-xs font-semibold text-gray-600 uppercase">Description</label>
    <input type="text" wire:model="description"
        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        required />

    @error('alcohol') <span class="error">{{ $message }}</span> @enderror
    <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Alcool</label>
    <input type="number" wire:model="alcohol"
        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        required />

    @error('origin') <span class="error">{{ $message }}</span> @enderror
    <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Origine</label>
    <input type="text" wire:model="origin"
        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        required />

    @error('price') <span class="error">{{ $message }}</span> @enderror
    <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Prix</label>
    <input type="text" wire:model="price"
        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        required />

    @error('cl') <span class="error">{{ $message }}</span> @enderror
    <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Quantité (cl)</label>
    <input type="number" wire:model="cl"
        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        required />

    <button type="submit"
        class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        créer
    </button>

</form>

