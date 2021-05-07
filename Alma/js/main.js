let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('_lock');
})