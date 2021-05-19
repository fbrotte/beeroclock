<?php

namespace App\Http\Livewire;

use App\Models\Product;
use Livewire\Component;
use App\Models\ProductType;
use Illuminate\Support\Str;
use Livewire\WithFileUploads;

class CreateProduct extends Component
{
    use WithFileUploads;
    public $product_name;
    public $description;
    public $alcohol;
    public $origin;
    public $price;
    public $qty;
    public $product_type_id;
    public $img;

    protected $rules = [
        'product_name' => 'required',
        'description' => 'required',
        'alcohol' => 'numeric',
        'origin' => 'string',
        'price' => 'numeric | required|max:10',
        'qty' => 'integer',
        'product_type_id' => 'required|exists:product_types,id',
        'img' => 'image|max:10240',

    ];

    protected $messages = [
        'product_name.required' => "Le nom est obligatoire",
        'description.required' => "La drescription est obligatoire",
        'alcohol.numeric' => "Le pourcentage d'alcool doit etre indiqué en chiffre",
        'origin.alpha_num' => "Il faut remplire uniquement avec des lettres.",
        'price.numeric' => "Le prix doit être indiqué en chiffre",
        'price.max' => 'C\'trop cher frere',
        'qty.integer' => "La quantité doit être indiqué en avec un nombre entier",
        'product_type_id.exists' => "Ne t'amuse pas à changer le html petit coquin",
        'product_type_id.required' => "Tu dois selectionner une catagorie obligatoirement",
    ];

    public function submit()
    {
        $data = $this->validate();
        // remove img inner array
        array_pop($data);

        $img_url_slug = $this->img->getClientOriginalName();

        $this->img->storeAs('', $img_url_slug);
        $data = array_merge($data, ['img_url' => $img_url_slug]);

        // dd($data);

        // dump('test');
        Product::create($data);
        session()->flash('message', 'Le produit a bien été ajouté');

        $this->emit('alert_remove');
        $this->reset();
        $this->product_type_id = 0;
    }

    public function render()
    {
        return view('admin.livewire.create-product', [
            'productType' => ProductType::all(),
        ]);
    }
}
