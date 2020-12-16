//Button (rock,paper scissors) pressed
//get which button pressed

const buttons = document.querySelectorAll('button');
const resultsDiv = document.querySelector('#results');
const winnerDiv = document.querySelector('#winner');
const thisRoundDiv = document.querySelector('#thisRound');
var playerWins = 0;
var computerWins = 0;



buttons.forEach(function(button){
	button.addEventListener('click',function(e){
		var arr = ['ROCK','PAPER','SCISSOR'];
    var computerSelection = computerPlay(arr);

		var playerSelection = e.target.attributes[0].nodeValue.toUpperCase(); // get players selection
		console.log(playerSelection);
		if(playerWins === 5 || computerWins === 5) return;//after game is won don't continue the game
		
		//Play each rounds
		var result = playRound(playerSelection,computerSelection);
		//See who wins each round
		if(result === "Player Wins") {
			thisRoundDiv.innerHTML = 
				`Player's Choice: ${playerSelection.toLowerCase()}&nbsp;&nbsp;
				Computer's Choice: ${computerSelection.toLowerCase()}`;
			playerWins++;
			
		};
		if(result === "Computer Wins") {
			thisRoundDiv.innerHTML = 
				`Player's Choice: ${playerSelection.toLowerCase()}&nbsp;&nbsp;
				Computer's Choice: ${computerSelection.toLowerCase()}`;
			computerWins++;
		}
		resultsDiv.innerHTML = `computer: ${computerWins}       player:${playerWins}`;
		
		//Show who the winner is
		if(playerWins  === 5 ) winnerDiv.innerHTML = "player wins";
		if(computerWins === 5) winnerDiv.innerHTML = "computer wins";
	})
});

//Get Dom to put result to
function getResultDom(){

}
//get computer's choic
function computerPlay(arr){
    return arr[Math.floor(arr.length * Math.random())];
}


//compare both choices
function compareBothChoices(compareSelection){
	if(compareSelection === 'ROCKSCISSOR' || compareSelection === 'SCISSORROCK'){
      return "ROCK";
  }
	if(compareSelection === 'SCISSORPAPER' || compareSelection === 'PAPERSCISSOR'){
      return "SCISSOR";
  }
	if(compareSelection === 'PAPERROCK' || compareSelection === 'ROCKPAPER'){
      return "PAPER";
  }
}

//Play a round with computer
function playRound(playerSelection, computerSelection){
		var compareSelection = compareBothChoices(playerSelection + computerSelection);

		if(playerSelection === computerSelection) return "same";
		if(playerSelection === false) return "invalid input";
		if(playerSelection === compareSelection) return "Player Wins";
		if(computerSelection === compareSelection) return "Computer Wins";
}	
