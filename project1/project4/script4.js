const btn=document.getElementById("btn");
const height=document.getElementById("height");
const width=document.getElementById("weight");
const bmi=document.getElementById("output");
const out=document.getElementById("wc");
function calbmi(){
     const h1=(height.value)/100;
     const w1=width.value;
     const ans=(w1)/(h1*h1);
     bmi.value=ans;
     if(ans<18.5){
        out.innerText=`UnderWeight, Eat properly`
     }
     else if(ans>=18.5 && ans<30){
        out.innerText=` Normal, maintain `
     }
     else{
        out.innerText=` Overweight, Eat less`
     }
}
btn.addEventListener("click",()=>{
    calbmi();
})