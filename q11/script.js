document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    let todos = [];
  
    addButton.addEventListener('click', () => {
      const task = input.value.trim();
      if (task !== '') {
        addTask(task);
        input.value = '';
        input.focus();
      }
    });
  
    function addTask(task) {
      todos.push(task);
      renderList();
    }
  
    function renderList() {
      todoList.innerHTML = ''; // Clear the list
      todos.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          deleteTask(index);
        });
  
        li.appendChild(deleteButton);
  
        li.addEventListener('click', () => {
          li.classList.toggle('completed');
        });
  
        todoList.appendChild(li);
      });
    }
  
    function deleteTask(index) {
      todos.splice(index, 1);
      renderList();
    }
  });
  