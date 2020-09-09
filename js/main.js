let open = document.querySelector('#open'),
	close = document.querySelector('#close'),
	content = document.querySelector('#content'),
	modal = document.querySelector('#modal');

open.addEventListener('click',()=>{
	let question = prompt('¿¡Podras Pasar!?');
	question.toLowerCase();

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