import { SetUpListeners } from "./modals";
import { loadProjects, storeProjects } from "./storage";
import { currentProject, myProjects } from "./project";
import { createDefault, renderProject } from "./domCreation";

// Set up Page - event listeners - stored projects
export function setUp() {
    SetUpListeners();
    loadProjects();
    console.log(myProjects);
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
}

export function removeProject(id) {

    myProjects.forEach(element => {
        if (id == element.id) {
            myProjects.splice(myProjects.indexOf(element), 1);
        }
    })
    
    updateDisplay(myProjects);
    storeProjects(myProjects);

    if (myProjects.length == 0) {
        createDefault();
    }
}
