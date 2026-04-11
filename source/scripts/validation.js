const EMAIL_RULES = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // правило ввода email
const PHONE_FULL_RULES = /^\d{11,}$/; // полное правило ввода телефона
const PHONE_MIN_LENGTH = 11; // минимальная длина телефона
const PHONE_CONTENT = /^\d+$/; // правило для ввода телефона только цифры
const form = document.querySelector('.form__body'); // форма
const inputEmail = form.querySelector('.form__input--email'); // поле ввода email
const inputPhone = form.querySelector('.form__input--tel'); // поле ввода телефона

const pristine = new Pristine(form, {
  classTo: 'form__label',
  errorClass: 'form__label--invalid',
  errorTextParent: 'form__label',
  errorTextTag: 'p',
  errorTextClass: 'form__error-message-text'
});

/* проверка email */
const emailErrorText = 'Формат email: имя@сервер.домен'; // сообщение об ошибке

const validateEmail = () => EMAIL_RULES.test(inputEmail.value); // функция сравнения содержимого поля с заданными параметрами

const pristineValidateEmail = () => pristine.addValidator(inputEmail, validateEmail, emailErrorText);

/* проверка телефона */
let phoneErrorText = '';
const setPhoneErrorText = () => {
  if (!PHONE_CONTENT.test(inputPhone.value)) {
    phoneErrorText = 'Только цифры';
  } else if (inputPhone.value.length < PHONE_MIN_LENGTH) {
    phoneErrorText = 'Минимум 11 цифр';
  }
  return phoneErrorText;
};

const validatePhone = () => PHONE_FULL_RULES.test(inputPhone.value);

const pristineValidatePhone = () => pristine.addValidator(inputPhone, validatePhone, setPhoneErrorText);

export { pristine, pristineValidateEmail, pristineValidatePhone };
