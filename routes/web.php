<?php

use App\Http\Controllers\OauthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home', [
        'data' => 1,
    ]);
});

Route::get('/oauth', function () {
    return Inertia::render('Login');
});


Route::get('/test', function () {
    return view('home');
});

// POST REGISTER
Route::post('/oauth/register', [OauthController::class, 'register']);

// POST LOGIN
Route::post('/oauth/login', [OauthController::class, 'login']);
