document.addEventListener('DOMContentLoaded',function(){let
container=document.querySelector('.container'),wordInput=document.querySelector('.word'),smsBlock=document.querySelector('.sms'),popup=document.querySelector('.popup'),popupMessage=document.querySelector('.popup__message'),currentLetter=document.querySelector('.current-letter'),player=1,isFill=!1,words=[],lastLetterPlayer1,lastLetterPlayer2,firstLetterPlayer1,firstLetterPlayer2;document.addEventListener('keyup',function(event){if(event.which==13){if(player==1){firstLetterPlayer1=wordInput.value.charAt(0).toUpperCase();lastLetterPlayer1=wordInput.value.charAt(wordInput.value.length-1).toUpperCase();if(lastLetterPlayer1=='Ы'||lastLetterPlayer1=='Ъ'||lastLetterPlayer1=='Ь'){lastLetterPlayer1=wordInput.value.charAt(wordInput.value.length-2).toUpperCase()}else{lastLetterPlayer1=wordInput.value.charAt(wordInput.value.length-1).toUpperCase()}
console.log('Первый перв - '+firstLetterPlayer1);console.log('Первый послед - '+lastLetterPlayer1)}else if(player==2){firstLetterPlayer2=wordInput.value.charAt(0).toUpperCase();lastLetterPlayer2=wordInput.value.charAt(wordInput.value.length-1).toUpperCase();if(lastLetterPlayer2=='Ы'||lastLetterPlayer2=='Ъ'||lastLetterPlayer2=='Ь'){lastLetterPlayer2=wordInput.value.charAt(wordInput.value.length-2).toUpperCase()}else{lastLetterPlayer2=wordInput.value.charAt(wordInput.value.length-1).toUpperCase()}
console.log('Второй перв - '+firstLetterPlayer2);console.log('Второй послед - '+lastLetterPlayer2)}
if(isFill){if((lastLetterPlayer1==firstLetterPlayer2)||(lastLetterPlayer2==firstLetterPlayer1)){if(!(words.indexOf(wordInput.value)!=-1)){addWord();console.log(words)}else{console.log('Уже было');showMessage()}}else{console.log('Буквы не совпадают!');showMessage()}}else{addWord();console.log(words);isFill=!0}}});function showMessage(){popup.style.display='block';setTimeout(()=>{popup.style.display='none'},800)}
function addWord(){let newSms=document.createElement('span');if(player==1){newSms.classList.add('new-word-right');player=2;currentLetter.innerHTML=lastLetterPlayer1}else{newSms.classList.add('new-word-left');player=1;currentLetter.innerHTML=lastLetterPlayer2}
newSms.innerHTML=wordInput.value;smsBlock.appendChild(newSms);words.push(wordInput.value);wordInput.value=''}})