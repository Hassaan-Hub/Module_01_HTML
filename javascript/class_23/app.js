// var person = {
//     name: "Hassaan",
//     age: "17",
//     roll: "123",
//     isPermenant: true,
//     greet: function () {
//         return "welcome " + this.roll;
//     },
//     shift: ["morning", "afternoon", "evening"],
//     shift: {
//         morning: "9:00 AM",
//         afternoon: "1:00 PM",
//         evening: "5:00 PM"
//     }
// }

//console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));



// for (key in person) {
//     if (person[key] === "Ali") {
//         console.log("Ali is FOUND !");
//     } else {
//         console.log("Ali is NOT FOUND !");
//     }
//     break;
// }

// person.age = 6

// console.log(person);



// function Person(name, age, roll, isPermenant){
//     this.name1 = name;
//     this.age1 = age;
//     this.role1 = role;
//     this.permenant1 = isPermenant;
// }

// var person1 = new Person ("Hassaan", 18, "Teacher", true)
// var person2 = new Person ("Majid", 15, "student", false)
// var person3 = new Person ("Qasum", 17, "student", true)
// var person4 = new Person ("kaif", 12, "student", false)

// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4);



// var persons = [
//     {
//         name: "Hassaan",
//         age : 18,
//         role: "teacher",
//         isPermenant: true,
//         greet: function(){
//             return `hello my is ${this.name}`
//         }
//     },
//     {
//         name: "Majid",
//         age : 15,
//         role: "student",
//         isPermenant: false,
//         greet: function(){
//             return `Hello my name is ${this.name}`
//         }
//     },
//     {
//         name: "Ali",
//         age : 11,
//         role: "student",
//         isPermenant: true,
//         greet: function(){
//             return `Hello my name is ${this.name}`
//         }
//     }
// ]
// console.log(persons[2].greet())

// console.log(persons[0].name);       // output is Hassaan
// console.log(persons[1].greet());    // output is Hello my name is Majid
// persons.forEach(person =>{             
//     console.log(person.greet());       // output is greet oski puri length cover kare ga 
// })



var person = [
    {
        name: "Hassaan",
        age : 23,
        role: "teacher",
        isPermenant: true,
        greet: function(audience){
            return `Hello ${audience}, My name is ${this.name} and I am a ${this.role}.`
        }
    },
]

delete person.age;

// console.log(person[0].greet("Teacher"));
// console.log(person[0].greet("Student"));

console.log(person);