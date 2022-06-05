const sixthH2 = document.querySelector(`.sixthh2`);
const sixthArrow = document.querySelector(`.sixthArrow`);
const sixthBox = document.querySelector(`.sixthBox`);

sixthH2.addEventListener(`click`, () => {
	sixthBox.classList.toggle(`active`);
	sixthBox.classList.toggle(`off`);
	sixthArrow.classList.toggle(`rotateIcon`);
});
