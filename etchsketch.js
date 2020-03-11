const mainContainer = document.querySelector(".container");
const colorButton = document.querySelector("#randCol");
const clearButton = document.querySelector("#clearGrid");
const newGridButton = document.querySelector("#newGrid");
let randColorSwitch = 0;

function getGridList(container, element) { 
  return container.querySelectorAll(element);
}


function drawGrid(numOfSquares) {
  for(let i = 1; i <= numOfSquares * numOfSquares; i++) {
    mainContainer.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;

    let gridElement = document.createElement("div");
    gridElement.style.border = "1px solid black";
    mainContainer.appendChild(gridElement);  
  }
}

function colorGrid(){
  let gridElementList = getGridList(mainContainer, "div");

  gridElementList.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      if(randColorSwitch === 0) {
	e.target.style.background = "black";	
      } else {
	e.target.style.background = randomColor();
      }
      
    });
  });
}

function randomColor() {
  let color1 = Math.round(Math.random() * 255);
  let color2 = Math.round(Math.random() * 255);
  let color3 = Math.round(Math.random() * 255);

  return `rgb(${color1}, ${color2}, ${color3})`;

}

function clearGrid() {
  gridElements = getGridList(mainContainer, "div");
  for(let element of gridElements) {
    element.style.background = "white";
  }
}


function removeGrid() {
  let gridElementList = getGridList(mainContainer, "div");
  for(let element of gridElementList)
    mainContainer.removeChild(element);
}


colorButton.addEventListener("click", (e) => {
  if (randColorSwitch === 0) {
    randColorSwitch = 1;
    e.target.textContent = "Paint it black";
  } else {
    randColorSwitch = 0;
    e.target.textContent = "Random Colors";
  }
})

clearButton.addEventListener("click", () => {
  clearGrid();
})

newGrid.addEventListener("click", () => {
  let newSquares = prompt("How many squares?");
  removeGrid();
  drawGrid(newSquares);
  colorGrid();
})


drawGrid(16);
colorGrid();

