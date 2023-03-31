var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  // centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //   },
  //   100: {
  //     slidesPerView: 2,
  //   },
  //   950: {
  //     slidesPerView: 3,
  //   },
  // },
});