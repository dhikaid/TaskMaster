<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{

    // halaman tampilan
    public function index()
    {
        $user = User::myProfile();
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
            'bio' => 'nullable|string|max:100',

        ];




        if ($request->username !== $user->username) {
            $rules['username'] = "required|unique:users,username";
        }

        if ($request->email !== $user->email) {
            $rules['email'] = "email:rfc,dns|required|unique:users,email";
        }
        if ($request->file('image') != null) {
            $rules['image'] = 'image|file|max:10240';
        }

        $validatedData = $request->validate($rules);

        if ($request->file('image') && $request->file('image') != null) {
            $validatedData['image'] = $request->file('image')->store('avatar');
        }

        // update data
        User::where('id', $user->id)->update($validatedData);

        $data = [
            'status' => 200,
            'message' => "Your account has been updated!"
        ];

        return redirect('/profile/edit')->with('message', $data);
    }
    public function edit()
    {
        //cek dlu
        Gate::authorize('update-myprofile');

        $user = User::myProfile();
        //data yang dikirim
        $data = [
            'user' => $user,
        ];
        return Inertia::render('editProfile', $data);
    }

    public function changePassword(User $user, Request $request)
    {
        //cek dlu
        Gate::authorize('update-myprofile');

        $validatedData = $request->validate([
            'old_password' => 'required|min:8',
            'password1' => "required|min:8",
            'password2' => "required|min:8|same:password1",

        ]);


        if (password_verify($validatedData['old_password'], $user['password'])) {
            if ($validatedData['old_password'] !== $validatedData['password1']) {
                $password = $validatedData['password1'];
                User::where('id', $user->id)->update(['password' => Hash::make($password)]);

                $data = [
                    'status' => 200,
                    'message' => "Your password has been updated!"
                ];
            } else {
                $data = [
                    'status' => 401,
                    'message' => "Please create a new password that is different from your current password!"
                ];
            }
        } else {
            $data = [
                'status' => 401,
                'message' => "Your current password is not same!"
            ];
        }

        return redirect('/profile/edit')->with('message', $data);
    }
}
