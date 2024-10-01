import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const enableOnlyMobile = () => {
  if (window.innerWidth > 767) {
    swiper.disable();
  } else {
    swiper.enable();
    swiper.update();
  }
};

enableOnlyMobile();

window.addEventListener('resize', enableOnlyMobile);

export default swiper;
