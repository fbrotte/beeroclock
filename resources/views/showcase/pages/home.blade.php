@extends('showcase.layouts.showcase')
@section('title', 'Beer\'o Clock')
@section('slogan', 'Bonjour ' . Auth::user()->firstname . ',')
@section('content')

<main id="showcase">
    <hr>
    <div class="swiper-container">
      <div class="swiper-pagination"></div>
      <div class="swiper-wrapper">
        @foreach($product_type as $type)
          <div data-history="{{ Str::slug($type->name) }}" class="swiper-slide">

            <h1>{{ $type->name }}</h1>

            @php $products = $type->products()->get() @endphp

            @forelse($products as $item)
              <h2>{{ $item->product_name }}</h2>
              <img src="{{image($item->img_url)}}"/>

              <p class="price">{{ getPrice($item->price, $item->qty, $type->qty) }}</p>
              <p class="description">{{ $item->description }}</p>

              <p>
                @if($type->origin) {{ $item->origin }} - @endif
                @if($type->alcohol) {{ deg($item->alcohol) }} @endif
              </p>

              <hr class="small">

              @empty
              <h2>Aucun produit</h2>
              <p>Les produits arrivents bientot dans cette section!</p>
            @endforelse
            
          </div>
        @endforeach

  
      </div>
      <div class="swiper-scrollbar"></div>
    </div>
    @include('showcase/layouts._social')
    <hr>
    {{-- @include('showcase/pages/legal') --}}
</main>

<script>

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


  var swiper = new Swiper(".swiper-container", {
    loop: true,
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    history: {
      key: "",
    },
    autoHeight: true,
    // mousewheel: true,
    slidesPerView: 1,
    on: {
      slideChange: function (swiper) {
        topFunction()
      },
    }
  });

</script>


<style>
  .swiper-pagination {
    top: 70px;
  }

  .swiper-pagination-bullet {
    background: var(--white);
  }

  .swiper-pagination-bullet-active {
    background: var(--yellow);
  }

</style>

@endsection