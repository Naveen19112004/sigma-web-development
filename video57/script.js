// 1)basic for loop
for(let i=0;i<10;i++){
    console.log(i);
}
// 2)for in loop used for objects
const obj1={
    name:"naveen",
    rollno:21,
    age:21,
    likes:"chicken"
}
for(const i in obj1){
    console.log(i);
    console.log(obj1[i]);
}
// 3)for of loop used for iterations
for(let i of "harry"){
    console.log(i);
}
// 4)while loop
let i=0;
while(i<10){
console.log(i);
i++;
}
// do-while loop
let j=0;
do{
console.log(j);
j++;
}
while(j<10){
}
