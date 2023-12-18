<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subject extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'subject', 'program', 'is_reguler', 'is_private', 'is_english', 'is_kids', 'is_islam', 'is_it', 'price', 'duration',
        'meetingPerWeek', 'maxMember', 'is_ps', 'is_ms', 'is_hs', 'is_public',
    ];

    public $incrementing = false;
    protected $keyType = 'string';

    public function rooms(): HasMany
    {
        return $this->hasMany(Room::class, 'subject_id', 'id');
    }
    public function teachers(): HasMany
    {
        return $this->hasMany(Teacher::class, 'subject_id', 'id');
    }

}
