<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\User;
use App\Models\TeamDetails;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class TeamController extends Controller
{
    public function createTeam(Request $request)
    {
        $rules = [
            'team' => "required|unique:users,username",
            'member' => "nullable",
        ];

        if ($request->member) {
            $rules['member'] = 'nullable|array';
        }



        $validatedData = $request->validate($rules);

        $team = [
            'uuid' => fake()->uuid(),
            'team' => $validatedData['team'],
            'leader' => auth()->user()->id,
        ];

        $team = Team::create($team);


        if ($request->member) {
            $members = [
                'team' => $team->id,
            ];
            // foreach
            foreach ($request->member as $member) {
                if (auth()->user()->username != $member) {
                    $user = User::where('username', $member)->first();
                    $members['member'] = $user->id;
                    $member = TeamDetails::create($members);
                }
            }
        }


        $data = [
            'status' => 200,
            'message' => "Your team has been created.",
        ];

        return redirect('/home')->with('message', $data);
    }

    public function searchMember(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'query' => 'required',
            ]);

            $user = User::filter($validatedData['query'])->latest()->get();
            if (!$user->isEmpty()) {
                $data = [
                    'status' => 200,
                    'data' => $user,
                ];
            } else {
                $data = [
                    'status' => 404,
                    'data' => 'User not found',
                ];
            }
        } catch (ValidationException $e) {
            $data = [
                'status' => 403,
                'message' => $e->errors(),
            ];
        }
        return response()->json($data);
    }


public function detailTask($uuid)
    {
        $user = User::myProfile();
        $team = Team::with(['leader', 'member.member'])->where('uuid', $uuid)->first();

        if (!$team) {
            return redirect('/home')->with('message', [
                'status' => 404,
                'message' => 'Team not found',
            ]);
        }

        $data = [
            'user' => $user,
            'team' => $team
        ];

        return Inertia::render('detailTask', $data);
    }
    public function allTask($uuid)
    {
        $user = User::myProfile();
        $team = Team::with(['leader', 'member.member'])->where('uuid', $uuid)->first();

        if (!$team) {
            return redirect('/home')->with('message', [
                'status' => 404,
                'message' => 'Team not found',
            ]);
        }

        $data = [
            'user' => $user,
            'team' => $team
        ];

        return Inertia::render('allTask', $data);
    }

    public function members($uuid)
    {
        $user = User::myProfile();
        $team = Team::with(['leader', 'member.member'])->where('uuid', $uuid)->first();

        if (!$team) {
            return redirect('/home')->with('message', [
                'status' => 404,
                'message' => 'Team not found',
            ]);
        }

        $data = [
            'user' => $user,
            'team' => $team
        ];

        return Inertia::render('members', $data);
    }

    public function settings($uuid)
    {
        $user = User::myProfile();
        $team = Team::with(['leader', 'member.member'])->where('uuid', $uuid)->first();

        if (!$team) {
            return redirect('/home')->with('message', [
                'status' => 404,
                'message' => 'Team not found',
            ]);
        }

        $data = [
            'user' => $user,
            'team' => $team
        ];

        return Inertia::render('settings', $data);
    }
}
