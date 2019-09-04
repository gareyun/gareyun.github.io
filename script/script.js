$(document).ready(function () {
	$('#fullpage').fullpage({
		scrollingSpeed: 800,
		navigation: true,
		navigationPosition: 'left',
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		slidesNavigation: true,
		/*scrollOverflow: true,*/
		showActiveTooltip: true,
		navigationTooltips: ['главная', 'WEB', 'Vegas', '3D'],
		loopTop: true,
		loopBottom: true,


	});
});

var
	btn = document.getElementById('takeInfo'),
	close = document.getElementById('close-info'),
	modal = document.getElementById('myModal');

btn.onclick = function () {
	modal.style.display = 'block';
}

close.onclick = function () {
	modal.style.display = 'none';
}

window.onclick = function (event) {
	if ( event.target == modal )
		modal.style.display = 'none';
}