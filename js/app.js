//MENU BTN
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu li");

menuBtn.onclick = () => {
  menuBtn.dataset.state === "closed"
    ? ((menuBtn.dataset.state = "opened"), (menu.dataset.state = "opened"))
    : ((menuBtn.dataset.state = "closed"), (menu.dataset.state = "closed"));
};
menuLinks.forEach((e) => {
  e.addEventListener("click", function () {
    menuBtn.dataset.state = "closed";
    menu.dataset.state = "closed";
  });
});

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
