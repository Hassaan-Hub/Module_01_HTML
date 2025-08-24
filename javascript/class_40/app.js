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

// import * as utils from "./utils.js"

// console.log(utils.multiply(2 , 2) + " Multiplition");

// let mulFunc = utils.multiply(4 , 2)
// let diviFunc = utils.divide(20 , 10)
// let subtFunc = utils.subtract(20 , 14)
// let addFunc = utils.default(12 , 5)

// console.log(mulFunc + " Multiplition");
// console.log(diviFunc + " Divide");
// console.log(subtFunc + " Subtraction");
// console.log(addFunc + " addition");



// =======================================================
// Third way to import

// import addfunc, {multiply as mulFunc, divide as diviFunc, subtract} from "./utils.js"

// let addition = addfunc(2 , 3)
// let multiplition = mulFunc(4 , 2)
// let divide = diviFunc(10 , 2)
// let subtraction = subtract(10 , 5)

// console.log(addition + " Addition")
// console.log(multiplition + " Multiplition")
// console.log(divide + " Divide")
// console.log(subtraction + " Subtraction")




// for (let value of [1, 2, 3, 4, 5]) {
//     console.log(value);
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i = 0; i < arr.length; i+=4){
//     console.log(arr[i]);
// }


// +=, -=, *=, /=, %=, **=

// let has = 0;
// for (let i = 0; i < 10; i++) {
//     has += i
//     console.log(has);
// }

let hasa = 2;

for (let i = 1; i < 10; i++){
    hasa *= i
    console.log(hasa);
    
}