<?php
namespace App\Http\Livewire;

use WithPagination;
use App\Models\Product;

use Livewire\Component;
use App\Models\ProductType;

class ProductList extends Component
{
    public $search = '';
    public $editId = 0;
    public $product_type_id = 0;

    public $name;
    public $description;
    public $alcohol;
    public $origin;
    public $qty;
    public $price;

    protected $queryString = [
        'search' => ['except' => ''],
        'product_type_id' => ['except' => 0]
    ];

    protected $rules = [
        ''
    ]

    public function startEdit(int $id)
    {
        $this->editId = $id;
    }

    public function render()
    {
        $productType = ProductType::all();

        $products = Product::where('product_name', 'LIKE', "%{$this->search}%")->orderBy('product_type_id');

        if($this->product_type_id != 'ALL')
            $products = $products->where('product_type_id', $this->product_type_id);


        $products = $products->paginate(5);

        return view('admin.livewire.product-list', compact('productType', 'products'));


    }
}

// ->where('product_type_id', '')