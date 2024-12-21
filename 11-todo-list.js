const todoList = [
  {
    name: 'make dinner',
    dueDate: '2024-12-18'
  }
  , 
  {
    name: 'wash dishes',
    dueDate: '2024-12-18'
  }
];
renderTodoList();

function renderTodoList() {

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.name;
    // shortcut for the above 
    const { name, dueDate } = todoObject;
    const html = `
      <p id="todo">
        ${name} ${dueDate} 
        <button class="remove" aria-label="remove todo"  data-index="${i}"></button>
        <div id="divider"></div>
      </p>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

document.querySelector('.js-todo-list').addEventListener('click', (event) => {
  if (event.target.matches('.remove')) {
    const index = event.target.dataset.index;
    todoList.splice(index, 1);
    renderTodoList();
  }
});


function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value.trim();

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  if (!name) {
    alert('Todo name cannot be empty');
    return;
  }
  if (!dueDate) {
    alert('Please select a due date');
    return;
  }

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    // shorthand property syntax name and property are the same we just write it once
    name,
    dueDate
});

  inputElement.value = '';
  dateInputElement.value = '';
  renderTodoList();
}