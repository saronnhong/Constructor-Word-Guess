var inquirer = require("inquirer");
var Word = require("./Word");

var spiderDictArray = ["spiderman", "greengoblin", "blackcat", "peterparker", "spidergwen", "kingpin", "vulture", "rhino", "venom", "carnage", "milesmorales","spiderham", "maryjanewatson", "uncleben","auntmay","sandman","doctoroctopus","mysterio","kraven","shocker","electro","hobgoblin","antivenom","prowler"];
var chosenWord = spiderDictArray[Math.floor(Math.random() * spiderDictArray.length)];
let word = new Word(chosenWord);
let guessesLeft = 20;
var score = 0;
console.log("\nWELCOME TO THE SPIDER-MAN WORD GUESS GAME. \nTRY YOUR LUCK AT GUESSING THESE SPIDERVERSE \nRELATED WORDS AND SEE HOW HIGH YOU CAN SCORE.\nEXCELSIOR!!!! \n\n\n");
word.wordCreate();
word.displayWord();

function startGame() {
    inquirer
        .prompt(
            {
                type: "input",
                message: "Guess a letter!",
                name: "letterGuessed"
            }
        )
        .then(function (response) {

            let correctCheck = word.iterateGuess(response.letterGuessed);
            let endGameCheck = word.displayWord();
            if (endGameCheck === 0) {
                
                console.log("You Got It Right! Next Word");
                score++;
                console.log("Score: " + score);
                var chosenWord = spiderDictArray[Math.floor(Math.random() * spiderDictArray.length)];
                word = new Word(chosenWord);
                word.wordCreate();
                word.displayWord();
                return startGame();
            }
            if (correctCheck === 0) {
                guessesLeft--;
                console.log("\nYou have " + guessesLeft + " guesses left.");
            }
            if (guessesLeft === 0) {
                console.log("GAME OVER!");

            } else if(guessesLeft > 0)  {
                return startGame();
            }
        });
};
startGame();



