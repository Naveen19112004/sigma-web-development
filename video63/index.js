let values=[1,2,3,4,5];

for(let i=0;i<values.length;i++){
    console.log(values[i]);         
    // 1
    // 2
    // 3
    // 4
    // 5
}

console.log(values.length);   
// 5


// arrays are mutable where strings are not
values[0] = 20;
console.log(values);          
// [20, 2, 3, 4, 5]

console.log(values[5]);       
// undefined

console.log(typeof values);   
// "object"


// array methods
console.log(values.toString());   
// "20,2,3,4,5"

console.log(values.slice(1,3));   
// [2, 3]
// (original array NOT changed)

console.log(values.splice(1,3));  
// [2, 3, 4]
// (original array becomes: [20, 5])

console.log(values.splice(1,3,333,444)); 
// removes [5] because only 1 element left → [5]
// after operation array becomes: [20, 333, 444]

console.log(values.push(6));      
// 4  (new length)
// array → [20, 333, 444, 6]

console.log(values.pop());        
// 6
// array → [20, 333, 444]

console.log(values.shift());      
// 20
// array → [333, 444]

console.log(values.unshift(9));   
// 3 (new length)
// array → [9, 333, 444]

console.log(values.join("-"));    
// "9-333-444"

console.log(values.concat([0,8,7])); 
// [9, 333, 444, 0, 8, 7]

console.log(values.reverse());    
// [444, 333, 9]
