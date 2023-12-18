<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Teacher extends Model
{
    use HasFactory;
    protected $fillable = [
        'username', 'name', 'ttl', 'adress', 'subject_id', 'phone',
    ];
    protected $primaryKey = 'username';
    public $incrementing = false;
    protected $keyType = 'string';

    public function users(): HasOne
    {
        return $this->hasOne(User::class, 'username', 'username');
    }
    public function rooms(): HasMany
    {
        return $this->hasMany(Room::class, 'teacher_id', 'username');
    }
    public function subjects(): BelongsTo
    {
        return $this->belongsTo(Subject::class, 'subject_id', 'id');
    }

}
