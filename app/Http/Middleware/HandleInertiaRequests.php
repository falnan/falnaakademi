<?php

namespace App\Http\Middleware;

use App\Models\Report;
use App\Models\Student;
use App\Models\StudentRoom;
use App\Models\Teacher;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request, ),
            'auth'=> [
                'id'=>Auth::id(),
                'user'=>Auth::user(),
                'check'=>Auth::check()
            ],
            'studentAuth'=>Student::find(Auth::id()),
            'teacherAuth'=>Teacher::find(Auth::id()),
            'flash'=> fn()=> $request->session()->get('message'),
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
