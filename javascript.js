const title = document.querySelector('h1');
const boardFrame = document.querySelector('#board-frame');
const resetButton = document.createElement('button');
resetButton.textContent = "RESET";
boardFrame.insertAdjacentElement('beforebegin', resetButton);

let row;
let column;
let gridSize = 16;

function createGrid(gridSize) {
    for(row = 0; row < gridSize; row ++) {
        for(column = 0; column < gridSize; column++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            const cellSize =  960 / gridSize;
            cell.style.width = cellSize + 'px';
            cell.style.height = cellSize + 'px';
            cell.addEventListener("mouseenter", function changeCellColor() {
                cell.style.backgroundColor = "gray";
            })
            boardFrame.appendChild(cell)
        }
    }
}

createGrid(gridSize);

resetButton.addEventListener('click', function createNewGrid() {
    let gridSize = Number(prompt("How many squares do you want on each side?", "16"));
    if (gridSize > 100) {
        alert("100 is the limit. Please try again!");
        return gridSize;
    } else {
    boardFrame.textContent = "";
    createGrid(gridSize);
    }
})
