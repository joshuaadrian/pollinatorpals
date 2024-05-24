const form = document.querySelector('#form-survey');
const next = document.querySelector('#form-next');
const submit = document.querySelector('#form-submit');
const tabs = document.querySelector('#form-tabs');
const pal = document.querySelector('#form-pal');
const palImage = document.querySelector('#form-pal-image');
const palCopy = document.querySelector('#form-pal-copy');
const palTitle = document.querySelector('#form-pal-title');
const palDescription = document.querySelector('#form-pal-description');
const gift = document.querySelector('#form-gift');
const progress = document.querySelectorAll('#form-progress span');
const inputs = document.querySelectorAll('.form-check-input');
let pals = {
	'butterfly' : {
		'title' : 'You\'re a Butterfly',
		'description' : 'Ut sed et ut sed. Alias quod omnis reiciendis at quam quas et cumque amet rerum.',
		'image' : 'butterfly.png'
	},
	'bee' : {
		'title' : 'You\'re a Bee',
		'description' : 'Ut sed et ut sed. Alias quod omnis reiciendis at quam quas et cumque amet rerum.',
		'image' : 'bee.png'
	},
	'wasp' : {
		'title' : 'You\'re a Wasp',
		'description' : 'Ut sed et ut sed. Alias quod omnis reiciendis at quam quas et cumque amet rerum.',
		'image' : 'wasp.png'
	},
	'moth' : {
		'title' : 'You\'re a Moth',
		'description' : 'Ut sed et ut sed. Alias quod omnis reiciendis at quam quas et cumque amet rerum.',
		'image' : 'moth.png'
	},
	'bat' : {
		'title' : 'You\'re a Bat',
		'description' : 'Ut sed et ut sed. Alias quod omnis reiciendis at quam quas et cumque amet rerum.',
		'image' : 'bat.png'
	},
	'hummingbird' : {
		'title' : 'You\'re a Hummingbird',
		'description' : 'Ut sed et ut sed. Alias quod omnis reiciendis at quam quas et cumque amet rerum.',
		'image' : 'hummingbird.png'
	},
	'fly' : {
		'title' : 'You\'re a Fly',
		'description' : 'Ut sed et ut sed. Alias quod omnis reiciendis at quam quas et cumque amet rerum.',
		'image' : 'fly.png'
	},
	'beetle' : {
		'title' : 'You\'re a Beetle',
		'description' : 'Ut sed et ut sed. Alias quod omnis reiciendis at quam quas et cumque amet rerum.',
		'image' : 'fly.png'
	},
	'snail' : {
		'title' : 'You\'re a Snail',
		'description' : 'Ut sed et ut sed. Alias quod omnis reiciendis at quam quas et cumque amet rerum.',
		'image' : 'fly.png'
	}
};

let beeCount = 0;
let butterflyCount = 0;
let mothCount = 0;

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

let whichPal = function() {

	let data = new FormData(form);
	let arr = [];

	data.forEach(function(value) {
	  arr.push(value);
	});

	obj = {};
	let el,
    max = 0;
	for (let i = 0; i < arr.length; i++) {
    	if (!obj[arr[i]]) obj[arr[i]] = 1;
    	else obj[arr[i]]++;
	}

	for (const i in obj) {
	    if (max < obj[i]) {
	        max = obj[i];
	        el = i;
	    }
	}

	return el;

};

if (gift) {
	gift.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();

		let selectedPal = whichPal();

		gift.classList.add('revealed');
		palImage.style.backgroundImage = 'url('+pals[selectedPal].image+')';
		palTitle.innerHTML = pals[selectedPal].title;
		palDescription.innerHTML = pals[selectedPal].description;
		pal.classList.add('revealed');
		submit.disabled = true;
	});
}


if (submit) {
	submit.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();

		let selectedPal = whichPal();

		gift.classList.add('revealed');
		palImage.style.backgroundImage = 'url('+pals[selectedPal].image+')';
		palTitle.innerHTML = pals[selectedPal].title;
		palDescription.innerHTML = pals[selectedPal].description;
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