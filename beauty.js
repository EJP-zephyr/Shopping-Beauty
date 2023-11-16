
var menuBtn = document.querySelector(".menu");
var menuBtnIcon = document.querySelector(" .bx-menu-alt-right");
var navlist = document.querySelector(".navlist");

menuBtnIcon.onclick = function() {
navlist.classList.toggle("active")
var isactive = navlist.classList.contains('active')

menuBtnIcon.classList = isactive
? 'bx bx-x'
: 'bx bx-menu-alt-right'
};

//HOME SWiper

var swiper = new Swiper(".home-swiper", {
  spaceBetween: 85,
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//PRODUCT SWIPER
var swiper = new Swiper(".p-swiper", {
  slidesPerView: 1,
  spaceBetween: 80,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, 
  breakpoints: {
    // 640: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
  },
});


//  

//TESTIMONIAL SWIPER
var swiper = new Swiper(".testimonial-swiper", {
  
  pagination: {
    el: ".swiper-pagination",
    type: "fraction", 
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, 
});


