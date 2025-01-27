
const tasks = [];

const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const tabs = document.querySelectorAll('.tab');

const addTask = (event) => {
  if (event.keyCode === 13) {
    const taskText = todoInput.value;
    if (taskText) {
      tasks.push({ text: taskText, completed: false });
      todoInput.value = ''
      const li = document.createElement('li');
      li.value = taskText;
      li.innerHTML = `
      <span>
      ${taskText}
      <button class="delete-btn" onclick="${completeTask()}">Complete</button>
      <button class="delete-btn" onclick="${deleteTask()}">Delete</button>
      </span>`;
      todoList.appendChild(li);
    }
  }
}

// Render tasks
const renderTasks = (filter = 'all') => {
  document.getElementById('todo-list').innerHTML = '';
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.value = task;
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
    <span>
    <s>${task.text}</s>
    <button class="delete-btn" onclick="${completeTask()}">Delete</button>
    <button class="delete-btn" onclick="${deleteTask()}">Delete</button>
    </span>`;
    todoList.appendChild(li);
  })

}

const completeTask = () => { }

const deleteTask = (taskToDelete) => {
  tasks.filter((task, index) => task !== taskToDelete)

}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    renderTasks(tab.dataset.filter);
  });
});

// Initial render
renderTasks();
