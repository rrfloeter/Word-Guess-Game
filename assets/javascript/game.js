//press spacebar to start the game
TheGame();
function TheGame() {
document.onkeyup = function(event) {
var GameStart = event.key.toLowerCase();
if(GameStart === " ") { 
//array of words
const words = ['bitcoin', 'litecoin', 'ripple', 'ethereum', 'zcash'];

//choose word randomly
var randNum = Math.floor(Math.random() * words.length);

var choosenWord = words[randNum];

var LettersGuessed = [];
var underscore = [];
var wrongletter = [];
var NumOfGuesses = 10;
var TotalWins = 0;
//testing
console.log(choosenWord);
//create understores based on length of word
let underscoregenerate = () => {
    for (var i = 0; i < choosenWord.length; i++) {
      underscore.push('_');
}
      return underscore;
}
var underscores = underscoregenerate();
console.log(underscores);

//user guess
document.onkeyup = function (event) {
LettersGuessed = event.key.toLowerCase();
//pull the randomly choosen word (choosenWord) single letter on a loop of the length of the array of words. if the randomly choosen word has a letter (indexof) that is equal to the letter guessed than the underscore is equal to said guessed letter, otherwise the wrong letter is pushed to the wrong letter array
if(choosenWord.indexOf(LettersGuessed) > - 1) {
  for(var i = 0; i < choosenWord.length; i++) 
  {
    if(choosenWord[i] === LettersGuessed) {
      underscore[i] = LettersGuessed;
      console.log(underscore.join(' ')); 
    }
  }
}
else {
  wrongletter.push(LettersGuessed);
  console.log(LettersGuessed);
  NumOfGuesses --;
  console.log(NumOfGuesses);
}

if(underscore.join('') == choosenWord) {
  alert("You Win");
  TotalWins = (TotalWins + 1);
  console.log(TotalWins);
  TheGame();
 

  
}

if (NumOfGuesses === 0) {
  alert("You lose, try again!");
  TheGame();
}


Guesses.textContent = NumOfGuesses;
wrong_Guess.textContent = wrongletter;
RandLetter.textContent = underscore.join(' ');
TotalWins.textcontent = TotalWins;

//userguess onkeyup
}

//game start variable
}

//document.type for gamestart
}
}
//if (choosenWord === litecoin && LettersGuessed) {
  //console.log("win");
  //wins +1;
//} 

//if (choosenWord === ripple && LettersGuessed) {
 // console.log("win");
 // wins +1;
//} 

//if (choosenWord === ethereum && LettersGuessed) {
//  console.log("win");
//  wins +1;
//}

//if (choosenWord === zcash && LettersGuessed) {
//  alert("win");
//  console.log("win");
//  wins +1;
//} 



