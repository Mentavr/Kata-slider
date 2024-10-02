import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const enableOnlyMobile = () => {
  const button = document.querySelector('#button');
  if (window.innerWidth > 767) {
    button.classList.remove('hidden');
    swiper.disable();
  } else {
    button.classList.add('hidden');
    swiper.enable();
    swiper.update();
  }
};

enableOnlyMobile();

window.addEventListener('resize', enableOnlyMobile);
console.log(window.addEventListener);
