var idcount = 1;

function addTodo(){
    var todos = document.getElementById('todos')
    var inpVal = document.getElementById('put')

    var element = document.createElement("div")
    element.setAttribute('id' , idcount)
    element.setAttribute('class' , "todo")

    element.innerHTML = `
    <p>${inpVal.value}</p> <button onclick="deleteTodo(${idcount})">Delete</button> <button onclick="updateTodo(${idcount})">Update</button>
    `

    todos.appendChild(element)
    idcount = idcount + 1;
}

function deleteTodo(id){
    var deleteItem = document.getElementById(id)
    var parentElem = deleteItem.parentNode;
    parentElem.removeChild(deleteItem)
}

function updateTodo(id){
    var inpVal = document.getElementById('put')
    var todoItem = document.getElementById(id)

    todoItem.innerHTML = `
    <p>${inpVal.value}</p> <button onclick="deleteTodo(${id})">Delete</button> <button onclick="updateTodo(${id})">Update</button>
`
}




