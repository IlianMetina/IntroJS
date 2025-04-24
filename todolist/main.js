const addNewTask = document.querySelector(".default-page i");
addNewTask.addEventListener("click", ()=>{

    const addingTask = document.querySelector(".addingTask");
    addingTask.classList.add("active");
    const defaultPage = document.querySelector(".default-page");
    defaultPage.classList.add("passive");

});

/* .addingTask.active{  .default-page.passive{ */

const addTask = document.querySelector(".ajout");
addTask.addEventListener("click", ()=>{

    const titreInput = document.querySelector(".title-task");
    const texteInput = document.querySelector(".text-task");
    const titre = titreInput.value;
    const texte = texteInput.value;

    const newTask = document.createElement("div");

    const addingTask = document.querySelector(".addingTask");
    addingTask.classList.remove("active");
    const defaultPage = document.querySelector(".default-page");
    defaultPage.classList.remove("passive");

});


