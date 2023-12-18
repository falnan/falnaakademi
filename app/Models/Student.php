<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Student extends Model
{
    use HasFactory;
    protected $fillable = [
        'username', 'name', 'coin', 'school', 'grade', 'ttl', 'adress', 'phone',
    ];

    protected $primaryKey = 'username';
    public $incrementing = false;
    protected $keyType = 'string';

    public function users(): HasOne
    {
        return $this->hasOne(User::class, 'username', 'username');
    }
    public function rooms(): BelongsToMany
    {
        return $this->belongsToMany(Room::class, 'student_rooms', 'student_id', 'room_id');
    }
    public function reports(): HasMany
    {
        return $this->hasMany(Report::class, 'student_id', 'username');
    }
    public function student_rooms(): HasMany
    {
        return $this->hasMany(StudentRoom::class, 'student_id', 'username');
    }

}
