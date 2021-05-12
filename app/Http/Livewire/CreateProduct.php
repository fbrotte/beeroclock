<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\ProductType;
use App\Models\Product;

class CreateProduct extends Component
{
    public $product_name;
    public $description;
    public $alcohol;
    public $origin;
    public $price;
    public $cl;
    public $product_type_id;

    protected $rules = [
        'product_name' => 'required',
        'description' => 'required',
        'alcohol' => 'numeric',
        'origin' => 'alpha_num',
        'price' => 'numeric',
        'cl' => 'integer',
        'product_type_id' => 'required|exists:ProductType,id',

    ];

    protected $messages = [
        'product_name.required' => 'Le nom est obligatoire',
        'description.required' => 'La drescription est obligatoire',
        'alcohol.numeric' => 'Le pourcentage d\alcool doit etre indiqué en chiffre',
        'price.numeric' => 'Le prix doit être indiqué en chiffre',
        'cl.integer' => 'La quantité doit être indiqué en avec un nombre entier',
        'product_type_id.required' => 'Ne t\amuse pas à changer le html petit coquin',
    ];

    public function submit()
    {
        $data = $this->validate();
        dump('test');
        Product::create($data);
        session()->flash('message', 'Post successfully updated.');
    }

    public function render()
    {
        return view('admin.livewire.create-product', [
            'productType' => ProductType::all(),
        ]);
    }
}
