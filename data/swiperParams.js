const swiperParams = {
  slidesPerView: 4,
  centeredSlides: false,
  breakpoints: {
    100: {
      centeredSlides: true,
    },
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    600: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    900: {
      slidesPerView: 3,
    },
    1170: {
      slidesPerView: 4,
    },
  },
  // pagination: true,
  on: {
    init() {
      // ...
    },
  },
};

export default swiperParams;
