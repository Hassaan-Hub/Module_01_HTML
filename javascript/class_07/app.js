var fruits = ["Apple", "Mango", "Banana", "Grapes", "BB", "Kiwi", "Papaya"];

console.log(fruits);
                     
fruits[1] = "Grapes"; // replace Mango at index 1

console.log(fruits[1]);
console.log(fruits);

console.log(fruits.pop()); // last element delete

console.log(fruits.push("Orange")); // last element add

console.log(fruits.shift()); // first element delete

console.log(fruits.unshift("Pinaepple")); // first element add
console.log(fruits);


var newfruits = fruits.slice(2)   // .slice(2) → Copy from index 2 onward
console.log(newfruits);


// Remove 2 items from start (index 0)
// Add "cherry" and "lemon" at that place
fruits.splice(0 , 2 , "cherry" , "lemon")
console.log(fruits);