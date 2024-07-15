<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OauthController;
use App\Http\Controllers\ProfileController;

// HALAMAN UTAMA
Route::get('/', function () {
    return redirect('/home');
})->middleware('auth');

// HALAMAN HOME
Route::get('/home', [HomeController::class, 'index'])->middleware('auth')->name('home');

// SIDEBAR TASK
Route::get('/task', function () {
    $user = User::myProfile();
    $data = [
        'user' => $user
    ];
    return Inertia::render('task', $data);
});

// SIDEBAR MEMBERS
Route::get('/members', function () {
    return Inertia::render('members');
});

// SIDEBAR FILE
Route::get('/fileManagement', function () {
    return Inertia::render('fileManagement');
});

// SIDEBAR SETTING
Route::get('/setting', function () {
    return Inertia::render('setting');
});

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

// PROFILE
Route::get('/profile', [ProfileController::class, 'index'])->middleware('auth');
Route::put('/profile/{user:uuid}', [ProfileController::class, 'update'])->middleware('auth');
Route::post('/profile/{user:uuid}', [ProfileController::class, 'changePassword'])->middleware('auth');
Route::get('/profile/edit', [ProfileController::class, 'edit'])->middleware('auth');

// DEBUG
Route::get('/image', function () {
    return fake()->image(storage_path('app/public/avatar'), 300, 300, null, false, false, 'A', true, 'png');
});
