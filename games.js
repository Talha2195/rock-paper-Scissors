function compPlay () {
plays = ["Rock", "Paper", "Scissors"];
var item = plays[Math.floor(Math.random()*plays.length)];
return item;
}

let a = compPlay();
console.log(a);