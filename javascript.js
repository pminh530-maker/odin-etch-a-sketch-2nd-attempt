const boardFrame = document.querySelector('#board-frame');

let row = 0;
let column = 0;

function createCell(number) {
    for(row = 0; row < 16; row ++) {
        for(column = 0; column < 16; column++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = "60px";
            cell.style.height = "60px";
            boardFrame.appendChild(cell)
        }
    }
}

createCell()