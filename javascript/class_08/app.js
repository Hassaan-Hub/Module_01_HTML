console.log("SMIT B12");
console.log("SMIT B12");
console.log("SMIT B12");
console.log("SMIT B12");
console.log("SMIT B12");
console.log("SMIT B12");

for (var i = 1; i <= 5; i++) {
    console.log("SMIT Batch12");
}

var fruits = ["Apple", "Mango", "Banana", "Grapes", "BB", "Kiwi", "Papaya"]

for (var i = 0; i < fruits.length; i++) {
    console.log(i + 1, fruits[i]);
}

console.log("Banana Found at index", i);


for (var i = 1; i <= 2; i++) {
    console.log(`Multiplication table for ${i};`);

    for (var j = 1; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`);

    }
    console.log("");

}

for(var i = 1; i <=5; i++){
    row = " ";
    for(var j = 1; j <= i; j++){
        row += "*";
    }
    
    console.log(row);
    
}