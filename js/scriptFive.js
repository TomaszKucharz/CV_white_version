const fifthH2 = document.querySelector(`.fifthh2`);
const fifthBox = document.querySelector(`.fifthBox`);
const fifthArrow = document.querySelector(`.fifthArrow`);

fifthH2.addEventListener(`click`, () => {
	fifthBox.classList.toggle(`active`);
	fifthBox.classList.toggle(`off`);
	fifthArrow.classList.toggle(`rotateIcon`);
});
