<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TeamDetails extends Model
{
    use HasFactory;
    protected $table = 'detail_team';

    protected $guarded = ['id'];
    protected $hidden = [
        'id'
    ];

    public function member(): BelongsTo
    {
        return $this->belongsTo(User::class, 'member');
    }
}
