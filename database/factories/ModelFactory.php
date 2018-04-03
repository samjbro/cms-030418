<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Product::class, function (Faker $faker) {
    $words = $faker->words(random_int(1, 4), true);
    return [
        'title' => ucwords($words),
        'url_stub' => snake_case($words),
        'overview' => $faker->paragraph,
        'category_id' => function () {
            return factory(App\Category::class)->create()->id;
        }
    ];
});

$factory->define(App\Variant::class, function (Faker $faker) {
    $words = $faker->words(random_int(1, 4), true);
    return [
        'name' => ucwords($words),
        'url_stub' => snake_case($words),
        'stock_id' => $faker->randomNumber(8),
        'product_id' => function () {
            return factory(App\Product::class)->create()->id;
        }
    ];
});

$factory->define(App\Category::class, function (Faker $faker) {
    $words = $faker->words(random_int(1, 4), true);
    return [
        'title' => ucwords($words),
        'url_stub' => snake_case($words),
        'overview' => $faker->paragraph,
    ];
});