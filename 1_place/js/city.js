

$('.f3_experiences-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  // autoplay: true,
  // autoplaySpeed: 2000,
  infinite: false,
  nextArrow: `<span class="material-icons slick-next">
      chevron_right
      </span>`,
  prevArrow: `<span class="material-icons slick-prev">
    chevron_left
    </span>`
});

$('.f3_near-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  infinite: false,
  nextArrow: `<span class="material-icons slick-next">
      chevron_right
      </span>`,
  prevArrow: `<span class="material-icons slick-prev">
    chevron_left
    </span>`
});
$('.f3_comment-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  // autoplay: true,
  // autoplaySpeed: 2000,
  infinite: false,
  nextArrow: `<span class="material-icons slick-next">
      chevron_right
      </span>`,
  prevArrow: `<span class="material-icons slick-prev">
    chevron_left
    </span>`
});



var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
