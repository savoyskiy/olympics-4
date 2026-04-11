/* Работа меню в мобильном варианте */
const headerButtom = document.querySelector('.header__mobile-menu-button');
const headerMainMenu = document.querySelector('.main-menu');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const headerStart = document.querySelector('.header__start');

const onMobileMenuButtonClick = () => { // функция открытия/закрытия мобильного меню по кнопке меню
  headerButtom.addEventListener('click', () => {
    headerMainMenu.classList.toggle('main-menu--hidden');
    headerButtom.classList.toggle('header__mobile-menu-button--open');
    main.classList.toggle('main--blur');
    footer.classList.toggle('footer--blur');
  });
};

const onHeaderStartClick = () => { // функция закрытия мобильного меню по клику на кнопку Старт в хедере
  headerStart.addEventListener('click', () => {
    headerMainMenu.classList.add('main-menu--hidden');
    headerButtom.classList.remove('header__mobile-menu-button--open');
    main.classList.remove('main--blur');
    footer.classList.remove('footer--blur');
  });
};

export { onMobileMenuButtonClick, onHeaderStartClick };
