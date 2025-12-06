let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let start = document.querySelector("start");
start = document.addEventListener("click", function() {
    if(started == false) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
})
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250)
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250)
}

function levelUp() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameseq.push(ranColor);
    gameFlash(ranBtn);
}

function checkAns(idx) {
    if(userseq[idx] == gameseq[idx]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press the circle to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "bisque";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}