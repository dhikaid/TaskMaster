<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    // halaman utama
    public function index()
    {
        $user = User::find(auth()->user()->id);

        $data = [
            'user' => $user
        ];

        return Inertia::render('Home', $data);
    }
}
