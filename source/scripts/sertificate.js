/* Анимации в блоке sertificate */
const sertificateHeader = document.querySelector('.sertificate__header');
const sertificateHeaderWrapper = document.querySelector('.sertificate__header-wrapper');
const sertificateLink = document.querySelector('.sertificate__link');
const sertificateImage = document.querySelector('.sertificate__image');

/* сперва добавляем на элементы класс с первоначальным состоянием анимации, если JS отключен, класс не добавится и элементы будут отображаться корректно без анимации */
sertificateHeader.classList.add('sertificate__header--hidden');
sertificateHeaderWrapper.classList.add('sertificate__header-wrapper--hidden');
sertificateLink.classList.add('sertificate__link--hidden');
sertificateImage.classList.add('sertificate__image--hidden');

const observerSertificateHeader = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('sertificate__header--lifted');
    }
  });
});

const observerSertificateHeaderWrapper = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('sertificate__header-wrapper--lifted');
    }
  });
});

const observerSertificateLink = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('sertificate__link--lifted');
    }
  });
});

const observerSertificateImage = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('sertificate__image--scaling');
    }
  });
});

const liftingSertificateHeader = () => observerSertificateHeader.observe(sertificateHeader);
const liftingSertificateHeaderWrapper = () => observerSertificateHeaderWrapper.observe(sertificateHeaderWrapper);
const liftingSertificateLink = () => observerSertificateLink.observe(sertificateLink);
const scalingSertificateImage = () => observerSertificateImage.observe(sertificateImage);

export { liftingSertificateHeader, liftingSertificateHeaderWrapper, liftingSertificateLink, scalingSertificateImage };
