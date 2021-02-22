const caesar = function(string,steps) {

  var splitString = string.split('')
  let codedString = splitString.map(value=>{
    return value.charCodeAt();
  })
  let decodedString = String.fromCharCode.apply(null,codedString);
  return decodedString;
}

const codeSet = code=>(code<97 ? 65:97);
function mod(n, m) {
  return ((n % m) + m) % m;
}
const mods = (n,m)=>n%m;
console.log(code+5

console.log(caesar('ABC,DE!',1));
//Hello, World! Ebiil, Tloia!
//65 - 2
module.exports = caesar
