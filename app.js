const next = document.querySelector('#form-next');
const submit = document.querySelector('#form-submit');
const tabs = document.querySelector('#form-tabs');
const pal = document.querySelector('#form-pal');
const palImage = document.querySelector('#form-pal-image');
const palCopy = document.querySelector('#form-pal-copy');
const gift = document.querySelector('#form-gift');
const progress = document.querySelectorAll('#form-progress span');
const inputs = document.querySelectorAll('.form-check-input');
let pals = {
	'bee' : 1,
	'bee' : 1,
	'bee' : 1,
	'bee' : 1,
	'bee' : 1,
	'bee' : 1
};

if (next) {
	next.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();
		let current = next.dataset.current;
		let percent = -100 * current;
		tabs.style.transform = 'translateX('+percent+'%)';
		progress[current-1].classList.add('answered');

		if ( next.dataset.current >= 4 ) {
			next.style.display = 'none';
			submit.style.display = 'block';
		} else {
			next.dataset.current = parseInt(next.dataset.current) + 1;
			next.disabled = true;
		}
		
	});
}

if (gift) {
	gift.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();
		gift.classList.add('revealed');
		palImage.style.backgroundImage = 'url(butterfly.png)';
		palCopy.innerHTML = 'You\'re a Butterfly!';
		pal.classList.add('revealed');
		submit.disabled = true;
	});
}


if (submit) {
	submit.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();
		gift.classList.add('revealed');
		palImage.style.backgroundImage = 'url(butterfly.png)';
		palCopy.innerHTML = 'You\'re a Butterfly!';
		pal.classList.add('revealed');
		submit.disabled = true;
	});
}

if (inputs?.length > 0) {

    inputs.forEach((input, i) => {
      input.addEventListener('change', (e) => {
      	next.disabled = false;
      });
    });

}