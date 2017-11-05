var inquirer = require ("inquirer");
var newWord = require("./word.js");
var guess = require("./letter.js");

var hiddenWord = [];
var wordArr ;
var theWord;
//constructor
var buildWord = new newWord("hello");
var guessLetter = new guess("hello");
buildWord.construct();



/*create array and for each */
