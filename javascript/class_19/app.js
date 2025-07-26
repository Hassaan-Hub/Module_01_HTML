var idcount = 1;

function addTodo(){
    var todos = document.getElementById('todo')
    var inpVal = document.getElementById('inp')

    todos.setAttribute('class', "todosContainer")

    if(inpVal.value.trim() === ""){
        alert("Please add Todo Task !")
        return;
    }

    var element = document.createElement('div')
    element.setAttribute('id' , idcount)
    element.setAttribute('class' , "todo")

    element.innerHTML = `
    <p>${inpVal.value}</p>
    <button onclick="deleteTodo(${idcount})">Delete</button>
    <button onclick="updateTodo(${idcount})">Update</button>
    `

    todos.appendChild(element)

    inpVal.value = "";
    idcount = idcount + 1;
}

function deleteTodo(id){
    var deleteItem = document.getElementById(id)
    var parentElem = deleteItem.parentNode;
    parentElem.removeChild(deleteItem)
}

function updateTodo(id){
    var inpVal = document.getElementById('inp')
    var todoItem = document.getElementById(id)

    if(inpVal.value.trim() === ""){
        alert("Update Todo not be empty !")
        return;
    }

    todoItem.innerHTML = `
    <p>${inpVal.value}</p>
    <button onclick="deleteTodo(${id})">Delete</button>
    <button onclick="updateTodo(${id})">Update</button>
    `
}