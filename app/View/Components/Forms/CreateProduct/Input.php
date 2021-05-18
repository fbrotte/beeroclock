<?php

namespace App\View\Components\Forms\CreateProduct;

use Illuminate\View\Component;

class Input extends Component
{
    public $id;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($id)
    {
        // dd($type);
        $this->id = $id;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.forms.create-product.input');
    }
}
