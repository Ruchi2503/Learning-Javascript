//arrow function

// Synatx of arrow functions
const sayhello = () =>{
    console.log("hey");
};
sayhello();


const add = (a ,b)=>{
    return a+b;
}
console.log(add(2,3));

const addv2=(a,b)=>a+b;
console.log(2,3);      // this is called one linear // this is used only when u have one statemnet of line
// and if u use the curly bracket then u have to return the value



//*** arguments are not present in arrow function */
// in arrow operator we can pass the argument in  spread operator

const addnumbers =(...nums)=>{
    console.log(nums);
};
addnumbers(10, 20,30, 40,50);

// in normal function we can call the function before inisitalized but in arrow function we can't


// this keyword
const obj={
    value:20,
    myfunction:function(){ //if we use here arrow function then we cant use *this* keyword
        console.log(this.value);
    },

};
obj.myfunction();