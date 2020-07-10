var
	btnsFirst 	= document.getElementsByClassName('first'),
	btnsSecond 	= document.getElementsByClassName('second'),
	btnsThird 	= document.getElementsByClassName('third'),
	windowsTest = document.getElementsByClassName('windowTest'),
	i 			= 0,
	q1,
	q2,
	q3;

// Первый блок
btnsFirst[0].onclick = function() {
	windowsTest[i].style.display = 'none';
	i++;
	windowsTest[i].style.display = 'block';
	q1 = true;
}

btnsFirst[1].onclick = function() {
	windowsTest[i].style.display = 'none';
	i++;
	windowsTest[i].style.display = 'block';
	q1 = false;
}

// Второй блок
btnsSecond[0].onclick = function() {
	windowsTest[i].style.display = 'none';
	i++;
	windowsTest[i].style.display = 'block';
	q2 = true;
}

btnsSecond[1].onclick = function() {
	windowsTest[i].style.display = 'none';
	i++;
	windowsTest[i].style.display = 'block';
	q2 = false;
}

// Третий блок
btnsThird[0].onclick = function() {
	windowsTest[i].style.display = 'none';
	i++;
	windowsTest[i].style.display = 'block';
	q3 = true;
}

btnsThird[1].onclick = function() {
	windowsTest[i].style.display = 'none';
	i++;
	windowsTest[i].style.display = 'block';
	q3 = false;
}

/*true true true +
false false false +
false true true +
true false true +
true true false +
false false true +
false true false +
true false false  */

function result () {
	if ( q1 && q2 && q3) {
		/*Чёрный. Презрение. Нечто большее.*/
		alert('И даже в непомерной тьме Вы способны видеть нечто невообразимое.');
		window.location.reload();
	} else if ( q1 == false && q2 == false && q3 == false ) {
		/*Белая нет презрения ничуть не большее.*/
		alert('"Белоснежный реалист" - Таковым нарекает Вас тест.');
		window.location.reload();
	} else if ( q1 == false && q2 && q3 ) {
		/*Белая. Презрение. Нечто большее.*/
		alert('"Белоснежный искатель лучей" - Таковым нарекает Вас тест.');
		window.location.reload();
	} else if ( q2 == false && q1 && q3 ) {
		/*Чёрная. Нет презрения. Нечто большее.*/
		alert('"Чернокнижник" - Таковым нарекает Вас тест.');
		window.location.reload();
	} else if ( q3 == false && q1 && q2 ) {
		/*Чёрная. Презрение. Ничуть не большее.*/
		alert('Возможно пессимизм таится в Вас.');
		window.location.reload();
	} else if ( q1 == false && q2 == false && q3 ) {
		/*Белая. Нет презрения. Нечто большее.*/
		alert('Сверхангельское Солнце сияет над Вами.');
		window.location.reload();
	} else if ( q1 == false && q2 && q3 == false ) {
		/*Белая. Презрение. Ничуть не большее.*/
		alert('И даже в необыкновенных вещах не видать Вам магии.');
		window.location.reload();
	} else if ( q1 && q2 == false && q3 == false ) {
		/*Чёрная. Нет презрения. Ничуть не большее.*/
		alert('Обыкновенность не всегда есть плохо.');
		window.location.reload();
	}
}