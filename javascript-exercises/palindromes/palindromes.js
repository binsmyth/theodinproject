const palindromes = function(string) {
  let reversedString = string.split("").reverse().join('');
  let clearReversedString = clearString(reversedString);
  return clearReversedString === clearString(string);
}
const clearString = function(string){
  return string.replace(/[.,!\s]/g,'').toLowerCase();
}
module.exports = palindromes
