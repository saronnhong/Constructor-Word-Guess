var Letter = require("./Letter");

function Word(wordInput) {

    this.wordCreate = function () {
        let wordArray = [];
        for (var i = 0; i < wordInput.length; i++) {
            var letter = new Letter(wordInput[i], false);
            wordArray.push(letter);
        }
        return wordArray;
    }
    this.word = this.wordCreate();

    this.displayWord = function () {
        let displayWordArray = [];
        for (var i = 0; i < wordInput.length; i++) {
            var newResult = this.word[i].displayChar();
            displayWordArray.push(newResult);
        }
        let emptySpaceCheck = displayWordArray.indexOf("_ ");
        if(emptySpaceCheck === -1){
            console.log(displayWordArray.join(" "));
            return 0;
        }
        console.log(displayWordArray.join(" "));
    };
    this.iterateGuess = function (input) {
        let correctCheck = [];
        for (var i = 0; i < wordInput.length; i++) {
            this.word[i].guessUpdate(input);
            correctCheck.push(this.word[i].guessUpdate(input));
        };

        let correctCount = 0;
        for (var i = 0; i < correctCheck.length; i++) {
            if (correctCheck[i] === true) {
                
                correctCount++;
            }
        }
        if (correctCount === 0) {
            console.log("INCORRECT!\n");
            return 0;
        } else {
            console.log("CORRECT!!!!\n");
            return 1;
        }
    };

}

module.exports = Word;
