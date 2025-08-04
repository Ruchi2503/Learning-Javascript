//  These are Data types in js ---->    // Numbers  // String   // Boolean   // Null   // Undefined   // Objects

//  Numbers
//  in js there is no concept of int ,float ,double.long

let num=3.14;
let num2=18;
console.log(num+num2);

// Strings

let firstname="Ruchi";
let lastname="Kumari";
console.log(firstname+' '+lastname);

// Booleans

let isloggedIn=false;
console.log(isloggedIn);

// Null
//  later u can assign the valu also 
let isloggedout=null;
console.log(isloggedout);

// undefined
let isloggedin=undefined;
console.log(isloggedin);
//  ine next file we will get more clear about undefined and null



// Objects
// in this way object is declare in js
// here person is object
// we will separate the each property of object with comma, which is necessary
const person= {
    firstname: "Ruchi",
    lastname: "kumari",
    age:20,
}
console.log(person);
// if i want to acess the single property of object then
console.log(person.age)
