var a = 10;
var b = 20;
var c = 30;

{
    var a = 40;
    let b = 50;
    const c = 60;

    console.log("b-0",a);
    console.log("BLOCK-1",b);
    console.log("BLOCK-2",c);

    {
        let a = 70;
        let b = 80;

        console.log("INNER-BLOCK-1",a);
        console.log("INNER-BLOCK-2",b);
    }
}

console.log(a);
console.log(b);
console.log(c);




{
    let a = 100;
    console.log("INNER-BLOCK-1",a);
    
    let b = 110;
    console.log("INNER-BLOCK-2",b);
}




var table = 2;
for(var i = 1; i <= 10; i++){
    console.log(`${table} X ${i} = ${table*[i]}`);
}




var object = {
    one: "hi",
    two: "am",
    three: "here"
}

var {one,two, three} = object

console.log(one,two, three);




var fruits = ["mango", "banana", "apple"]

var [mango , banana , apple] = fruits

console.log(mango , banana , apple);




var weather = "rainy1"

if (weather == "rainy"){
    console.log("rainy time");
}else{
    console.log("barish nahi hui");
}

console.log(weather == "rainy1"? "rainy time" : "barish nahi hui");




let a = 1;
a = 2;          // on work

console.log(a);


const b = 3; 
b = 4;          // error

console.log(b);