@extends('admin.layouts.dashboard')

@section('content')

<div class="md:fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white p-6 border-b border-gray-300">
    
    <!-- logo -->
    <div class="flex-none w-56 flex flex-row items-center">
      <img src="img/logo.png" class="w-10 flex-none">
      <strong class="capitalize ml-1 flex-1">Beer O' Clock</strong>

      <button id="sliderBtn" class="hidden md:block md:fixed right-0 mr-6">
        <i class="fad fa-bars"></i>
      </button>
    </div>
    <!-- end logo -->   
    
    <!-- navbar content toggle -->
    <button id="navbarToggle" class="hidden md:block md:fixed right-0 mr-6" style="display: none;"></button>
    <!-- end navbar content toggle -->

    <!-- navbar content -->
    <div id="navbar" class="animated md:hidden md:fixed md:top-0 md:w-full md:left-0 md:mt-16 md:border-t md:border-b md:border-gray-200 md:p-10 md:bg-white flex-1 pl-3 flex flex-row flex-wrap justify-between items-center md:flex-col md:items-center">
     

    </div>
    <!-- end navbar content -->

  </div>
<!-- end navbar -->

<!-- strat wrapper -->
<div class="h-screen flex flex-row flex-wrap">
  
    <!-- start sidebar -->
  <div id="sideBar" class="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster">
    

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
      <a href="./index.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i class="fad fa-chart-pie text-xs mr-2"></i>                
        Vue d'essemble
      </a>
      <!-- end link -->

      <!-- link -->
      <a href="./index-1.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i class="fad fa-shopping-cart text-xs mr-2"></i>
        stats en detail
      </a>
      <!-- end link -->

      <!-- link -->
      <a href="./index-1.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i class="fad fa-shopping-cart text-xs mr-2"></i>
        Gestion des produits
      </a>
      <!-- end link -->

      <p class="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">Action</p>

      <!-- link -->
      <a href="./email.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i class="fad fa-envelope-open-text text-xs mr-2"></i>
        Aller sur l'application
      </a>
      <!-- end link -->

      <!-- link -->
      <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i class="fad fa-comments text-xs mr-2"></i>
        Me déconnecter
      </a>
      <!-- end link -->
      
    </div>
    <!-- end sidebar content -->

  </div>
  <!-- end sidbar -->

  <!-- strat content -->
  <div class="bg-gray-100 flex-1 p-6 md:mt-16"> 

    <!-- congrats & summary -->
    <div class="grid grid-cols-3 lg:grid-cols-1 gap-5">
   
    </div>
    <!-- end congrats & summary -->


    <!-- best seller & traffic -->
    <div class="grid grid-cols-2 lg:grid-cols-1 gap-5 mt-5">
      <div class="card">
    <div class="card-body">
        <div class="flex flex-row justify-between items-center">
            <h1 class="font-extrabold text-lg">Créer un produit</h1>
        </div>
        <form class="mt-6">
            <label for="name" class="block text-xs font-semibold text-gray-600 uppercase">Nom</label>
            <input id="name" type="text" name="name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <label for="price" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Prix</label>
            <input id="peice" type="text" name="price" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <label for="category" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">catégorie</label>
            <select id="category" class="border border-gray-300 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option>Biére</option>
                <option>Vin</option>
                <option>Shooter</option>
                <option>Planter</option>
                <option>Soft</option>
                <option>Plateau charcuterie</option>
              </select>
              <!-- <label for="image" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Image</label>
              <input class='notxt' type="file" id="image" name="image" accept="image/png, image/jpeg" > -->

            <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
              créer
            </button>
          </form>
    </div>
</div>
<div class="card">

    <div class="card-body">
        <div class="flex flex-row justify-between items-center">
            <h1 class="font-extrabold text-lg">Liste des produits</h1>
        </div>
        <div class="pt-2 relative mx-auto text-gray-600">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search" name="search" placeholder="Search">
            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
              <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                width="512px" height="512px">
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <div class="relative inline-flex">
            <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
            <select id="category" class="border border-gray-300 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option>Biére</option>
                <option>Vin</option>
                <option>Shooter</option>
                <option>Planter</option>
                <option>Soft</option>
                <option>Plateau charcuterie</option>
              </select>
          </div>
        <table class="table-auto w-full mt-5 text-right">
    
            <thead>
                <tr>
                    <td class="py-4 font-extrabold text-sm text-left">Nom</td>
                </tr>
            </thead>
    
            <tbody>
    
                <!-- item -->
                <tr class="">
                    <td class="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
                        <div class="w-8 h-8 overflow-hidden mr-3">
                            <img src="img/sneakers.svg" class="object-cover">
                        </div>
                        Sneakers and Tennis 
                    </td>
                    
                </tr>
                <tr class="">
                    <td class="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
                        <div class="w-8 h-8 overflow-hidden mr-3">
                            <img src="img/sneakers.svg" class="object-cover">
                        </div>
                        Sneakers and Tennis 
                    </td>
                    
                </tr>
                <tr class="">
                    <td class="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
                        <div class="w-8 h-8 overflow-hidden mr-3">
                            <img src="img/sneakers.svg" class="object-cover">
                        </div>
                        Sneakers and Tennis 
                    </td>
                    
                </tr>
                <tr class="">
                    <td class="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
                        <div class="w-8 h-8 overflow-hidden mr-3">
                            <img src="img/sneakers.svg" class="object-cover">
                        </div>
                        Sneakers and Tennis 
                    </td>
                    
                </tr>
                <!-- end item -->
                <hr>
                <tr>
                    <td class="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
                        <form>
                            <label for="name" class="block text-xs font-semibold text-gray-600 uppercase">Nom</label>
                            <input id="name" type="text" name="name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            <label for="price" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Prix</label>
                            <input id="peice" type="text" name="price" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            <label for="category" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">catégorie</label>
                            <!-- <input lass="border border-gray-300 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"> -->
                            <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            modifier
                            </button>
                        </form>
                    </td>
                </tr>
    <hr>
    <tr class="">
        <td class="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
            <div class="w-8 h-8 overflow-hidden mr-3">
                <img src="img/sneakers.svg" class="object-cover">
            </div>
            Sneakers and Tennis 
        </td>
        
    </tr>
    <tr class="">
        <td class="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
            <div class="w-8 h-8 overflow-hidden mr-3">
                <img src="img/sneakers.svg" class="object-cover">
            </div>
            Sneakers and Tennis 
        </td>
        
    </tr>
    <tr class="">
        <td class="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
            <div class="w-8 h-8 overflow-hidden mr-3">
                <img src="img/sneakers.svg" class="object-cover">
            </div>
            Sneakers and Tennis 
        </td>
        
    </tr>
            </tbody>
    
        </table>
        
    </div>
</div>
     
    </div>
    <!-- end best seller & traffic -->
        

  </div>
  <!-- end content -->

</div>
<!-- end wrapper -->

@endsection