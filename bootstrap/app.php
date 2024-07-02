<?php

use Illuminate\Foundation\Application;
use App\Http\Middleware\HandleInertiaRequests;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->respond(function (Response $response, Throwable $exception) {
            $environment = app()->environment();
            if (in_array($response->getStatusCode(), [500, 503, 404, 403])) {
                if ($environment === 'production') {
                    return back(303)->with([
                        'message' => [
                            'status' => $response->getStatusCode(),
                            'message' => "Something went wrong!"
                        ],
                    ]);
                } else {
                    return back(303)->with([
                        'message' => [
                            'status' => $response->getStatusCode(),
                            'message' => $exception->getMessage()
                        ],
                    ]);
                }
            } elseif ($response->getStatusCode() === 419) {
                return back(303)->with([
                    'message' => [
                        'status' => $response->getStatusCode(),
                        'message' => "The page expired, please try again."
                    ],
                ]);
            }
            return $response;
        });
    })->create();
