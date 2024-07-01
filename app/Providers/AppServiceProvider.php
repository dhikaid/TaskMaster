<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use App\Models\User;
use Illuminate\Support\ServiceProvider;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Gate;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }

        ResetPassword::createUrlUsing(function (User $user, string $token) {
            return config('app.url') . '/forgot/' . $token . '?email=' . $user->email;
        });

        // Gates
        Gate::define('update-myprofile', function (User $user) {
            return auth()->user()->id === $user->id;
        });
    }
}
