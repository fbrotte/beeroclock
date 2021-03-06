<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="dashboard/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="dashboard/img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>@yield('title_page')</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />

     <link href={{ asset("dashboard/css/app.css") }} rel="stylesheet" />
	 @livewireStyles
</head>

<body>
	@include('admin.layouts._navbar')
    @yield('content')          
</body>
	<script src={{ asset("dashboard/js/app.js") }}></script>
	@livewireScripts
</html>