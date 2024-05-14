<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;

class OauthController extends Controller
{

    // signin
    public function signin(Request $request)
    {
        $validatedData = $request->validate([
            'username' => "required",
            'password' => "required|min:8",
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

    // signup
    public function signup(Request $request)
    {
        $validatedData = $request->validate([
            'username' => "required|unique:users,username",
            'email' => "email:rfc,dns|required|unique:users,email",
            'password1' => "required|min:8",
            'password2' => "required|min:8|same:password1",
        ], [
            "password1.required" => "The password field is required.",
            "password2.required" => "The password field is required.",
            "password1.min" => "The password field must be at least 8 characters.",
            "password2.min" => "The password field must be at least 8 characters.",
            "password2.same" => "The password must be same.",
        ]);

        $validatedData['password'] = $validatedData['password2'];

        $user = User::create($validatedData);

        $data = [
            'status' => 200,
            'message' => "Your account has been created. Please signin!"
        ];

        return redirect('/signin')->with('message', $data);
    }

    // logout
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        $data = [
            'status' => 200,
            'message' => "You has been logged out from system!"
        ];

        return redirect('/signin')->with('message', $data);
    }


    // forgot
    public function forgot(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required'
        ]);


        $password = Password::sendResetLink([
            'email' => $request->email
        ]);

        $data = [
            'status' => 200,
            'message' => "If your account is correct, a forget password link will be sent to your email address."
        ];

        return redirect('/forgot')->with('message', $data);
    }

    // forgot token

}
