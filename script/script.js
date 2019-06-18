$(document).ready(function () {
	$('#fullpage').fullpage({
		scrollingSpeed: 800,
		navigation: true,
		navigationPosition: 'left',
		anchors:['firstPage', 'secondPage', 'thirdPage'],
		slidesNavigation: true,
		/*scrollOverflow: true,*/
		showActiveTooltip: true,
		navigationTooltips: ['главная', 'WEB', 'Vegas', '3D'],
		loopTop: true,
		loopBottom: true,


	});
});

