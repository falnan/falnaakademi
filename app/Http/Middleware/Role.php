<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class Role
{
    public function handle(Request $request, Closure $next, ...$role): Response
    {
        if(!Auth::check()){
            return redirect('/error');
        } else if(in_array($request->user()->role,$role)){
            
            return $next($request);
        }
    }
}
