//error handling
let a=prompt("enter the first number")
let b=prompt("enter te second number");
if(isNaN(a) || isNaN(b)){
     throw SyntaxError("Sorry this is not a number");
     //here actually js is a forgiving language oit doesnot give error if your input is not the string it just say it is not a number(NaN)
     //so but sometimes we need error to be showed so that we correct it 
     //so here whenever i get not a number i throe a error
     //this means that we created the error
     //here we creaated custom errors and thrown th error

}
let sum=parseInt(a)+parseInt(b);
//here again x is not defined
//and this not defined error is thrown by js
//we want to handle this for handling those we use try catch
try{
console.log(sum);
//try this one if not done go for the catch
}
catch(error){
    console.log("you got the error")
}
//try catch works synchronously
//we sometimes use finally with the try catch
finally{
    console.log("files are being closed and db connection also being closed")
}
//either try or catch executes then finally executes 
//but that is not the use of finally
//if that was the use we can simply write console.log right?
//we use finally in functions
//whenevver we return in funs console.log wont work 
//but finally keyword works
function main(){
try{
console.log(sum);
return true;
}
catch(error){
    console.log("you got the error");
    return false;
}
finally{
    console.log("files are being closed and db connection also being closed")
}//it works even after returning the value where console wont

}