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

let aux2=1;
let aux = 1;
function sliderButtons() {
	right.addEventListener('click',() =>{
		slider.setAttribute('src',img[aux]);
		aux++;
		console.log('control derecho'+aux)
		aux2 = aux;
		if (aux == img.length) {
			aux=0;
			aux2 = img.length;
		}
		console.log('control izquierdo : '+aux2);
	});
	left.addEventListener('click',() =>{
		aux2--;
		console.log('control izquierdo :'+aux2);
		slider.setAttribute('src',img[aux2]);
		aux = aux2;
		if (aux2 == 0) {
			aux = aux2;
			aux2= img.length;
		}
		console.log('control derecho'+aux)
	});
}


sliderButtons();

