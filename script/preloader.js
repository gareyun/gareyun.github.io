document.body.onload = function() {
	let preloader = document.getElementById('page-preloader');

	setTimeout(function() {
		if ( !preloader.classList.contains('done') ) {
			preloader.classList.add('done');
		}
	}, 1000);
}
	











