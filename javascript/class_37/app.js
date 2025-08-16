// HIGHER ORDER FUNCTIONS

// function x(){
//     console.log("Hassaan");
// }

// function y(x){
//     x()
// }

// y(x)


// const radius = [8, 7, 5, 2]

// const area = (rad) =>{
//     return  Math.PI * rad * rad
// }

// const circumference = (rad) =>{
//     return 2 * Math.PI * rad
// }

// const diametter = (rad) =>{
//     return 2 * rad
// }

// const calculate = function (radius, logic){
//     const output = []

//     for(var i = 0; i <radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }

// console.log(calculate(radius , area));
// console.log(calculate(radius , circumference));
// console.log(calculate(radius , diametter));

// console.log(radius.map(area));
// console.log(radius.map(circumference))
// console.log(radius.map(diametter))




// ======================================================
// aska asan tarika

const radius = [8, 7, 5, 2]

const calculateAera = function (rad){
    const output = []
    for(var i = 0; i < radius.length; i++){
        output.push(Math.PI * rad[i] * rad[i])
    }
    return output
}

console.log("AREA================>",calculateAera(radius));


const calculateCircumference = function (rad){
    const output = []
    for(var i = 0; i < radius.length; i++){
        output.push(2 * Math.PI * rad[i])
    }
    return output
}

console.log("CIRCUMFRENCE========>",calculateCircumference(radius));


const calculateDiametter = function (rad){
    const output = []
    for(var i = 0; i < radius.length; i++){
        output.push(2 * rad[i])
    }
    return output
}

console.log("Diametter=========>",calculateDiametter(radius))