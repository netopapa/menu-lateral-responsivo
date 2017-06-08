//auxiliares
var toggleMenu = document.querySelectorAll('.toggle-menu'),
	wrapper = document.querySelector('.wrapper');

//evento de click abre/fecha menu
for(var i = 0; i < toggleMenu.length; i++){
	toggleMenu[i].addEventListener('click', menuAction);
}

//função para abrir e fechar
function menuAction(){
	if (wrapper.classList.contains('show-menu')) {
		wrapper.classList.remove('show-menu');
	}else{
		wrapper.classList.add('show-menu');
	}
}

//Fechar com tecla ESC
document.addEventListener('keyup', function(e){
	if (e.keyCode == 27) {
		if (wrapper.classList.contains('show-menu')) {
			menuAction();
		}
	}
})