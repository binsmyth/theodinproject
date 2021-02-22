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
	//console.log(checkToEval)
	if(checkToEval[1] === "+"){
		return add(parseFloat(checkToEval[0]),parseFloat(checkToEval[2]))
	}
	if(checkToEval[1] === "-"){
		return subtract(parseFloat(checkToEval[0]),parseFloat(checkToEval[2]))
	}
	if(checkToEval[1] === "*"){
		console.log(multiply(parseFloat(checkToEval[0]),parseFloat(checkToEval[2])))
		return multiply(parseFloat(checkToEval[0]),parseFloat(checkToEval[2]))
	}
	if(checkToEval[1] === "/"){
		return  divide(parseFloat(checkToEval[0]),parseFloat(checkToEval[2]))
	}
}

const operationButtons = document.querySelectorAll("#add,#subtract,#multiply,#divide")

function processOperations(handler){
						let checkToEval = display.value.split(" ")
						let dotButton = document.querySelector('#dot')
						//When operation buttons are pressed
						if(handler.match(/[+\-*\/]/)){
							//add operation signs only when there is number in front of it
							if(checkToEval[0] !== "" && checkToEval[0].match(/[0-9]/)){
								handler = " " + handler + " "
								operationButtons.forEach(value=>value.disabled=true)//turn off operation button when pressed once
								dotButton.disabled = false
							}
							else{
								handler=""
							}
						}
						//enable operation buttons when numbers are pressed
						if(handler.match(/[0-9]/)){
							operationButtons.forEach(value=>value.disabled=false)
						}

					  //only evaluate when valid calculation is typed(e.g. 1+2)	
						if(checkToEval.length === 3 && checkToEval[2] !== ""){
							if(handler.match(/[+\-*\/=]/) || handler === "Enter"){
								display.value = operate(checkToEval)
							}		
						}
					
						//remove handler when evaluating
						if(handler.match(/[=]/)){
							handler = ""
						}
						console.log(display.value.charAt(display.value.length-1))
						
						//adding decimals make sure everything works
						if(handler.match(/[.]/)){
							if(!display.value.charAt(display.value.length-1).match(/[0-9]/)){
								handler=""
							}
							else{
								dotButton.disabled = true	
							}
						}
						//Clear button function that resets all buttons and clears
						if(handler.toUpperCase() === "C"){
							display.value = ""
							handler = ""
							dotButton.disabled=false
						}
						if(handler === "Backspace"){
							handler = ""
							if(display.value.charAt(display.value.length-1) === " "){
								display.value = display.value.slice(0,-3)
							}
							else{
								display.value = display.value.slice(0,-1)
							}
							if(display.value.charAt(display.value.length-1)){
								operationButtons.forEach(value=>value.disabled=false)
							}
						console.log(display.value.charAt(display.value.length-1).match(/[0-9]/))
						}
					display.value = display.value + handler
				}

container.addEventListener('click',(event)=>{
				let target = event.target
				let handler = target.getAttribute('data-value')
				//disable writing in textbox
				if(target.nodeName == 'INPUT' || handler === null) {
					return
				}
				if(target.nodeName == 'BUTTON'){
					processOperations(handler);
				}
})
document.body.addEventListener('keydown',(e)=>{
	let handler = e.key
	console.log(handler)
	if((handler.match(/[0-9]/) || handler.match(/[+\-*\/=.]/) || handler === "Backspace" || handler.toUpperCase() === "C" || handler === "Enter")){
		console.log(handler)
		processOperations(handler)
	}
})
