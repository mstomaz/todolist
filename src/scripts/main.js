import { ToDo } from "./ToDo.js";
import { ToDoList } from "./ToDoList.js";

const toDoList = new ToDoList();

const toDoButton = document.getElementById("todo-submit");
const inputContent = document.getElementById("input-content");
const toDoContainer = document.getElementById("todos-outer");

toDoButton.addEventListener("click", addToDo);

function addToDo(event) {
    event.preventDefault();
    if (inputContent.value) {
        const toDo = new ToDo(inputContent.value);
        toDoList.addToDo(toDo);
        console.log(toDoList.toDos);
        displayToDo(toDo);
    } else {
        alert("Afazer vazio") // temporario, apenas para testes
    }
}

function displayToDo(toDo) {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    toDoDiv.innerText = toDo.description;
    toDoContainer.appendChild(toDoDiv);
}