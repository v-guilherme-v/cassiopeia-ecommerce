import { Autoplay, Controller, Navigation } from "swiper/modules"

export default {
  spaceBetween: 40,
  modules: [ Autoplay, Controller, Navigation ],
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 8
    },
    576: {
      spaceBetween: 8,
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    892: {
      slidesPerView: 3
    },
    1200: {
      spaceBetween: 16,
      slidesPerView: 4
    }
  }
}