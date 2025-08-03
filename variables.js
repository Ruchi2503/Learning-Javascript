console.log("You are beautiful");

//  how to declare the variables?
//  by using these three keywords var,let & const

var age=20;
console.log(age);

var num1=10;
var num2 =30;
console.log(num1+num2);

if(true){
    var age=23;
}
console.log(age);

// var gloabl scope hota hai   // global means we can acess it from anywhere
// that's why we can write the console statement inside the if statement or outside it also
//  we can re-asign the var values




// let=local // local means we cant acess it from anywhere
// that's why we cant write the console statement inside the if statement
//  we can re-assign the let values

if(true){
    let age=23;
    console.log(age)
    
}


// const is also same as let , const scope --> local
//  the diifernece is that we can't change the value of const

const age=23;
age="30";
console.log(age);

// this code give u error becoz we cant change the const value
// in const we have to initalize the value

//  *****but in let this will not show the error***

letage=23;
age=30;
console.log(age);


// ****highly recommend to use let instead of var becoz var may show error***


