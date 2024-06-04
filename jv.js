
  
    $(document).ready(function() {
        $('#carousel').slick({
          dots: true,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 2300, // Atraso de 3 segundos
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">&lt;</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">&gt;</button>'
        });
      });
    