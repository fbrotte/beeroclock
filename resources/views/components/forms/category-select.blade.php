<div>
    <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Catégorie</label>
    {{-- @error('product_type_id') <span class="error">{{ $message }}</span> @enderror --}}
    <select x-model.number="choice"
        class="border border-gray-300 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
        wire:model="product_type_id">

        <option value="0" selected>Choisis une categorie</option>
        @foreach($options as $item)
        <option value="{{ $item->id }}">{{ $item->name }}</option>
        @endforeach
    </select>
</div>