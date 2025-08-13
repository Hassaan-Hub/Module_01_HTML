function x(){
    var a = 10

    return function y(){
        console.log(a);
    }
}

var z = x()

console.log("hello guys");

z()