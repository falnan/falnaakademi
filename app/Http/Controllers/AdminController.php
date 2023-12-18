<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\Student;
use App\Models\StudentRoom;
use App\Models\Subject;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    // STUDENT
    public function dataStudent()
    {
        // $student= Student::with('users')
        // ->orderBy('created_at', 'asc')
        // ->paginate(2);
        
        $student= Student::with('users')->with('rooms')
        ->orderBy('username', 'asc')
        ->get();
        
        return Inertia::render('admin/controlStudent/dataStudent')
        ->with('student', $student);
    }
    public function addStudent()
    {
        return Inertia::render('admin/controlStudent/addStudent');
    }
    public function storeStudent(Request $request)
    {
        $request->validate([
            'role'=>'required',
            'username' => 'required|unique:users',
            'name' => 'required',
            'coin' => 'required',
            'school' => 'required',
            'grade' => 'required',
            'ttl' => 'required',
            'adress' => 'required',
            'phone' => 'required',
            'password'=>'required',
            'confirmPassword'=> 'required|same:password'
        ]);

        Student::create([
            'username' => $request->username,
            'name' => $request->name,
            'coin' => $request->coin,
            'school' => $request->school,
            'grade' => $request->grade,
            'ttl' => $request->ttl,
            'adress' => $request->adress,
            'phone' => $request->phone,
        ]);

        User::create([
            'username' => $request->username,
            'name' => $request->name,
            'role' => $request->role,
            'password' => $request->password,
            'confirmPassword' => $request->confirmPassword,
        ]);

        session()->flash('message', 'success');
        return redirect('/student');
    }
    public function editStudent(string $id)
    {
        $student= Student::where('username', $id)->with('users')->first();
        return Inertia::render('admin/controlStudent/editStudent')
        ->with('student', $student);
    }
    public function updateStudent(Request $request, string $id)
    {
        $request->validate([
            'role'=>'required',
            'username' => 'required',
            'name' => 'required',
            'coin' => 'required',
            'school' => 'required',
            'grade' => 'required',
            'ttl' => 'required',
            'adress' => 'required',
            'phone' => 'required',
            'password'=>'required',
            'confirmPassword'=> 'required|same:password'
        ]);

        Student::find($id)->update([
            'username' => $request->username,
            'name' => $request->name,
            'coin' => $request->coin,
            'school' => $request->school,
            'grade' => $request->grade,
            'ttl' => $request->ttl,
            'adress' => $request->adress,
            'phone' => $request->phone,
        ]);

        User::find($id)->update([
            'username' => $request->username,
            'name' => $request->name,
            'role' => $request->role,
            'password' => $request->password,
            'confirmPassword' => $request->confirmPassword,
        ]);
        
        session()->flash('message', 'success');
        return redirect('/student');

    }
    public function deleteStudent(string $id)
    {
        Student::find($id)->delete();
        User::find($id)->delete();
        
        session()->flash('message', 'success');
        return redirect('/student');
    }

    // TEACHER
    public function dataTeacher()
    {
        // $teacher= Teacher::with('users')
        // ->orderBy('username', 'asc')
        // ->paginate(2);
        
        $teacher= Teacher::with('users')
        ->orderBy('username', 'asc')
        ->get();

        return Inertia::render('admin/controlTeacher/dataTeacher')
        ->with('teacher', $teacher);
    }
    public function addTeacher()
    {
        $subject= Subject::all(['id', 'subject']);
        return Inertia::render('admin/controlTeacher/addTeacher')
        ->with('subject', $subject);
    }
    public function storeTeacher(Request $request)
    {
        $request->validate([
            'role'=>'required',
            'username' => 'required|unique:users',
            'name' => 'required',
            'subject_id'=>'required',
            'ttl' => 'required',
            'adress' => 'required',
            'phone' => 'required',
            'password'=>'required',
            'confirmPassword'=> 'required|same:password'
        ]);

        Teacher::create([
            'username' => $request->username,
            'name' => $request->name,
            'subject_id' => $request->subject_id,
            'ttl' => $request->ttl,
            'adress' => $request->adress,
            'phone' => $request->phone,
        ]);

        User::create([
            'username' => $request->username,
            'name' => $request->name,
            'role' => $request->role,
            'password' => $request->password,
            'confirmPassword' => $request->confirmPassword,
        ]);

        session()->flash('message', 'success');
        return redirect('/teacher');
    }
    public function editTeacher(string $id)
    {
        $subject= Subject::all(['id', 'subject']);
        $teacher= Teacher::where('username', $id)->with('users')->first();
        return Inertia::render('admin/controlTeacher/editTeacher')
        ->with('subject', $subject)
        ->with('teacher', $teacher);
    }
    public function updateTeacher(Request $request, string $id)
    {
        $request->validate([
            'role'=>'required',
            'username' => 'required',
            'name' => 'required',
            'subject_id'=>'required',
            'ttl' => 'required',
            'adress' => 'required',
            'phone' => 'required',
            'password'=>'required',
            'confirmPassword'=> 'required|same:password'
        ]);

        Teacher::find($id)->update([
            'username' => $request->username,
            'name' => $request->name,
            'subject_id' => $request->subject_id,
            'ttl' => $request->ttl,
            'adress' => $request->adress,
            'phone' => $request->phone,
        ]);

        User::find($id)->update([
            'username' => $request->username,
            'name' => $request->name,
            'role' => $request->role,
            'password' => $request->password,
            'confirmPassword' => $request->confirmPassword,
        ]);

        session()->flash('message', 'success');
        return redirect('/teacher');
    }
    public function deleteTeacher(string $id)
    {
        Teacher::find($id)->delete();
        User::find($id)->delete();
        
        session()->flash('message', 'success');
        return redirect('/teacher');
    }

    // ROOM
    public function dataRoom()
    {
        $room= Room::with('teachers')->with('subjects')->with('students')->get();
        return Inertia::render('admin/controlRoom/dataRoom')
        ->with('room', $room);
    }
    public function addRoom()
    {
        return Inertia::render('admin/controlRoom/addRoom');
    }
    public function storeRoom(Request $request)
    {
        $request->validate([
            'code'=>'required',
            'teacher_id'=>'required|exists:teachers,username',
            'subject_id' => 'required|exists:subjects,id',
            'grade' => 'required',
            'program' => 'required',
            'day' => 'required',
            'time' => 'required',
            'idRoom'=>'required',
            'passwordRoom'=> 'required',
            'linkRoom'=> 'required',
        ]);

        if ($request->program == 'Grup'){
            $code = $request->subject_id."g-".$request->code;
        } else {$code = $request->subject_id."p-".$request->code;}

        Room::create([
            'id'=> $code,
            'teacher_id'=> $request->teacher_id,
            'subject_id' => $request->subject_id,
            'grade' => $request->grade,
            'subject_id'=> $request->subject_id,
            'program' => $request->program,
            'day' => $request->day,
            'time' => $request->time,
            'idRoom'=> $request->idRoom,
            'passwordRoom'=> $request->passwordRoom,
            'linkRoom'=> $request->linkRoom,
        ]);

        session()->flash('message', 'success');
        return redirect('/room/');
    }
    public function editRoom(string $room_id)
    {
        $room = Room::where('id',$room_id)->first();
        return Inertia::render('admin/controlRoom/editRoom')
        ->with('room', $room);
    }
    public function updateRoom(Request $request, string $room_id)
    {
        $request->validate([
            'id'=>'required',
            'teacher_id'=>'required|exists:teachers,username',
            'subject_id' => 'required|exists:subjects,id',
            'grade' => 'required',
            'program' => 'required',
            'day' => 'required',
            'time' => 'required',
            'idRoom'=>'required',
            'passwordRoom'=> 'required',
            'linkRoom'=> 'required',
        ]);

        Room::find($room_id)->update([
            'id'=> $request->id,
            'teacher_id'=> $request->teacher_id,
            'subject_id' => $request->subject_id,
            'grade' => $request->grade,
            'subject_id'=> $request->subject_id,
            'program' => $request->program,
            'day' => $request->day,
            'time' => $request->time,
            'idRoom'=> $request->idRoom,
            'passwordRoom'=> $request->passwordRoom,
            'linkRoom'=> $request->linkRoom,
        ]);

        session()->flash('message', 'success');
        return redirect('/room');
    }

    public function deleteRoom(string $id)
    {
        Room::find($id)->delete();
        
        session()->flash('message', 'success');
        return redirect('/room');
    }

    // STUDENTROOM
    public function addStudentRoom(string $student_id)
    {
        $studentRoom= StudentRoom::where('student_id', $student_id)->get();
        $room= Room::all('id');
        return Inertia::render('admin/controlStudentRoom/addStudentRoom')
        ->with('studentRoom', $studentRoom)
        ->with('student_id', $student_id)
        ->with('room', $room);
    }
    public function addRoomStudent(string $room_id)
    {
        $roomStudent= StudentRoom::where('room_id', $room_id)->get();
        return Inertia::render('admin/controlStudentRoom/addRoomStudent')
        ->with('roomStudent', $roomStudent)
        ->with('room_id', $room_id);
        }
    public function storeStudentRoom(Request $request)
    {
        $request->validate([
            'student_id'=>'required|exists:students,username',
            'room_id' => 'required|exists:rooms,id',
        ]);

        StudentRoom::create([
            'student_id'=> $request->student_id,
            'room_id'=> $request->room_id,
            'is_active'=> true,
        ]);
        session()->flash('message', 'success');
    }
    public function destroyStudentRoom(string $student_id,string $room_id)
    {
        StudentRoom::where('student_id', $student_id)->where('room_id', $room_id)->delete();
        session()->flash('message', 'success');
    }

}
