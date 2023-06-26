let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded",function(){
    //Calling the functions
    createBoard(16); //This changes the size of the board
    
    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#drawTrue");
            if(click){
                draw.innerHTML = "You're drawing!"
            } else {
                draw.innerHTML = "Click to draw :)"
            }
        }
    })

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
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
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
        return input;
    }

}

function colorDiv(){
    if(click){
        if(color == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white")
}