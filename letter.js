// var word = "word"
// var array=["w","0","r","d"]
// var guessedLet = "w"
var word = require('./word')
function Letter(lett,guess){
    this.letter = lett;
    this.guessed = false;
    this.printL= function(){
        this.check()
        if (this.guessed){
            //console.log(this.letter)
            return this.letter
        }
        else{
            return "_"
        }
    };
    this.check = function(guess){
        console.log("this worked")
         if (guess === this.letter){
             this.guessed = true
             console.log("made it")
         } 
        
    }
   
}

module.exports = Letter;