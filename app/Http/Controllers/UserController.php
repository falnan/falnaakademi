<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\Student;
use App\Models\StudentRoom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
    public function dashboard()
    {
        $studentRoom= StudentRoom::where('student_id', Auth::id())->with('rooms.subjects')->with('rooms.teachers')->get();
        $teacherRoom= Room::where('teacher_id', Auth::id())->with('subjects')->get();

        return Inertia::render('dashboard')
        ->with('studentRoom', $studentRoom)
        ->with('teacherRoom', $teacherRoom);
    }
}
