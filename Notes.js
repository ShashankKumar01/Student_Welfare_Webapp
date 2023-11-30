const notesList = document.getElementById('notes-list');
const noteInput = document.getElementById('note-input');
const addNoteButton = document.getElementById('add-note');

const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const prioritySelect = document.getElementById('priority-select');
const addTaskButton = document.getElementById('add-task');

addNoteButton.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        const noteItem = document.createElement('li');
        noteItem.innerHTML = `
            <span>${noteText}</span>
            <button class="delete">Delete</button>
            <button class="edit">Edit</button>
        `;
        notesList.appendChild(noteItem);

        // Clear the input field
        noteInput.value = '';
    }
});

addTaskButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    const priority = prioritySelect.value;
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText} (Priority: ${priority})</span>
            <button class="delete">Delete</button>
            <button class="edit">Edit</button>
        `;
        todoList.appendChild(taskItem);

        // Clear the input fields
        todoInput.value = '';
        prioritySelect.selectedIndex = 0;
    }
});

// Add event delegation for delete and edit buttons
notesList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    } else if (event.target.classList.contains('edit')) {
        const noteItem = event.target.parentElement;
        const noteText = noteItem.querySelector('span').textContent;
        const updatedText = prompt('Edit Note:', noteText);
        if (updatedText !== null && updatedText !== '') {
            noteItem.querySelector('span').textContent = updatedText;
        }
    }
});

todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    } else if (event.target.classList.contains('edit')) {
        const taskItem = event.target.parentElement;
        const taskText = taskItem.querySelector('span').textContent;
        const updatedText = prompt('Edit Task:', taskText);
        if (updatedText !== null && updatedText !== '') {
            taskItem.querySelector('span').textContent = updatedText;
        }
    }
});
