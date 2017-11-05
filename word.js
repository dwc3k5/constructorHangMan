function NewWord(word){
  //sets the word in the construct
  this.word = word;
  theWord = word;
  //puts word into array
  this.arr = this.word.split("");
  wordArr = this.arr;
  //empty array serving as placeholder
  this.hidden = [];
}
  NewWord.prototype.construct = function construct(){
    for( var i=0; i<this.word.length; i++){
      if(this.word.charAt(i) === " "){
        this.hidden.push(" ");
      }else{
        this.hidden.push("_");
      }
    }
    console.log(this.word);
  };
module.exports = NewWord;
