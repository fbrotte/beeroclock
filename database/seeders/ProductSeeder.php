<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product = [
            [
                'product_name' => 'Delirium Red',
                'alcohol' => '1',
                'description' => 'La classic',
                'origin' => 'Quebec',
                'product_type_id' => 1,
                'price' => 2.99,
                'qty' => 33,
                
            ],
            [
                'product_name' => 'Lindemans Pomme',
                'alcohol' => '5.5',
                'description' => 'la meilleur',
                'origin' => 'Pollogne',
                'product_type_id' => 1,
                'price' => 2.99,
                'qty' => 33,
                
            ],
            [
                'product_name' => 'WIPA blanche IPA des cuves de sassenage',
                'alcohol' => '4.8',
                'description' => 'une IPA',
                'origin' => 'Suisse',
                'product_type_id' => 1,
                'price' => 2.99,
                'qty' => 33,
                
            ],
            [
                'product_name' => 'Mousse génépi',
                'alcohol' => '2.2',
                'description' => 'Pousse mousse',
                'origin' => 'Zenzibar',
                'product_type_id' => 1,
                'price' => 2.99,
                'qty' => 33,
                
            ],
            [
                'product_name' => 'Saucisson artisanal de Haute Savoie',
                'description' => 'poivre, fumé, beaufort, nature, noisette selon dispo',
                'price' => 7,
                'product_type_id' => 3,
                
            ],
            [
                'product_name' => 'Terrine Du Haut Cantal',
                'description' => 'campagne, canard, sanglier selon dispo',
                'price' => 7,
                'product_type_id' => 3,
                
            ],
            [
                'product_name' => 'Le plateau Végan',
                'description' => 'campagne, canard, sanglier selon dispo',
                'price' => 7,
                'product_type_id' => 3,
                
            ],
            [
                'product_name' => 'Mixte 4 bols Chips Brets',
                'description' => 'campagne, canard, sanglier selon dispo',
                'price' => 8,
                'product_type_id' => 3,
                
            ],
            [
                'product_name' => 'Le Plateau mixte',
                'description' => '2 fromages + saucisson ou terrine au choix',
                'price' => 15,
                'product_type_id' => 3,
                
            ],
            [
                'product_name' => 'Plateau royal  4 fromages',
                'description' => '1/2 reblochon, chèvre frais , St marcellin , Comté du Jura',
                'price' => 17,
                'product_type_id' => 3,
                
            ],
            [
                'product_name' => 'UBY N°4',
                'alcohol' => '3.5',
                'description' => 'Domaine UBY Côtes de Gascogne',
                'origin' => 'France',
                'product_type_id' => 6,
                'price' => 5,
                'qty' => 15,
                
            ],
            [
                'product_name' => 'Petit Pont ',
                'alcohol' => '2.2',
                'description' => 'Domaine Preignes le vieux',
                'origin' => 'France',
                'product_type_id' => 6,
                'price' => 5,
                'qty' => 15,
                
            ],
            [
                'product_name' => 'Rosé Sonnailler ',
                'alcohol' => '2.4',
                'description' => 'Domaine château du Sonnailler',
                'origin' => 'France',
                'product_type_id' => 6,
                'price' => 5,
                'qty' => 15,
                
            ],
            [
                'product_name' => 'Vins',
                'alcohol' => '5.2',
                'description' => '',
                'origin' => 6,
                'product_type_id' => 6,
                'price' => 2.99,
                'qty' => 33,
                
            ],
            [
                'product_name' => 'Coca Cola',
                'description' => 'bah du coca',
                'origin' => 'USA',
                'product_type_id' => 7,
                'price' => 3,
                'qty' => 33,
                
            ],
            [
                'product_name' => 'Ice tea',
                'description' => 'Ice tea (oui c\'est froid)',
                'product_type_id' => 7,
                'price' => 3,
                'qty' => 33,
                
            ],
            [
                'product_name' => 'Monster',
                'description' => 'Monster Energy classic',
                'product_type_id' => 7,
                'price' => 5,
                'qty' => 50,
                
            ],
            [
                'product_name' => 'Vodka',
                'alcohol' => '10',
                'description' => 'Disponible en grenadine , menthe glaciale, banane verte, fruit de la passion ',
                'product_type_id' => 5,
                'price' => 2.50,
            ],
            [
                'product_name' => 'Chartreuse ',
                'description' => 'Disponible en verte, Génépi, Baileys',
                'alcohol' => '9.9',
                'product_type_id' => 5,
                'price' => 3.5,
            ],
            
        ];
        
        foreach ($product as $beer)
        {
            Product::create($beer);
        }
    }
}
