// loops --->  for loops ---> while loops  ---> Do while loops


// for loops --> if u know how many times to loop
for( let i=1;i<=10;i=i+1){
    console.log("ruchi"+i)
}

//  while---> if the condition will not match it will not execute

let i=0;
while(i<10){
    console.log(i);// it will prints upto 0-10
    i++;
}
// ........................................................
let a = 0;
while (a != 5) {
    console.log(a); // it will prints upto 0-4
    a++; 
}
// ........................................................

let b = 0;
while (b != 10) {
    if (b === 7) {
        break; // Exits loop when 'a' is 7
    }
    console.log(b); // Prints 0 to 6
    b++;
}
// ........................................................

let c = 0;
while (c <= 10) {  // Loop until c reaches 10
    if (c === 7) {
        c++;       // Increment before continue to avoid infinite loop
        continue;  // Skip printing 7
    }
    console.log(c); // Prints 0,1,2,3,4,5,6,8,9,10
    c++;
}


// do-while loop ---> always executes at least once

let ip=50;
let house =50;
do{
    ip =ip+1;
    console.log("step taken"+ip)
}while(ip<=house)
 // it will execute it once then check the condition