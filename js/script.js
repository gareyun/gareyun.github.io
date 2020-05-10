// document.addEventListener('DOMContentLoaded', function() {
$(document).ready(function() {

	let
		headerTop 					= document.querySelector('.header-top'),
		nav 						= document.querySelector('.header-nav'),
		logo 						= document.querySelector('.header-logo'),
		headerBtnDown 				= document.querySelector('.arrow-down'),
		btnUp 						= document.querySelector('.btn-up'),

		scrollSpeed 				= 800,
		headerTopHeightDefault 		= 90,
		headerTopHeightScroll 		= 60;


	function setLineHeightDefault() {
		if ( pageYOffset >= 100 ) {
			headerTop.classList.add('header-top_active');
			setLineHeight(nav, headerTopHeightScroll);
			setLineHeight(logo, headerTopHeightScroll);
		} else {
			headerTop.classList.remove('header-top_active');
			setLineHeight(nav, headerTopHeightDefault);
			setLineHeight(logo, headerTopHeightDefault);
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


	window.addEventListener('scroll', function() {
		setLineHeightDefault();
	});


	$(btnUp).on('click', function() {
		$('html, body').animate({scrollTop: 0}, scrollSpeed);
	});


	$(nav).find('li a').on('click', function(event) {
		event.preventDefault();
		let 
			target = $(this).attr('href'),
			offsetTop = $(target).offset().top;

		$('html, body').animate({scrollTop: offsetTop}, scrollSpeed);

	});


	$(headerBtnDown).on('click', function(event) {
		event.preventDefault();
		let offsetTop = $('header').innerHeight();
		// let offsetTop = $('header').offset().top;

		$('html, body').animate({scrollTop: offsetTop}, scrollSpeed);
	});

	// setInterval(function arrowDown() {
	// 	let 
	// 		opacityHeaderBtnDown = 1,
	// 		bottomHeaderBtnDown = 5;

	// 	if ( headerBtnDown.style.bottom == 0) {
	// 		headerBtnDown.style.bottom = 5 + '%';
	// 	} else {
	// 		opacityHeaderBtnDown -= 0.1;
	// 		bottomHeaderBtnDown -= 0.5;
	// 		headerBtnDown.style.opacity = opacityHeaderBtnDown;
	// 		headerBtnDown.style.bottom = bottomHeaderBtnDown + '%';
	// 	}

	// }, 10);


	function setLineHeight(elem, value) {
		elem.style.lineHeight = value + 'px';
	}

});