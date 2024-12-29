document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') return; // Don't add empty tasks

    const taskList = document.getElementById('task-list');
    
    // Create a new task element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add completed functionality
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        li.classList.add('completed-anim'); // Add animation when completed
    });

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        // Apply fade-out animation before deletion
        li.classList.add('fade-out-anim');
        li.addEventListener('animationend', () => {
            taskList.removeChild(li);
        });
    });

    // Append delete button and task to the list
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = '';
}