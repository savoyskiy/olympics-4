/* Анимация в блоке about */

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
const aboutList = document.querySelector('.about__list');
const aboutItemKnowledge = aboutList.querySelector('.about__item--knowledge');
const aboutImageRotated = aboutItemKnowledge.querySelector('.about__image');
const aboutItemSkills = aboutList.querySelector('.about__item--skills');

const rotateImage = () => {
  const image = document.querySelector('.about__image-rotated');
  if (image) {
    const imagePosition = aboutItemKnowledge.getBoundingClientRect().top;
    let rotateAngle = 0; // угол поворота
    if (window.innerWidth >= DESKTOP_WIDTH) {
      rotateAngle = (window.innerHeight - imagePosition) * rotateParameters.speedFactor - rotateParameters.startAngle;
    } else {
      rotateAngle = (window.innerHeight - imagePosition) * rotateParameters.speedFactor - rotateParameters.startAngle;
    }
    image.style.transform = `rotate(${ rotateAngle }deg)`;
  }
};

const observerAboutImageRotated = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      aboutImageRotated.classList.add('about__image-rotated');
    } else {
      aboutImageRotated.classList.remove('about__image-rotated');
    }
  });
});

const rotateAboutImage = () => observerAboutImageRotated.observe(aboutImageRotated);

/* Сдвиг карточек */
const moveItems = () => {
  const itemKnowledge = document.querySelector('.about__item--knowledge-move');
  const itemSkills = document.querySelector('.about__item--skills-move');
  if (itemKnowledge && itemSkills) {
    const itemsPosition = aboutList.getBoundingClientRect().top;
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
      aboutItemKnowledge.classList.add('about__item--knowledge-move');
      aboutItemSkills.classList.add('about__item--skills-move');
    } else {
      aboutItemKnowledge.classList.remove('about__item--knowledge-move');
      aboutItemSkills.classList.remove('about__item--skills-move');
    }
  });
});

const moveCards = () => observerItemList.observe(aboutList);

export { rotateImage, rotateAboutImage, moveCards, moveItems };
