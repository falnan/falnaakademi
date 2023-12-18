<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GuestController extends Controller
{
    public function home()
    {
        return Inertia::render('guest/home');
    }
    public function login()
    {
        return Inertia::render('guest/login');
    }
    public function auth(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'name' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('/dashboard')->with('message', 'success');
        }

        return back()->withInput()->withErrors([
            'message' => 'try again',
        ]);

    }

}
