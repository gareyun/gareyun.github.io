let
	images 					= document.images,
	imagesTotalCount 		= images.length,
	imagesLoadedCount		= 0,
	preloader 				= document.querySelector('.preloader'),
	loader 					= document.querySelector('.loader'),
	percDisplay 			= document.querySelector('.loader__perc');

for ( let i = 0; i < imagesTotalCount; i++ ) {
	imageClone = new Image();
	imageClone.onload = imageLoaded;
	imageClone.onerror = imageLoaded;
	imageClone.src = images[i].src;
}

function imageLoaded() {
	imagesLoadedCount++;
	percDisplay.innerHTML = ( ( (100 / imagesTotalCount) * imagesLoadedCount ) << 0 ) + '%';

	if ( imagesLoadedCount >= imagesTotalCount ) {
		setTimeout(function() {

			if ( !preloader.classList.contains('preloader_done') ) {
				preloader.classList.add('preloader_done');

				let typed = new Typed('#typed', {
					strings: ['WEB', 'JavaScript', 'Adaptive', 'HTML', 'Coding', 'CSS', 'Bootstrap', 'SASS'],
					// startDelay: 2000,
					backDelay: 1500,
					backSpeed: 80,
					typeSpeed: 120,
					loop: true
				});
			}

			// Избавляемся от прелоадера и его анимации после загрузки
			setTimeout(function() {
				preloader.classList.remove('preloader_done');
				loader.classList.remove('loader_ing');
				preloader.classList.add('preloader_none');
			}, 1000);

		}, 1000);
	}
}