document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', () => {
                const taskSpan = li.querySelector('span');
                if (checkbox.checked) {
                    taskSpan.textContent = `${taskText} (complete)`;
                    li.classList.add('completed');
                } else {
                    taskSpan.textContent = taskText;
                    li.classList.remove('completed');
                }
            });

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';
            removeBtn.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(checkbox);
            li.appendChild(taskSpan);
            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});