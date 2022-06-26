let categories = [
  {
    icon : './assets/images/cate-all.webp',
    text : 'Tất cả dịch vụ'
  },
  {
    icon : './assets/images/cate-park.webp',
    text: ' Công viên & công viên nước'
  },
  {
    icon : './assets/images/cate-camp.webp',
    text : 'Cắm trại'
  },
  {
    icon : './assets/images/cate-ship.webp',
    text : 'Tour thuyền & du thuyền'
  },
  {
    icon : './assets/images/cate-museum.webp',
    text : 'Bảo tàng & triển lãm'
  },
  {
    icon : './assets/images/cate-spa.webp',
    text : 'Spa & massages'
  },
  {
    icon : './assets/images/cate-thrilling.webp',
    text : 'Trải nghiệm cảm giác mạnh'
  },
  {
    icon : './assets/images/cate-walk.webp',
    text : 'Tour đi bộ & đạp xe'
  },
  {
    icon : './assets/images/cate-vehicle.webp',
    text : 'Tour phương tiện'
  },
  {
    icon : './assets/images/cate-slot.webp',
    text : 'Vé tham quan'
  },
  {
    icon : './assets/images/cate-sling.webp',
    text : 'Cáp treo & ngắm cảnh'
  },
  {
    icon : './assets/images/cate-cook.webp',
    text : 'Workshop & học nấu ăn'
  },
  {
    icon : './assets/images/cate-airplane.webp',
    text : 'Tour hàng không'
  },
  {
    icon : './assets/images/cate-historical.webp',
    text : 'Di tích lịch sử'
  }
]

let f3_category_container = document.querySelector('.f3_category');
f3_category_container.innerHTML = '';
categories.forEach((category) => {
  let categoryItem = `
    <a href="../0_general/search.html" class="f3_category-item">
      <div class="f3_category-item-img">
        <img src="${category.icon}" alt="">
      </div>
      <div class="f3_category-item-text">
        ${category.text}
      </div>
    </a>
  `;
  f3_category_container.innerHTML += categoryItem;
});

$('.f3_category').slick({
  slidesToShow: 7,
  slidesToScroll: 7,
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


let slider_5s = [
  {
    country: 'Việt Nam', 
    activities : [
      {
        image : '',
        city : '',
        title : '',
        desc : '',
        rate : {
          star : 4.7,
          comment : 259,
          ordered : '3K+'
        }, 
        tag : {
          hot: true,
          immediatel: true
        }, 
        price : {
          old : 128000,
          new : 89000
        }, 
        sale : 34
      },
    ]
  }
]

$('.f3_slider-5').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
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
