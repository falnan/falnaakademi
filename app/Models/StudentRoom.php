<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class StudentRoom extends Model
{
    use HasFactory;
    protected $fillable = [
        'student_id', 'room_id', 'is_active',
    ];
    public function students(): BelongsTo
    {
        return $this->belongsTo(Student::class, 'student_id', 'username');
    }
    public function rooms(): BelongsTo
    {
        return $this->belongsTo(Room::class, 'room_id', 'id');
    }
}
