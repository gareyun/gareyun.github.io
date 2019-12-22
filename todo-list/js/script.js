document.addEventListener('DOMContentLoaded', function() {


	let
		input = document.querySelector('.input input'),
		btnAdd = document.querySelector('.button'),
		btnDel = document.querySelector('.case-delete'),
		caseList = document.querySelector('.cases'),
		caseReady = document.querySelector('.case'),
		caseWrapper,
		caseOut,
		caseDel,
		popupError = document.querySelector('.overlay'),
		popupErrorClose = document.querySelector('.close-popup');

	btnAdd.addEventListener('click', function() {

		if ( input.value == '' || input.value == ' ' || input.value === null ) {
			popupError.style.display = 'block';
		} else {
			caseWrapper = document.createElement('div');
			caseOut = document.createElement('p');
			caseDel = document.createElement('span');

			caseWrapper.classList.toggle('case');
			caseOut.classList.toggle('case-out');
			caseDel.classList.toggle('case-delete');

			caseOut.innerHTML = input.value;
			caseDel.innerHTML = '&times;';

			caseWrapper.append(caseOut);
			caseWrapper.append(caseDel);
			
			caseList.append(caseWrapper);

			input.value = '';
		}

	});

	caseList.addEventListener('click', function(event) {

		if ( event.target.className == 'case-delete' ) {
			event.target.parentNode.parentNode.removeChild(event.target.parentNode);
		} else if ( event.target.className == 'case'&& event.target.className != 'case-delete' ) {
			event.target.style.background = '#8abd8a';
		}

	});

	popupErrorClose.addEventListener('click', function() {
		popupError.style.display = 'none';
	});


});