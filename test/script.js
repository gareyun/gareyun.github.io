function one () {
	var radio1 = document.getElementsByName('r1');
	var radio2 = document.getElementsByName('r2');
	var radio3 = document.getElementsByName('r3');
	var radio4 = document.getElementsByName('r4');
	var radio5 = document.getElementsByName('r5');

	for (var i = 0; i < radio1.length; i++) {
		if (radio1[0].checked) {
			yes1 = "Вы познали жизнь. "; break;
		} else if (radio1[1].checked) {
			yes1 = "Принятие того, что Вам неизвестно — хороший знак. "; break;
		} else {
			yes1 = "Вопрос, оставшийся без ответа, может быть риторическим. "; break;
		}
	}


	for (var i = 0; i < radio2.length; i++) {
		if (radio2[0].checked) {
			yes2 = "Вам известно будущее. "; break;
		} else if (radio2[1].checked) {
			yes2 = "Также это знак реальности. "; break;
		} else {
			yes2 = "Вопрос, оставшийся без ответа, может быть игнорированием. "; break;
		}
	}

	for (var i = 0; i < radio3.length; i++) {
		if (radio3[0].checked) {
			yes3 = "Вы можете мыслить, значит — существуете. "; break;
		} else if (radio3[1].checked) {
			yes3 = "Вы живёте настоящим. "; break;
		} else {
			yes3 = "Вопрос, оставшийся без ответа, может быть молчанием. "; break;
		}
	}

	for (var i = 0; i < radio4.length; i++) {
		if (radio4[0].checked) {
			yes4 = "Реальность полна разочарований. "; break;
		} else if (radio4[1].checked) {
			yes4 = "Вы верите в нечто большее, нежели Ваш взор. "; break;
		} else {
			yes4 = "Вопрос, оставшийся без ответа, может быть не понят. "; break;
		}
	}

	for (var i = 0; i < radio5.length; i++) {
		if (radio5[0].checked) {
			yes5 = "Самонадеянность — плохая защита. "; break;
		} else if (radio5[1].checked) {
			yes5 = "Нет ничего плохого в неготовности. "; break;
		} else {
			yes5 = "Вопрос, оставшийся без ответа, может быть отвеченным. "; break;
		}
	}

	
	var answer = document.getElementById('answer');
	answer.innerHTML = (yes1 + "</br>" + yes2 + "</br>" + yes3 + "</br>" + yes4 + "</br>" + yes5);
}