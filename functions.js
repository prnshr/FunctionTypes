// Types of Functions:-

// 1... Normal Functions:=
function add(a,b){
    return a+b;
}

// let res = add(10,20);
// console.log(`The result ${res} of the whole calculation from the add function`);



// 2... Function Expression

let sub = function sub(a,b){
    console.log(a-b);
}

// sub(20,10);

// 3... IIFE :- Immediately Invoked function Expression

;(function (){
    console.log("I am IIFE");
}());

// ;(function abs() { console.log("Welcome to GFG!"); })();


// Arrow Functions

let res = (a,b) =>{
    return a +b;
    // console.log("Yahoo");
};

console.log(res(10,20));


let res1 = a => console.log(a);
res1("Hello");
