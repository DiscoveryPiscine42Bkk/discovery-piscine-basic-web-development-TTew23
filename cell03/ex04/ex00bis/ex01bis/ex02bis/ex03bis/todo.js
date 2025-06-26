window.onload = function () {
    loadTodos();

    document.getElementById("new-btn").addEventListener("click", function () {
        const todoText = prompt("Enter a new task:");
        if (todoText && todoText.trim() !== "") {
            addTodo(todoText.trim());
        }
    });
};

function addTodo(text) {
    const ftList = document.getElementById("ft_list");
    const todo = document.createElement("div");
    todo.className = "todo";
    todo.innerText = text;

    todo.addEventListener("click", function () {
        if (confirm("Do you want to delete this task?")) {
            ftList.removeChild(todo);
            saveTodos();
        }
    });

    ftList.appendChild(todo);
    saveTodos();
}

function saveTodos() {
    const todos = [];
    const todoElements = document.querySelectorAll(".todo");
    todoElements.forEach(todo => todos.push(todo.innerText));
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function loadTodos() {
    const cookies = document.cookie.split("; ");
    let todoCookie = cookies.find(row => row.startsWith("todos="));
    if (todoCookie) {
        const todoData = decodeURIComponent(todoCookie.split("=")[1]);
        try {
            const todos = JSON.parse(todoData);
            todos.forEach(todo => addTodo(todo));
        } catch (e) {
            console.error("Could not parse saved todos");
        }
    }
}
