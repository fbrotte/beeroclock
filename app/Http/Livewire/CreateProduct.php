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
    public $qty;
    public $product_type_id;

    protected $rules = [
        'product_name' => 'required',
        'description' => 'required',
        'alcohol' => 'numeric',
        'origin' => 'alpha_num',
        'price' => 'numeric | required',
        'qty' => 'integer',
        'product_type_id' => 'required|exists:product_types,id',

    ];

    protected $messages = [
        'product_name.required' => "Le nom est obligatoire",
        'description.required' => "La drescription est obligatoire",
        'alcohol.numeric' => "Le pourcentage d'alcool doit etre indiqué en chiffre",
        'origin.alpha_num' => "Il faut remplire uniquement avec des lettres.",
        'price.numeric' => "Le prix doit être indiqué en chiffre",
        'qty.integer' => "La quantité doit être indiqué en avec un nombre entier",
        'product_type_id.exists' => "Ne t'amuse pas à changer le html petit coquin",
        'product_type_id.required' => "Tu dois selectionner une catagorie obligatoirement",
    ];

    public function submit()
    {
        $data = $this->validate();
        // dump('test');
        Product::create($data);
        session()->flash('message', 'Le produit a bien été ajouté');

        $this->emit('alert_remove');
        $this->reset();
    }

    public function render()
    {
        return view('admin.livewire.create-product', [
            'productType' => ProductType::all(),
        ]);
    }
}
