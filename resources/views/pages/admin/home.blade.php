@extends('layouts.dashboard')

@section('content')

	<div class="row">
		<div class="col-lg-3 col-sm-6">
			<div class="card">
				<div class="card-content">
					<div class="row">
						<div class="col-xs-5">
							<div class="icon-big icon-warning text-center">

								<i class="ti-server"></i>
							</div>
						</div>
						<div class="col-xs-7">
							<div class="numbers">
								<p>Client Inscrit Total</p>
								50
							</div>
						</div>
					</div>
				</div>
			<div class="card-footer">
			<hr />
			<div class="stats">
			<div class="pull-right" style="position:relative; display:inline-block;"><i class="fa fa-question-circle" data-toggle="tooltip" data-placement="top" rel="tooltip" title="adasdasdasdasdasd adasdasdasdasdShows the total price of orders minus cost for ads."></i></div>
			<i class="ti-clipboard"></i><div class="my-inline-block" id="campaign-name4"></div>
			</div>
			</div>
			</div>
		</div>
		<div class="col-lg-3 col-sm-6">
			<div class="card">
				<div class="card-content">
					<div class="row">
						<div class="col-xs-5">
							<div class="icon-big icon-success text-center">
								<i class="ti-wallet"></i>
							</div>
						</div>
						<div class="col-xs-7">
							<div class="numbers">
								<p>Clients</p>
								10
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<hr />
					<div class="stats">
						<i class="ti-calendar"></i> Venu ce week-end
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-3 col-sm-6">
			<div class="card">
				<div class="card-content">
					<div class="row">
						<div class="col-xs-5">
							<div class="icon-big icon-danger text-center">
								<i class="ti-pulse"></i>
							</div>
						</div>
						<div class="col-xs-7">
							<div class="numbers">
								<p>Clients</p>
								23
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<hr />
					<div class="stats">
						<i class="ti-timer"></i> Ce mois
					</div>
				</div>
			</div>
		</div>
		{{-- <div class="col-lg-3 col-sm-6">
			<div class="card">
				<div class="card-content">
					<div class="row">
						<div class="col-xs-5">
							<div class="icon-big icon-info text-center">
								<i class="ti-twitter-alt"></i>
							</div>
						</div>
						<div class="col-xs-7">
							<div class="numbers">
								<p>Followers</p>
								+45
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<hr />
					<div class="stats">
						<i class="ti-reload"></i> Updated now
					</div>
				</div>
			</div>
		</div> --}}
	</div>
@endsection
