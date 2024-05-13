<?php

use App\Http\Controllers\OauthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// HALAMAN UTAMA
Route::get('/', function () {
    return Inertia::render('Home', [
        'data' => 1,
    ]);
})->middleware('auth');

// HALAMAN HOME
Route::get('/home', function () {
    return Inertia::render('Home', [
        'data' => 1,
    ]);
})->middleware('auth');

// HALAMAN SIGNUP
Route::get('/signup', function () {
    return Inertia::render('signup', [
        'isLoginPage' => false,
    ]);
});

// HALAMAN SIGNIN
Route::get('/signin', function () {
    return Inertia::render('signin', [
        'isLoginPage' => true
    ]);
})->name('login');

// HALAMAN FORGOT
Route::get('/forgot', function () {
    return Inertia::render('forgot');
})->middleware('guest');

Route::get('/resetPassword', function () {
    return Inertia::render('resetPassword');
})->middleware('guest');
// POST SIGNUP
Route::post('/oauth/signup', [OauthController::class, 'signup'])->middleware('guest');

// POST SIGNIN
Route::post('/oauth/signin', [OauthController::class, 'signin'])->middleware('guest');

// POST FORGOT
Route::post('/oauth/forgot')->middleware('guest');

// POST LOGOUT
Route::post('/logout', [OauthController::class, 'logout'])->middleware('auth');
