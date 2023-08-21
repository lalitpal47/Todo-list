
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskCount = document.getElementById("task-count");

let tasks = [];

function addTask() {
    const taskText = inputBox.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    renderTasks();
    updateTaskCount();

    inputBox.value = "";
}

function renderTasks() {
    listContainer.innerHTML = "";

    tasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.innerText = task.text;

        if (task.completed) {
            listItem.classList.add("checked");
        }

        const deleteButton = document.createElement("span");
        deleteButton.classList.add("delete");
        deleteButton.innerText = "✕";
        deleteButton.addEventListener("click", () => deleteTask(task.id));

        listItem.appendChild(deleteButton);
        listContainer.appendChild(listItem);
    });
}

function updateTaskCount() {
    const uncompletedTasks = tasks.filter(task => !task.completed);
    taskCount.innerText = `${uncompletedTasks.length} tasks left`;
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
    updateTaskCount();
}

function showAll() {
    listContainer.querySelectorAll("li").forEach(li => li.style.display = "block");
}

function showActive() {
    listContainer.querySelectorAll("li").forEach(li => {
        if (li.classList.contains("checked")) {
            li.style.display = "none";
        } else {
            li.style.display = "block";
        }
    });
}

function showCompleted() {
    listContainer.querySelectorAll("li").forEach(li => {
        if (li.classList.contains("checked")) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
}
