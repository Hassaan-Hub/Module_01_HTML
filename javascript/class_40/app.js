// first way to import

// import add, {multiply , divide , subtract} from "./utils.js"


// let addFunc = add(2 , 3)
// console.log(addFunc + " Addition");

// let mulFunc = multiply(3 , 4)
// console.log(mulFunc + " Multiply");

// let diviFunc = divide(10 , 2)
// console.log(diviFunc + " Divide");

// let subtFunc = subtract(10 , 8)
// console.log(subtFunc + " Subtract");


// =======================================================
// Second way to import
// * sb ko import krne ki zarurat nhi hoti
// * import krne ke liye export hona chahiye

import * as utils from "./utils.js"

console.log(utils.multiply(2 , 2) + " Multiplition");

let mulFunc = utils.multiply(4 , 2)
let diviFunc = utils.divide(3 , 10)
let subtFunc = utils.subtract(3 , 14)
let addFunc = utils.default(3 , 5)

console.log(mulFunc + " Multiplition");
console.log(diviFunc + " Divide");
console.log(subtFunc + " Subtraction");
console.log(addFunc + " addition");