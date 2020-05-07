document.addEventListener('DOMContentLoaded', function() {

	let
		wrapperTable 			= document.querySelector('.wrapper-table'),
		items 					= document.querySelectorAll('.item-img'),
		popup 					= document.querySelector('.popup-overlay'),
		againBtn				= document.querySelector('.popup__button'),
		arr 					= [],
		itteration 				= 1,
		count 					= 1,
		generalCount			= 0,
		isWrong					= false,
		firstClickedItem,
		secondClickedItem,
		firstClickedItemAttr,
		secondClickedItemAttr;


	// defalut img
	function generateImages() {

		for ( let i = 1; i < items.length; i++ ) {
			arr.push( i );
			if ( i == ( items.length / 2 )  && itteration < 2 ) {
				itteration++;
				i = 0;
				console.log('Обнуление');
			} else if ( arr.length / 2 == items.length / 2 ) {
				break;
				console.log('Break');
			}
		}
		console.log(arr);


		for ( let i = 0; i < items.length; i++ ) {
			arr.sort(function(){
			 	return Math.random() - 0.5;
			});
		}
		console.log(arr);


		for ( let i = 0; i < items.length; i++ ) {
			items[i].src = `img/item-${arr[i]}.png`;
		}

		itteration = 1;
		arr = [];
	}
	// < /.defalut img >
	generateImages();

	wrapperTable.addEventListener('click', function(event) {
		if ( !isWrong ) {
			if ( event.target.classList.contains('item') ) {
				event.target.classList.remove('item-bg');

				if ( count == 1 ) {
					firstClickedItem = event.target.querySelector('.item-img');
					firstClickedItemAttr = firstClickedItem.getAttribute('src');
					count++;
				} else if ( count == 2 ) {
					secondClickedItem = event.target.querySelector('.item-img');
					secondClickedItemAttr = secondClickedItem.getAttribute('src');

					if ( firstClickedItemAttr == secondClickedItemAttr ) {

						firstClickedItem.parentNode.style.boxShadow = '0 0 10px 10px #B6E76A';
						secondClickedItem.parentNode.style.boxShadow = '0 0 10px 10px #B6E76A';

						firstClickedItemAttr = '';
						secondClickedItemAttr = '';
						count = 1;

						generalCount++;
						console.log('Right!');
					} else {
						isWrong = true;

						firstClickedItem.parentNode.style.boxShadow = '0 0 10px 10px #E77F76';
						secondClickedItem.parentNode.style.boxShadow = '0 0 10px 10px #E77F76';

						firstClickedItemAttr = '';
						secondClickedItemAttr = '';
						count = 1;

						setTimeout(function(event) {
							isWrong = false;

							firstClickedItem.parentNode.style.boxShadow = 'initial';
							secondClickedItem.parentNode.style.boxShadow = 'initial';

							firstClickedItem.parentNode.classList.add('item-bg');
							secondClickedItem.parentNode.classList.add('item-bg');
						}, 500);

						console.log('Wrong!');
					}
				}
				console.log('general - ' + generalCount);
			}
		}

		// win
		if ( generalCount == items.length / 2 ) {
			generalCount = 0;

			popup.style.display = 'block';
		}
	});

	againBtn.addEventListener('click', function() {
		popup.style.display = 'none';

		for ( let i = 0; i < items.length; i++ ) {
			items[i].parentNode.classList.add('item-bg');
			items[i].parentNode.style.boxShadow = 'initial';
		}

		generateImages();
	});

});