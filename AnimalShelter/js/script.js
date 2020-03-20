$(document).ready(function() {

	// slow link scroll
	$('.header-nav__link_prevent-default').on('click', function(event) {
		event.preventDefault();
		let target = $(this).attr('href');
		let top = $(target).offset().top;
		$('html, body').animate({scrollTop: top}, 800);
	});
	
	// pets tabs
	let btnTab = $('.tab[data-tab]');

	btnTab.on('click', function(event) {
		event.preventDefault();
		let attr = $(this).attr('data-tab');

		$('.page').removeClass('page_active');
		$('.page[data-tab='+attr+']').toggleClass('page_active');
	});


	// popup about pets
	let
		btnAbout = $('.friends-pet__button'),
		overlay = $('.overlay'),
		popup = $('.popup'),
		closeBtn = $('.close'),
		popupImg = $('.popup__img');

	btnAbout.on('click', function(event) {
		event.preventDefault();
		let 
			name = $(this).prev('.friends-pet__title').text(),
			parentBtn = $(this).parent(''),
			img = parentBtn.prev('.friends-pet__img');


		$('.popup__title').text(name);
		popupImg.attr('src', img.attr('src'));

		overlay.toggleClass('overlay_active');
		popup.toggleClass('popup_active');
		console.log(name);
	});

	closeBtn.on('click', function(event) {
		event.preventDefault();
		
		overlay.toggleClass('overlay_active');
		popup.toggleClass('popup_active');
	});

});