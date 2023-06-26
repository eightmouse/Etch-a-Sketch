document.addEventListener("DOMContentLoaded",function(){
    //Changes the amount of columns & rows
    createBoard(32);
    //Just a console log, dont mind me
    console.log("Henlo human, plx no mess with DOM plx")
}) 

//Creates the board function
function createBoard(size){
    //this calls the board
    let board = document.querySelector(".board");
    //this creates the columns and grids
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div");

        /*
        div.style.backgroundColor = "yellow";
        */

        board.insertAdjacentElement("beforeend", div)
    }
}