<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Room extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'teacher_id', 'subject_id',
        'grade', 'program', 'day', 'time', 'idRoom',
        'passwordRoom', 'linkRoom',
    ];

    public $incrementing = false;
    protected $keyType = 'string';

    public function subjects(): BelongsTo
    {
        return $this->belongsTo(Subject::class, 'subject_id', 'id',);
    }
    public function students(): BelongsToMany
    {
        return $this->belongsToMany(Student::class, 'student_rooms', 'room_id', 'student_id');
    }
    public function teachers(): BelongsTo
    {
        return $this->belongsTo(Teacher::class, 'teacher_id', 'username',);
    }
    public function reports(): HasMany
    {
        return $this->hasMany(Report::class, 'room_id', 'id');
    }
    // public function student_rooms(): HasMany
    // {
    //     return $this->hasMany(Rapor::class, 'room_id', 'id');
    // }

}
