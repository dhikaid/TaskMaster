<?php

use App\Http\Controllers\OauthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'data' => 1,
    ]);
})->middleware('auth');

Route::get('/home', function () {
    return Inertia::render('Home', [
        'data' => 1,
    ]);
})->middleware('auth');

Route::get('/signup', function () {
    return Inertia::render('signup', [
        'isLoginPage' => false,
    ]);
});

Route::get('/signin', function () {
    return Inertia::render('signin', [
        'isLoginPage' => true
    ]);
})->name('login');

Route::post('/logout', [OauthController::class, 'logout'])->middleware('auth');

Route::get('/test', function () {
    return view('home');
});

// POST SIGNUP
Route::post('/oauth/signup', [OauthController::class, 'signup'])->middleware('guest');

// POST SIGNIN
Route::post('/oauth/signin', [OauthController::class, 'signin'])->middleware('guest');

Route::get('/forgetPassword', function () {
    return Inertia::render('forgetPassword', [
        'isLoginPage' => false,
    ]);
});