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

     <link href={{ asset("dashboard/css/bootstrap.min.css") }} rel="stylesheet" />
     <link href={{ asset("dashboard/css/paper-dashboard.css") }} rel="stylesheet"/> -->
     <link href={{ asset("dashboard/css/demo.css") }} rel="stylesheet" />
     <link href={{ asset("dashboard/css/themify-icons.css") }} rel="stylesheet" />
</head>

<body>
	<div class="wrapper">
	    <div class="sidebar" data-background-color="brown" data-active-color="danger">
	    <!--
			Tip 1: you can change the color of the sidebar's background using: data-background-color="white | brown"
			Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
		-->
			<div class="logo">
				<a href="https://www.creative-tim.com" class="simple-text logo-mini">
					BOK
				</a>

				<a href="https://www.creative-tim.com" class="simple-text logo-normal">
					BeerOClock
				</a>
			</div>
	    	<div class="sidebar-wrapper">
				
                @include('layouts._sidebar_user')

	            <ul class="nav">
                    @include('layouts._sidebar')
                    @include('layouts._user_actions')
	            </ul>
	    	</div>
	    </div>
        <div class="main-panel">
			<nav class="navbar navbar-default">
	            <div class="container-fluid">
					<div class="navbar-minimize">
						<button id="minimizeSidebar" class="btn btn-fill btn-icon"><i class="ti-more-alt"></i></button>
					</div>
	                <div class="navbar-header">
	                    <button type="button" class="navbar-toggle">
	                        <span class="sr-only">Toggle navigation</span>
	                        <span class="icon-bar bar1"></span>
	                        <span class="icon-bar bar2"></span>
	                        <span class="icon-bar bar3"></span>
	                    </button>
	                    <a class="navbar-brand" href="#Dashboard">
							@yield('title_page')
						</a>
	                </div>
	                <div class="collapse navbar-collapse">

						<form class="navbar-form navbar-left navbar-search-form" role="search">
	    					<div class="input-group">
	    						<span class="input-group-addon"><i class="fa fa-search"></i></span>
	    						<input type="text" value="" class="form-control" placeholder="Search...">
	    					</div>
	    				</form>

	                    <ul class="nav navbar-nav navbar-right">
	                        <li>
	                            <a href="#stats" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
	                                <i class="ti-panel"></i>
									<p>Stats</p>
	                            </a>
	                        </li>
	                        <li class="dropdown">
	                            <a href="#notifications" class="dropdown-toggle btn-rotate" data-toggle="dropdown">
	                                <i class="ti-bell"></i>
	                                <span class="notification">5</span>
									<p class="hidden-md hidden-lg">
										Notifications
										<b class="caret"></b>
									</p>
	                            </a>
	                            <ul class="dropdown-menu">
	                                <li><a href="#not1">Notification 1</a></li>
	                                <li><a href="#not2">Notification 2</a></li>
	                                <li><a href="#not3">Notification 3</a></li>
	                                <li><a href="#not4">Notification 4</a></li>
	                                <li><a href="#another">Another notification</a></li>
	                            </ul>
	                        </li>
							<li>
	                            <a href="#settings" class="btn-rotate">
									<i class="ti-settings"></i>
									<p class="hidden-md hidden-lg">
										Settings
									</p>
	                            </a>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </nav>
            <div class="content">
                <div class="container-fluid">
                    @yield('content')
                </div>
            </div>
            <footer class="footer">
	            <div class="container-fluid">
	                <nav class="pull-left">
	                    <ul>
	                        <li>
	                            <a href="https://www.creative-tim.com">
	                                Creative Tim
	                            </a>
	                        </li>
	                        <li>
	                            <a href="https://blog.creative-tim.com">
	                               Blog
	                            </a>
	                        </li>
	                        <li>
	                            <a href="https://www.creative-tim.com/license">
	                                Licenses
	                            </a>
	                        </li>
	                    </ul>
	                </nav>
	                <div class="copyright pull-right">
	                    &copy; <script>document.write(new Date().getFullYear())</script>, made with <i class="fa fa-heart heart"></i> by <a href="https://www.creative-tim.com">Creative Tim</a>
	                </div>
	            </div>
	        </footer>
	    </div>
	</div>
</body>

	<!--   Core JS Files. Extra: TouchPunch for touch library inside jquery-ui.min.js   -->
	<script src={{ asset("dashboard/js/jquery.min.js") }} type="text/javascript"></script>
	<script src={{ asset("dashboard/js/jquery-ui.min.js") }} type="text/javascript"></script>
	<script src={{ asset("dashboard/js/perfect-scrollbar.min.js") }} type="text/javascript"></script>
	<script src={{ asset("dashboard/js/bootstrap.min.js") }} type="text/javascript"></script>

	<!--  Forms Validations Plugin -->
	<script src={{ asset("dashboard/js/jquery.validate.min.js") }}></script>

	<!-- Promise Library for SweetAlert2 working on IE -->
	<script src={{ asset("dashboard/js/es6-promise-auto.min.js") }}></script>

	<!--  Plugin for Date Time Picker and Full Calendar Plugin-->
	<script src={{ asset("dashboard/js/moment.min.js") }}></script>

	<!--  Date Time Picker Plugin is included in this js file -->
	<script src={{ asset("dashboard/js/bootstrap-datetimepicker.js") }}></script>

	<!--  Select Picker Plugin -->
	<script src={{ asset("dashboard/js/bootstrap-selectpicker.js") }}></script>

	<!--  Switch and Tags Input Plugins -->
	<script src={{ asset("dashboard/js/bootstrap-switch-tags.js") }}></script>

	{{-- <!-- Circle Percentage-chart -->
	<script src={{ asset("dashboard/js/jquery.easypiechart.min.js") }}></script>

	<!--  Charts Plugin -->
	<script src={{ asset("dashboard/js/chartist.min.js") }}></script>

	<!--  Notifications Plugin    -->
	<script src={{ asset("dashboard/js/bootstrap-notify.js") }}></script>

	<!-- Sweet Alert 2 plugin -->
	<script src={{ asset("dashboard/js/sweetalert2.js") }}></script>

	<!-- Vector Map plugin -->
	<script src={{ asset("dashboard/js/jquery-jvectormap.js") }}></script>

	<!--  Google Maps Plugin    -->
	<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>

	<!-- Wizard Plugin    -->
	<script src={{ asset("dashboard/js/jquery.bootstrap.wizard.min.js") }}></script>

	<!--  Bootstrap Table Plugin    -->
	<script src={{ asset("dashboard/js/bootstrap-table.js") }}></script>

	<!--  Plugin for DataTables.net  -->
	<script src={{ asset("dashboard/js/jquery.datatables.js") }}></script>

	<!--  Full Calendar Plugin    -->
	<script src={{ asset("dashboard/js/fullcalendar.min.js") }}></script> --}}

	<!-- Paper Dashboard PRO Core javascript and methods for Demo purpose -->
	<script src={{ asset("dashboard/js/paper-dashboard.js") }}></script>

	<!-- Paper Dashboard PRO DEMO methods, don't include it in your project! -->
	<script src={{ asset("dashboard/js/demo.js") }}></script>
</html>