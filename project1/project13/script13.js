const inputEl=document.querySelector(".input");
const bodyEl=document.querySelector("body");
inputEl.checked=JSON.parse(localStorage.getItem("mode"));
updatecolor();
function updatecolor(){
    if(inputEl.checked){
       bodyEl.style.backgroundColor="black";
    }
    else{
        bodyEl.style.backgroundColor="white";
    }
}
inputEl.addEventListener("input",()=>{
    updatecolor();
    localstorage();
})

function localstorage(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked))
}