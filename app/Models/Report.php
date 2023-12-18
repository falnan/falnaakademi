<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Report extends Model
{
    use HasFactory;
    protected $fillable = ['subject_id', 'teacher_id','student_id', 'evaluation'];

    public function subjects(): BelongsTo
    {
        return $this->belongsTo(Subject::class, 'subject_id', 'username');
    }
    public function teachers(): BelongsTo
    {
        return $this->belongsTo(Teacher::class, 'teacher_id', 'username');
    }
    public function students(): BelongsTo
    {
        return $this->belongsTo(Student::class, 'student_id', 'username');
    }
}
