let gameSeq = [];
let userSeq = [];

let highScore = 0;

let btns = ["yellow", "blue", "green", "red"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function usrFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerHTML = `level ${level}`;

    //randan button selectors
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level: ", level);

    // let idx = level-1;
    if(userSeq[idx]=== gameSeq[idx])
    {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup,1000);
            // levelup();
        }
        console.log("same value " );
    }
    else{
        h2.innerText = `Total Score ${level} \n Game Over \n:( \npress any key to start again`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor='white';

        },150);
        reset();
    }

}

function btnPress(){
    // console.log(this);
    let btn = this;
    usrFlash(btn);

    userColor = btn.getAttribute('id');
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click",btnPress);    
}

let h3 =  document.querySelector("h3");
function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    if(highScore <= level) {
        highScore = level;
    }
h3.innerHTML = `High Score : ${highScore}`;
    level = 0;
}