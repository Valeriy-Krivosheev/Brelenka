
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


//  Slider настройки основной страницы
const mainSlider = document.querySelector('.image-slider')
new Swiper(mainSlider, {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});



// Slider страницы новости подробно
const newsSlider = document.querySelector('.news-slider')
new Swiper(newsSlider, {
	pagination: {
		el: '.news-pagination',
		type: 'bullets',
		clickable: true
	},
	navigation: {
    nextEl: '.news-button-next',
    prevEl: '.news-button-prev',
  },
});



// Стрелка пролистывания Header основной страницы
const link = document.querySelector('.header__arrow')
link?.addEventListener('click', function () {
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
	burger.classList.toggle('active');
	burgerText.classList.toggle('active');
	navMenu.classList.toggle('active');
})