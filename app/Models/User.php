<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    // protected $fillable = [
    //     'name',
    //     'email',
    //     'password',
    // ];

    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [

        'password',
        'remember_token', 'created_at', 'updated_at'
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public static function myProfile()
    {
        $user = self::find(auth()->user()->id);
        $user['firstname'] = explode(' ',  $user['fullname'], 2)[0];
        return $user;
    }

    public function scopeFilter($query, string $filters)
    {
        $query->when($filters ?? false, function ($query, $search) {
            return $query->where('username', 'like', '%' . $search . '%')
                ->whereNot('username', auth()->user()->username);
        });
    }
}
