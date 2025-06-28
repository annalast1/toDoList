import { storeProjects } from "./storage";
import { updateDisplay } from "./domController";

export let myProjects = [];  
export let currentProject;

// add project objects to array and update local storage with array
export class Project {

    constructor(title) {
        this.title = title;
        this.todo = [];
        this.id = crypto.randomUUID();
    }

    addProject(x) {
        myProjects.push(x);
    }

    addTodo(Step) {
        this.todo.push(Step);
    }
}

export function createNewProject(title) {
    /* check for duplication */
    let p = true
    myProjects.forEach (element => {
        if (element.title == title) {
            alert("You have an existing project with that name");
            return p = false;
    }}) 
    
    if (title.length < 4) {
        alert("Project name must be a minimum of 4 characters");
        return p = false;   
    } 
    
    if (p == true) {
        const x = new Project(title);
        x.addProject(x); 
        storeProjects(myProjects);
        updateDisplay(myProjects);     
    }
}

export function setCurrent(title) {
   currentProject = title;
   console.log(currentProject);
}





