const swiperParams = {
  slidesPerView: 4,
  centeredSlides: false,
  breakpoints: {
    100: {},
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
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
