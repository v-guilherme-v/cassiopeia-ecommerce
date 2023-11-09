import { Autoplay, Controller, Navigation } from "swiper/modules"

export default {
  autoplay: true,
  spaceBetween: 40,
  modules: [ Autoplay, Controller, Navigation ],
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 2
    },
    895: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  }
}