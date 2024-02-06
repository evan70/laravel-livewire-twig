<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Counter extends Component
{
    public int $count = 1;

    public function add()
    {
        $this->count++;
    }

    public function subtract()
    {
        $this->count--;
    }
}