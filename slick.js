$(document).ready(function(){

    $('.slick').slick({
        slidesToScroll: 1,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 2000,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    });
});