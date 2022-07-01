$(document).ready(function () {
  $('.hightlight-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        }
      }
    ],
    nextArrow: `<span class="material-icons slick-next">
      arrow_forward
      </span>`,
    prevArrow: `<span class="material-icons slick-prev">
    arrow_back
    </span>`
  });

  $('.place-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        }
      }
    ],
    nextArrow: `<span class="material-icons slick-next">
      arrow_forward
      </span>`,
    prevArrow: `<span class="material-icons slick-prev">
    arrow_back
    </span>`
  });
  $('.new-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: `<span class="material-icons slick-next">
      arrow_forward
      </span>`,
    prevArrow: `<span class="material-icons slick-prev">
    arrow_back
    </span>`
  });
  $('.hot-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: `<span class="material-icons slick-next">
      arrow_forward
      </span>`,
    prevArrow: `<span class="material-icons slick-prev">
    arrow_back
    </span>`
  });
  $('.interest-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: `<span class="material-icons slick-next">
      arrow_forward
      </span>`,
    prevArrow: `<span class="material-icons slick-prev">
    arrow_back
    </span>`
  });

  $('.search-form-input').click(function () {
    $('.slider-search-form').toggleClass('border-radius');
    $('.slider-search-form-dropdown').fadeToggle(500);
    if ($('.search-form-input').css("display") !== "none") {
      $(window).click(function (e) {
        if (!$(e.target).closest('.slider-search-form-dropdown').length
          && !$(e.target).closest('.search-form-input').length) {
          $('.slider-search-form-dropdown').fadeOut(500);
          $('.slider-search-form').removeClass('border-radius');

          if ($('.slider-search-form').hasClass('slider-search-form-focus')) {
            $('.slider-search-form').toggleClass('slider-search-form-focus');
          }
        }
      });
    }

    $('.slider-search-form').toggleClass('slider-search-form-focus');
  });
});


