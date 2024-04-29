<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// HOME
Route::get('/a', function () {
    return Inertia::render('Home', [
        'data' => 1,
    ]);
});

// LOGIN
Route::get('/logina', function () {
    return Inertia::render('Home');
});

Route::get('/login', function () {
    return Inertia::render('Login', [
        'data' => 2,
    ]);
});
