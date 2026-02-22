var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");
var tasks = [];
var savedData = localStorage.getItem("tasks");
if (savedData) {
    tasks = JSON.parse(savedData);
}
tasks.forEach(createTask);

function createTask(task) {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    var span = document.createElement("span");
    span.innerText = task.text;
    if (task.completed) span.classList.add("completed");
    checkbox.onclick = function () {
        task.completed = checkbox.checked;
        span.classList.toggle("completed", checkbox.checked);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };
    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "deleteBtn";
    delBtn.onclick = function () {
    taskList.removeChild(li);
    tasks = tasks.filter(function(item) {
        return item !== task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateEmptyMsg();};
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
    updateEmptyMsg();
}

function updateEmptyMsg() {
    var emptyMsg = document.getElementById("emptyMsg");
    if (tasks.length > 0) {
        emptyMsg.style.display = "none";
    } else {
        emptyMsg.style.display = "block";
    }
}

addBtn.onclick = function () {
    var text = taskInput.value.trim();
    if (text === "") return;
    var task = { text: text, completed: false };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    createTask(task);
    taskInput.value = "";
    updateEmptyMsg();
};