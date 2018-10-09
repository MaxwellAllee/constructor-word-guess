var word = "word"
var array=["w","0","r","d"]
var guessedLet = "w"
var wor=""
function Letter(lets){
    this.letter = lets;
    this.guessed = false;
    this.printL= function(){
        if (guessed){
            //console.log(this.letter)
            wor+=this.letter
        }
        else{
            wor+="-"
        }
    };
    this.check = function(){
         if (guessedLet === this.letter){
             guessed = true
             console.log("made it")
         } 
         this.printL()
    }
   
}
