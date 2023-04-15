const currentStatus = document.querySelector(".currentStatus");
const boxes =document.querySelectorAll(".box");
const win = document.querySelector(".winStatus");
const boxes1 =document.querySelector(".box1");
const boxes2 =document.querySelector(".box2");
const boxes3 =document.querySelector(".box3");
const boxes4 =document.querySelector(".box4");
const boxes5 =document.querySelector(".box5");
const boxes6 =document.querySelector(".box6");
const boxes7 =document.querySelector(".box7");
const boxes8 =document.querySelector(".box8");
const boxes9 =document.querySelector(".box9");
const btn = document.querySelector(".btn");

let currentPlayer;

function gameStart(){
    currentPlayer = "X";
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        box.classList = `box box${index+1}`;
    });
    btn.classList.remove("active");
    currentStatus.innerText = `Current Player - ${currentPlayer}`;
    win.classList.remove("active");
}
gameStart();

function swapTurn() {
    if(currentPlayer === "X") {
        currentPlayer = "0";
    }
    else {
        currentPlayer = "X";
    }
 currentStatus.innerText = `Current Player - ${currentPlayer}`;
}

let count = 0;

boxes1.addEventListener("click", () =>{
    boxes1.style.color = "white";
    boxes1.innerHTML = `${currentPlayer}`;
    winningPositions();
    swapTurn();
    boxes1.style.pointerEvents = "none";
    count++;
    end();
});

boxes2.addEventListener("click", () =>{
    boxes2.style.color = "white";
    boxes2.innerHTML = `${currentPlayer}`;
    winningPositions();
    swapTurn();
    boxes2.style.pointerEvents = "none";
    count++;
    end();
});

boxes3.addEventListener("click", () =>{
    boxes3.style.color = "white";
    boxes3.innerHTML = `${currentPlayer}`;
    winningPositions();
    swapTurn();
    boxes3.style.pointerEvents = "none";
    count++;
    end();
});

boxes4.addEventListener("click", () =>{
    boxes4.style.color = "white";
    boxes4.innerHTML = `${currentPlayer}`;
    winningPositions();
    swapTurn();
    boxes4.style.pointerEvents = "none";
    count++;
    end();
});

boxes5.addEventListener("click", () =>{
    boxes5.style.color = "white";
    boxes5.innerHTML = `${currentPlayer}`;
    winningPositions();
    swapTurn();
    boxes5.style.pointerEvents = "none";
    count++;
    end();
});

boxes6.addEventListener("click", () =>{
    boxes6.style.color = "white";
    boxes6.innerHTML = `${currentPlayer}`;
    winningPositions();
    swapTurn();
    boxes6.style.pointerEvents = "none";
    count++;
    end();
});

boxes7.addEventListener("click", () =>{
    boxes7.style.color = "white";
    boxes7.innerHTML = `${currentPlayer}`;
    winningPositions();
    swapTurn();
    boxes7.style.pointerEvents = "none";
    count++;
    end();
});

boxes8.addEventListener("click", () =>{
    boxes8.style.color = "white";
    boxes8.innerHTML = `${currentPlayer}`;
    winningPositions();
    swapTurn();
    boxes8.style.pointerEvents = "none";
    count++;
    end();
});

boxes9.addEventListener("click", () =>{
    boxes9.style.color = "white";
    boxes9.innerHTML = `${currentPlayer}`;
    winningPositions();
    swapTurn();
    boxes9.style.pointerEvents = "none";
    count++;
    end();
});

function end(){

    if(count == 9){
        btn.classList.add("active");
        btn.addEventListener("click", gameStart);
    }
}
end();
function winningPositions() {
    if((boxes1.innerHTML === boxes2.innerHTML && boxes2.innerHTML === boxes3.innerHTML && boxes3.innerHTML === "0") || 
       (boxes1.innerHTML === boxes2.innerHTML && boxes2.innerHTML === boxes3.innerHTML && boxes3.innerHTML === "X")) {
        boxes1.style.color = "green";
        boxes2.style.color = "green";
        boxes3.style.color = "green";
        win.classList.add("active");
        count = 9;
        end();
    }
    else if((boxes1.innerHTML === boxes4.innerHTML && boxes4.innerHTML === boxes7.innerHTML && boxes7.innerHTML === "0") || 
            (boxes1.innerHTML === boxes4.innerHTML && boxes4.innerHTML === boxes7.innerHTML && boxes7.innerHTML === "X")) {
        boxes1.style.color = "green";
        boxes4.style.color = "green";
        boxes7.style.color = "green";
        win.classList.add("active");
        count = 9;
        end();
    }
    else if((boxes1.innerHTML === boxes5.innerHTML && boxes5.innerHTML === boxes9.innerHTML && boxes9.innerHTML === "0") || 
            (boxes1.innerHTML === boxes5.innerHTML && boxes5.innerHTML === boxes9.innerHTML && boxes9.innerHTML === "X")) {
        boxes1.style.color = "green";
        boxes5.style.color = "green";
        boxes9.style.color = "green";
        win.classList.add("active");
        count = 9;
        end();
    }
    else if((boxes4.innerHTML === boxes5.innerHTML && boxes5.innerHTML === boxes6.innerHTML && boxes6.innerHTML === "0") || 
            (boxes4.innerHTML === boxes5.innerHTML && boxes5.innerHTML === boxes6.innerHTML && boxes6.innerHTML === "X")) {
        boxes4.style.color = "green";
        boxes5.style.color = "green";
        boxes6.style.color = "green";
        win.classList.add("active");
        count = 9;
        end();
    }
    else if((boxes2.innerHTML === boxes5.innerHTML && boxes5.innerHTML === boxes8.innerHTML && boxes8.innerHTML === "0") || 
            (boxes2.innerHTML === boxes5.innerHTML && boxes5.innerHTML === boxes8.innerHTML && boxes8.innerHTML === "X")) {
        boxes2.style.color = "green";
        boxes5.style.color = "green";
        boxes8.style.color = "green";
        win.classList.add("active");
        count = 9;
        end();
    }
    else if((boxes7.innerHTML === boxes8.innerHTML && boxes8.innerHTML === boxes9.innerHTML && boxes9.innerHTML === "0") || 
            (boxes7.innerHTML === boxes8.innerHTML && boxes8.innerHTML === boxes9.innerHTML && boxes9.innerHTML === "X")) {
        boxes7.style.color = "green";
        boxes8.style.color = "green";
        boxes9.style.color = "green";
        win.classList.add("active");
        count = 9;
        end();
    }
    else if((boxes3.innerHTML === boxes6.innerHTML && boxes6.innerHTML === boxes9.innerHTML && boxes9.innerHTML === "0") || 
            (boxes3.innerHTML === boxes6.innerHTML && boxes6.innerHTML === boxes9.innerHTML && boxes9.innerHTML === "X")) {
        boxes3.style.color = "green";
        boxes6.style.color = "green";
        boxes9.style.color = "green";
        win.classList.add("active");
        count = 9;
        end();
    }
    else if((boxes3.innerHTML === boxes5.innerHTML && boxes5.innerHTML === boxes7.innerHTML && boxes7.innerHTML === "0") || 
            (boxes3.innerHTML === boxes5.innerHTML && boxes5.innerHTML === boxes7.innerHTML && boxes7.innerHTML === "X")) {
        boxes3.style.color = "green";
        boxes5.style.color = "green";
        boxes7.style.color = "green";
        win.classList.add("active");
        count = 9;
        end();
    }
    else {
        currentStatus.innerText = "Match tied";
    }
}   