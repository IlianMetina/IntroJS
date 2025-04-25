const newTaskButton = document.querySelector(".navigation i");
const newTask = document.querySelector(".navigation");
const formulaire = document.querySelector(".formulaire");
const addNewTask = document.querySelector(".add-new-task i");

newTaskButton.addEventListener("click", ()=>{

    newTask.classList.add("passive");
    formulaire.classList.add("active");

});

addNewTask.addEventListener("click", ()=>{

    const newBalise = document.createElement("p");
    newTask.appendChild(newBalise);
    

});



/* Réagir à autre chose que le clic pour submit ? */