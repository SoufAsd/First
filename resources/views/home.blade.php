@extends('layouts.app')

@section('content')
    
        <div id="app">
            <application :user="{{ Auth::user() }}">
            </application>
    
    </div>


@endsection
