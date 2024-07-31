<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    // halaman utama
    public function index()
    {
        $user = User::myProfile();
        $data = [
            'user' => $user,
            'teams' => Team::with(['leader', 'member.member'])
                ->where('leader', auth()->user()->id)
                ->orWhereHas('member', function ($query) {
                    $query->where('member', auth()->user()->id);
                })
                ->get(),
        ];

        return Inertia::render('Home', $data);
    }
}
