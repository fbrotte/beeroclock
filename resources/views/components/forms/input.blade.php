<div x-spread="{{ $id }}">
    <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">{{ $slot }}</label>
    @error($id) <span class="error">{{ $message }}</span> @enderror

    <input {{ $attributes }} wire:model.defer="{{ $id }}"
        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"/>
</div>