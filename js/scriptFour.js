const fourH2 = document.querySelector(`.fourh2`);
const fourBox = document.querySelector(`.fourBox`);
const fourIcon = document.querySelector(`.fourArrow`);

fourH2.addEventListener(`click`, () => {
  fourBox.classList.toggle("active");
  fourBox.classList.toggle("off");
  fourIcon.classList.toggle(`rotateIcon`);
});
