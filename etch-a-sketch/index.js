var allDiv = document.querySelectorAll('div.container');
var rainbowCheck = document.querySelector('#rainbow');
var setColor="black";

//Create columns
var createColumns = function(numberOfColumns){
  if(numberOfColumns < 0 || numberOfColumns > 100){
    return;
  }
  var containerDiv = document.querySelector('.container');
  containerDiv.style.gridTemplateColumns = "auto ".repeat(numberOfColumns);
}

var rainbowColor = function(){
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  var color = `rgb(${r},${g},${b})`;
  return color;
}
rainbowColor
//Create rows
var createRows = function(numberOfRows){
  if(numberOfRows < 0 || numberOfRows>10000){
    return;
  }
  var containerDiv = document.querySelector('.container');
  for(i=0;i<numberOfRows;i++){
    var gridDiv = document.createElement("div");
    gridDiv.addEventListener('mouseover',function(e){
      if(rainbowCheck.checked){
        e.target.style.backgroundColor=rainbowColor();
      }
      else{
        e.target.style.backgroundColor="black";
      }
    });
    containerDiv.appendChild(gridDiv);
  }
}

//function that clears grid
var clearGrid = function(){
  var el = document.querySelector('div.container');
  while(el.firstChild) el.removeChild(el.firstChild);

}

var slider = document.getElementById('myRange');
slider.onchange = function(e){
  clearGrid();
  createColumns(e.target.value)
  createRows(e.target.value * e.target.value);
}

//Button to clear sketches
var clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', function(e){
  clearGrid();
  createColumns(slider.value);
  createRows(slider.value * slider.value);
});

rainbowCheck.addEventListener('change', function(){
  setColor = rainbowColor();
  clearGrid();
  createColumns(slider.value);
  createRows(slider.value * slider.value)
})


//Default sized grid
createColumns(slider.value);
createRows(slider.value * slider.value);
