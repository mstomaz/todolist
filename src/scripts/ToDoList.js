export class ToDoList {
    #toDos;
    constructor() {
        this.#toDos = [];
    }

    addToDo(toDo) {
        this.#toDos.push(toDo);
    }

    get toDos() {
        return this.#toDos;
    }
}