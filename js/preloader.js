let
	images = document.images,
	imagesTotalCount = images.length,
	imagesLoadedCount = 0,
	percDisplay = document.querySelector('.loader__perc'),
	preloader = document.querySelector('.preloader');

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

			if ( !preloader.classList.contains('preloader-done') ) {
				preloader.classList.add('preloader-done');

				// let typed = new Typed('#typed', {
				// 	strings: ['', 'Искусная', 'Профессиональная'],
				// 	startDelay: 2000,
				// 	backDelay: 1000,
				// 	backSpeed: 60,
				// 	typeSpeed: 90
				// });
			}

		}, 1000);
	}
}