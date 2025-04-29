"use strict";
const formulaire = document.querySelector(".formulaire");
const newTaskButton = document.querySelector(".navigation i");
const newTask = document.querySelector(".navigation");
const titleInput = document.querySelector(".title");
const descriptionInput = document.querySelector(".message");
const tasksContainer = document.querySelector(".tasks-container");
const doneTasksIcon = document.querySelectorAll(".task");

function clearAllTasks(){

    tasksContainer.innerHTML = "";
}

function deleteTask(){

    const deleteTaskIndex = displayTasks();
    console.log(deleteTaskIndex);
}

/* Enregistrement de la nouvelle tâche dans le tableau de tâches ainsi que dans le localStorage */
function saveTasks(tasks, object){

    tasks.push(object);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks(){
    
    const tasksArray = JSON.parse(localStorage.getItem('tasks') ?? '[]');
    return tasksArray;
}

/* Fonctionnel */
function createNewTask(){
    
    newTaskButton.addEventListener("click", () => {
        
        newTask.classList.add("passive");
        formulaire.classList.add("active");
        tasksContainer.classList.add("passive");
    });
}

/* Fonction de vérification du "check" des tâches */
function updateTasksStatus(){

    const arrayTasks = JSON.parse(localStorage.getItem("tasks") ?? '[]');
    arrayTasks.forEach(task => {
        
        if(task.status == true){

            // Mettre bouton check correspondant en VERT!
        }
    });
}

/* Récupération du patron de la balise template, et assignation des valeurs correspondantes */
function addNewTask(){

    let tasksID = 0;
    
    const arrayTasks = getTasks();

    formulaire.addEventListener("submit", (event)=>{

        event.preventDefault();

        const template = document.querySelector("template");
        
        const newBalise = template.content.cloneNode(true);
        newBalise.querySelector("p").textContent = titleInput.value;
        newBalise.querySelector("div").classList.add("task");
        
        /* Repasser en mode classique après l'ajout d'une tâche */
        newTask.classList.remove("passive");
        formulaire.classList.remove("active");
        tasksContainer.classList.remove("passive");

        localStorage.setItem("tasks", JSON.stringify(arrayTasks));

        /* Ajout d'un ID dans l'objet newTaskStruct pour identifier la div à supprimer lors de l'évènement click de l'icône supprimer */
        const newTaskStruct = {

            title: titleInput.value,
            description: descriptionInput.value,
            status: false,
            ID: tasksID + 1
        };

        tasksID++;
       
        clearAllTasks();
        saveTasks(arrayTasks, newTaskStruct);
        displayTasks();

    });
}

function displayTasks(){
    
    const tasksArray = getTasks();
    console.log(tasksArray);
    
    const template = document.querySelector("template");
    
    tasksArray.forEach(task =>{
        
        const newBalise = template.content.cloneNode(true);
        console.log(newBalise);

        newBalise.querySelector("p").textContent = task.title;
        console.log(newBalise);

        newBalise.querySelector("div").classList.add("task");
        console.log(newBalise);
        
        console.log(task.ID + "LE TEST");
        
        const deleteIcon = newBalise.querySelector(".delete");
        console.log(deleteIcon);
        const parentDeleteIcon = deleteIcon.parentElement;

        const checkedIcon = newBalise.querySelector(".checked");
        console.log(checkedIcon);
        
        deleteIcon.addEventListener("click", ()=>{
            
            console.log("delete");
            parentDeleteIcon.parentElement.remove();
            
            /* Vérifier cette partie jusqu'à la fin de la fonction */
            /* Récupérer tableau localstorage, faire une boucle for dessus, puis lorsque tab.id == task.id, noté l'index et l'utiliser pour splice l'élément correspondant dans le tableau, puis stringify le tableau et setItem dans local storage */
            
            const allTasks = getTasks();

            allTasks.forEach((task, index) => {
                
                if(allTasks.ID == task.id){

                    allTasks.splice(index, 1);
                }

            });

            localStorage.setItem("tasks", JSON.stringify(allTasks));
            
            console.log(task);
        });
        
        checkedIcon.addEventListener("click", ()=>{
            
            newBalise.status = true;
            console.log("checked");            
        });
        
        updateTasksStatus();

        tasksContainer.appendChild(newBalise);
        
    });
}

createNewTask();
addNewTask();
displayTasks();


