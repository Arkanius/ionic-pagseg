<?php

header('Access-Control-Allow-Origin:  *');
header("Access-Control-Allow-Credentials", "true");
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

use App\Product;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/products', function () {
    return response()->json(Product::all());
});
