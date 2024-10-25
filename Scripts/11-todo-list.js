const todoList = [{name:'wash plate', duedate:'2024-10-17'}];
rendertodo();

function rendertodo() {
  let todoListHTML = '';

  for(i = 0; i < todoList.length; i++) {
    todoObject = todoList[i];
    const {name, duedate} = todoObject;
    const html = `<div class="lower-grid">
    <p>${name}</p>
    <p>${duedate}</p>
    <button onclick="
      todoList.splice(${i}, 1);
      rendertodo();
    " class = "delete-button">Delete</button></div>`;
    todoListHTML += html
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInput = document.querySelector('.js-due-date-input');
  const duedate = dateInput.value; 
  todoList.push({name, duedate});

  inputElement.value = '';
  dateInput.value = '';

  rendertodo();
}