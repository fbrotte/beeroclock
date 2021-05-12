<div class="card">

    <div class="card-body">
        <div class="flex flex-row justify-between items-center">
            <h1 class="font-extrabold text-lg">Liste des produits</h1>
        </div>
        <div class="pt-2 relative mx-auto text-gray-600">
            <input
                class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search" wire:model="search">
            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                    xml:space="preserve" width="512px" height="512px">
                    <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
            </button>
        </div>
        <div class="relative inline-flex">
            <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
                <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299" fill-rule="nonzero" /></svg>
            <select id="category"
                class="border border-gray-300 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option>Biére</option>
                <option>Vin</option>
                <option>Shooter</option>
                <option>Planter</option>
                <option>Soft</option>
                <option>Plateau charcuterie</option>
            </select>
        </div>
        <table class="table-auto w-full mt-5 text-right">

            <thead>
                <tr>
                    <td class="py-4 font-extrabold text-sm text-left">Nom</td>
                </tr>
            </thead>


            {{-- @dump($products) --}}
            <tbody>
                @foreach($products->all() as $item)
                    <tr class="text-center" wire:click="startEdit({{ $item->id }})">
                        <td class="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
                            <div class="w-8 h-8 overflow-hidden mr-3">
                                <img src="img/sneakers.svg" class="object-cover">
                            </div>
                            {{ $item->product_name }} 
                            {{-- <button class="" >Editer</button> --}}
                        </td>
                    </tr>
                    

                    @if($editId === $item->id)
                        <hr>
                        <tr>
                            <td class="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
                                editer
                                {{-- <livewire:create-product /> --}}
                            </td>
                        </tr>
                        <hr>
                    @endif
                @endforeach
                </>

                <!-- item -->
               {{ $products->links() }}
                
                {{-- {{ $products->links() }} --}}

                
                
                
            </tbody>

        </table>

    </div>
</div>
