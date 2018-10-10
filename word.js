var Letter = require('./letter')
// var wordish = "mountain"
// var guess = "o"
function Word(){
    //this.thereGuess= guess
    this.array =[]
    this.screenPrint = ""
    this.letterCheck= function(pass){
        this.screenPrint = ""
       for (let i = 0; i < this.array.length; i++) {
        this.screenPrint +=this.array[i].check(pass) + " "
           
       }
       return (this.screenPrint)
    }
    this.wordSplit= function(pass){
       for (let i = 0; i < pass.length; i++) {
        this.array.push(new Letter(pass[i]))
       }
    }
   
}
//  var test = new Word()
//  test.wordSplit(wordish)
//  test.addLetter(guess)
//  setTimeout(function(){ test.addLetter("m")}, 1000)

module.exports = Word;

