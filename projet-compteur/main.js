let i = 0;
const bouton = document.querySelector(".bouton");
const compteur = document.querySelector(".compteur");
bouton.addEventListener("click", ()=> {
    i++;
    compteur.textContent = "Compteur : " + i;
})