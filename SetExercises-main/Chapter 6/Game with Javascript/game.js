// firstly, i defined the different panel colors by taking their id's from html
// i used const because these values won't need to be changed
const green = document.getElementById("green");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const gamecircle = document.getElementsByClassName("panels")

// next, i defined values using let because these vlues will change at some point

// these values include two arrays, one for the computer's random combination of colors
let simon = [];
// one for the player's inputs
let player = [];
// and two score variables set to 0
let score = 0;
let highscore = 0;


// the first function allows the computer (simon) to call a random color
function saysSimon() {
    // two more variables are added here...

    // one contains an array of all the possible colors
    const colors = [green, red, yellow, blue];
    // and one that randomly picks from there
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // this one here will add colors to the sequence
    simon.push(randomColor);

    // and to see if it's working, i added a console log
    console.log(simon);

    simonPlay();
}

// this function highlights the current color that simon is showing
function colorHighlighted(panels) {
    const gamecircle = document.getElementsByClassName("panels");

    setTimeout(() => {
        colorChange.classList.remove("active");
        enableUserInput();
    }, 400);
}

// the next function is responsible for playing simon's sequence
function simonPlay() {
    // first i initialize a variable to 0
    let a = 0;

    // then i created an anonymous function;
    const interval = setInterval(() => {
        // here we call the function to highlight the current color
        colorHighlighted(simon[a]);
        a++;

        // now once simon's sequence and "a" are equal;
        if (a >= simon.length) {
            // it will stop for a moment
            clearInterval(interval);
            // and call the function to let the user input
            enableUserInput();
        }
    }, 500 ); // each of the colors will be highlighted for only half a second
}

// the function here is defined for the user input phase
function userInput(panels) {
    // this will push every click done by the user into an empty array called "player"
    player.push(panels);
    const crrntColors = player.length - 1;

    // if the "player" variable does not equal the "simon" variable, the the game will be over
    if (player[crrntColors] !== simon[crrntColors]) {
        gameOver();
    }

    // if it does, then the a point is added and displayed
    else if (player.length === simon.length) {
        score++;
        scoreDisplay.textContent=score;

        // now, if "score" is higher than the value of "highscore," then "score" will now be considered as the highscore
        if (score > highscore) {
            highscore = score;
            updateHighScore();
        }

        // and the "player" array will be reverted back to empty
        player = [];

        // and this will be creating a one second pause before the next round starts
        setTimeout(() => {
            saysSimon();
            simonPlay();
            enableUserInput();
        }, 1000);
    }
}

// the function here is filled with event listeners that work togther with the function above
function enableUserInput() {
    // these event listeners listen for a click inside the .panel divs to enable user's input for their turn
    green.addEventListener("click", () => userInput("green"));
    red.addEventListener("click", () => userInput("red"));
    yellow.addEventListener("click", () => userInput("yellow"));
    blue.addEventListener("click", () => userInput("blue"));
}

function updateHighScore() {
    highscoreDisplay.textContent = highscore;
}

// this function is for alerting the player that the game is over
// it also hides the  livescoreboard again and shows the stat button
function gameOver() {
    alert("Game Over.");

    livescoreboard.style.display = "none";
    start.style.display = "block";
    start.style.zIndex = 1000;
}