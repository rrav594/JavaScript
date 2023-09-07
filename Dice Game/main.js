const randomNumber1 = Math.floor((Math.random() * 6) + 1);
const randomDiceImage1 = `dice${randomNumber1}.png`;
const randomDiceImageSource1 = `./images/${randomDiceImage1}`;
const heading = document.querySelector("h1");


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImageSource1);


const randomNumber2 = Math.floor((Math.random() * 6) + 1);
const randomDiceImage2 = `dice${randomNumber2}.png`;
const randomDiceImageSource2 = `./images/${randomDiceImage2}`;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImageSource2);


if(randomNumber1 > randomNumber2){
    heading.innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    heading.innerHTML = "Player 2 Wins!";
}
else{
    heading.innerHTML = "Roll Again!";
}
