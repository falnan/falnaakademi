<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    public function input(string $id)
    {
        $subject = Room::where('id', $id)->first()->subject_id;
        $report = Room::where('id', $id)->with(['students.reports'=>fn ($query)=>$query->where('subject_id', $subject)->orderBy('created_at', 'desc')])->first();

        return Inertia::render('teacher/reportTeacher')
        ->with('report', $report)
        ->with('subject', $subject);
    }
    public function store(Request $request)
    {
        $request->validate([
            'subject_id' => 'required',
            'teacher_id' => 'required',
            'student_id' => 'required',
            'evaluation'=> 'nullable',
        ]);

        Report::create([
            'subject_id' => $request->subject_id,
            'teacher_id' => $request->teacher_id,
            'student_id' => $request->student_id,
            'evaluation'=> $request->evaluation,
        ]);
    }
}
