function compPlay () {
plays = ["Rock", "Paper", "Scissors"];
var p = plays[Math.floor(Math.random()*plays.length)];
item = p.toUpperCase();
return item;
}
function playerPlay() {
    let p = prompt("Please enter your choise!");
   // var areEqual = string1.toUpperCase() === string2.toUpperCase();
   input = p.toUpperCase();
    return input;
}
plays = ["Rock", "Paper", "Scissors"];
let a = compPlay();
let b = playerPlay();
if (a == "ROCK" && b == "SCISSORS"  ){
    alert("You Lose! " + plays[0] + " beats " + plays[2]);
}
else if (a == "PAPER" && b == "ROCK"){
    alert("You Lose! " + plays[1] + " beats " + plays[0]);
}
else if (a == "SCISSORS" && b == "PAPER") {
    alert("You Lose! " + plays[2] + " beats " + plays[1]);
}
else if (a == b) {
    alert("It's a draw! Try again!");
}
else if (b == "PAPER" && a == "ROCK"){
    alert("You Win! " + plays[1] + " beats " + plays[0]);
}
else if (b == "SCISSORS" && a == "PAPER") {
    alert("You Win! " + plays[2] + " beats " + plays[1]);
}
else if (b == "ROCK" && a == "SCISSORS") {
    alert("You Win! " + plays[0] + " beats " + plays[2]);
}
console.log(a);
console.log(b);