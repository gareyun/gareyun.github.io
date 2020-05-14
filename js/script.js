// document.addEventListener('DOMContentLoaded', function() {
$(document).ready(function() {

	let
		headerTop 					= document.querySelector('.header-top'),
		nav 						= document.querySelector('.header-nav'),
		logo 						= document.querySelector('.header-logo'),
		headerTopMenuBtn 			= document.querySelector('.header-nav-menu'),
		headerBtnDown 				= document.querySelector('.arrow-down'),
		btnUp 						= document.querySelector('.btn-up'),
		mainButtonToPortfolio 		= document.querySelector('.header__portfolio-button'),

		scrollSpeed 				= 800,
		headerTopHeightDefault 		= 90,
		headerTopHeightScroll 		= 60,

		isSmallScreen 				= false;


	if ( window.innerWidth <= 768 ) {
		isSmallScreen = true;
	}


	function setLineHeightDefault() {

		if ( !isSmallScreen ) {
			headerTop.classList.remove('header-top_small');
			if ( pageYOffset >= 100 ) {
				headerTop.classList.add('header-top_active');
				setLineHeight(nav, headerTopHeightScroll);
				setLineHeight(logo, headerTopHeightScroll);
			} else {
				headerTop.classList.remove('header-top_active');
				setLineHeight(nav, headerTopHeightDefault);
				setLineHeight(logo, headerTopHeightDefault);
			}
		} else {
			headerTop.classList.remove('header-top_active');
			headerTop.classList.add('header-top_small');

			setLineHeight(nav, headerTopHeightScroll);
			setLineHeight(logo, headerTopHeightScroll);
		}

		// buttonUp
		if ( pageYOffset >= 300 ) {
			$(btnUp).css("-webkit-transform", "translateX(0) rotate(-90deg)");
			$(btnUp).css("transform", "translateX(0) rotate(-90deg)");
		} else {
			$(btnUp).css("-webkit-transform", "translateX(250px) rotate(-90deg)");
			$(btnUp).css("transform", "translateX(250px) rotate(-90deg)");
		}
	}
	setLineHeightDefault();


	// for pc
	$(window).on('scroll', scrollPage)

	// for mobile
	$(document.body).on('touchmove', scrollPage);
	

	function scrollPage() {
		if ( !isSmallScreen ) {
			setLineHeightDefault();
		} else {
			headerTop.classList.add('header-top_small');
		}
	}


	window.onresize = function() {
		// console.log(window.innerWidth);

		if ( window.innerWidth <= 768 ) {
			isSmallScreen = true;
			setLineHeightDefault();
		} else {
			isSmallScreen = false;
			setLineHeightDefault();
		}
	}


	// Гамбургер
	$(headerTopMenuBtn).on('click', function() {
		$('.header-top_small .header-nav').toggleClass('header-nav_sm_active');
	});


	// Кнопка возврата наверх, в начало страницы
	$(btnUp).on('click', function() {
		$('html, body').animate({scrollTop: 0}, scrollSpeed);
	});


	// Якорные ссылки nav
	$(nav).find('li a').on('click', function(event) {
		event.preventDefault();
		linkScrollTo(this);
	});


	// Якорная ссылка на главной секции
	$(mainButtonToPortfolio).on('click', function(event) {
		event.preventDefault();
		linkScrollTo(this);
	});


	// Скролл главной страницы по стрелке вниз
	$(headerBtnDown).on('click', function(event) {
		event.preventDefault();
		let offsetTop = $('header').innerHeight();

		$('html, body').animate({scrollTop: offsetTop}, scrollSpeed);
	});


	// Установка высота для headerTop
	function setLineHeight(elem, value) {
		elem.style.lineHeight = value + 'px';
	}


	// Функция перехода по якорным ссылкам
	function linkScrollTo(event) {
		let 
			target = $(event).attr('href'),
			offsetTop = $(target).offset().top;

		$('html, body').animate({scrollTop: offsetTop}, scrollSpeed);
		
		if ( event != mainButtonToPortfolio ) {
			$('.header-top_small .header-nav').toggleClass('header-nav_sm_active');
		}
		
	}

});