<!-- start sidebar -->
<div id="sideBar"
class="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster">


<!-- sidebar content -->
<div class="flex flex-col">

    <!-- sidebar toggle -->
    <div class="text-right hidden md:block mb-4">
        <button id="sideBarHideBtn">
            <i class="fad fa-times-circle"></i>
        </button>
    </div>
    <!-- end sidebar toggle -->

    <p class="uppercase text-xs text-gray-600 mb-4 tracking-wider">dashboard</p>

    <!-- link -->
    <a href="{{ route('admin') }}"
        class="{{ isActive('admin') }} mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i class="fad fa-chart-pie text-xs mr-2"></i>
        Vue d'essemble
    </a>
    <!-- end link -->

    <!-- link -->
    <a href="{{ route('admin.stat') }}"
        class="{{ isActive('admin') }} mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i class="fad fa-shopping-cart text-xs mr-2"></i>
        stats en detail
    </a>
    <!-- end link -->

    <!-- link -->
    <a href="{{ route('admin.product') }}"
        class="{{ isActive('admin') }} mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i class="fad fa-shopping-cart text-xs mr-2"></i>
        Gestion des produits
    </a>
    <!-- end link -->

    <p class="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">Action</p>

    <!-- link -->
    <a href="{{ route('showcase') }}"
        class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i class="fad fa-envelope-open-text text-xs mr-2"></i>
        Aller sur l'application
    </a>
    <!-- end link -->

    <!-- link -->
    <a href="{{ route('logout') }}"
        class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i class="fad fa-comments text-xs mr-2"></i>
        Me déconnecter
    </a>
    <!-- end link -->

</div>
<!-- end sidebar content -->

</div>
<!-- end sidbar -->

