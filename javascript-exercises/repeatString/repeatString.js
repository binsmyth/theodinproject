const repeatString = function(wordToRepeat, numberOfTimes) {

  var repeatedWord = '';
    for(var i = 0 ; i<numberOfTimes;i++){
      repeatedWord = repeatedWord + wordToRepeat;
    }
  if(numberOfTimes < 0 ){
    return 'ERROR';
  }
  return repeatedWord;
}

module.exports = repeatString
