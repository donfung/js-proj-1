function computerPlay() {
  var choices = ["Rock", "Paper", "Scissors"];
  randomChoice = choices[Math.floor(Math.random()*2)];
  console.log('asd')
  return randomChoice
}

function playOneRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const comp = computerSelection.toLowerCase();
  var winner;
  if (player == "rock") {
    if (comp == "scissors") {
      winner = "Player";
    } else if (comp == "paper") {
      winner = "Computer";
    } else {
      winner = "Draw";
    }
  }
  if (player == "scissors") {

    if (comp == "scissors") {
      winner = "Draw";
    } else if (comp == "paper") {
      winner = "Player";
    } else {
      winner = "Computer";
    }
  }
  if (player == "paper") {

    if (comp == "scissors") {
      winner = "Computer";
    } else if (comp == "paper") {
      winner = "Draw";
    } else {
      winner = "Player";
    }
  }
  return "Winner is " + winner
}




//  var arrow = document.createElement("img");
//  arrow.src = "assets/hover-arrow.png";
  //var rock = document.getElemetnById('rock');

//  arrow.onload = function() {
//    rock.appendChild(arrow);

const playerSelects = 'rock'
const computerSelects = computerPlay()
console.log(playOneRound(playerSelects, computerSelects))
