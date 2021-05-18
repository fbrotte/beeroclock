<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use League\Glide\ServerFactory;
use Illuminate\Contracts\Filesystem\Filesystem;
use League\Glide\Responses\LaravelResponseFactory;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\VarDumper\Dumper\ServerDumper;

class ImageController extends Controller
{
 public function show(Filesystem $filesystem, Request $request, string $path): StreamedResponse
 {
     $server = ServerFactory::create([
         'response' => new LaravelResponseFactory($request),
         'source' => $filesystem->getDriver(),
         'cache' => $filesystem->getDriver(),
         'cache_path_prefix' => '.cache',
         'base_url' => 'images',

     ]);
     return $server->getImageResponse($path, $request->all());
 }
}



