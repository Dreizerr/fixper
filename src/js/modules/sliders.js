import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


if (document.querySelector(`.our-team-swiper`)) {
  const ourTeamSwiper = new Swiper(".our-team-swiper", {
    modules: [Navigation, Pagination, Autoplay],
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
    },
    speed: 1500,
    simulateTouch: false,
    pagination: {
      clickable: true,
      el: ".our-team-swiper__pagination",
    },
    navigation: {
      prevEl: ".our-team-swiper__prev",
      nextEl: ".our-team-swiper__next",
    },
    spaceBetween: 30,
    breakpoints: {
      330: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
      700: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      1000: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
    },
  });
}

if (document.querySelector(`.reviews-swiper`)) {
  const reviewsSwiper = new Swiper(".reviews-swiper", {
    modules: [Navigation, Pagination],
    simulateTouch: false,
    speed: 1500,

    pagination: {
      clickable: true,
      el: ".reviews-swiper__pagination",
    },
    navigation: {
      prevEl: ".reviews-swiper__prev",
      nextEl: ".reviews-swiper__next",
    },
    spaceBetween: 30,
    breakpoints: {
      330: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
      700: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
    },
  });
}
