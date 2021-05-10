<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'auth:api'
  ], function() {
    Route::get('profile','api\ProfileController@profile');
    Route::put('update', 'api\ProfileController@update');
    Route::put('reset', 'api\ProfileController@changepwd');
  });

  Route::post('upload','api\ProfileController@uploadimage');
  Route::post('saveage','api\ProfileController@saveage');
  Route::post('savenames','api\ProfileController@savenm');
  Route::post('saveadresse','api\ProfileController@saveadr');
  Route::post('saveadresse','api\ProfileController@saveadr');
  Route::post('resavenames','api\ProfileController@resavenm');

  Route::group(['middleware' => 'prevent-back-history'],function(){
    Auth::routes();
    Route::post('logout', 'api\ProfileController@logout');
  });



