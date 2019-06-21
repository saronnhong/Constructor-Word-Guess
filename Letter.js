function Letter(value, guess){
    this.value = value;
    this.guess = guess;
    this.displayChar = function() {
        if(this.guess === true){
            
            return this.value;

        }else {
            
            return "_ ";
        }
    };
    this.guessUpdate = function(input) {
        if (input === this.value){
            this.guess = true;
            return true;
            
        }else{
            return false;
        }
    };
}
module.exports = Letter;
