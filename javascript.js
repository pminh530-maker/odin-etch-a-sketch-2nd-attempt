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
            cell.addEventListener("mouseenter", function generateRandomCellColor() {
                let hexColorCharacters = '0123456789ABCDEF';
                let newRandomCellColor = '#';
                for(let i = 0; i < 8; i++) {
                    newRandomCellColor += hexColorCharacters[Math.floor(Math.random() * 16)]
                }
                cell.style.backgroundColor = newRandomCellColor;
            })
            boardFrame.appendChild(cell)
        }
    }
}

createGrid(gridSize);

resetButton.addEventListener('click', function createNewGrid() {
    let gridSize = Number(prompt("How many squares do you want on each side?", "16"));
    while (gridSize > 100) {
        if (gridSize <= 100) {
            boardFrame.textContent =  '';
            createGrid(gridSize);
        }
        gridSize = Number(prompt("Sorry, 100 is the limit. Please try again."));
    }
})
