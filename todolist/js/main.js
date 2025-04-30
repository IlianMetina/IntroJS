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

function getNextTaskID() {

    const currentID = Number(localStorage.getItem("taskIDCounter") ?? "0");
    localStorage.setItem("taskIDCounter", String(currentID + 1));
    return currentID;
}


function deleteTask(){

    const deleteTaskIndex = displayTasks();
    console.log("Index du tableau contenant la tâche à supprimer : " + deleteTaskIndex);
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

            const iconElement = task.getAttribute("checked");
            if(iconElement.style.color === "green"){

                iconElement.style.color = "red";
                
            }else{

                iconElement.style.color = "green";
            }
            // Mettre bouton check correspondant en VERT!
        }
    });
}

/* Récupération du patron de la balise template, et assignation des valeurs correspondantes */
function addNewTask(){

    let tasksID = 0;
    
    
    formulaire.addEventListener("submit", (event)=>{
        
        const arrayTasks = getTasks();
        event.preventDefault();

        const template = document.querySelector("template");
        
        const newBalise = template.content.cloneNode(true);
        newBalise.querySelector("p").textContent = titleInput.value;
        newBalise.querySelector("div").classList.add("task");
        
        /* Repasser en mode classique après l'ajout d'une tâche */
        newTask.classList.remove("passive");
        formulaire.classList.remove("active");
        tasksContainer.classList.remove("passive");

        /* Ajout et actualisation des tâches dans le local storage */
        //localStorage.setItem("tasks", JSON.stringify(arrayTasks));

        /* Ajout d'un ID dans l'objet newTaskStruct pour identifier la div à supprimer lors de l'évènement click de l'icône supprimer */
        const newTaskStruct = {

            title: titleInput.value,
            description: descriptionInput.value,
            status: false,
            ID: getNextTaskID()
        };
       
        clearAllTasks();
        saveTasks(arrayTasks, newTaskStruct);
        displayTasks();

    });
}

function displayTasks(){
    
    const tasksArray = getTasks();
    console.log("Tableau de tâches début de fonction :");
    console.log(tasksArray);
    
    const template = document.querySelector("template");
    
    tasksArray.forEach(task =>{
        
        const newBalise = template.content.cloneNode(true);

        newBalise.querySelector("p").textContent = task.title;

        const taskElement = newBalise.querySelector("div");

        taskElement.classList.add("task");

        taskElement.setAttribute("data-id", task.ID);

        
        //console.log(task.ID + "LE TEST");
        
        const deleteIcon = newBalise.querySelector(".delete");

        const parentDeleteIcon = deleteIcon.parentElement;

        const checkedIcon = newBalise.querySelector(".checked");

        console.log("Tableau de tâches début boucle forEach");
        console.log(tasksArray);

        
        deleteIcon.addEventListener("click", ()=>{
            
            console.log("delete");


            
            console.log("Tableau de tâches addEventListen click deleteIcon:");
            console.log(tasksArray);
            
            
            /* Vérifier cette partie jusqu'à la fin de la fonction */
            /* Récupérer tableau localstorage, faire une boucle for dessus, puis lorsque tab.id == task.id, noté l'index et l'utiliser pour splice l'élément correspondant dans le tableau, puis stringify le tableau et setItem dans local storage */
            
            const deleteID = Number(taskElement.getAttribute("data-id"));
            console.log("ID de la div supprimée : " + deleteID);       
            
            const taskIndex = tasksArray.findIndex(task => task.ID == deleteID);
            
            if(taskIndex != -1){
                
                tasksArray.splice(taskIndex, 1);
                localStorage.setItem("tasks", JSON.stringify(tasksArray));
                parentDeleteIcon.parentElement.remove();           
            }
        });

        const AllTasks = getTasks();
        console.log("Tableau de tâches rechargée :");
        console.log(AllTasks);
        console.log("Tableau de tâches sortie de la boucle forEach");
        console.log(tasksArray);


        checkedIcon.addEventListener("click", ()=>{
            
                   
            newBalise.status = true;

            updateTasksStatus(checkedIcon);

            // if(checkedIcon.style.color === "green"){
                
            //     checkedIcon.style.color = "white";
                
            // }else{

            //     checkedIcon.style.color = "green";
            // }
        });
        
        // updateTasksStatus();

        tasksContainer.appendChild(newBalise);
        
    });
}

createNewTask();
addNewTask();
displayTasks();


