@extends('admin.layouts.dashboard')

@section('content')


<!-- strat wrapper -->
<div class="h-screen flex flex-row flex-wrap">

    @include('admin.layouts._sidebar')

    <!-- strat content -->
    <div class="bg-gray-100 flex-1 p-6 md:mt-16">

        <!-- congrats & summary -->
        <div class="grid grid-cols-3 lg:grid-cols-1 gap-5">

        </div>
        <!-- end congrats & summary -->


        <div class="grid grid-cols-2 lg:grid-cols-1 gap-5 mt-5">

            <div class="card">
                <div class="card-body">
                    <div class="flex flex-row justify-between items-center">
                        <h1 class="font-extrabold text-lg">Créer un produit</h1>
                    </div>
                        <livewire:create-product />
                </div>
            </div>
            <livewire:product-list />

        </div>
        <!-- end best seller & traffic -->
    </div>
    <!-- end content -->

</div>
<!-- end wrapper -->

@endsection
