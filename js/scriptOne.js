const FirstH2 = document.querySelector(`.firstH2`);
const FBox = document.querySelector(`.FBox`);
const Icon = document.querySelector(`.firstArrow`);

FirstH2.addEventListener(`click`, () => {
  FBox.classList.toggle("active");
  FBox.classList.toggle("off");
  Icon.classList.toggle(`rotateIcon`);
});
