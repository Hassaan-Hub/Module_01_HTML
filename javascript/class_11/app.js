// var text = "Hello guys my new vloge"

// console.log(text.length);
// var findName = text.lastIndexOf("s")
// console.log(findName);

// console.log(text.slice(0 , 5));
// console.log(text.slice(findName + findName + 3));

// console.log(text.slice(11,15));

var text = "In 1939 World War II happens"
console.log(text.slice(0, 8));

for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "The Second World War" + text.slice(i + 12);
    }
    console.log(text);
}

var modifytext = ("Hassaan Farid Kaif Bhai !")
console.log(modifytext.charAt(modifytext.length - 25));



var name = "Hassaan"
console.log(name.slice(0, 2));
console.log(name.charAt(name.length - 7));


