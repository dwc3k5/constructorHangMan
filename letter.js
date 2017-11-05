var inquirer = require ("inquirer");
var newWord = require("./word.js");
function Guess(){
  inquirer.prompt([
    {
      type:"input",
      name:"guess",
      message:"What letter would you like to guess?"
    }
  ]).then(function(answer){
    for(var i=0; i<wordArr.length; i ++){
      if(wordArr[i]===answer.guess){
        console.log(answer.guess);
        newWord.hidden.splice(i,1, answer.guess);
      }
    }
    console.log("====================");
    console.log(hiddenWord);
    console.log("====================");
    console.log(wordArr);
    console.log("====================");
    // this.guess();
  });
}

module.exports = Guess;
