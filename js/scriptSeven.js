const seventhH2 = document.querySelector(`.seventhH2`);
const seventhArrow = document.querySelector(`.seventhArrow`);
const seventhBox = document.querySelector(`.seventhBox`);
const seventhIcon = document.querySelector(`.seventhArrow`);

const showBox = () => {
  seventhBox.classList.toggle(`active`);
  seventhBox.classList.toggle(`off`);
  seventhIcon.classList.toggle(`rotateIcon`);
};

seventhH2.addEventListener(`click`, showBox);
