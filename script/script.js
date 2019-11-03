$(document).ready(function () {
	$('#fullpage').fullpage({
		scrollingSpeed: 800,
		navigation: true,
		navigationPosition: 'left',
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
		slidesNavigation: true,
		/*scrollOverflow: true,*/
		showActiveTooltip: true,
		navigationTooltips: ['ГЛАВНАЯ', 'WEB', 'VEGAS', '3D', 'SLIDER', 'TABS'],
		loopTop: true,
		loopBottom: true,
	});

	$('#takeInfo').on('click', function() {
		event.preventDefault();
		$('#myModal').fadeIn(500);

		$('.modal-content').css({
			'margin': '15% auto'
		});
	});

	$('#close-info').on('click', function() {
		event.preventDefault();
		$('#myModal').fadeOut(500);

		$('.modal-content').css({
			'margin': '-15% auto'
		});
	});

	$('.tab').on('click', function() {
		$('.content').removeClass('content_active');
		$('.tab').removeClass('tab_active');
		$(this).addClass('tab_active');
		$('.content[data-tab='+$(this).attr('data-tab')+']').toggleClass('content_active');
	});

	/*var
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
	}*/
	
	$(this).keydown(function(event) {
		var secret = $(this).find('.secret[data-secret='+event.which+']');
		secret.css({
			'top' : '5px',
			'right' : '5px',
			'transform' : 'rotate(0deg)'
		});
	});

	$(this).keyup(function(event) {
		var secret = $(this).find('.secret[data-secret='+event.which+']');
		secret.css({
			'top' : '-50px',
			'right' : '-50px',
			'transform' : 'rotate(270deg)'
		});
	});
});