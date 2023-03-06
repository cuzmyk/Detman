const swiperEd = new Swiper(".certificates__slider", {
  spaceBetween: 30,
  slidesPerView: 2.5,
  speed: 1000,
  grabCursor: true,

  mousewheel: {
    sensitivity: 1,
  },
});

const swiperRe = new Swiper(".reviews__slider", {
  roundLengths: true,
  spaceBetween: 30,
  slidesPerView: 5,
  speed: 1000,
  grabCursor: true,

  mousewheel: {
    sensitivity: 2,
  },
});
