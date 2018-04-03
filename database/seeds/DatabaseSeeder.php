<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $categories = factory(App\Category::class, 25)->create();
        foreach ($categories as $category) {
            $products = factory(App\Product::class, random_int(1, 50))->create(['category_id' => $category->id]);
            foreach ($products as $product) {
                factory(App\Variant::class, random_int(0, 50))->create(['product_id' => $product->id]);
            }
        }
    }
}
