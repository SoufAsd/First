<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\User;
use App\Rules\MatchOldPassword;
use Carbon\Carbon;
use Intervention\Image\Facades\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public $path='';
    //----------------GET USER DETAILS-------------------
    public function profile(Request $request)
    {
        return response()->json($request->user());
    }
    //------------------LOGOUT OF DASHBOARD----------------
    public function logout()
    {
        Auth::logout();
    }
    //------------------UPDATE INFORMATIONS----------------------
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email'
        ]);
        $return['message'] = 'Please enter valid inputs';
        if ($validator->fails()) {
            return $return;
        }

        DB::table('users')->where('id', $request->id)->update(['name' => $request->name,'email' => $request->email]);
        return true;
    }
    //-------------------CHANGE PASSWORD---------------------
    public function changepwd(Request $request){
        $request->validate([
            'current_password' => ['required'],
            'new_password' => ['required'],
            'new_confirm_password' => ['same:new_password'],
        ]);
        DB::table('users')->where('id', $request->id)->update(['password'=> Hash::make($request->new_password)]);
        return true;
    }
    //------------------------------------UPLOAD PICTURE-------------------------------
    public function uploadimage(Request $request) {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image64:jpeg,jpg,png'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()]);
        } else {
            $imageData = $request->get('image');
            $fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
            Image::make($request->get('image'))->save(public_path('images/').$fileName);
            DB::table('users')->where('id', $request->get('iduser'))->update(['path'=> 'images/'.$fileName]);
            return response()->json(['error'=>false]);
        }
    }
    //--------------------------------------------CHANGE IMAGE-------------------------
    public function saveage(Request $request){
        DB::table('users')->where('id', $request->get('iduser'))->update(['age'=> $request->get('age')]);
        return true;
    }
    //--------------------------------------------CHANGE NAMES-------------------------
    public function savenm(Request $request){
        DB::table('users')->where('id', $request->get('iduser'))->update(['first'=> $request->get('first'),'last'=> $request->get('last')]);
        return true;
    }
    //-------------------------------------------- RE CHANGE NAMES-------------------------
    public function resavenm(Request $request){
        dd($request->get('fullname'));
        DB::table('users')->where('id', $request->get('iduser'))->update(['first'=> $request->get('first'),'last'=> $request->get('last')]);
        return true;
    }
    //--------------------------------------------CHANGE ADRESSE-------------------------
    public function saveadr(Request $request){
        DB::table('users')->where('id', $request->get('iduser'))->update(['adresse'=> $request->get('adresse')]);
        return true;
    }
}
