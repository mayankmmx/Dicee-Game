// When user clicks on the button, it triggers the myFunction()
document.querySelector("button").addEventListener("click", newDiceeGame);

// The below function defines all the calculations to change the dice numbers.
function newDiceeGame() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random Number between 1 and 6.
  var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
  var randomImageSource1 = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

  document.querySelector(".img1").setAttribute("src", randomImageSource1); //Changes the source attribute of image1 to random image between dice1.png and dice6.png

  var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Random Number between 1 and 6.
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png

  document.querySelector(".img2").setAttribute("src", randomImageSource2); //Changes the source attribute of image2 to random image between dice1.png and dice6.png

  //If Player 1 Wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩Player 1 Wins!";
  }
  //If Player 2 Wins
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  }
  // If Draw happens
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

}
