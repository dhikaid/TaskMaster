<?php

use App\Http\Controllers\OauthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home', [
        'data' => 1,
    ]);
});

Route::get('/home', function () {
    return Inertia::render('Home', [
        'data' => 1,
    ]);
})->middleware('auth');

Route::get('/register', function () {
    return Inertia('Register');
});

Route::get('/login', function () {
    return Inertia('Login');
})->name('login');

Route::get('/test', function () {
    return view('home');
});

// POST REGISTER
Route::post('/oauth/register', [OauthController::class, 'register'])->middleware('guest');

// POST LOGIN
Route::post('/oauth/login', [OauthController::class, 'login'])->middleware('guest');
