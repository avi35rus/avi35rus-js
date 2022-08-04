const iconMenu = document.querySelector('.toggle-nav');

if (iconMenu){
	const menuBody = document.querySelector('.menu__body');
	const fence = document.querySelector('.logo');
	const pageOverlay = document.querySelector('.page-overlay');

	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		fence.classList.toggle('_lock');
		pageOverlay.classList.toggle('_lock');
	});

	pageOverlay.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		fence.classList.toggle('_lock');
		pageOverlay.classList.toggle('_lock');
	});
}

function ScrollUp(){
	let t, s;
	s = document.body.scrollTop||window.pageYOffset;
	t = setInterval (function() {
		if(s > 0) window.scroll(0, s -= 5);
		else clearInterval(t)
	}, 5);
}
