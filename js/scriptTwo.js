const SecondH2 = document.querySelector(`.sh2`);
const Box = document.querySelector(`.SBox`);
const sIcon = document.querySelector(`.secondArrow`);

SecondH2.addEventListener(`click`, () => {
	Box.classList.toggle('active');
	Box.classList.toggle('off');
	sIcon.classList.toggle(`rotateIcon`);
});
