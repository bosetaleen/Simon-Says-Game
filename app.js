let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","blue"]

let started=false;
let level=0;
 let idx=level-1
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

       levelUp();
       
    }
});


function btnFlash(btn){
    btn.classList.add("btnflash");
    setTimeout(function(){
        btn.classList.remove("btnflash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    btnFlash(randbtn);

}

function checkans(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over!Your Score was <b>${level}</b> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
       setTimeout(() => {
        document.querySelector("body").style.backgroundColor="white";
       }, 150);
        reset();
        
    }
}

function btnpress(){
    let btn=this;
    userFlash(btn);

 userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  checkans(userSeq.length-1);
    
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}




