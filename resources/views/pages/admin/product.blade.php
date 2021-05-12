@extends('layouts.dashboard')

@section('content')
<div class="row">
	<div class="col-md-12">
		<div class="card">
			<div class="card-header">
				<h4 class="card-title">Listes des produits</h4>
				<p class="category">Here is a subtitle for this table</p>
				<div class="row">
					<div class="col-xs-6">
						<form class="navbar-form navbar-left navbar-search-form" role="search">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-search"></i></span>
								<input type="text" value="" class="form-control" placeholder="Search...">
							</div>
						</form>
					</div>
					<div class="col-xs-6">
						<div class="dropdown">
							<a href="#" class="btn dropdown-toggle" data-toggle="dropdown">
								Regular
								<b class="caret"></b>
							</a>
							<ul class="dropdown-menu">
							  <li><a href="#paper">Action</a></li>
							  <li><a href="#paper">Another action</a></li>
							  <li><a href="#paper">Something else here</a></li>
							  <li class="divider"></li>
							  <li><a href="#paper">Separated link</a></li>
							  <li class="divider"></li>
							  <li><a href="#paper">One more separated link</a></li>
							</ul>
						  </div>
					</div>
				</div>
			</div>



			<div class="card-content table-responsive table-full-width">
				<table class="table">
					<thead>
						<tr>
							<th>Nom</th>
							<th>Description</th>
							<th>Prix</th>
							<th>Categorie</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Bierre au beure</td>
							<td>Un superbe bierre beure très bonne !</td>
							<td>50€ / le litre</td>
							<td>Bierre</td>
							<td class="text-right">
								<input type="checkbox" class="switch-plain">
						   </td>
							<td class="td-actions text-right">
								<a href="#" rel="tooltip" title="View Profile" class="btn btn-info btn-simple btn-xs">
									<i class="ti-user"></i>
								</a>
								<a href="#" rel="tooltip" title="Edit Profile" class="btn btn-success btn-simple btn-xs">
									<i class="ti-pencil-alt"></i>
								</a>
								<a href="#" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
									<i class="ti-close"></i>
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<div class="toolbar">
		<!--Here you can write extra buttons/actions for the toolbar-->
	</div>
	<table id="bootstrap-table" class="table">
		<thead>
			<th data-field="state" data-checkbox="true"></th>
			<th data-field="id" class="text-center">ID</th>
			<th data-field="name" data-sortable="true">Name</th>
			<th data-field="salary" data-sortable="true">Salary</th>
			<th data-field="country" data-sortable="true">Country</th>
			<th data-field="city">City</th>
			<th data-field="actions" class="td-actions text-right" data-events="operateEvents" data-formatter="operateFormatter">Actions</th>
		</thead>
		<tbody>
			<tr>
				<td></td>
				<td>1</td>
				<td>Dakota Rice</td>
				<td>$36,738</td>
				<td>Niger</td>
				<td>Oud-Turnhout</td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td>2</td>
				<td>Minerva Hooper</td>
				<td>$23,789</td>
				<td>Curaçao</td>
				<td>Sinaai-Waas</td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td>3</td>
				<td>Sage Rodriguez</td>
				<td>$56,142</td>
				<td>Netherlands</td>
				<td>Baileux</td>
				<td></td>
			</tr>
		</tbody>
	</table>
@endsection