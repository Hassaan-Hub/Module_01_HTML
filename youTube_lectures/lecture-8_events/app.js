// function func1(a, b, c) {
//   let res = 0;
//   res += arguments.length;
//   console.log(res + a + b + c);
// }
// func1(1, 2, 3); // 6
// func1(1, 2, 3, 4); // 10




// let btn1 = document.getElementById("btn");

// btn1.ondblclick = () => {
//     console.log("hello sir");
//     let a = 25;
//     a--
//     console.log(a);
// }





// let btn1 = document.getElementById("btn");

// btn1.addEventListener("click", () => {
//     console.log('Button clicked!');
//     alert('Button clicked')
// }, { once: true })



// let btn1 = document.getElementById("btn");
// btn1.onclick = () => {
//     console.log('HANDLER1');
// }

// btn1.onclick = () => {
//     console.log('HANDLER2');
// }


// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("your are inside div");

// }

// div.addEventListener("mouseover", () => {
//     console.log("mouse in");
//     div.addEventListener("mouseout", () => {
//         console.log("mouse out");
//     }, {once: true})
// }, {once: true})




// let btn1 = document.getElementById("btn");
// // console.dir(btn1);   
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }



// let div = document.querySelector("div");

// div.onmouseover = (evt) =>{
//     console.log("you are inside div");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }



// Event Listeners

// let btn1 = document.getElementById("btn");

// btn1.addEventListener("click" , () =>{
//     console.log("button was clicked");  
//     console.log("button was clicked -- handler2");  
// })


// let div = document.querySelector("div");

// div.addEventListener("click", ()=>{
//     console.log("button was clicked - handler1");
// })

// div.addEventListener("click", ()=>{
//     console.log("button was clicked - handler2");
// })

// let handler3 = () => {
//     console.log("button was clicked - handler3");
// }
// div.addEventListener("click", handler3);

// div.addEventListener("click", ()=>{
//     console.log("button was clicked - handler4");
// })

// div.removeEventListener("click" , handler3)



// let body = document.querySelector("body")
// let modeBtn = document.querySelector("#mode")
// let currMode = "light";

// modeBtn.addEventListener("click", ()=>{
//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark")
//         body.classList.remove("light")
//     }else {
//         currMode = "light";
//         body.classList.add("light")
//         body.classList.remove("dark")
//     }
//     console.log(currMode);
// })



// let body = document.querySelector("body");
// let darkMode = document.getElementById("dark");

// let dark = "dark";

// darkMode.addEventListener("click", () => {
//     if (dark === "dark") {
//         dark = "dark"
//         body.classList.add("dark")
//         body.classList.remove("light")
//     }
// })


// let lightMode = document.getElementById("light");
// let light = "light";


// lightMode.addEventListener("click", () => {
//     if (light === "light") {
//         light = "light"
//         body.classList.add("light")
//         body.classList.remove("dark")

//     }
// })