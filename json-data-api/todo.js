const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayTodo(data);
    });
};

const displayTodo = (todos) => {
  // 1. get a container
  const todoContainerEl = document.getElementById("todo-container");
  todoContainerEl.innerHTML = "";

  todos.forEach((todo) => {
    console.log(todo);
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
      <div class="todo-card">
        <p>${
          todo.completed == true
            ? `<i class="fa-regular fa-square-check"></i>`
            : `<i class="fa-solid fa-square-check"></i>`
        }</p>
        <h3>${todo.title}</h3>
      </div>
    `;
    todoContainerEl.appendChild(todoCard);
  });
};

loadTodo();
