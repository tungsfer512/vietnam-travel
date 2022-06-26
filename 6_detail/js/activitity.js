$('.swiper-wrapper').slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 1,
  nextArrow: `<span class="material-icons slick-next">
      chevron_right
      </span>`,
  prevArrow: `<span class="material-icons slick-prev">
    chevron_left
    </span>`
});

$('.like-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: `<span class="material-icons slick-next">
      chevron_right
      </span>`,
  prevArrow: `<span class="material-icons slick-prev">
    chevron_left
    </span>`
});

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