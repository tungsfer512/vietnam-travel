function openDetail(evt, ColName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("container-body-row-tabs-body-panel");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("container-body-row-tabs-header-items");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(ColName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

$(document).ready(function () {
  $('.top-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: `<span class="material-icons slick-next">
      chevron_right
      </span>`,
    prevArrow: `<span class="material-icons slick-prev">
    chevron_left
    </span>`
  });
  $('.hightlight-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow: `<span class="material-icons slick-next">
      chevron_right
      </span>`,
    prevArrow: `<span class="material-icons slick-prev">
    chevron_left
    </span>`
  });
  $('.new-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow: `<span class="material-icons slick-next">
      chevron_right
      </span>`,
    prevArrow: `<span class="material-icons slick-prev">
    chevron_left
    </span>`
  });
  $('.hot-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow: `<span class="material-icons slick-next">
      chevron_right
      </span>`,
    prevArrow: `<span class="material-icons slick-prev">
    chevron_left
    </span>`
  });
  $('.interest-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow: `<span class="material-icons slick-next">
      chevron_right
      </span>`,
    prevArrow: `<span class="material-icons slick-prev">
    chevron_left
    </span>`
  });

  $('.search-form-input').click(function () {
    $('.slider-search-form-dropdown').fadeToggle(500);
    if ($('.search-form-input').css("display") !== "none") {
      $(window).click(function (e) {
        if (!$(e.target).closest('.slider-search-form-dropdown').length
          && !$(e.target).closest('.search-form-input').length) {
          $('.slider-search-form-dropdown').fadeOut(500);

          if ($('.slider-search-form').hasClass('slider-search-form-focus')) {
            $('.slider-search-form').toggleClass('slider-search-form-focus');
          }
        }
      });
      document.querySelector('.top-slider-content').scrollIntoView({ behavior: "smooth", block: "start" });
      $(window).scroll(function () {
        if ($(window).scrollTop() > $(".slider-content-title").offset().top + $(".slider-search-form-dropdown").height() - 20) {
          $('.slider-search-form-dropdown').fadeOut(500);

          if ($('.slider-search-form').hasClass('slider-search-form-focus')) {
            $('.slider-search-form').toggleClass('slider-search-form-focus');
          }
        }
      });
    }

    $('.slider-search-form').toggleClass('slider-search-form-focus');
  });
});


