// var word = "word"
// var array=["w","0","r","d"]
// var guessedLet = "w"

function Letter(lett){
    this.letter = lett;
    this.guessed = false;
    this.printL= function(){
        if (this.guessed){
            return this.letter
        }
        else{
            return "_"
        }
    };
    this.check = function(passIt){
         if (passIt === this.letter){
             this.guessed = true
         } 
         return this.printL()
    }
   
}

module.exports = Letter;