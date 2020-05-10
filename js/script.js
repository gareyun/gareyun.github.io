document.addEventListener('DOMContentLoaded', function() {

	let
		headerTop 					= document.querySelector('.header-top'),
		nav 						= document.querySelector('.header-nav'),
		logo 						= document.querySelector('.header-logo'),
		headerBtnDown 				= document.querySelector('.arrow-down'),
		firstSectionAfterHeader 	= document.querySelector('.about');


	function setLineHeightDefault() {
		if ( pageYOffset >= 100 ) {
			headerTop.classList.add('header-top_active');
			setLineHeight(nav, 60);
			setLineHeight(logo, 60);
		} else {
			headerTop.classList.remove('header-top_active');
			setLineHeight(nav, 90);
			setLineHeight(logo, 90);
		}
	}
	setLineHeightDefault();


	window.addEventListener('scroll', function() {
		setLineHeightDefault();
	});


	headerBtnDown.addEventListener('click', function() {

		let scrollTop = firstSectionAfterHeader.scrollHeight;

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