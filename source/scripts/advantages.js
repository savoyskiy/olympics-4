/* Анимация в блоке advantages */

/* Вращение картинки */
const DESKTOP_WIDTH = 1024; // десктопная ширина экрана
const rotateParameters = {
  startAngle: 30, // начальный угол поворота фишки
  speedFactor: 0.05 // параметр скорости вращения, чем он больше, тем быстрее вращение
};
const moveFactor = {
  itemSkills: 0.05, // параметр скорости сдвига карточки skills
  itemKnowledge: 0.1 // параметр скорости карточки knowledge
};
const advantagesList = document.querySelector('.advantages__list');
const advantagesItemKnowledge = advantagesList.querySelector('.advantages__item--knowledge');
const advantagesImageRotated = advantagesItemKnowledge.querySelector('.advantages__image');
const advantagesItemSkills = advantagesList.querySelector('.advantages__item--skills');

const rotateImage = () => {
  const image = document.querySelector('.advantages__image-rotated');
  if (image) {
    const imagePosition = advantagesItemKnowledge.getBoundingClientRect().top;
    let rotateAngle = 0; // угол поворота
    if (window.innerWidth >= DESKTOP_WIDTH) {
      rotateAngle = (window.innerHeight - imagePosition) * rotateParameters.speedFactor - rotateParameters.startAngle;
    } else {
      rotateAngle = (window.innerHeight - imagePosition) * rotateParameters.speedFactor - rotateParameters.startAngle;
    }
    image.style.transform = `rotate(${ rotateAngle }deg)`;
  }
};

const observerAdvantagesImageRotated = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      advantagesImageRotated.classList.add('advantages__image-rotated');
    } else {
      advantagesImageRotated.classList.remove('advantages__image-rotated');
    }
  });
});

const rotateAdvantagesImage = () => observerAdvantagesImageRotated.observe(advantagesImageRotated);

/* Сдвиг карточек */
const moveItems = () => {
  const itemKnowledge = document.querySelector('.advantages__item--knowledge-move');
  const itemSkills = document.querySelector('.advantages__item--skills-move');
  if (itemKnowledge && itemSkills) {
    const itemsPosition = advantagesList.getBoundingClientRect().top;
    let moveKnowledgeDistance = 0;
    let moveSkillsDistance = 0;
    if (window.innerWidth >= DESKTOP_WIDTH) {
      moveKnowledgeDistance = (itemsPosition - window.innerHeight) * moveFactor.itemKnowledge;
      moveSkillsDistance = (itemsPosition - window.innerHeight) * moveFactor.itemSkills;
    }
    itemKnowledge.style.transform = `translateY(${ moveKnowledgeDistance }px)`;
    itemSkills.style.transform = `translateY(${ moveSkillsDistance }px)`;
  }
};

const observerItemList = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      advantagesItemKnowledge.classList.add('advantages__item--knowledge-move');
      advantagesItemSkills.classList.add('advantages__item--skills-move');
    } else {
      advantagesItemKnowledge.classList.remove('advantages__item--knowledge-move');
      advantagesItemSkills.classList.remove('advantages__item--skills-move');
    }
  });
});

const moveCards = () => observerItemList.observe(advantagesList);

export { rotateImage, rotateAdvantagesImage, moveCards, moveItems };
