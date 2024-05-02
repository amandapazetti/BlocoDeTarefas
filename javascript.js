    document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.getElementById('toggleThemeButton');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const tasksContainer = document.getElementById('tasks');
    const tasksDoneContainer = document.getElementById('tasksDone');
    let taskCount = 0;
    let doneCount = 0;

    themeButton.addEventListener('click', function () {
    toggleTheme();
});

    addTaskButton.addEventListener('click', function () {
    addTask();
});

    function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark');
    body.classList.toggle('light');
}

    function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    const newTask = document.createElement('div');
    newTask.textContent = taskText;
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.addEventListener('click', function () {
    deleteTask(taskDiv);
});
        const editButton = document.createElement('button'); // Adiciona o botão de edição
        editButton.innerHTML = '<i class="fa-solid fa-pencil" style="color: #99c6cc;"></i>'; // Define o ícone ou texto para representar a edição
        editButton.addEventListener('click', function() {
            editTask(newTask);
});
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fa-solid fa-check" style="color: #99c6cc;"></i></i>';
    doneButton.addEventListener('click', function () {
    completeTask(taskDiv);
});
    taskActions.appendChild(deleteButton);
    taskActions.appendChild(editButton);
    taskActions.appendChild(doneButton);
    taskDiv.appendChild(newTask);
    taskDiv.appendChild(taskActions);
    tasksContainer.appendChild(taskDiv);
    taskCount++;
    document.getElementById('taskCount').textContent = taskCount;
    taskInput.value = '';
}
}

    function deleteTask(task) {
    task.parentNode.removeChild(task);
    taskCount--;
    document.getElementById('taskCount').textContent = taskCount;
}

    function completeTask(task) {
    task.classList.add('task-done');
    tasksDoneContainer.appendChild(task);
    doneCount++;
    document.getElementById('doneCount').textContent = doneCount;
    taskCount--;
    document.getElementById('taskCount').textContent = taskCount;
}

        function editTask(taskElement) {
            const newText = prompt('Enter new task text:', taskElement.textContent);
            if (newText !== null && newText.trim() !== '') {
                taskElement.textContent = newText;
            }
        }
});
