// Arrays


// let heroes = ["ironman", "hulk", "thor", "batman"]

// for(var i = 0; i <heroes.length; i++){
//     console.log(heroes[i]);
// }

// for (var i in heroes){      //  output in length
//     console.log(i);
// }

// for (var i of heroes){      //  output of pure indexs
//     console.log(i);
// }



// var marks = [23,42,65,76,87,98,19]
// var sum = 0;

// for(var i of marks){
//     sum += i
// }

// let avg = sum / marks.length;

// console.log(`average marks of the class = ${avg.toFixed(2)}`);





// let items = [250, 645, 300, 900, 50];

// let idx = 0;
// for(var val of items){
//     console.log(`value at index ${idx} = ${val}`);
//     idx++;
// }



// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for(var val of items){
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }



// let items = [250, 645, 300, 900, 50];

// for (let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);



// Array methods


// push():add to end
// let phones = ["vivo", "nokia"]
// phones.push("samsung")
// console.log(phones);

// pop():delete from end & return
// let phones = ["vivo", "nokia"]
// phones.pop()
// console.log(phones);

// toSting():converts array to string
// let phones = ["vivo", "nokia"]
// console.log(phones.toString());

// let phones1 = ["vivo", "nokia"]
// let phones2 = ["iphone", "samsung"]
// let re = phones1.concat(phones2)
// console.log(re);

// unshift():add to start
// let phones = ["vivo", "nokia"]
// phones.unshift("samsung")
// console.log(phones);

// shift():delete from start & return
// let phones = ["vivo", "nokia"]
// phones.shift()
// console.log(phones);

// let num = [7, 5, 3, 9, 10]
// num.splice(2, 1, "phones")
// console.log(num);




// Qs
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM","Netflix"]
// normal
// console.log(companies);
// remove the first company of array
// companies.shift();
// console.log(companies);
// remove Uber & add Ola in its place
// companies.splice(2 , 1, "Ola");
// console.log(companies);
// add amazon at the end
companies.push("Amazon")
console.log(companies);
