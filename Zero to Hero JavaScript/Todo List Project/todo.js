const form = document.querySelector("#todo-form"); //form
const todoInput = document.querySelector("#todo"); //ilk input
const todoList = document.querySelector(".list-group"); //ul
const firstCardBody = document.querySelectorAll(".card-body")[0]; //ilk cardbody
const secondCardBody = document.querySelectorAll(".card-body")[1]; //ikinci cardbody
const filter = document.querySelector("#filter"); //ikinci input
const clearButton = document.querySelector("#clear-todo"); //taslaklari temizleme butonu

const eventListener = () => {
  form.addEventListener("submit", addTodo);
};

const addTodo = (e) => {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    /*<div class="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>*/

    showAlert("danger", "Lütfen bir todo giriniz...");
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);

    showAlert("success", "Todo'nuz basariyla olusturuldu...");
  }

  e.preventDefault();
};

// function getTodosFromStorage(){
//   let todos;
// if(localStorage.getItem("todos") === null){
//  todos = [];

// }
// else{
//   todos = JSON.parse(localStorage.getItem("todos"));
// }
// return todos;
// }
// function addTodoToStorage(newTodo){
// let todos = getTodosFromStorage();

// todos.push(newTodo);
// localStorage.setItem("todos",JSON.stringify(todos));

// }

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);
  setTimeout(() => {
    alert.remove();
  }, 1000);
}

const addTodoToUI = (newTodo) => {
  /*<li class="list-group-item d-flex justify-content-between">
                          Todo 1
                          <a href = "#" class ="delete-item">
                              <i class = "fa fa-remove"></i>
                          </a>

                      </li>*/

  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class = 'fa fa-remove'></i>";
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todoList.appendChild(listItem);
  todoInput.value = "";
};

eventListener();
