const next = document.querySelector('#form-next');
const submit = document.querySelector('#form-submit');
const tabs = document.querySelector('#form-tabs');
const progress = document.querySelectorAll('#form-progress span');
const inputs = document.querySelectorAll('.form-check-input');

if (next) {
	next.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();console.log('click');
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

if (inputs?.length > 0) {

    inputs.forEach((input, i) => {
      input.addEventListener('change', (e) => {
      	next.disabled = false;
      });
    });

}