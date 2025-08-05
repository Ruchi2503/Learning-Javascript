// If /else
//  if one of my condition will match over here then rest of the condition will ignore
const num=30;
if(num>=30){
    console.log('u are pass')
}
else if(num>=90){
    console.log('u score good marks')
}
else if(num<30){
    console.log('u are fail')
}
else{
    console.log("nothing")
}
//  Ternary operator
// : ---> it means else here
age>=18 ? console.log("yes"):console.log('No')

// in another way
let result = marks >=18?'yes':'no'
console.log(result)


// Switch case statement
//  we use here break statement so if a first condition will match it will not move further
const option =3;
switch(option){
    case 1:{
        console.log('Namste')
    }
    break;
    case 2:{
        console.log("hello")
    }
    break;
    case 3:{
        console.log("bonjor")
    }
    break
    default:console.log("Invalid option")

}

// another example
let a=30;
let opt="+"
let b=40;

switch(opt){
    case'+':console.log(a+b);
    break;
    case'-':console.log(b-a);
    break;
    case'*':console.log(a*b);
    break;
    default:console.log('IDK');
}