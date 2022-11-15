

const cellElements = document.querySelectorAll('[data-cell]');
const gameBoard = document.getElementById("gameBoard");
let oTurn
const o_class = 'o'
const x_class= 'x'

play()

// function to set starting board state
function play(){
    oTurn = false;
    cellElements.forEach(cell => {
        cell.addEventListener('click', clickedFunction, { once: true})
    });
    setHover()
}

// This function needs to mark the box, check if someone won or if its the last available box.If none then next player is on
function clickedFunction(e) {
    const cell= e.target
    const currentClass = oTurn ? o_class : x_class
    markBox(cell, currentClass)
    switchPlayer()
    setHover()
};

function markBox(cell, currentClass) {
    cell.classList.add(currentClass)
};

function switchPlayer(){
    oTurn = !oTurn;
};

function setHover(){
    gameBoard.classList.remove(o_class)
    gameBoard.classList.remove(x_class)
    if (oTurn){
        gameBoard.classList.add(o_class)

    }else{
        gameBoard.classList.add(x_class)
    }
};
