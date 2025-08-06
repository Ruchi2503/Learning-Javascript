//  function--> a block of code that performs a particular task
 
function sayhello(){
    console.log("hey ruchi")
}
sayhello()   //calling the functions

//  a and b are the argument

function add(a ,b){
    console.log(a+b);
}
add(6,4) // here and a and b are parameter 


function multiply(a ,b){
    return a * b
}
let a=multiply(10 ,9)
console.log("That hey user result is",a);

// unlimited argument accept

function addNumbers(){
    let ans=0
    for(let i=0;i<arguments.length;i++){
        ans= ans+ arguments[i]
    }
    return ans;
}
 let result=addNumbers(10,20,30,40,50,60)
 console.log(result)