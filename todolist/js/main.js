"use strict";
const formulaire = document.querySelector(".formulaire");
const newTaskButton = document.querySelector(".navigation i");
const newTask = document.querySelector(".navigation");
const titleInput = document.querySelector(".title");
const descriptionInput = document.querySelector(".message");
const tasksContainer = document.querySelector(".tasks-container");
const doneTasksIcon = document.querySelectorAll(".task");

//window.onload = displayTasks();


function getTasks() {
    
    const tasksArray = JSON.parse(localStorage.getItem('tasks') ?? '[]');
    console.log(tasksArray);
    
    return tasksArray;
}

function createNewTask() {
    
    
    newTaskButton.addEventListener("click", () => {
        
        newTask.classList.add("passive");
        formulaire.classList.add("active");
        tasksContainer.classList.add("passive");
        
    });
    
}

/* Récupération du patron de la balise template, et assignation des valeurs correspondantes */
function addNewTask(){
    
    const arrayTasks = getTasks();
    
    formulaire.addEventListener("submit", ()=>{

        const template = document.querySelector("template");
        
        const newBalise = template.content.cloneNode(true);
        newBalise.querySelector("p").textContent = titleInput.value;
        newBalise.querySelector("div").classList.add("task");
        console.log(newBalise);
        
        newTask.classList.remove("passive");
        formulaire.classList.remove("active");
        tasksContainer.classList.remove("passive");

        arrayTasks.push(newBalise);
        localStorage.setItem("tasks", JSON.stringify(arrayTasks));
    });

}

function displayTasks() {

    const tasksArray = getTasks();
    tasksArray.forEach(task =>{

        tasksContainer.appendChild(task);

    });

}

createNewTask();
addNewTask();
displayTasks();

formulaire.addEventListener("submit", (event) => {

    event.preventDefault();
   
});

/*

Pour update la couleur des icônes lorsqu'il coche la tâche pour dire qu'elle est terminée,
ou clique sur la croix pour supprimer la tâche, il faut donc la supprimer du localstorage

doneTasksIcon.forEach(task, ()=>{

    task.addEventListener("click", ()=>{



    });

});

*/ 
