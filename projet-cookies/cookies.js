const banniere = document.querySelector(".cookies_banner");
const bouton = document.querySelector("button");

bouton.addEventListener("click", () => {
    console.log("cliqué");
    banniere.classList.add("hide");
})