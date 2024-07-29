<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\User;
use App\Models\TeamDetails;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

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
            'leader' => auth()->user()->id
        ];

        $team =  Team::create($team);

        $member = [
            'team' => $team->id
        ];

        if ($request->member) {
            $member['member'] = $validatedData['member'];
        }

        $member = TeamDetails::create($member);

        $data = [
            'status' => 200,
            'message' => "Your team has been created."
        ];

        return redirect('/home')->with('message', $data);
    }


    public function searchMember(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'query' => 'required'
            ]);


            $user = User::filter($validatedData['query'])->latest()->get();
            if (!$user->isEmpty()) {
                $data = [
                    'status' => 200,
                    'data' => $user
                ];
            } else {
                $data = [
                    'status' => 404,
                    'data' => 'User not found'
                ];
            }
        } catch (ValidationException $e) {
            $data = [
                'status' => 403,
                'message' => $e->errors()
            ];
        }
        return response()->json($data);
    }
}
