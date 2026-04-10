// console.log("Welcome To Apna College!");


// fullName = "Tony Stark";
// age = 24;
// price = 99.99;
// x = null; 
// y = undefined;
// console.log(y);



// Variable Rules
// 1. Variable names are case sensitive; "a" & "A" is different.
// 2. Only letters, digits, underscore(_) and $ is allowed. (not even space)
// 3. Only a letter, underscore(_) or $ should be 1st character.
// 4. Reserved words cannot be variable names.

// fullname = "hassaan";
// fullName = "saad";              //  cemal case
// _fullName = "tony stark";
// $fullName = "nomi";
// 123fullName = "hello";          //  wrong variable

// console.log(fullname);



// let const & var
// const : Variable cannot be re-declared or updated. A block scope variable.


// var age = 24;           //  true
// var age = 17;           //  true
// age = 15;               //  true
// var age = 20;           //  true
// console.log(age);       //  return 20


// let : Variable cannot be re-declared but can be updated. A block scope variable.

// let studant = "class-1"     //  true
// studant = "class-2"         //  true
// let studant = "class-1"     //  false

// console.log(studant);       //  error


// var : Variable can be re-declared & updated. A global scope variable.

// const PI = 3.14;            //  true
// const PI = 3.14;            //  false
// PI = 2.41;                  //  false

// console.log(PI);




// Data Types in JS
// Number, String, Boolean, undefined, null, BigInt, Symbol

// let num = 123;
// let str = "hassaan";
// let bol = true;
// let und = undefined;
// let nul = null;
// let big = BigInt("12312309");
// let sym = Symbol("hussain");

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bol);
// console.log(typeof und);
// console.log(typeof nul);
// console.log(typeof big);
// console.log(typeof sym);




// const student = {
//     fullName: "hassaan",
//     age: 19,
//     cgpa: 8.2,
//     isPass: true,
// };


// student["fullName"] = "hussain"
// console.log(student["fullName"]);
// student["age"] += -1
// console.log(student["age"]);