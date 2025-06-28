import { removeProject, updateDisplay } from "./domController";
import { setCurrent, myProjects, createNewProject } from "./project";

export function renderProject(title, id) {
    
        const projectDiv = document.getElementById("projectDiv");
        const box = document.createElement('div');
        box.classList.add('projectDiv');
        const h3 = document.createElement('button');
        h3.textContent = title;
        h3.classList.add('h3');
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