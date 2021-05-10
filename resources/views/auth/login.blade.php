@extends('layouts.app')

@section('content')

<div class="absolute top-0 w-full h-full bg-emerald-600 bg-no-repeat bg-full"></div>
<div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-4/12 px-4">
            <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
            >
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div
                        class="text-blueGray-400 text-center mb-3 font-bold"
                    >
                    </div>
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                            {{ __('E-Mail Address') }}
                            </label>
                            <input
                                type="email"
                                name="email"
                                value="{{ old('email') }}" required autocomplete="email" autofocus
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 @error('email') is-invalid @enderror"
                                placeholder="Email"
                            />
                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        </div>

                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                            {{ __('Password') }}
                            </label>
                            <input
                                type="password"
                                name="password"
                                required autocomplete="current-password"
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 @error('password') is-invalid @enderror"
                                placeholder="Password"
                            />
                            @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>
                        <div>
                            <label
                                class="inline-flex items-center cursor-pointer"
                            >
                                <input
                                    id="customCheckLogin"
                                    type="checkbox"
                                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                />
                                <span
                                    class="ml-2 text-sm font-semibold text-blueGray-600"
                                >
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div class="text-center mt-6">
                            <button
                                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="submit"
                            >
                            {{ __('Login') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="flex flex-wrap mt-6 relative">
                <div class="w-1/2">
                    <a href="javascript:void(0)" class="text-blueGray-200">
                        <small>Forgot password?</small>
                    </a>
                </div>
                <div class="w-1/2 text-right">
                    <a href="/register" class="text-blueGray-200">
                        <small>New account</small>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
{{-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>
                                <a class="btn btn-primary" href="{{ route('register') }}">{{ __('Register') }}</a>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> --}}
@endsection
