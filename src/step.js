import { currentProject, myProjects } from "./project";
import { storeProjects } from "./storage";
import { EditForm, updateDisplay, updateTodos } from "./domController";


class Step {
    constructor(taskName, dueDate, priority) {
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
        this.complete = false;        
    }

    toggleComplete() {
        this.complete = !this.complete;
    }
};

 

export function createNewStep(taskName, dueDate, priority) {
    // check for duplicates
    const title = new Step(taskName, dueDate, priority);
    storeTask(currentProject, title);
    updateTodos(currentProject);
};

export function storeTask(project, Step) {
    const x = myProjects.length;
    for (let i = 0; i < x; i++) {        
        if (project.title == myProjects[i].title) {
            addTodo(myProjects[i], Step);
            storeProjects(myProjects);
            updateDisplay(myProjects);
        }
    }
};

export function addTodo(project, task) {
    project.todo.push(task);
};

export function addEdit(task) {
    const taskName = document.getElementById("title").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    
    currentProject.todo.forEach(item => {
        if (item.id == task.id) {
            item.taskName = taskName;
            item.dueDate = dueDate;
            item.priority = priority;
        }
    })

    storeProjects(myProjects);
    EditForm();
    updateTodos(currentProject);
}
 