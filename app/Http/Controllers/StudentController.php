<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\Models\Room;
use App\Models\Subject;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function data(string $id)
    {
        $report = Report::where('student_id', Auth::id())->where('subject_id', $id)
        ->with('teachers')
        ->orderBy('created_at','desc')
        ->get();
        $subject= Subject::where('id', $id)->first();

        return Inertia::render('student/reportData')
        ->with('report', $report )
        ->with('subject', $subject);
    }
}
