<?php

namespace App\View\Components\Forms;

use Illuminate\View\Component;
use Illuminate\Support\Collection;

class CategorySelect extends Component
{

    public Collection $options;
    public String $id;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(Collection $options, String $id)
    {
        $this->options = $options;
        $this->id = $id;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.forms.category-select');
    }
}
