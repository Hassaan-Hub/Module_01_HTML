// var arr = [2, 4, 6, 8, 10]

const dummyData = [
    {
        id: 1,
        name: "Hassaan",
        rollno: 123
    },
    {
        id: 2,
        name: "Majid",
        rollno: 321
    },
    {
        id: 3,
        name: "Kaif",
        rollno: 432
    },
]

// var data = document[2]?.rollno
// var data = document[2]?.class.one

// if(data == undefined){
//     console.log("Sahi chal rahi hai mazay kro !!");
// }else{
//     console.log("Production phat Gayi !!");
// }



// ======================================================== yaha se lekar

// var arr = [2, 4, 6, 8, 10]

// const out = arr.map(function (h){
//     let result = h * 2

//     return result
// })

// console.log(out);


// var arr = [2, 4, 6, 8, 10]

// const out = arr.map((x) =>{
//     let result = x * 3

//     return result
// })
// console.log(out)

// var arr = [2, 4, 6, 8, 10]
// const out = arr.map(x => x * 4)

// console.log(out)


// const out = dummyData.map((x) =>{
//     return {
//         id: x.id,
//         name: x.name,
//         rollno: x.rollno
//     }
// })
// console.log(out)


//============================================================ yaha tak aske sare method hain


//  FILTER

// var arr = [1, 4, 7, 123, 3]

// function isEven(x){             // x == paramenter 
//     return x % 2 === 0
// }

// function isOdd(x){              // x == paramenter 
//     return x % 2 !== 0
// }


// // let res = isEven(6)   //  Argument


// for (var i = 0; i < arr.length; i++){
    
//     if(isEven(arr[i])){
//         console.log(arr[i] + " is Even");
        
//     }else if (isOdd(arr[i])){
//         console.log(arr[i] + " is Odd");    
//     }

// }




// const arr = [2, 4, 5, 7, 8, 6, 9]

// const out = arr.filter((x)=>{
//     return x > 6
// })

// console.log(out);


//===========================================================================


// let id = 4

// const out = dummyData.filter((x) =>{                                // niche aska essy method hai
//     return id !== x.id
// }).map((x) =>{
//     return x.name
// })

// console.log(out);



// let id = 0

// const out = dummyData.filter(x => id !== x.id).map(y => y.name)      // aska essy method

// console.log(out);


//===========================================================================


// const arr = [2, 4, 6, 8, 12, 18, 20]

// var max = 0;

// for (var i = 0; i <arr.length; i++){
//     if (max < arr[i]){
//         max = arr[i]
//     }
// }

// console.log(max);


//=========================================================   as ke 2 method hain ak ye hai

// const arr = [7, 8, 2, 9, 5, 4, 14, 18]

// const out = arr.reduce((acc , curr) =>{
//     if (acc < curr){
//         acc = curr
//     }
//     return acc
// }, 0)

// console.log(out);

// const arr = [7, 8, 2, 9, 5, 4, 14, 18]

// const out = arr.reduce((acc , curr) =>{
//     return acc > curr? acc : curr
// },arr[0])

// console.log(out);

//===========================================================================   or ak ye hai



const arr = [7, 8, 2, 9, 5, 4, 14, 18]

const sum = arr.reduce((accumulator , current) =>{
    accumulator = accumulator + current
    return accumulator
}, 0)

console.log(sum);