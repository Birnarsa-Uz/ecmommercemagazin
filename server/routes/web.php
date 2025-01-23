<?php

use App\Http\Controllers\FuckController;
use Illuminate\Support\Facades\Route;
Route::middleware(['api'])->group(function () {
    
 });
Route::get('/', function () {
    return view('welcome');
});


Route::post("/signup", [FuckController::class, "signup"]);
Route::get('/token', function () {
    return response()->json(["token" => csrf_token()]);
});

Route::get('/get-metodi', [FuckController::class, "index"]);