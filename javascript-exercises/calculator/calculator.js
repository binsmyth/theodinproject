function add (x,y) {
	return x+y;
}

function subtract (x,y) {
	return x-y;
}

function sum (arr) {
	return arr.reduce((acc, curr)=>{
		return curr + acc;
	},0)
}

function multiply (arr) {
	return arr.reduce((acc,curr)=>{
		return curr * acc;
	},1)
}

function power(x,y) {
	return Math.pow(x,y);
}

function factorial(n) {
	if(n === 0) return 1;
return n * factorial(n-1)
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
  power,
	factorial
}
