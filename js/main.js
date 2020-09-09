let open = document.querySelector('#open'),
	close = document.querySelector('#close'),
	content = document.querySelector('#content'),
	modal = document.querySelector('#modal');

open.addEventListener('click',()=>{
	let question = prompt('¿¡Podras Pasar!?');
	question = question.toLowerCase();

	if(question == 'juancho'){
		content.style.visibility = 'visible';
		modal.classList.toggle('modal-open')
	}else{
		alert('Error No eres Bienvenido');
	}
});

close.addEventListener('click',()=>{
	modal.classList.toggle('modal-open')

	setTimeout(()=>{
		content.style.visibility = 'hidden';
	},600);
});

window.addEventListener('click', e =>{
	if (e.target == content) {
		modal.classList.toggle('modal-open')

		setTimeout(()=>{
			content.style.visibility = 'hidden';
		},600);

	}
})

let img = ['img/slider-1.png','img/slider-2.jpg','img/slider-3.png','img/slider-4.png','img/slider-5.png','img/slider-6.png','img/slider-7.png','img/slider-8.png'];
let right = document.querySelector('#btn-right'),
	left = document.querySelector('#btn-left'),
	slider = document.querySelector('#slider');



let aux = 1;
right.addEventListener('click',() =>{
	slider.setAttribute('src',img[aux]);
	aux++;
	if (aux == img.length) {
		aux=0;
	}
});



