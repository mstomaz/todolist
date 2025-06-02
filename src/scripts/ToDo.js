export class ToDo {
    #description;
    #date;
    constructor(description) {
        this.#description = description;
        this.#date = new Date();
        this.isCompleted = false;
        this.completionTimeStamp = null;
    }

    get description() {
        return this.#description;
    }

    get date() {
        return this.#date;
    }
}
