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

// let hasa = 2;

// for (let i = 1; i < 10; i++){
//     hasa *= i
//     console.log(hasa);
// }




// =============================================================== is kaam ke do karike hain pehla or han ek or baat ashi function ko line by line samjaya bhi hai ok


// function makeRangeIterator(start = 0, end = Infinity, step = 1){
//     let nextIndex = start;
//     let iterationCount = 0;

//     const rangeIterator = {
//         next() {
//             let result;
//             if (nextIndex < end){
//                 result = {value: nextIndex, done: true}
//                 nextIndex += step;
//                 iterationCount++;
//                 return result;
//             }
//             return {value: iterationCount, done: false}
//         }
//     }
//     return rangeIterator;
// }

// const iter = makeRangeIterator(1 , 22 , 2)

// let result = iter.next()

// while (result.done){
//     console.log(result.value);
//     result = iter.next()
// }


// ================= Code Explanation (Line by Line)

// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//   // start: kaha se shuru karna hai
//   // end: kaha tak jana hai
//   // step: har number ke beech ka gap (default 1)

//   let nextIndex = start; // yeh current number ko track karega
//   let iterationCount = 0; // yeh count karega kitni values generate hui hain

//   const rangeIterator = {
//     next() { // next() function har bar agla number dega
//       let result;

//       if (nextIndex < end) { // jab tak current number end se chhota hai
//         result = { value: nextIndex, done: true }; 
//         // yeh current number return kar raha hai (galti: done yahan false hona chahiye)
        
//         nextIndex += step; 
//         // yahan par current number ke andar step add kar rahe hain
//         // matlab nextIndex = nextIndex + step
//         // Example: pehle 1 tha, step 2 hai, ab 3 ho jayega

//         iterationCount++; 
//         // kitni bar humne value di, uska count rakha ja raha hai

//         return result; // result object return kar diya
//       }

//       // jab range khatam ho gayi to iterationCount return karo
//       return { value: iterationCount, done: false };
//       // yahan done true hona chahiye tha (ulta hai)
//     },
//   };

//   return rangeIterator; // iterator object return kar diya
// }

// // yahan hum function ko call karte hain
// const iter = makeRangeIterator(1, 25, 2); 
// // 1 se start, 25 tak, har bar 2 ka gap

// let result = iter.next(); // pehla number le lo

// // jab tak result.done true hai (galat condition, ye false hona chahiye)
// while (result.done) {
//   console.log(result.value); // print karo current value ko
//   result = iter.next(); // agla number le lo
// }



// ==================================================================================== dosra ye hai



function* makeRangeIterator(start = 1, end = Infinity, step = 1){
    let iterationCount = 0;
    for (let i = start; i < end; i+= step){
        iterationCount++;
        yield i;
    }
    return iterationCount
}

let iter = makeRangeIterator(1 , 20 , 2)

let result = iter.next()

while (!result.done){
    console.log(result.value);
    result = iter.next();
}


// ================= Code Explanation (Line by Line)


// function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     // Ye generator hai jo start se end tak numbers generate karega, step ke sath

//     let iterationCount = 0; // count karega kitni values generate hui hain

//     for (let i = start; i < end; i += step) {
//         // Loop start se end tak chalega, har step par increment hoga
//         iterationCount++; // ek aur value generate hui
//         yield i; 
//         // yahan par current value return ho jayegi aur function pause ho jayega
//     }

//     return iterationCount; 
//     // Jab loop khatam ho gaya to total iterationCount return hoga (last .next() par milega)
// }
