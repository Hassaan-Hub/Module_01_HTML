// console.dir(document.body.childNodes[3]);


// document.body.childNodes[3].innerText = "abcd";


// selecting with id

// let id = document.getElementById("myId");
// console.dir(id);


// selecting with class

// let clas = document.getElementsByClassName("myClass")
// console.log(clas);


// selecting with tag

// let tag = document.getElementsByTagName("p")
// console.log(tag);


// selecting with querySelector

// let query = document.querySelector(".myClass")
// console.log(query);


// selecting with querySelectorAll

// let queryAll = document.querySelectorAll(".myClass")
// console.log(queryAll);



// let elements = document.querySelector("h1")
// console.log(elements);



// console.dir(document.body.firstChild);
// console.dir(document.body.childNodes[5]);




// let div = document.querySelector("div")
// console.dir(div);

// div.innerText       // output 'fruits\nmango\norange\nlitchi'
// div.innerHTML       // '\n     <h2>fruits</h2>\n    <ul>\n  <li>mango</li>\n  <li>orange</li>\n    <li>litchi</li>\n  </ul>\n'


// let heading = document.querySelector("h1")

// heading.innerText       // output ''
// heading.textContent     // output 'old heading!'


// Qs. create a H2 heading element with text - "Hello JavaScript". Append "from Apna College
// students" to this text using JS.


// let heading = document.querySelector("h2")
// heading.innerText += " from Apna College students"



// Qs. create 3 divs with common class name - "box". Access them & add some unique text to
// each of them.


// let box = document.querySelectorAll(".boxs")
// let idx = 1;

// for(let i of box){
//     i.innerText = `new unique value ${idx}`
//     idx++
// }
