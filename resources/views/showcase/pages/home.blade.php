
    {{-- @if (session('status'))
        <div class="alert-success">
            {{ session('status') }}
        </div>
    @endif
    @dump($softs)
    @foreach($softs as $soft)
        @dump($soft->product_name)
        @dump($soft->description)
        @dump(getPrice($soft->price, $soft->cl))
    @endforeach --}}
    <!-- Swiper -->
    {{-- <div class="swiper-container slider">
      <div class="swiper-wrapper">
        @for ($u = 0; $u < 3; $u++)
          <div class="swiper-slide">
            @for ($i = 0; $i < 3; $i++)
            <h1>Punk IPA</h1>
            <img src="https://media-verticommnetwork1.netdna-ssl.com/wines/brewdog-punk-ipa-1005126.jpg"/>
            <p class="price">6.69€/l</p>
            <p class="description">meilleur bieres du monde, remi la tapette devrait pas l'aimer...</p>
            <hr>
          @endfor
          </div>
        @endfor
      </div>
      <div class="swiper-pagination"></div>
    </div> --}}


@extends('showcase.layouts.showcase')
@section('title', 'Beer\'o Clock')
@section('slogan', 'The Place To Beer !')
@section('content')
@section('nav')
<div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div>
@endsection
<main id="showacase">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        @for ($u = 0; $u < 3; $u++)
          <div class="swiper-slide">
            @for ($i = 0; $i < 3; $i++)
            <h1>Punk IPA</h1>
            <img src="https://media-verticommnetwork1.netdna-ssl.com/wines/brewdog-punk-ipa-1005126.jpg"/>
            <p class="price">6.69€/l</p>
            <p class="description">meilleur bieres du monde, remi la tapette devrait pas l'aimer...</p>
            <hr>
          @endfor
          </div>
        @endfor
      </div>
    </div>
    @include('showcase/layouts._social')
    <hr>
    {{-- @include('showcase/pages/legal') --}}
</main>

<script>
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  });
</script>

@endsection