const seventhH2 = document.querySelector(`.seventhH2`);
const seventhArrow = document.querySelector(`.seventhArrow`);
const seventhBox = document.querySelector(`.seventhBox`);

const showBox = () => {
  seventhBox.classList.toggle(`active`);
  seventhBox.classList.toggle(`off`);
  seventhArrow.classList.toggle(`marginLeft`);
  seventhArrow.classList.toggle(`colorArrow`);
  seventhArrow.classList.toggle(`rotateIcon`);
};

seventhH2.addEventListener(`click`, showBox);
