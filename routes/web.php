<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'data' => 1,
    ]);
});

Route::get('/login', function () {
    return Inertia::render('Login', [
        'data' => 2,
    ]);
});
