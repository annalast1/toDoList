import { currentProject } from "./project";


export class Step {
    constructor(taskName, description, dueDate, priority) {
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export function createNewStep(taskName, description, dueDate, priority) {
    const title = new Step(taskName, description, dueDate, priority);
    console.log(title);
    console.log(currentProject);
}