var Letter = require('./letter')
var wordish = "mountain"
var guess = "o"
function Word(actWord,guess){
    this.array =[]
    this.secondArray =[]
    this.addLetter= function(letter, guess){
      /* var that = */console.log( new Letter(letter, guess))
        console.log(that.printL())
        
    }
    this.word = actWord;
    this.arraySplit= function(guess){
       array=this.word.split("") 
       for (let i = 0; i < array.length; i++) {
        this.addLetter(array[i], guess)
       }
    }
   
}
var test = new Word(wordish,guess)
test.arraySplit()


