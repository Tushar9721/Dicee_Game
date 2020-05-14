
/*
//asking the names of players.
var player_1 = window.prompt("Player One Name: ");
var player_2 = window.prompt("Player two Name: ");
*/


//generating 2 random number for two dice.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//generating 2 random strings.
var randomDiceImage = "images/dice"+randomNumber1+".png";
var randomDiceImage2 = "images/dice"+randomNumber2+".png";

//setting the value to image source.
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

/*
//concating the string.
var p1 = player_1+" won";
var p2 = player_2+" won";
*/


//deciding the winner.
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}






