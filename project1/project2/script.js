const sub1currencyEl=document.getElementById("sub1currency");
const sub2currencyEl=document.getElementById("sub2currency");
const sub1inputboxEl=document.getElementById("sub1inputbox");
const sub2inputboxEl=document.getElementById("sub2inputbox");
const generalEl=document.querySelector(".general");
updaterate();
function updaterate(){
   fetch(`https://v6.exchangerate-api.com/v6/ee2b2be00703f68c7e9e12ed/latest/${sub1currencyEl.value}`)
   .then((res)=>res.json())
   .then((data)=>{
    const rate=data.conversion_rates[sub2currencyEl.value];
    console.log(rate);
    generalEl.innerText=`1 ${sub1currencyEl.value} = ${rate} ${sub2currencyEl.value}`;
    sub2inputboxEl.value=(sub1inputboxEl.value)*(rate);
   });
}

sub1currencyEl.addEventListener("change",()=>{
    updaterate();
})
sub2currencyEl.addEventListener("change",()=>{
    updaterate();
})
sub1inputboxEl.addEventListener("input",()=>{
    updaterate();
})