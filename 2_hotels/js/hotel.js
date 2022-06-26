// slider-search-form
function openDrop(evt, DropName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("container-top-wrapper-content-list-item-dropdown");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("container-top-wrapper-content-list-item");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(DropName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openDrop2(evt, DropName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("container-top2-wrapper2-content-list-item-dropdown");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("container-top2-wrapper2-content-list-item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(DropName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openDate(evt, DateName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("days-tabs-body-item");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("days-tabs-header-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(DateName).style.display = "block";
  evt.currentTarget.className += " active";
}

window.addEventListener("click", function(e) {
  console.log(e.target.className);
  var dropdown = document.getElementsByClassName("container-top-wrapper-content-list-item-dropdown");
  // var drophotels = 
  if(e.target.className == "container-body"
  || e.target.className == "hotel-title"
  || e.target.className == "line-sticky"
  || e.target.className == "container-top"
  || e.target.className == "hotel-title-content"
  || e.target.className == "container-top-topsale"){
    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].style.display = "none";
    }
  }

  var dropdown2 = document.getElementsByClassName("container-top2-wrapper2-content-list-item-dropdown");
  if(e.target.className == "container-body"
  || e.target.className == "hotel-title"
  || e.target.className == "line-sticky"
  || e.target.className == "container-top2"
  || e.target.className == "hotel-title-content"
  || e.target.className == "container-top2-topsale"
  || e.target.className == "container-top2-wrapper2"
  || e.target.className == "content-left"){
    for (let i = 0; i < dropdown2.length; i++) {
      dropdown2[i].style.display = "none";
    }
  }

});

window.onscroll = function () {
  let tabcontent = document.getElementsByClassName("container-top-wrapper-content-list-item-dropdown");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tabcontent2 = document.getElementsByClassName("container-top2-wrapper2-content-list-item-dropdown");
  for (let i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }
}


$(function () {

  (function quantityProducts() {
    var $quantityArrowMinus = $(".room-panel-item-arrow-minus");
    var $quantityArrowPlus = $(".room-panel-item-arrow-plus");
    var $quantityNum = $(".room-panel-item-num");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() >= 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
        if ($quantityNum.val() == 0) {
          $quantityArrowMinus.css({
            "border": "1px solid #ffd7bf",
            "color": "#ffd7bf"
          });
        }
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
      if ($quantityNum.val() > 0) {
        $quantityArrowMinus.css({
          "border": "1px solid #ff5b00",
          "color": "#ff5b00"
        });
      }
    }
  })();

  var $quantityArrowMinus2 = $(".room-panel-item-arrow-minus2");
  var $quantityArrowPlus2 = $(".room-panel-item-arrow-plus2");
  var $quantityNum2 = $(".room-panel-item-num2");

  $quantityArrowMinus2.click(quantityMinus2);
  $quantityArrowPlus2.click(quantityPlus2);

  function quantityMinus2() {
    if ($quantityNum2.val() >= 1) {
      $quantityNum2.val(+$quantityNum2.val() - 1);
      if ($quantityNum2.val() == 0) {
        $quantityArrowMinus2.css({
          "border": "1px solid #ffd7bf",
          "color": "#ffd7bf"
        });
      }
    }
  }

  function quantityPlus2() {
    $quantityNum2.val(+$quantityNum2.val() + 1);
    if ($quantityNum2.val() > 0) {
      $quantityArrowMinus2.css({
        "border": "1px solid #ff5b00",
        "color": "#ff5b00"
      });
    }
  }
  var $quantityArrowMinus3 = $(".room-panel-item-arrow-minus3");
  var $quantityArrowPlus3 = $(".room-panel-item-arrow-plus3");
  var $quantityNum3 = $(".room-panel-item-num3");

  $quantityArrowMinus3.click(quantityMinus3);
  $quantityArrowPlus3.click(quantityPlus3);

  function quantityMinus3() {
    if ($quantityNum3.val() >= 1) {
      $quantityNum3.val(+$quantityNum3.val() - 1);
      if ($quantityNum3.val() == 0) {
        $quantityArrowMinus3.css({
          "border": "1px solid #ffd7bf",
          "color": "#ffd7bf"
        });
      }
    }
  }

  function quantityPlus3() {
    $quantityNum3.val(+$quantityNum3.val() + 1);
    if ($quantityNum3.val() > 0) {
      $quantityArrowMinus3.css({
        "border": "1px solid #ff5b00",
        "color": "#ff5b00"
      });
    }
  }
});


$(document).ready(function () {
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

  $('.row1-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
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
      $('html, body').animate({ scrollTop: $(".slider-content-title").offset().top }, 1000);
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
