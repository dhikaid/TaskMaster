<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ProfileController extends Controller
{

    // halaman tampilan
    public function index()
    {
        $user = User::find(auth()->user()->id);
        //data yang dikirim
        $data = [
            'user' => $user,
        ];
        return Inertia::render('profile', $data);
    }

    //halaman data
    public function update(User $user, Request $request)
    {
        //cek dlu
        Gate::authorize('update-myprofile');

        $rules = [
            'fullname' => 'required',
            'bio' => 'nullable|string|max:100'
        ];

        if ($request->username !== $user->username) {
            $rules['username'] = "required|unique:users,username";
        }

        if ($request->email !== $user->email) {
            $rules['email'] = "email:rfc,dns|required|unique:users,email";
        }

        $validatedData = $request->validate($rules);

        // update data
        User::where('id', $user->id)->update($validatedData);

        $data = [
            'status' => 200,
            'message' => "Your account has been updated!"
        ];

        return redirect('/profile')->with('message', $data);
    }
    public function edit()
    {
        $user = User::find(auth()->user()->id);
        //data yang dikirim
        $data = [
            'user' => $user,
        ];
        return Inertia::render('editProfile', $data);
    }
}
