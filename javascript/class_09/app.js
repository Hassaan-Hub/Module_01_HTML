for(var i = 0; i < 10; i++){
    console.log(i + 1,"Please follow me on github !");
}

var fruits = ["Apple", "Mango", "Banana", "Grapes", "BB", "Kiwi", "Papaya"]

for (var i = 0; i < fruits.length; i++){
    if("Banana" == fruits [i]){
        console.log("Banana Found at index" , i);
        break;
    }else{
        console.log(i);
    }
}

console.log(fruits[0]);



for (var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);   
}

console.log(" ");
var table = +prompt("Enter your Number")

for(var i = 1; i <= 10; i++){
    console.log(table + "X" + i + "=" +  table * i);
    
}