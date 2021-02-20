$(document).ready(function() {

	let
		headerTop 					= document.querySelector('.header-top'),
		nav 						= document.querySelector('.header-nav'),
		logo 						= document.querySelector('.header-logo'),
		gamburger 					= document.querySelector('.header-nav-menu'),
		headerBtnDown 				= document.querySelector('.arrow-down'),
		btnUp 						= document.querySelector('.btn-up'),

		scrollSpeed 				= 800,
		headerTopHeightDefault 		= 90,
		headerTopHeightScroll 		= 70 - 2,

		isSmallScreen 				= false,
		isNavActive 				= false;


	if ( window.innerWidth <= 768 )
		isSmallScreen = true;


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
		if ( pageYOffset >= 300 || window.innerWidth <= 992 ) {

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

		if ( !isSmallScreen )
			setLineHeightDefault();
		else
			headerTop.classList.add('header-top_small');

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
	$(gamburger).on('click', function() {

		$('.header-top_small .header-nav').toggleClass('header-nav_sm_active');
		$(this).toggleClass('header-nav-menu_active');

		isNavActive = true;

	});


	// Кнопка возврата наверх, в начало страницы
	$(btnUp).on('click', function() {
		$('html, body').animate({scrollTop: 0}, scrollSpeed);
	});


	// Якорные ссылки nav
	$(nav).find('li a').on('click', function(event) {

		event.preventDefault();
		// linkScrollTo(this);
		// $(gamburger).removeClass('header-nav-menu_active');

	});


	// Якорная ссылка на главной секции
	$(gamburger).on('click', function(event) {

		event.preventDefault();
		// linkScrollTo(this);

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

		if ( event.hasAttribute('href') ) {
			let 
				target = $(event).attr('href'),
				offsetTop = $(target).offset().top;
		} else {
			let offsetTop = $(event).offset().top;
		}


		$('html, body').animate({scrollTop: offsetTop}, scrollSpeed);
		$('.header-top_small .header-nav').toggleClass('header-nav_sm_active');
		
	}

});