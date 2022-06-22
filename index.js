let         btn = document.querySelector(".refresh-btn");

btn.addEventListener("click", drawDice);


function drawDice() {
    let     num1 = Math.floor(Math.random() * 6) + 1,
            num2 = Math.floor(Math.random() * 6) + 1;
        
    let     text = document.getElementsByClassName("title");
    if (num1 > num2) {
        text[0].innerHTML = "<i class='fa-solid fa-trophy trophy'></i> Player 1 win!";
    } else if (num2 > num1) {
        text[0].innerHTML = "Player 2 win! <i class='fa-solid fa-trophy trophy'></i>";
    } else {
        text[0].innerHTML = "Draw!";
    }

    let     dice1 = document.getElementsByClassName("left-dice"),
            dice2 = document.getElementsByClassName("right-dice");
    
    dice1[0].setAttribute("src", "images/dice" + num1 + ".png");
    dice2[0].setAttribute("src", "images/dice" + num2 + ".png");

}