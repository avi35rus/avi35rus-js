const iconMenu = document.querySelector('.toggle-nav');

if (iconMenu){
	const menuBody = document.querySelector('.menu');
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

const showText = document.querySelector('.main-content__read-more-button');

if (showText){
	const descriptionLimiter = document.querySelector('.main-content__limiter');

	showText.addEventListener("click", function(e) {
		descriptionLimiter.classList.toggle('_active');
		showText.classList.toggle('_active');
	});
}

function ScrollUp(){
	let interval, countPx;
	countPx = document.body.scrollTop||window.pageYOffset;
	interval = setInterval (function() {
		if(countPx > 0) window.scroll(0, countPx -= 5);
		else clearInterval(interval)
	}, 5);
}

if (window.innerWidth < 768) {
	new Swiper('.swiper', {
		spaceBetween: 0,
		// init: false,
		resize: 0,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false
		},
		pagination: {
		el: '.swiper-custom-pagination',
		type: 'bullets',
		clickable: true,
		},

		slidesPerView: 'auto',
		spaceBetween: 16,

	});
}

const brandsDescription = document.querySelector('.brand-list.swiper');
const brandsLimiter = document.querySelector('.brand-list__items.swiper-wrapper');
const shadowRight = document.querySelector('.brand-list__right-shadow');
const shadowLeft = document.querySelector('.brand-list__left-shadow');

if (window.innerWidth >= 768) {
	const showBrands = document.querySelector('.brand-list__read-more-button');
	brandsDescription.classList.toggle('_description');
	brandsLimiter.classList.toggle('_limiter');
	showBrands.classList.toggle('_on');
	shadowRight.classList.toggle('_off');
	shadowLeft.classList.toggle('_off');

	if (showBrands) {
		showBrands.addEventListener("click", function(e) {
			brandsDescription.classList.toggle('_active');
			brandsLimiter.classList.toggle('_active');
			showBrands.classList.toggle('_active');
		});
	}
}