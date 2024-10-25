const todoList = [{name:'wash plate', duedate:'2024-10-17'}];
rendertodo();

function rendertodo() {
  let todoListHTML = '';

  todoList.forEach((todoObject) => {
    const {name, duedate} = todoObject;
    const html = `<div class="lower-grid">
    <p>${name}</p>
    <p>${duedate}</p>
    <button class = "delete-button js-delete-button">Delete</button></div>`;
    todoListHTML += html
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {todoList.splice(index, 1);
      rendertodo();})
    })

}

document.querySelector('.js-add-button')
  .addEventListener('click', () => {addTodo();});

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