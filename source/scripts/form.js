/* отправка формы подбора программ */
import { pristine } from './validation.js';

const SERVER_ADDRESS = 'https://echo.htmlacademy.ru'; // адрес отправки формы
const form = document.querySelector('.form__body'); // форма
const formSubmitButton = form.querySelector('.form__submit'); // кнопка отправки формы
const resultForm = document.querySelector('.modal'); // модальное окно результата отправки формы
const resultText = resultForm.querySelector('.modal__text'); // текст сообщения в модалке

const uploadFormData = (formData) => fetch(
  SERVER_ADDRESS,
  {
    method: 'POST',
    body: formData
  }
);

const onResultButtonClick = () => { // закрытие модалки по кнопке
  resultForm.close();
};

const onClickBackdrop = (evt) => { // закрытие модалки по клику вне модалки
  const isClickonBackdrop = evt.target === evt.currentTarget;

  if (isClickonBackdrop) {
    resultForm.close();
  }
};

const blockFormSubmitButton = () => { // блокировка кнопки формы при отправке запроса
  formSubmitButton.textContent = 'Отправляем ...';
  formSubmitButton.disabled = true;
};

const unBlockFormSubmitButton = () => { // разблокировка кнопки формы после отправки запроса
  formSubmitButton.textContent = 'Оставить заявку';
  formSubmitButton.disabled = false;
};

const setFormData = (evt) => { // функция отправки данных формы на сервер
  evt.preventDefault();

  const isValid = pristine.validate();

  if(isValid) {
    blockFormSubmitButton();

    const formData = new FormData(evt.target);

    uploadFormData(formData)
      .then(
        (responce) => {
          if(!responce.ok) {
            throw new Error;
          }
          form.reset();
        }
      )
      .catch(
        () => {
          resultText.textContent = 'Что-то пошло не так...';
        }
      )
      .finally(
        () => {
          resultForm.showModal();
          unBlockFormSubmitButton();
        }
      );
  }
};

export { onClickBackdrop, onResultButtonClick, setFormData };
