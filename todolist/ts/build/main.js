"use strict";
const newTaskButton = document.querySelector(".navigation i");
const newTask = document.querySelector(".navigation");
const formulaire = document.querySelector(".formulaire");
const addNewTask = document.querySelector(".add-new-task i");
const titleInput = document.querySelector(".title");
const descriptionInput = document.querySelector(".message");
const tasksContainer = document.querySelector(".tasks-container");
const doneTasksIcon = document.querySelectorAll(".task");
newTaskButton.addEventListener("click", () => {
    newTask.classList.add("passive");
    formulaire.classList.add("active");
    tasksContainer.classList.add("passive");
});
function getTasks() {
    const tasksArray = JSON.parse(localStorage.getItem('tasks') ?? '[]');
    return tasksArray;
}
function addTask() {
    const tasksArray = getTasks();
    tasksArray.push({
        title: titleInput.value,
        description: descriptionInput.value,
        status: false
    });
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
}
function displayTasks() {
    const template = document.querySelector("template");
}
formulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    const newBalise = template.content.cloneNode(true);
    newBalise.querySelector("p").textContent = titleInput.value;
    newBalise.querySelector("div").classList.add("task");
    console.log(newBalise);
    newTask.classList.remove("passive");
    formulaire.classList.remove("active");
    tasksContainer.classList.remove("passive");
    tasksContainer.appendChild(newBalise);
});
/*

Pour update la couleur des icônes lorsqu'il coche la tâche pour dire qu'elle est terminée,
ou clique sur la croix pour supprimer la tâche, il faut donc la supprimer du localstorage

doneTasksIcon.forEach(task, ()=>{

    task.addEventListener("click", ()=>{



    });

});

*/ 
