const rockEl=document.getElementById("rock");
const paperEl=document.getElementById("paper");
const scissorsEl=document.getElementById("scissors");
const judgeEl=document.getElementById("judge");
const yourEl=document.getElementById("yourscore")
const computerEl=document.getElementById("computerscore")
let inputvalue;
let myscore=0;
let computerscore=0;


rockEl.addEventListener("click",()=>{
    inputvalue="rock";
    computer();
})
paperEl.addEventListener("click",()=>{
    inputvalue="paper";
    computer();
})
scissorsEl.addEventListener("click",()=>{
    inputvalue="scissors";
    computer();
})


function computer(){
let arr=["rock","paper","scissors"];
let computervalue;
let rn=Math.floor(3*(Math.random()));
computervalue=arr[rn];
judgeEl.innerText="";

if((inputvalue=="scissors") && computervalue=="paper"){
    judgeEl.innerText=`You win! scissors cut papers`;
    myscore++;
    yourEl.innerText=`${myscore}`;
}
else if((inputvalue=="scissors") && computervalue=="scissors"){
    judgeEl.innerText=`Draw!`;
}
else if((inputvalue=="scissors") && computervalue=="rock"){
    judgeEl.innerText=`You lose! ${computervalue} beats ${inputvalue}`;
    computerscore++;
    computerEl.innerText=`${computerscore}`;
}


if((inputvalue=="paper") && computervalue=="rock"){
    judgeEl.innerText=`You win! ${inputvalue} catches ${computervalue}`;
    myscore++;
    yourEl.innerText=`${myscore}`;
}
else if((inputvalue=="paper") && computervalue=="paper"){
    judgeEl.innerText=`Draw!`;
}
else if((inputvalue=="paper") && computervalue=="scissors"){
    judgeEl.innerText=`You lose! ${computervalue} cuts ${inputvalue}`;
    computerscore++;
    computerEl.innerText=`${computerscore}`;
}

if((inputvalue=="rock") && computervalue=="scissors"){
    judgeEl.innerText=`You win! ${inputvalue} beats ${computervalue}`;
    myscore++;
    yourEl.innerText=`${myscore}`;
}
else if((inputvalue=="rock") && computervalue=="rock"){
    judgeEl.innerText=`Draw!`;
}
else if((inputvalue=="rock") && computervalue=="paper")
    {
    judgeEl.innerText=`You lose! ${computervalue} catches ${inputvalue}`;
    computerscore++;
    computerEl.innerText=`${computerscore}`;
}
}