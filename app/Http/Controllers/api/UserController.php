<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function usersget(){
    $d=User::all();
     return User::all();
    }
    public function changeRole(Request $request){
        DB::table('users')->where('id', $request->get('iduser'))->update(['role'=> $request->get('rolechg')]);
            return response()->json(['error'=>false]);
    }
    public function usersgetrole1(){
         return User::where('role', 1)->get();
        }
        public function usersgetrole2(){
            return User::where('role', 2)->get();
           }
}
