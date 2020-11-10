//Get player's choice
function playerPlay(arr){ 
	var playerSelection = prompt('Enter (Rock, Paper, Scissor)').toUpperCase();
		//Check for valid input from user
    if(arr.includes(playerSelection)){
			return playerSelection;	
		}
		else{
			return false;
		}
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
function playRound(){
		var arr = ['ROCK','PAPER','SCISSOR'];
    var playerSelection = playerPlay(arr);
    var computerSelection = computerPlay(arr);
		console.log("player = ", playerSelection);
		console.log("computer = ", computerSelection);
		var compareSelection = compareBothChoices(playerSelection + computerSelection);
		
		if(playerSelection === computerSelection) return "same";
		if(playerSelection === false) return "invalid input";
		if(playerSelection === compareSelection) return "Player Wins";
		if(computerSelection === compareSelection) return "Computer Wins";
}	

//5 rounds of game
function game(){
	for (var i = 0; i<5;i++){
		console.log(playRound());
	}
}

game();
