
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

import lightGallery from 'lightgallery';
import lgZoom from '../../node_modules/lightgallery/plugins/zoom/lg-zoom.min.js'
import lgThumbnail from '../../node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.min.js'
import lgVideo from '../../node_modules/lightgallery/plugins/video/lg-video.min.js'

// Галерея на странице Актера
lightGallery(document.getElementById('lightgallery1'), {
	plugins: [lgZoom, lgThumbnail],
});

lightGallery(document.getElementById('lightgallery2'), {
	plugins: [lgZoom, lgThumbnail],
});
lightGallery(document.getElementById('lightgallery3'), {
	plugins: [lgZoom, lgThumbnail],
});

lightGallery(document.getElementById('gallery-videos-demo'), {
	plugins: [lgVideo],
});

lightGallery(document.getElementById('gallery-videos-demo2'), {
	plugins: [lgVideo],
});

lightGallery(document.getElementById('gallery-videos-demo3'), {
	plugins: [lgVideo],
});


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
	let elementPosition = scrollTarget.getBoundingClientRect().top;
	elementPosition = elementPosition + 100
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


// Аккордеон
const accordions = document.querySelectorAll('.actor__accordion');

accordions.forEach(function (item) {
	item.addEventListener('click', function () {
		if (this.classList.contains('active')) {
			this.classList.remove('active');
		}
		else {
			item.classList.remove('active');
			this.classList.add('active');
		}
	})
})





