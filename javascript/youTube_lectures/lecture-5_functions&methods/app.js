// functions in js
// block of code that performs a spercific task, can be invoked whenever needed


// function myFunction(msg , n){
//     // parameter -> input
//     console.log(msg , n);
// }
// myFunction("i love js", 100)


// function sum(x , y){
//     s = x + y;                       // local variables -> scope
//     console.log("before return");
//     return s;
// }
// let val = sum(2 , 4)
// // console.log(x);
// console.log(val);


// Arrow Function
// compact way of writing a function

// let newArrow = (a,b) => {
//     console.log(a-b);
// }
// newArrow(5,2)

// const arrowSum = (a, b) => {
//     console.log(a + b);
// }
// arrowSum(5, 10);

// // multiplication function
// const arrowMul = (a, b) => {
//     console.log(a * b);
// }
// arrowMul(3, 2);


// const printName = a => console.log(a);
// printName("hassaan");


// lets Practice
// Qs1. create a function using the "function" keyword that takes a string as an argument &
// returns the number of vowels in that string. 

// function findvowels(a) {
//     let count = 0;
//     for (let char of a) {
//         if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//             count++;
//         }
//     }
//     return count;
// }
// let res = findvowels("hassaan")
// console.log(res);


// Qs2. create an arrow function to perform the same task.

// const findVowels = (a) => {
//     let count = 0;

//     for (let char of a) {
//         if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//             count++;
//         }
//     }
//     return count;
// }

// let res = findVowels("hello saylani")
// console.log(res);


// forEach loop in Arrays   arr.forEach(callBackFunction)


// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val) =>{
//     console.log(val);
// })


// let arr = ["karachi", "islamabad", "punjab"];

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })



// Qs3. for a given array of numbers, print the square of each number using forEach loop.

// let arr = [2, 4, 5, 6, 7, 8, 9, 1, 4, 13]

// arr.forEach(function square(num) {
//     console.log(num * num);
// })


// let arr = [2, 4, 5, 6, 7, 8, 9, 1, 4, 13]

// arr.forEach((num) => {
//     console.log(num - 2);
// })



// some more array methods
// map()

// let arr = ["karachi", "islamabad", "punjab"];

// let result = arr.map((val) => {
//     return val;
// })
// console.log(result);


// filter()

// let arr1 = [1, 2, 3, 4, 5, 6, 7];

// let newArr = arr1.filter((val) => {
//     return val % 2 == 0
// })
// console.log(newArr);


// reduce()

// let arr2 = [1, 2, 3, 4, 5, 6, 7];

// let result1 = arr2.reduce((pre, cur) => {
//     return pre > cur ? pre : cur;
// })
// console.log(result1);


// practice 
// Qs. we are given array of marks of students. filter our of the marks of students 
// that scored 90.

// let num = [40, 60, 80, 90, 95, 99]
// let res = num.filter((val) => {
//     return val >= 90;
// })
// console.log(res);


// Qs. take a number n as input from user. create an array of numbers from 1 to n.

// let n = prompt("enter your ")

// let arr = [];
// for (let i = 1; i <= n; i++){
//     arr[i - 1] = i
// }
// console.log(arr);


// Qs. use the reduce method to calculate sum of all number in the array

// let arr = [2, 4, 6, 7, 8, 4, 4, 3, 3, 2, 5, 7]
// let result = arr.reduce((prev, curr) => {
//     return prev + curr
// })
// console.log(result);


// Qs. use the reduce method to calculate product of all number in the array

// let arr = [2, 4, 6, 7, 8, 4, 4, 3, 3, 2, 5, 7]
// let result = arr.reduce((prev, curr) => {
//     return prev * curr
// })
// console.log(result);