import { removeProject, updateDisplay, clearTodos, removeTodo, editTodo } from "./domController";
import { setCurrent, myProjects, createNewProject } from "./project";

export let isEdit = false;
export function renderProject(title, id) {
    
        const projectDiv = document.getElementById("projectDiv");
        const box = document.createElement('div');
        box.classList.add('projectDiv');
        const h3 = document.createElement('button');
        h3.id = title;
        h3.textContent = title;
        h3.classList.add('buttonH3');
        h3.addEventListener("click", () => {
            setCurrent(title);
        })
        const trash = document.createElement('img');
        trash.src="./bin.svg";
        trash.classList.add('bin');
        trash.dataset.id = id;
        trash.addEventListener("click", () => {
            removeProject(trash.dataset.id)
        });
        box.append(h3, trash);
        projectDiv.append(box);    
}

export function createDefault() {
    const dfault = createNewProject('Default'); 
    updateDisplay(myProjects);
}

export function renderTodos(project) {
    // Remove existing todos
    clearTodos();
    const stepsDiv = document.getElementById('stepsDiv');
    project.todo.forEach(task => {
        const box = document.createElement('div');  
        box.classList.add('stepBox');  
        const h3 = document.createElement('h3');
        h3.textContent = task.taskName;
        const check = document.createElement('input');
        check.setAttribute("type", "checkbox");
        check.checked = task.complete;
        check.addEventListener("change", () => {
            task.complete = check.checked;
            h3.classList.add('completed');
        })
        const dueDate = document.createElement('p');
        dueDate.textContent = 'Due: ' + task.dueDate;
        const imp = document.createElement('img');
        switch(task.priority) {
            case 'high':
                imp.src = "./red.svg";
                break;
            case 'medium':
                imp.src = "./amber.svg";
                break;
            case 'low':
                imp.src = "./green.svg";
                break;
            default:
                console.log("Priority img error");
                break;        
        }

        const edit = document.createElement('button');
        const pencil = document.createElement('img')
        pencil.src = "./pencil.png";
        pencil.classList.add('edit');
        edit.dataset.id = task.id;
        edit.appendChild(pencil);
        edit.addEventListener("click", () => {
            editTodo(task);
        })
        const trash = document.createElement('img');
        trash.src="./bin.svg";
        trash.classList.add('bin');
        trash.dataset.id = task.id;
        trash.addEventListener("click", () => {
            removeTodo(trash.dataset.id);      
        })
        
        box.append(imp, check, h3, dueDate, edit, trash);
        stepsDiv.append(box);        
    });
}