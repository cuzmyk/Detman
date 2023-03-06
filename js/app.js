const swiperEd = new Swiper(".certificates__slider", {
  spaceBetween: 50,

  slidesPerView: 1,
  centeredSlides: true,

  mousewheel: true,

  breakpoints: {
    1000: {
      slidesPerView: 2.5,
      centeredSlides: false,
    },
  },

  speed: 1000,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperRe = new Swiper(".reviews__slider", {
  spaceBetween: 30,

  slidesPerView: 1,
  centeredSlides: true,

  mousewheel: true,

  breakpoints: {
    1000: {
      slidesPerView: 5,
      centeredSlides: false,
    },
  },

  speed: 1000,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next-rev",
    prevEl: ".swiper-button-prev-rev",
  },

  //   roundLengths: true,
});
