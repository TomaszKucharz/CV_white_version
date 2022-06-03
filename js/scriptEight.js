const eighthH2 = document.querySelector(`.eighthH2`);
const eighthArrow = document.querySelector(`.eighthArrow`);
const eighthBox = document.querySelector(`.eighthBox`);

const showEighthBox = () => {
  eighthBox.classList.toggle(`acive`);
  eighthBox.classList.toggle(`off`);
  eighthArrow.classList.toggle(`marginLeft`);
  eighthArrow.classList.toggle(`colorArrow`);
  eighthArrow.classList.toggle(`rotateIcon`);
};

eighthH2.addEventListener(`click`, showEighthBox);
