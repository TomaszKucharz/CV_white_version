const thirdH2 = document.querySelector(`.th2`);
const tBox = document.querySelector(`.TBox`);
const tIcon = document.querySelector(`.thirdArrow`);

thirdH2.addEventListener(`click`, () => {
  tBox.classList.toggle("active");
  tBox.classList.toggle("off");
  tIcon.classList.toggle(`rotateIcon`);
  tIcon.classList.toggle(`colorArrow`);
  tIcon.classList.toggle(`marginLeft`);
});
