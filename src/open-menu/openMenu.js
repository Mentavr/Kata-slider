export const openMenu = () => {
  const button = document.querySelector('#button');
  const menu = document.querySelector('.castom-swiper__wrapper');
  const buttonText = document.querySelector('.button__text');
  const buttonIcon = document.querySelector('.button-icon');


  button.addEventListener('click', () => {
    const isClose = !!button.classList.contains('close');
    console.log('isClose', isClose);
    console.log('click');
    if (isClose) {
      menu.classList.remove('menu_close');
      menu.classList.add('menu_open');
      button.classList.remove('close');
      button.classList.add('open');
      buttonIcon.classList.remove('button-icon_rotate-close');
      buttonIcon.classList.add('button-icon_rotate-open');
      buttonText.textContent = 'Скрыть';
    }
    if (!isClose) {
      buttonIcon.classList.remove('button-icon_rotate-open');
      buttonIcon.classList.add('button-icon_rotate-close');
      menu.classList.remove('menu_open');
      menu.classList.add('menu_close');
      button.classList.remove('open');
      button.classList.add('close');
      buttonText.textContent = 'Показать все';
    }
  });
};
