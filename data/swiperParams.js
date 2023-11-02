const swiperParams = {
  slidesPerView: 4,
  breakpoints: {
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
  on: {
    init() {
      // ...
    },
  },
};

export default swiperParams;
