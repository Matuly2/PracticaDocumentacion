/**
 * Representa una tarea.
 * @class
 */
class Task {
    /**
     * Crea una instancia de Task.
     * @constructor
     * @param {string} text - El texto de la tarea.
     */
    constructor(text) {
        /**
         * El texto de la tarea.
         * @type {string}
         */
        this.text = text;
        /**
         * Indica si la tarea está completada o no.
         * @type {boolean}
         */
        this.completed = false;
    }
}

/**
 * Maneja las tareas.
 * @class
 */
class TaskManager {
    /**
     * Crea una instancia de TaskManager.
     * @constructor
     */
    constructor() {
        /**
         * Lista de tareas.
         * @type {Task[]}
         */
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    /**
     * Agrega una nueva tarea.
     * @param {string} text - El texto de la tarea.
     */
    addTask(text) {
        const task = new Task(text);
        this.tasks.push(task);
        this.updateLocalStorage();
    }

    /**
     * Elimina una tarea.
     * @param {number} index - El índice de la tarea a eliminar.
     */
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.updateLocalStorage();
    }

    /**
     * Cambia el estado de completado de una tarea.
     * @param {number} index - El índice de la tarea.
     */
    toggleTaskCompleted(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.updateLocalStorage();
    }

    /**
     * Actualiza el almacenamiento local con las tareas.
     */
    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    /**
     * Obtiene todas las tareas.
     * @returns {Task[]} - La lista de tareas.
     */
    getTasks() {
        return this.tasks;
    }
}

const taskManager = new TaskManager();

/**
 * Agrega una tarea.
 */
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if (text) {
        taskManager.addTask(text);
        taskInput.value = '';
        renderTasks();
    }
}

/**
 * Elimina una tarea.
 * @param {number} index - El índice de la tarea a eliminar.
 */
function deleteTask(index) {
    taskManager.removeTask(index);
    renderTasks();
}

/**
 * Renderiza las tareas en la lista.
 */
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    taskManager.getTasks().forEach((task, index) => {
        const taskEl = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.style.flexGrow = '1';
        if (task.completed) {
            taskText.style.textDecoration = 'line-through';
        }

        // Botón para borrar tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Borrar';
        deleteBtn.onclick = () => deleteTask(index);
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.classList.add('buttonB'); // Añadir clase buttonB

        taskEl.appendChild(taskText);
        taskEl.appendChild(deleteBtn);
        taskList.appendChild(taskEl);
    });
}

/**
 * Cambia el estado de completado de una tarea.
 * @param {number} index - El índice de la tarea.
 */
function toggleTaskCompleted(index) {
    taskManager.toggleTaskCompleted(index);
    renderTasks();
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);

renderTasks();
