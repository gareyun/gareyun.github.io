$(function() {
	// Эффекты при наведении на картинки в слайдере
	$('.wrapper-img__social img').on('mouseover', function() {
		$(this).css('background-color', '#c0301c');
	});

	$('.wrapper-img__social img').on('mouseleave', function() {
		$(this).css('background-color', 'transparent');
	});


	// Tabs
	let workTabs = $('.works-nav li');

	workTabs.on('click', function(event) {
		event.preventDefault();
		let attr = $(this).attr('data-example');
		console.log(attr);

		$('.works-example').removeClass('works_active');
		$('.works-example[data-example='+attr+']').toggleClass('works_active');
	});

	// Всем row justify-content-center
	$('.works-examples .row').addClass('justify-content-center');


	// Выезжающее меню
	$('.header_link').on('click', function(event) {
		event.preventDefault();
		$('.header-menu').css('transform', 'translateX(0)');
		$(this).fadeOut();
	});

	$('.header-menu__close').on('click', function(event) {
		event.preventDefault();
		$('.header-menu').css('transform', 'translateX(-100%)');
		$('.header_link').fadeIn();
	});

});