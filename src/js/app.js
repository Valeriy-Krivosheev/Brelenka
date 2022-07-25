
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
//  Slider настройки


new Swiper('.image-slider', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});


// Стрелка пролистывания Header
const height = document.querySelector('.header').clientHeight;
const arrow = document.querySelector('.header__arrow')
arrow.addEventListener('click', () => {
	window.scrollBy({
		top: (height),
		behavior: 'smooth'
	});
})


const link = document.querySelector('.header__arrow')

link.addEventListener('click', function () {
	console.log('hi');
	const href = this.getAttribute('href');
	const scrollTarget = document.getElementById(href);
	const elementPosition = scrollTarget.getBoundingClientRect().top;
	window.scrollBy({
		top: elementPosition,
		behavior: 'smooth'
	})
})

// Burger

const burger = document.querySelector('.burger-menu')
const burgerText = document.querySelector('.burger-menu__text')
const navMenu = document.querySelector('.nav__list')

burger.addEventListener('click', () => {
	burger.classList.toggle('_active');
	burgerText.classList.toggle('_active');
	navMenu.classList.toggle('_active');
})