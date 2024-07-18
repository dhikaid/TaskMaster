<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\TeamDetails;
use Illuminate\Http\Request;

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
            'team' => $validatedData['team']
        ];

        $team =   Team::create($team);

        $member = [
            'leader' =>  auth()->user()->id,
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
}
