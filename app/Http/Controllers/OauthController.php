<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OauthController extends Controller
{


    // logij
    public function login(Request $request)
    {
        return dd($request);
    }

    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'username' => "required|max:50|exists:users,username",
            'email' => "email:rfc,dns|required",
            'password1' => "required|min:8",
            'password2' => "required|min:8|same:password1",
        ]);

        $user = User::create($validatedData);
        return Inertia::render("Home");
    }
}
