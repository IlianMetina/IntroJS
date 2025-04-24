const addToCart = document.querySelector(".bouton");
const popUp = document.querySelector(".pop-up");
const vignettes = document.querySelectorAll(".vignettes img");
const mainImage = document.querySelector(".fiche img");

function displayAdd(){

    popUp.classList.add("active");
}

function removeAdd(){

    popUp.classList.remove("active");
}

vignettes.forEach(vignette =>{

    vignette.addEventListener("click", ()=>{

        const newImage = vignette.getAttribute("src");
        const oldImage = mainImage.getAttribute("src");
        mainImage.setAttribute("src", newImage);
        vignette.setAttribute("src", oldImage);


    });

});

addToCart.addEventListener("click", ()=>{

    setTimeout(displayAdd, 500);
    setTimeout(removeAdd, 6000);

});