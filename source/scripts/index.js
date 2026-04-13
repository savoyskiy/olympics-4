import { onMobileMenuButtonClick, onHeaderStartClick } from './mobile-menu.js'; // импорт функции работы мобильного меню
import { pristineValidateEmail, pristineValidatePhone } from './validation.js'; // импорт функций валидации
import { onClickBackdrop, onResultButtonClick, setFormData } from './form.js'; // импорт функций отправки формы
import { liftingPriceHeader } from './price.js'; // импорт функции анимации заголовка блока price
import { liftingSertificateHeader, liftingSertificateHeaderWrapper, liftingSertificateLink, scalingSertificateImage } from './sertificate.js'; // импорт функций анимации в блоке sertificate
import { rotateImage, rotateAboutImage, moveCards, moveItems } from './about.js'; // импорт функций анимации в блоке advantages

const form = document.querySelector('.form__body'); // форма
const resultForm = document.querySelector('.modal'); // модальное окно результата отправки формы
const resultButton = resultForm.querySelector('.modal__button'); // кнопка закрытия модалки

/* Работа меню в мобильном варианте */
onMobileMenuButtonClick();
onHeaderStartClick();

/* Валидация email */
pristineValidateEmail();
/* Валидация телефона */
pristineValidatePhone();

/* Отправка формы */
resultForm.addEventListener('click', onClickBackdrop); // установка обработчика на закрытие модалки
resultButton.addEventListener('click', onResultButtonClick); // установка обработчика на кнопку закрытия модалки
form.addEventListener('submit', setFormData); // установка обработчика на форму

/* Запуск анимации блока price */
liftingPriceHeader();

/* Запуск анимации в блоке sertificate */
liftingSertificateHeader();
liftingSertificateHeaderWrapper();
liftingSertificateLink();
scalingSertificateImage();

/* Анимация вращения картинки */
rotateAboutImage();
window.addEventListener('scroll', rotateImage); // установка обработчика на скролл для вращения фишки

/* Анимация сдвига карточек */
moveCards();
window.addEventListener('scroll', moveItems);
