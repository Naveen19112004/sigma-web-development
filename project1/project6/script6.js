const btnEl=document.querySelector(".btn");
const popcEl=document.querySelector(".popup-container");
const conEl=document.querySelector(".container");
const ciEl=document.querySelector(".fas");
btnEl.addEventListener("click",()=>{
    conEl.classList.add("active");
    popcEl.classList.remove("active");
})
ciEl.addEventListener("click",()=>{
    popcEl.classList.add("active");
    conEl.classList.remove("active");
})