"use strict";
const formulaire = document.querySelector(".formulaire");
const newTaskButton = document.querySelector(".navigation i");
const newTask = document.querySelector(".navigation");
const titleInput = document.querySelector(".title");
const descriptionInput = document.querySelector(".message");
const tasksContainer = document.querySelector(".tasks-container");
const doneTasksIcon = document.querySelectorAll(".task");

/* Faire le tri variables gobales -> locales */

function clearAllTasks(){
    
    tasksContainer.innerHTML = "";
}

function filterTasks(){

    const filterButton = document.querySelector(".date-filter");
    filterButton.addEventListener("click", ()=>{

        const buttonContent = filterButton.textContent;
        const tasksToSort = getTasks();
        
        if(buttonContent === "Plus récent"){

            tasksToSort.sort((a, b) =>{
                filterButton.textContent = "Plus ancien";
                return b.ID - a.ID;
            });

        }else{

            tasksToSort.sort((a, b) =>{
                filterButton.textContent = "Plus récent";
                return a.ID - b.ID;
            });
        }

        localStorage.setItem("tasks", JSON.stringify(tasksToSort));
        clearAllTasks();
        displayTasks();
    });
}

function modifyTask(){

    // A faire ? Pour donner la possibilité de modifier titre/description d'une tâche
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

function searchList(searchInput){

    const lowerCaseInput = searchInput.toLowerCase();
    const savedTasks = document.querySelectorAll(".task");

    savedTasks.forEach(task =>{

        const texte = task.textContent.toLowerCase();
        if(texte.includes(lowerCaseInput)){

            task.style.display = "flex";

        }else{

            task.style.display = "none";
        }
    });
}

function getTasks(){
    
    const tasksArray = JSON.parse(localStorage.getItem('tasks') ?? '[]');
    return tasksArray;
}

/* Fonctionnel */
function createNewTask(){
    
    newTaskButton.addEventListener("click", () => {
        
        const searchBar = document.querySelector(".search-form");
        const filterBtn = document.querySelector(".date-filter");
        newTask.classList.add("passive");
        formulaire.classList.add("active");
        tasksContainer.classList.add("passive");
        searchBar.classList.add("passive");
        filterBtn.classList.add("passive");
    });
}

/* Fonction de vérification du "check" des tâches */
function tasksHandler(taskID){

    const arrayTasks = getTasks();
    const checkTasked = arrayTasks.find(task => task.ID === taskID);
    arrayTasks.forEach(task => {

        if(taskID === task.ID){

            
            task.status = !task.status;
            localStorage.setItem("tasks", JSON.stringify(arrayTasks));
            
            const element = document.querySelector('[data-id="' + task.ID + '"]');
            console.log(element);
            const iconElement = element.querySelector("div .checked");
            console.log(iconElement);
            
            if(task.status){
                
                iconElement.style.color = "green";
                
            }else{
                
                iconElement.style.color = "white";
            }
            
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
        
        const searchBar = document.querySelector(".search-form");
        const filterBtn = document.querySelector(".date-filter");

        /* Repasser en mode classique après l'ajout d'une tâche */
        newTask.classList.remove("passive");
        formulaire.classList.remove("active");
        tasksContainer.classList.remove("passive");
        searchBar.classList.remove("passive");
        filterBtn.classList.remove("passive");


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
        
        const deleteIcon = newBalise.querySelector(".delete");
        const parentDeleteIcon = deleteIcon.parentElement;
        const checkedIcon = newBalise.querySelector(".checked");
        
        if(task.status){

            checkedIcon.style.color = "green";
        
        }else{

            checkedIcon.style.color = "white";
        }
        
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
            
            const taskID = task.ID;
            tasksHandler(taskID);
            console.log("Tâche numéro :" + taskID);
            // const element = document.querySelector('[data-id="' + task.ID + '"]');
            // const iconElement = element.querySelector("div .checked");


            // if(iconElement.style.color === "green"){
                    
            //     iconElement.style.color = "white";
            //     task.status = false;
                    
            // }else{

            //     iconElement.style.color = "green";
            //     task.status = true;
            // }

        });

        tasksContainer.appendChild(newBalise);
        
    });
}

createNewTask();
addNewTask();
displayTasks();
filterTasks();


