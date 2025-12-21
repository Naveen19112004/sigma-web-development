const btn=document.querySelector(".btn")
const video=document.querySelector(".background-video");
const fa=document.querySelector(".fa")
const pre=document.querySelector(".preloader");
window.addEventListener("load",()=>{
    setTimeout(()=>{
        pre.style.zIndex="-2";
    },1000)
})
btn.addEventListener("click",()=>{
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause");
        video.play();
        fa.classList.remove("fa-play");
        fa.classList.add("fa-pause");
        
    }
    else{
        btn.classList.add("pause");
        video.pause();
        fa.classList.remove("fa-pause");
        fa.classList.add("fa-play");
    }
})