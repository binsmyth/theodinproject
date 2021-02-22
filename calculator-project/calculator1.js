//Add
const add = (a,b)=>a+b
//Subtract
const subtract = (a,b)=>a-b
//Multiply
const multiply = (a,b)=>a*b
//Divide
const divide = (a,b)=>a/b

const container = document.querySelector('#container')
const display = document.querySelector('#calculations')

const operate  = checkToEval =>{
	console.log(checkToEval)
	if(checkToEval[1] === "+"){
		return add(parseFloat(checkToEval[0]),parseFloat(checkToEval[2]))
	}
	if(checkToEval[1] === "-"){
		return subtract(parseFloat(checkToEval[0]),parseFloat(checkToEval[2]))
	}
	if(checkToEval[1] === "X"){
		return multiply(parseFloat(checkToEval[0]),parseFloat(checkToEval[2]))
	}
	if(checkToEval[1] === "/"){
		return  divide(parseFloat(checkToEval[0]),parseFloat(checkToEval[2]))
	}
}

const c = 
{
	"+":"add",
	"-":"subtract",
	"X":"multiply",
	"/":"divide",
}
const operationButtons = document.querySelectorAll("#add,#subtract")
console.log(operationButtons)
container.addEventListener('click',(event)=>{
				let target = event.target
				let handler = target.getAttribute('data-value')
				let a = 0;
				let dotButton = document.querySelector('#dot')
				if(target.nodeName == 'INPUT') {
					return
				}	
				if(target.nodeName == 'BUTTON'){
						let checkToEval = display.value.split(" ")
						console.log(checkToEval)
						if(handler.match(/[+\-X\/]/)){
							handler = " " + handler + " "
							operationButtons.forEach(value=>value.disabled=true)
							dotButton.disabled = false
						}
						
						if(checkToEval.length === 3 && checkToEval[2] !== ""){
							if(handler.match(/[+\-X\/=]/)){
								display.value = operate(checkToEval)
							}		
						}
						if(handler.match(/[=]/)){
							handler = ""
						}
						if(handler.match(/[.]/)){
							if(!display.value.charAt(display.value.length-1).match(/[0-9]/)){
								handler=""
							}
							else{
								dotButton.disabled = true	
							}
						}
						if(handler === "clear"){
							display.value = ""
							handler = ""
							dotButton.disabled=false
						}
				}
				display.value = display.value + handler
				console.log(display.value.split(" "))
				
})
