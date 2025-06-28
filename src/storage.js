import { createDefault, renderProject } from "./domCreation";
import { myProjects } from "./project";

// not able to retrieve saved data

export function loadProjects() {
// not getting myProjects on startup
    const storedProjects = localStorage.getItem("projects") || false;

    if (storedProjects.length == 2) {
        createDefault();
    } else if (!storedProjects) {
        createDefault();
    } else {
        const x = JSON.parse(storedProjects);
        x.forEach(element => {
            myProjects.push(element);
            renderProject(element.title, element.id);
        });        
    }
}

export function storeProjects(myProjects) {
    
    const convertObj = JSON.stringify(myProjects);
    localStorage.setItem("projects", convertObj);
}