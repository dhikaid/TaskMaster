<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OauthController extends Controller
{

    // login
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'username' => "required",
            'password' => "required|min:8"
        ]);

        if (Auth::attempt($validatedData)) {
            $request->session()->regenerate();
            return redirect()->intended('/home');
        }

        $data = [
            'status' => 419,
            'message' => "Username or Password is incorrect!"
        ];
        return  back()->with('message', $data);
    }

    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'username' => "required",
            'email' => "email:rfc,dns|required",
            'password1' => "required|min:8",
            'password2' => "required|min:8|same:password1",
        ]);

        $validatedData['password'] = $validatedData['password2'];

        $user = User::create($validatedData);
        return Inertia("Home");
    }
}
