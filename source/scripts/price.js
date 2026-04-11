/* Анимация заголовка в блоке price */
const priceHeader = document.querySelector('.price__header');

const observerPriceHeader = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('price__header--lifted');
    }
  });

});

const liftingPriceHeader = () => observerPriceHeader.observe(priceHeader);

export { liftingPriceHeader };
