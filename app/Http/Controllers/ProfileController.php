<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index()
    {
        $user = User::find(auth()->user()->id);
        //data yang dikirim
        $data = [
            'user' => $user,
        ];
        return Inertia::render('profile', $data);
    }
}
