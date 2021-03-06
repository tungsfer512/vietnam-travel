$('.hightlight-slider').slick({
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
        autoplay:true
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
