/* 
// function declaration

function Double(val) {
  return val * 2;
} */

// this is a function expression
// this means we can store a funtion inside a variable!
/* let Doubler = function (val) {
  return val * 2;
}; */
/* let Doubler =  (val) =>{
  return val * 2;
}; */
/* let Doubler = (val) => val * 2; // implicit return
console.log(Doubler(4)); */

let Doubler = (val) => val * 2; // implicit return

console.log(Doubler(4));

// to invoke the function, we call its identifier
