var fruits = ["Apple", "Mango", "Banana", "Grapes", "BB", "Kiwi", "Papaya"];

console.log(fruits);
                     
fruits[1] = "Grapes";

console.log(fruits[1]);
console.log(fruits);

console.log(fruits.pop());

console.log(fruits.push("Orange"));

console.log(fruits.shift());

console.log(fruits.unshift("Pinaepple"));
console.log(fruits);


var newfruits = fruits.slice(2)
console.log(newfruits);


fruits.splice(0 , 2 , "cherry" , "lemon")
console.log(fruits);