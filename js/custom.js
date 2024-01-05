form = document.querySelector("form");
todoInput = document.querySelector("#todo-input");
addButton = document.querySelector("#add-button");
todoList = document.querySelector("#todo-list");

todos = [];

form.addEventListener('submit', e =>{
  e.preventDefault();
  addTodo();
})


function addTodo(){
  todoText = todoInput.value.trim();

  if (todoText.length > 0){
    todo = {
      id: Date.now(),
      text: todoText,
      completed: false
    };
    todos.push(todo);

    todoInput.value = "";

    renderTodos();
  }
}

function renderTodos(){
  todoList.innerHTML = "";

  todos.forEach(todo => {
    const todoItem = document.createElement('li');
    const todoText = document.createElement('span');
    const todoDeleteButton = document.createElement('button');

    todoText.textContent = todo.text;
    todoDeleteButton.textContent = 'Delete';

    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteButton);

    todoList.appendChild(todoItem);
  })
}











