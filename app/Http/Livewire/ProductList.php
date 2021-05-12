<?php

namespace App\Http\Livewire;

use App\Models\Product;
use Livewire\Component;

use WithPagination;
class ProductList extends Component
{
    public $search = '';
    public $editId = 0;

    public function startEdit(int $id)
    {
        $this->editId = $id;
    }

    public function render()
    {
        return view('admin.livewire.product-list', [
            'products' => Product::where('product_name', 'LIKE', "%{$this->search}%")
                ->orderBy('product_type_id')
                ->paginate(5)
        ]);
    }
}

// ->where('product_type_id', '')