var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomnDiceImages = "Dice" + randomnumber1 + ".png";

var randomImageSourse = "images/" + randomnDiceImages ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSourse);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomnDiceImages = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSourse);


if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins !";
}

else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins !";

}

else{
    document.querySelector("h1").innerHTML = "DRAW";
    
}