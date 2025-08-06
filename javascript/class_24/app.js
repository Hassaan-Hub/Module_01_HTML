// OBJECTS

// var person = {
//     name: "Hassaan",
//     age : 18,
//     role: "Teacher",
//     isPermenant: true,
//     greet: function(){
//         return "Welcome " + this.role
//     },
//     shift: {
//         mourning: "mourning",
//         evening: "evening",
//         night: "night"
//     }
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
//console.log(Object.entries(person));



// for(key in person){
//     if(person[key] === "Ali"){
//         console.log("Ali FOUND");
//     }else{
//         console.log("Ali is NOT FOUND");
//     }break;
// }

// console.log(person.hasOwnProperty('ages'));
// person.age = 19
// console.log(person);



var idCount = 0;
var todos = [];

function addTodo() {
    var inpVal = document.getElementById('inp')

    todos.push({
        id: idCount,
        title: inpVal.value
    })

    render()
    var todos = document.getElementById('todos')

    todos.setAttribute('class', "todosContainer")


    var element = document.createElement('div')
    element.setAttribute('id', idCount)
    element.setAttribute('class', "todo")

    element.innerHTML = `
    <p>${inpVal.value}</p>
    <button onclick="deleteTodo(${idCount})">DELETE TODO</button>
    <button onclick="updateTodo(${idCount})">UPDATE TODO</button>
    `

    todos.appendChild = (element)
    idCount = idCount + 1;
}

function addTodo() {
    var inpVal = document.getElementById('inp')

    if (inpVal.value.trim() === "") {
        alert("Please Add Todo Task !")
        return;
    }
    todos.push({
        id: idCount,
        title: inpVal.value
    })

    inpVal.value = "";
    render()
}

function render() {
    var todoElem = document.getElementById('todos')
    todoElem.innerHTML = "";
    for (i = 0; i < todos.length; i++) {
        var elem = document.createElement('div')
        var textElem = document.createElement('p')
        var deleteButton = document.createElement('button')
        var updateButton = document.createElement('button')

        deleteButton.textContent = "Delete";
        updateButton.textContent = "Update"
        textElem.textContent = todos[i].title

        elem.setAttribute('id', todos[i].id)
        deleteButton.setAttribute("onclick", `deleteTodo(${todos[i].id})`)
        elem.appendChild(textElem)
        elem.appendChild(deleteButton)
        elem.appendChild(updateButton)
        todoElem.appendChild(elem)
    }
    idCount = idCount + 1;
}

function deleteTodo(id){
    var deleteItem = document.getElementById(id)
    var parentElem = deleteItem.parentNode;
    parentElem.removeChild(deleteItem)

    if (inpVal.value.trim() === "") {
        alert("Updated Todo not be empty !")
        return;
    }

    render()
}

function updateTodo(id){
    var inpVal = document.getElementById('inp')
    var updateItem = document.getElementById(id)

    if(inpVal.value.trim() === ""){
        alert("Updated Todo not be empty !")
        return;
    }

    updateItem.innerHTML = `
    <p>${inpVal.value}</p>
    <button onclick="deleteTodo(${id})">DELETE TODO</button>
    <button onclick="updateTodo(${id})">UPDATE TODO</button>
    `
}