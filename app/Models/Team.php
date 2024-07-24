<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Team extends Model
{
    use HasFactory;
    protected $table = 'teams';

    protected $guarded = ['id'];
    protected $hidden = [
        'id'
    ];

    public function member(): HasMany
    {
        return $this->hasMany(TeamDetails::class, 'id');
    }
}
