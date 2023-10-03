function compPlay () {
plays = ["Rock", "Paper", "Scissors"];
var p = plays[Math.floor(Math.random()*plays.length)];
item = p.toUpperCase();
return item;
}
function playerPlay(p) {
   // var areEqual = string1.toUpperCase() === string2.toUpperCase();
   input = p.toUpperCase();
    return input;
}
plays = ["Rock", "Paper", "Scissors"];
i = 0;
let wins = 0;
let loses = 0;
do {
    let p = prompt("Please enter your choise!");
    let a = compPlay();
    let b = playerPlay(p);
    if (a == "ROCK" && b == "SCISSORS"  ){
    alert("You Lose! " + plays[0] + " beats " + plays[2]);
    loses++;
    }
    else if (a == "PAPER" && b == "ROCK"){
    alert("You Lose! " + plays[1] + " beats " + plays[0]);
    loses++;
    }
    else if (a == "SCISSORS" && b == "PAPER") {
    alert("You Lose! " + plays[2] + " beats " + plays[1]);
    loses++;
    }
    else if (a == b) {
    alert("It's a draw! Try again!");
    }
    else if (b == "PAPER" && a == "ROCK"){
    alert("You Win! " + plays[1] + " beats " + plays[0]);
    wins++;
    }
    else if (b == "SCISSORS" && a == "PAPER") {
    alert("You Win! " + plays[2] + " beats " + plays[1]);
    wins++;
    }
    else if (b == "ROCK" && a == "SCISSORS") {
    alert("You Win! " + plays[0] + " beats " + plays[2]);
    wins++;
    }
    i++;
}
while (i < 5);
if (wins > loses) {
    alert("You win!");
}
else {
    alert("You lost! Refresh the page to try again.");
}