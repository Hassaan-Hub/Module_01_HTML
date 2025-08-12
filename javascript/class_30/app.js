// function b(){
//     console.log(7);
// }
// b()
// let a = 10;
// console.log(window.a);      // undefine
// console.log(a);             // 10
// console.log(this);          // not work


// var a1 = 20;
// console.log(window.a1);      // 20
// console.log(a1);             // 20
// console.log(this);             // a1: 20


var x = 123;

function a(){
    console.log(x);
    
    function y(){
        console.log(b);
    }
    y()
}
var b = 321;
a()