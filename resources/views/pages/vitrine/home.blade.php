<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Swiper demo</title>
    <!-- Link Swiper's CSS -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/swiper/swiper-bundle.min.css"
    />

    <!-- Demo styles -->
    <style>
      html,
      body {
        position: relative;
        height: 100%;
      }

      body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #000;
        margin: 0;
        padding: 0;
      }

      .swiper-container {
        width: 100%;
        height: 100%;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    </style>
  </head>

  <body>
    @if (session('status'))
        <div class="alert-success">
            {{ session('status') }}
        </div>
    @endif
    @dump($softs)
    @foreach($softs as $soft)
        @dump($soft->product_name)
        @dump($soft->description)
        @dump(getPrice($soft->price, $soft->cl))
    @endforeach
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

   <script src="{{asset('/js/app.js')}}"></script>
  </body>
</html>
