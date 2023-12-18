<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::name('guest')->group(function(){
    Route::get('/', [GuestController::class, 'home']);
    Route::get('/login', [GuestController::class, 'login']);
    Route::post('/login', [GuestController::class, 'auth']);    
});

Route::middleware('role:admin,teacher,student')->group(function () {
    Route::post('/logout', [UserController::class, 'logout']);
    Route::get('/dashboard', [UserController::class, 'dashboard']);
});

Route::middleware('role:admin')->group(function () {
    // STUDENT---------
    Route::get('/student',[AdminController::class, 'dataStudent']);
    Route::post('/student',[AdminController::class, 'storeStudent']);
    Route::get('/student/add',[AdminController::class, 'addStudent']);
    Route::get('/student/{student_id}',[AdminController::class, 'editStudent']);
    Route::put('/student/{student_id}',[AdminController::class, 'updateStudent']);
    Route::delete('/student/{student_id}',[AdminController::class, 'deleteStudent']);

    // TEACHER---------
    Route::get('/teacher',[AdminController::class, 'dataTeacher']);
    Route::post('/teacher',[AdminController::class, 'storeTeacher']);
    Route::get('/teacher/add',[AdminController::class, 'addTeacher']);
    Route::get('/teacher/{teacher_id}',[AdminController::class, 'editTeacher']);
    Route::put('/teacher/{teacher_id}',[AdminController::class, 'updateTeacher']);
    Route::delete('/teacher/{teacher_id}',[AdminController::class, 'deleteTeacher']);

    // ROOM----------
    Route::get('/room',[AdminController::class, 'dataRoom']);
    Route::post('/room',[AdminController::class, 'storeRoom']);
    Route::get('/room/add',[AdminController::class, 'addRoom']);
    Route::get('/room/{room_id}',[AdminController::class, 'editRoom']);
    Route::put('/room/{room_id}',[AdminController::class, 'updateRoom']);
    Route::delete('/room/{room_id}',[AdminController::class, 'deleteRoom']);

    // STUDENTROOM-------------
    Route::get('/student/{student_id}/room', [AdminController::class,'addStudentRoom']);
    Route::get('/room/{room_id}/student', [AdminController::class,'addRoomStudent']);
    Route::post('/studentRoom',[AdminController::class, 'storeStudentRoom']);
    Route::delete('/studentRoom/{student_id}/{room_id}',[AdminController::class, 'destroyStudentRoom']);
});

Route::middleware('role:student')->group(function () {
    Route::get('/rapor/data/{subject}',[StudentController::class, 'data']);
});

Route::middleware('role:teacher')->group(function () {
    Route::get('/rapor/{room}',[TeacherController::class, 'input']);
    Route::post('/rapor',[TeacherController::class, 'store']);
});
