var Word = require('./word')
var inquirer = require("inquirer");
var randomWord = ["leaf", "trunk", "bark", "limb", "tree"]
var winLose


function gameStart() {
    var theWord = ""
    var guessNum = 9
   
    var alreadyGuessed = []
    var random = randomWord[Math.floor(Math.random() * randomWord.length)]
    var word = new Word()
    word.wordSplit(random)
    var sucess = "Good Luck!"
    letterguess()
    function letterguess() {
        theWord = word.letterCheck()
        var letterCount = theWord.split('_').length - 1
        
        theMessage = sucess + "\r\nPlease Guess A Letter \r\n " + theWord + "\r" + "Already Guessed Letters:" + "\n" + alreadyGuessed + "\r\n"
        inquirer
            .prompt([
                {
                    name: "gues",
                    message: theMessage,
                    validate: function (value) {
                        if (isNaN(value) && value.length === 1) {
                            return true;
                        }
                        return false;
                    }
                }])
            .then(function (answers) {
                alreadyGuessed.push(" "+answers.gues)
                word.letterCheck(answers.gues)
                console.log('\033[2J');
                theWord = word.letterCheck()
                if (theWord.split('_').length - 1 < letterCount) {
                    sucess = "\x1b[32m CORRECT! \x1b[0m"
                }
                else {
                    guessNum--
                    sucess = "\x1b[31m INCORRECT! You have " + guessNum + " left \x1b[0m"
                    
                }
                if (theWord.indexOf("_") === -1) {
                    winLose = "\x1b[32m YOU WIN!!!! \x1b[0m \r\n"
                    endGame()
                }
                else if (guessNum === 0) {
                    winLose = "\x1b[31m You Lose! \x1b[0m \r\n"
                    endGame()
                }
                else{
                    letterguess()
                }
                
            })


    }


}
function endGame() {
    inquirer
        .prompt([
            {
                name: "again",
                type: "confirm",
                message: winLose + "Would you like to play again?"
            
            }
        ])
        .then(function (answer) {
            if (answer.again) {
                console.log('\033[2J')
                gameStart()
            }
            else{
                return
            }

        })
}

console.log('\033[2J');
gameStart()