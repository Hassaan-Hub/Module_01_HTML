// var idCount = 1;

// function addTodo(){
//     var input = document.getElementById('inp')
//     var todo = document.getElementById('todos')

//     var element = document.createElement('div')
//     var pera = document.createElement('p')
//     var deleteBtn = document.createElement('button')
//     var updateBtn = document.createElement('button')

//     deleteBtn.textContent = "Delete";
//     updateBtn.textContent = "Update";

//     deleteBtn.setAttribute("onclick", `deleteTodo(${idCount})`)
//     updateBtn.setAttribute("onclick", `updateTodo(${idCount})`)

//     element.setAttribute('id', idCount)
//     pera.textContent = input.value;

//     element.appendChild(pera)
//     element.appendChild(deleteBtn)
//     element.appendChild(updateBtn)
    
//     todo.appendChild(element);

//     idCount = idCount + 1;
//     input.value = ""
// }

// function updateTodo(id){
//     var element = document.getElementById(id)
//     var peraElem = element.querySelector('p')
//     var input = document.getElementById('inp');
    
//     peraElem.textContent = input.value
//     input.value = ""
// }

// function deleteTodo(id){
//     var element = document.getElementById(id)

//     var parentElem = element.parentNode;
//     parentElem.removeChild(element)
//     input.value = ""
// }


// var object = {
//     first : 1,
//     second: 2,
//     third : 3
// }

// // console.log(Object.keys(object));
// for (key in object){
//     if (object[key] === 1){
//         console.log("first is found !");
//     }else{
//         console.log("first is not found !");
//     }break;
// }


// var num = 10;

// console.log(num.toFixed(2));
// console.log(num);

// var name = "alia"
// console.log(name.lastIndexOf('a'));

// var name1 = "john player"
// console.log(name1[6]);

// var city = ["karachi", "lahore", "punjab"]
// console.log(city);
// city.length = 0;
// city.push("balochistan")
// console.log(city);


// var a = 7;
// function Hello(){
//     if (true){
//         a = 5
//     }
//     console.log(a);
// }
// Hello()

// var size = 5;
// var a = 5;
// for(var i = size; i >=0; i--){
//     a = a-2
//     console.log(a);
// }


// // a = 5
// function rang(length){
//     for(var i = 0; i <=length; i++){
//         // i++
//         console.log(i);
//     }
    
// }
// rang(6)