document.addEventListener("DOMContentLoaded",function(){
    //Calling the functions
    createBoard(16); //This changes the size of the board
    //This prompts a msg to ask for the size
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
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
        div.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", div)
    }
}

function getSize(){
    let input = prompt("What will be the size of the canvass?")
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number";
    } else if(input < 0 || input > 100){
        message.innerHTML = "Please provide a number between 1 and 100 :("
    } else {
        message.innerHTML = "Have fun!"
    }

}