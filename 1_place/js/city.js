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


let categories = [
  {
    icon: './assets/images/cate-all.webp',
    text: 'Tất cả dịch vụ'
  },
  {
    icon: './assets/images/cate-park.webp',
    text: ' Công viên & công viên nước'
  },
  {
    icon: './assets/images/cate-camp.webp',
    text: 'Cắm trại'
  },
  {
    icon: './assets/images/cate-ship.webp',
    text: 'Tour thuyền & du thuyền'
  },
  {
    icon: './assets/images/cate-museum.webp',
    text: 'Bảo tàng & triển lãm'
  },
  {
    icon: './assets/images/cate-spa.webp',
    text: 'Spa & massages'
  },
  {
    icon: './assets/images/cate-thrilling.webp',
    text: 'Trải nghiệm cảm giác mạnh'
  },
  {
    icon: './assets/images/cate-walk.webp',
    text: 'Tour đi bộ & đạp xe'
  },
  {
    icon: './assets/images/cate-vehicle.webp',
    text: 'Tour phương tiện'
  },
  {
    icon: './assets/images/cate-slot.webp',
    text: 'Vé tham quan'
  },
  {
    icon: './assets/images/cate-sling.webp',
    text: 'Cáp treo & ngắm cảnh'
  },
  {
    icon: './assets/images/cate-cook.webp',
    text: 'Workshop & học nấu ăn'
  },
  {
    icon: './assets/images/cate-airplane.webp',
    text: 'Tour hàng không'
  },
  {
    icon: './assets/images/cate-historical.webp',
    text: 'Di tích lịch sử'
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



let areas = [
  {
    area: 'ĐÔNG Á',
    countries: [
      {
        country: 'HỒNG KÔNG & MACAO',
        cities:
          [
            'HỒNG KÔNG',
            'MACAO'
          ]
      },
      {
        country: 'ĐÀI LOAN',
        cities:
          [
            'Đài Bắc',
            'Nghi Lan',
            'Hoa Liên',
            'Đài Đông',
            'Đài Trung',
            'Cao Hùng',
            'Bành Hồ',
            'Đài Nam',
            'Kinmen'
          ]
      },
      {
        country: 'NHẬT BẢN',
        cities:
          [
            'Tokyo',
            'Osaka',
            'Kyoto',
            'Hokkaido',
            'Kyushu',
            'Chugoku',
            'Tohoku',
            'Hokushinetsu',
            'Kumamoto',
            'Tochigi',
            'Hyogo',
            'Hiroshima',
            'Fukuoka',
            'Aichi',
            'Chiba',
            'Gifu',
            'Shizuoka',
            'Okinawa',
            'Kanagawa',
            'Nagasaki',
            'Nara',
            'Đảo Miyako',
            'Đảo Ishigaki & Yaeyama',
            'Kinki',
            'Kitakanto',
            'Shikoku'
          ]
      },
      {
        country: 'HÀN QUỐC',
        cities:
          [
            'Seoul',
            'Jeju',
            'Busan',
            'Gangwon-do',
            'Gyeonggi-do',
            'Incheon'
          ]
      },
      {
        country: 'TRUNG QUỐC',
        cities:
          [
            'Bắc Kinh',
            'Thượng Hải',
            'Tô Châu & Hàng Châu',
            'Tây An',
            'Thành Đô',
            'Quế Lâm',
            'Trương Gia Giới',
            'Tam Á & Hải Khẩu',
            'Hạ Môn',
            'Trùng Khánh',
            'Quý Châu',
            'Nội Mông'
          ]
      },

    ]
  },
  {
    area: 'ĐÔNG NAM Á',
    countries: [
      {
        country: 'SINGAPORE',
        cities:
          [
            'Singapore'
          ]
      },
      {
        country: 'THÁI LAN',
        cities:
          [
            'Bangkok',
            'Pattaya',
            'Chiang Mai',
            'Phuket',
            'Koh Samui',
            'Krabi',
            'Hua Hin',
            'Koh Chang',
            'Koh Phi Phi',
            'Chiang Rai',
            'Koh Pha Ngan & Surat Thani',
            'Kanchanaburi',
            'Sukhothai'
          ]
      },
      {
        country: 'MALAYSIA',
        cities:
          [
            'Kuala Lumpur',
            'Penang',
            'Sabah',
            'Sarawak',
            'Langkawi',
            'Johor Bahru',
            'Ipoh',
            'Melaka',
            'Cao nguyên Genting'
          ]
      },
      {
        country: 'INDONESIA',
        cities:
          [
            'Bali',
            'Jakarta',
            'Lombok',
            'Batam',
            'Bintan',
            'Yogyakarta'
          ]
      },
      {
        country: 'PHILIPPINES',
        cities:
          [
            'Boracay',
            'Manila',
            'Cebu',
            'Palawan',
            'Bohol'
          ]
      },
      {
        country: 'VIỆT NAM',
        cities:
          [
            'TP Hồ Chí Minh',
            'Hà Nội',
            'Huế',
            'Hội An',
            'Đà Nẵng',
            'Phú Quốc',
            'Đà Lạt',
            'Nha Trang',
            'Sapa',
            'Quy Nhơn',
            'Hạ Long',
            'Đồng Hới - Quảng Bình',
            'Vũng Tàu',
            'Cần Thơ - ĐB Sông Cửu Long',
            'Mũi Né - Phan Thiết',
            'Côn Đảo'
          ]
      },
      {
        country: 'CAMPUCHIA',
        cities:
          [
            'Siem Reap',
            'Phnom Penh',
            'Sihanoukville'
          ]
      },
      {
        country: 'MYANMAR',
        cities:
          [
            'Yangon',
            'Bagan',
            'Mandalay',
            'Inle Lake'
          ]
      },
      {
        country: 'LÀO',
        cities:
          [
            'Luang Prabang',
            'Viêng Chăn'
          ]
      },

    ]
  },
  {
    area: 'BẮC MỸ',
    countries: [
      {
        country: 'MỸ',
        cities:
          [
            'New York',
            'Los Angeles',
            'Orlando',
            'San Francisco',
            'Chicago',
            'Las Vegas',
            'Washington DC',
            'Boston',
            'Miami',
            'San Diego',
            'Hawaii'
          ]
      },
    ]
  },
  {
    area: 'NAM Á',
    countries: [
      {
        country: 'NEPAL',
        cities:
          [
            'Kathmandu',
            'Pokhara',
          ]
      },
      {
        country: 'BHUTAN',
        cities:
          [
            'Thimphu',
          ]
      },
      {
        country: 'ẤN ĐỘ',
        cities:
          [
            'Mumbai',
            'Delhi',
            'Jaipur',
            'Udaipur',
            'Goa',
            'Himachal Pradesh',
            'Pune'
          ]
      },
      {
        country: 'SRI LANKA',
        cities:
          [
            'Colombo',
          ]
      },
    ]
  },
  {
    area: 'TRUNG ĐÔNG',
    countries: [
      {
        country: 'CÁC TIỂU VƯƠNG QUỐC Ả RẬP THỐNG NHẤT',
        cities:
          [
            'Dubai',
            'Abu Dhabi'
          ]
      },
      {
        country: 'THỔ NHĨ KÌ',
        cities:
          [
            'Cappadocia',
          ]
      },
      {
        country: 'ISRAEL',
        cities:
          [
            'Jerusalem',
          ]
      },
    ]
  },
  {
    area: 'Bắc Âu',
    countries: [
      {
        country: 'iceland',
        cities:
          [
            'Reykjavik',
            'Bắc Iceland',
            'South Iceland'
          ]
      },
      {
        country: 'phần lan',
        cities:
          [
            'Helsinki',
            'Lapland Phần Lan'
          ]
      },
    ]
  },
  {
    area: 'tây âu',
    countries: [
      {
        country: 'anh',
        cities:
          [
            'london',
            'edinburgh',
          ]
      },
      {
        country: 'pháp',
        cities:
          [
            'paris',
            'Alsace, Burgundy & Champagne',
          ]
      },
      {
        country: 'hà lan',
        cities:
          [
            'amsterdam',
          ]
      },

    ]
  },
  {
    area: 'nam âu',
    countries: [
      {
        country: 'ý',
        cities:
          [
            'rome',
            'Milan',
            'Florence',
            'Venice',
            'naples',
            'pisa'
          ]
      },
      {
        country: 'tây ban nha',
        cities:
          [
            'Madrid',
            'Barcelona',
            'Seville',
            'Malaga & Costa del Sol'
          ]
      },
      {
        country: 'hy lạp',
        cities:
          [
            'athens',
          ]
      },
    ]
  },
  {
    area: 'trung tâm châu âu',
    countries: [
      {
        country: 'đức',
        cities:
          [
            'berlin',
            'munich',
            'hamburg'
          ]
      },
      {
        country: 'áo',
        cities:
          [
            'vienna',
            'salzburg',
            'innsbruck'
          ]
      },
      {
        country: 'thụy sĩ',
        cities:
          [
            'zurich',
            'geneva',
          ]
      },
    ]
  },
  {
    area: 'châu đại dương',
    countries: [
      {
        country: 'úc',
        cities:
          [
            'Sydney',
            'Melbourne',
            'Cairns',
            'Brisbane',
            'Perth',
            'Gold Coast',
            'Adelaide',
            'Darwin'
          ]
      },
      {
        country: 'new zealand',
        cities:
          [
            'Christchurch',
            'Queenstown',
            'Auckland',
            'Rotorua',
            'Wellington',
            'Marlborough',
            'Sông băng Fox & Franz Josef'
          ]
      }
    ]
  },
];

let categories2 = [
  {
    category: 'Điểm tham quan',
    categoryItems:
      [
        'Thiên nhiên & vườn bách thảo',
        'Show diễn thông thường',
        'Công viên & công viên nước',
        'Bảo tàng & triển lãm',
        'Cáp treo & ngắm cảnh',
        'Di tích lịch sử',
        'Thủy cung, vườn thú & nông trại',
        'Vé tham quan'
      ]
  },
  {
    category: 'Thể thao & hoạt động ngoài trời',
    categoryItems:
      [
        'Cắm trại',
        'Thể thao trên tuyết',
        'Fitness',
        'Trải nghiệm cảm giác mạnh'
      ]
  },
  {
    category: 'Vui chơi & giải trí',
    categoryItems:
      [
        'Game & vận động',
        'Hoạt động về đêm & đồ uống',
        'Trang phục & nhiếp ảnh',
        'Workshop & học nấu ăn'
      ]
  },
  {
    category: 'Thư giãn',
    categoryItems:
      [
        'Spa & massages',
        'Làm đẹp',
        'Suối nước nóng',
        'Chăm sóc sức khoẻ'
      ]
  },
  {
    category: 'Tour & ngắm cảnh',
    categoryItems:
      [
        'Tour đi bộ & đạp xe',
        'Tour hàng không',
        'Tương tác với động vật',
        'Tour nhiều ngày',
        'Tour phương tiện',
        'Tour thuyền & du thuyền'
      ]
  },
  {
    category: 'Hoạt động & thể thao dưới nước',
    categoryItems:
      [
        'Lặn biển',
        'Lướt sóng',
        'Chèo thuyền & chèo kayak',
        'Câu cá & thể thao dưới nước'
      ]
  },
];

let areasContainer = document.querySelector('.list-left-city');
areasContainer.innerHTML = '';
areas.forEach((item, index1) => {
  let itemContainer = `
    <div class="list-left-item-content-node">
      <div class="list-left-item-content-node-trigger">
        <input type="checkbox" name="" id="area${index1}">
        <label for="area${index1}">
          <span>${item.area}</span>
        </label>
        <span class="material-icons">
          expand_more
        </span>
      </div>
      <div class="list-left-item-content-node-content">
    `;
  item.countries.forEach((country, index2) => {
    let countryContainer = `
      <div class="list-left-item-content-node-content-node">
        <div class="list-left-item-content-node-content-node-trigger">
          <input type="checkbox" name="" id="area${index1}country${index2}">
          <label for="area${index1}country${index2}">
            <span>${country.country}</span>
          </label>
          <span class="material-icons">
            expand_more
          </span>
        </div>
        <div class="list-left-item-content-node-content-node-content">
    `;
    country.cities.forEach((city, index3) => {
      let cityContainer = `
        <div class="list-left-item-content-node-content-node-content-item">
          <input id="area${index1}country${index2}city{}${index3}" type="checkbox">
          <label for="area${index1}country${index2}city{}${index3}">${city}</label>
        </div>
      `;
      countryContainer += cityContainer;
    });
    countryContainer += `
        </div>
      </div>
    `;
    itemContainer += countryContainer;
  });
  itemContainer += `
        </div>
      </div>
    </div>
  `;
  areasContainer.innerHTML += itemContainer;
});


let areaTriggers = document.querySelectorAll('.list-left-city .list-left-item-content-node-trigger>span');
areaTriggers.forEach((item) => {
  item.addEventListener('click', (e) => {
    let target = e.target;
    let targetContent = target.parentElement.nextElementSibling;
    if (targetContent.classList.contains('area-active')) {
      targetContent.classList.remove('area-active');
    } else {
      targetContent.classList.add('area-active');
    }
  });
});

let countryTriggers = document.querySelectorAll('.list-left-city .list-left-item-content-node-content-node-trigger>span');
countryTriggers.forEach((item) => {
  item.addEventListener('click', (e) => {
    let target = e.target;
    let targetContent = target.parentElement.nextElementSibling;
    if (targetContent.classList.contains('area-active')) {
      targetContent.classList.remove('area-active');
    } else {
      targetContent.classList.add('area-active');
    }
  });
});


let categorysss = document.querySelector('.list-left-category');
categorysss.innerHTML = '';
categories2.forEach((category, index1) => {
  let categoryContainer = `
    <div class="list-left-item-content-node">
      <div class="list-left-item-content-node-trigger">
        <input type="checkbox" name="" id="category${index1}">
        <label for="category${index1}">
          <span>${category.category}</span>
        </label>
        <span class="material-icons">
          expand_more
        </span>
      </div>
      <div class="list-left-item-content-node-content">
  `;
  category.categoryItems.forEach((item, index2) => {
    let itemContainer = `
      <div class="list-left-item-content-node-content-item">
        <input type="checkbox" name="" id="category${index1}item${index2}">
        <label for="category${index1}item${index2}">
          <span>${item}</span>
        </label>
      </div>
    `;
    categoryContainer += itemContainer;
  });
  categoryContainer += `
      </div>
    </div>
  `;
  categorysss.innerHTML += categoryContainer;
});


let categoryTriggers = document.querySelectorAll('.list-left-category .list-left-item-content-node-trigger>span');
categoryTriggers.forEach((item) => {
  item.addEventListener('click', (e) => {
    let target = e.target;
    let targetContent = target.parentElement.nextElementSibling;
    if (targetContent.classList.contains('area-active')) {
      targetContent.classList.remove('area-active');
    } else {
      targetContent.classList.add('area-active');
    }
  });
});

let min = 1;
let max = 100;

const calcLeftPosition = value => 100 / (100 - 1) * (value - 1);

$('#rangeMin').on('input', function (e) {
  const newValue = parseInt(e.target.value);
  if (newValue > max) return;
  min = newValue;
  $('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
  $('#min').html(newValue);
  $('#line').css({
    'left': calcLeftPosition(newValue) + '%',
    'right': (100 - calcLeftPosition(max)) + '%'
  });
});

$('#rangeMax').on('input', function (e) {
  const newValue = parseInt(e.target.value);
  if (newValue < min) return;
  max = newValue;
  $('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
  $('#max').html(newValue);
  $('#line').css({
    'left': calcLeftPosition(min) + '%',
    'right': (100 - calcLeftPosition(newValue)) + '%'
  });
});

var filterItems = document.querySelectorAll('.list-right-filter-content-filter-item-heading');
filterItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    let target = e.target;
    let targetContent = target.nextElementSibling;
    if (targetContent.style.display === 'block') {
      targetContent.style.display = 'none';
    } else {
      targetContent.style.display = 'block';
    }
  });
});

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
