import { SetUpListeners } from "./modals";
import { loadProjects, storeProjects } from "./storage";
import { currentProject, myProjects, setCurrent } from "./project";
import { createDefault, renderProject, renderTodos } from "./domCreation";
import { addEdit } from "./step";

// Set up Page - event listeners - stored projects
export function setUp() {
    SetUpListeners();
    loadProjects();
}

export function showProjectForm() {
    const projectForm = document.getElementById('projectForm');
    projectForm.showModal();
}

export function closeProjectForm() {
    const projectForm = document.getElementById('projectForm');
    const pform = document.getElementById('pform');
    projectForm.close();
    pform.reset();
}

export function showStepForm() {
    const stepsForm = document.getElementById("stepsForm");
    stepsForm.showModal();
} 

export function closeStepForm() {
    const stepsForm = document.getElementById('stepsForm');
    const sform = document.getElementById('sform');
    stepsForm.close();
    sform.reset();
}

export function updateDisplay(myProjects) {
    const blank = document.querySelectorAll('.projectDiv');
    blank.forEach(item => {
        item.remove();
    })
    
    myProjects.forEach(element => {
        renderProject(element.title, element.id);
    })
    setCurrent(currentProject);
}

export function removeProject(id) {

    myProjects.forEach(element => {
        if (id == element.id) {
            myProjects.splice(myProjects.indexOf(element), 1);
            clearTodos();
        }
    })
    
    updateDisplay(myProjects);
    storeProjects(myProjects);

    if (myProjects.length == 0) {
        createDefault();
    } 
}

export function removeTodo(id) {
    currentProject.todo.forEach(task => {
        if (task.id == id) {
            currentProject.todo.splice(currentProject.todo.indexOf(task), 1);  
        }
        updateTodos(currentProject);
        storeProjects(myProjects);
    })
}

export function clearTodos() {
    const stepsDiv = document.getElementById('stepsDiv');
    stepsDiv.innerHTML = '';
}

export function updateTodos(project) {
    renderTodos(project);
}

export function editTodo(task) {
    const addTaskFormBtn = document.getElementById('addTaskFormBtn');
    addTaskFormBtn.style.display = "none";
    const addEditBtn = document.createElement('button');
    addEditBtn.textContent = 'Edit';
    addEditBtn.classList.add('addto');
    addEditBtn.id = 'editStepBtn';
    addEditBtn.addEventListener("click", () => {
        addEdit(task);
    });
    const buttonBox = document.getElementById('buttonBox');
    const title = document.getElementById('title');
    title.value = task.taskName;
    const due = document.getElementById('dueDate');
    due.value = task.dueDate;
    const priority = document.getElementById('priority');
    priority.value = task.priority;
    stepsForm.showModal();
    buttonBox.prepend(addEditBtn);
}

export function EditForm() {
    const stepsForm = document.getElementById('stepsForm');
    // remove edit button
    const editStep = document.getElementById('editStepBtn');
    editStep.remove();
    // display add button
    const addTask = document.getElementById('addTaskFormBtn'); 
    addTask.style.display = "unset";
    //reset form and close
    stepsForm.close;
    const sform = document.getElementById('sform');
    sform.reset();
    stepsForm.close();
    
}