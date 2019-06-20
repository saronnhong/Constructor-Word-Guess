var inquirer = require("inquirer");
var Word = require("./Word");

var gotDictArray = ["hodor", "arya", "robb", "jonsnow", "sansa", "eddard", "catelyn", "theon", "rickon", "tyrion", "jaime", "cersei", "tywin", "robin", "aegon", "maegor", "jaehaerys", "viserys", "daeron", "baelor", "aerys", "nymeria", "ghost", "summer", "shaggydog", "greywind", "lady", "joffrey", "khaldrogo", "daenerys", "hotpie", "gendry", "melisandre", "stannis", "lysa", "oldnan", "renly", "myrcella", "gregor", "sandor", "jeynepoole", "bran", "samwell", "coldhands"];
var chosenWord = gotDictArray[Math.floor(Math.random() * gotDictArray.length)];
let word = new Word(chosenWord);
let guessesLeft = 5;
var score = 0;

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
                var chosenWord = gotDictArray[Math.floor(Math.random() * gotDictArray.length)];
                word = new Word(chosenWord);
                word.wordCreate();
                word.displayWord();
                return startGame();
            }
            if (correctCheck === 0) {
                guessesLeft--;
                console.log("You have " + guessesLeft + " guesses left.");
            }
            if (guessesLeft === 0) {
                console.log("GAME OVER!");

            } else if(guessesLeft > 0)  {
                return startGame();
            }
        });
};
startGame();



