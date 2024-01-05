form = document.querySelector("form");
todoInput = document.querySelector("#todo-input");
addButton = document.querySelector("#add-button");
todoList = document.querySelector("#todo-list");

let todos = [];

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
    };
    todos.push(todo);

    todoInput.value = "";

    renderTodos();
  }
}

function renderTodos(){
  todoList.innerHTML = "";
  console.log(todos);
  todos.forEach(todo => {
    const todoItem = document.createElement('li');
    const todoText = document.createElement('span');
    const todoDeleteButton = document.createElement('button');

    todoText.textContent = todo.text;
    todoDeleteButton.textContent = 'Delete';

    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteButton);

    todoList.appendChild(todoItem);

    todoDeleteButton.addEventListener('click', () => deleteTodo(todo.id));
    if (todo.completed) {
      todoItem.classList.add('completed');
    }
  })
}
function toggleCompleted(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }

    return todo;
  });

  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);

  renderTodos();
}


// () => deleteTodo(){
  
// }

// function deleteTodo(todoId){
//   todos.filter(item => todoId !== item.id);
//   renderTodos();
// }








