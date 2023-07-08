const owl = $('.owl-carousel');

owl.owlCarousel({
 		center: true,
 		loop: true,
 		margin: 30,
 		startPosition: 1,
 		items: 3,
 		responsive : {
 			320 : {
 				items: 1,
 				startPosition: 1,
 			},
 			400:{
 				items: 2,
 				margin: 12,
 			},
		    600 : {
		    	startPosition: 1,
		    	items: 3,
		    },
		    1000 : {
		    	margin: 20,
		    	items: 3,
		    },
		    1200 : {
		    	margin: 30,
		    }
		}
	});


$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});


// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
// Mobile icon | display: none + z-index: 0
const headerContent = document.querySelector('.header__content');
const sliderMobile = document.querySelector('.destinations__slider');
// Анимация кнопки
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile');
	sliderMobile.classList.toggle('destinations__slider--mobile');
	headerContent.classList.toggle('header__content--mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
}

