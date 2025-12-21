const formEl=document.querySelector(".form");
const inputEl=document.querySelector(".input");
const ulEl=document.querySelector(".list");
let list=JSON.parse(localStorage.getItem("list"));
list.forEach((item)=>{
    todoList(item);
})
formEl.addEventListener("submit",(event)=>{
       event.preventDefault();
       todoList();
})
function todoList(task){
    let value=inputEl.value;
    if(task){
        value=task.name;
    }
    let liEl=document.createElement("li");
    liEl.innerText=value;
    let divcheckbox=document.createElement("div");
    divcheckbox.innerHTML=`<i class="fa-solid fa-square-check"></i>`;
    let divtrashbox=document.createElement("div");
    divtrashbox.innerHTML=`<i class="fa-solid fa-trash"></i>`;
    inputEl.value="";
    divcheckbox.addEventListener("click",()=>{
        liEl.classList.toggle("checked");
        localstorage();
    })
    divtrashbox.addEventListener("click",()=>{
        liEl.remove();
        localstorage();;
    })
    liEl.appendChild(divcheckbox);
    liEl.appendChild(divtrashbox);
    ulEl.appendChild(liEl);
    localstorage();
    
}
function localstorage(){
   const liEls = document.querySelectorAll("li");
   let list = [];

   liEls.forEach((item) => {
      list.push({
        name: item.innerText,
        checked: item.classList.contains("checked")
      });
   });

   localStorage.setItem("list", JSON.stringify(list)); // ✅ moved here
}
