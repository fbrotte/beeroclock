<?php

namespace App\View\Components\Dashboard;

use Illuminate\View\Component;

class ProductForm extends Component
{
    public $button;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($button)
    {
        $this->button = $button;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.dashboard.product-form');
    }
}
