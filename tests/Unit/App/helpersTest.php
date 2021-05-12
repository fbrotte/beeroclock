<?php

namespace Tests\Unit\App;

use PHPUnit\Framework\TestCase;

class helpersTest extends TestCase
{

    /** @test */
    public function return_cl_beer()
    {
        $price = getPrice(5.3, 20);
        $this->assertSame($price, '5.3€ / 20cl');
    }

    /** @test */
    public function return_l_beer()
    {
        $price = getPrice(5.3, 200, 'l');
        $this->assertSame($price, '5.3€ / 2l');
    }

    /** @test */
    public function return_demi_beer()
    {
        $price = getPrice(5.3, 25, '4l');
        $this->assertSame($price, '5.3€ / le demi');
    }

    /** @test */
    public function return_2demi_beer()
    {
        $price = getPrice(6, 50, '4l');
        $this->assertSame($price, '3€ / le demi');
    }

    /** @test */
    public function return_05demi_beer()
    {
        $price = getPrice(6, 12.5, '4l');
        $this->assertSame($price, '3€ / le demi');
    }

    /** @test */
    public function return_other()
    {
        $price = getPrice(5.3);
        $this->assertSame($price, '5.3€');
    }
}
