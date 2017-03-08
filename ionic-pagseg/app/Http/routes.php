<?php

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

Route::group(['prefix' => 'api', 'middleware' => 'cors'], function() {
	Route::get('/products', function () {
	    return response()->json(Product::all()->toArray());
	});

	Route::get('session', 'PagSeguroController@getSessionId');	
	Route::post('checkout', 'OrderController@store');	
});



