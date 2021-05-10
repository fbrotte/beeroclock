@extends('layouts.showcase')
@section('title', 'Beer\'o Clock')
@section('content')

<main id="showacase">
  <div class="product-list">
    <div class="swiper-container mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">@for ($i = 0; $i < 3; $i++)
          <div class="product">
            <h2>Punk IPA</h2>
            <img src="https://media-verticommnetwork1.netdna-ssl.com/wines/brewdog-punk-ipa-1005126.jpg"/>
            <p class="description">meilleur bieres du monde, remi la tapette devrait pas l'aimer...</p>
            <p class="price">6.69€/l</p>
          </div> 
          @endfor</div>
        <div class="swiper-slide">@for ($i = 0; $i < 3; $i++)
          <div class="product">
            <h2>Punk IPA</h2>
            <img src="https://media-verticommnetwork1.netdna-ssl.com/wines/brewdog-punk-ipa-1005126.jpg"/>
            <p class="description">meilleur bieres du monde, remi la tapette devrait pas l'aimer...</p>
            <p class="price">6.69€/l</p>
          </div> 
          @endfor</div>
        <div class="swiper-slide">@for ($i = 0; $i < 3; $i++)
          <div class="product">
            <h2>Punk IPA</h2>
            <img src="https://media-verticommnetwork1.netdna-ssl.com/wines/brewdog-punk-ipa-1005126.jpg"/>
            <p class="description">meilleur bieres du monde, remi la tapette devrait pas l'aimer...</p>
            <p class="price">6.69€/l</p>
          </div> 
          @endfor</div>
      </div>
    </div>
  </div>
    @include('layouts._social')
</main>

<script>
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
</script>

@endsection