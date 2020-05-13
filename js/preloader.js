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

				let typed = new Typed('#typed', {
					strings: ['WEB', 'JavaScript', 'HTML', 'CSS', 'Adaptive', 'Bootstrap', 'SASS'],
					startDelay: 2000,
					backDelay: 1500,
					backSpeed: 80,
					typeSpeed: 120,
					loop: true
				});
			}

		}, 1000);
	}
}