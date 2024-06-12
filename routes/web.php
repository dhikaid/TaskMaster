<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OauthController;


// HALAMAN UTAMA
Route::get('/', function () {
    return Inertia::render('Home', [
        'data' => 1,
    ]);
})->middleware('auth');

// HALAMAN HOME
Route::get('/home', function () {
    $user = User::find(auth()->user()->id);
    return Inertia::render('Home', [
        'users' => $user,
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

Route::get('/forgot/{token}', [OauthController::class, 'forgetPassword'])->middleware('guest')->name('password.reset');

// POST SIGNUP
Route::post('/oauth/signup', [OauthController::class, 'signup'])->middleware('guest');

// POST SIGNIN
Route::post('/oauth/signin', [OauthController::class, 'signin'])->middleware('guest');

// POST FORGOT
Route::post('/oauth/forgot')->middleware('guest');
Route::post('/oauth/reset', [OauthController::class, 'resetPassword'])->middleware('guest');

// POST LOGOUT
Route::post('/logout', [OauthController::class, 'logout'])->middleware('auth');

Route::post('/oauth/forgot', [OauthController::class, 'forgot'])->middleware('guest');

Route::post('/oauth/resetPassword', [OauthController::class, 'resetPassword'])->middleware('guest');

//halaman gabut
Route::get('/homefull', function () {
    return Inertia::render('homefull');
});