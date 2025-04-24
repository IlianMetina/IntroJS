
const bouton = document.querySelector(".bouton");
const toast = document.querySelector(".toast");

function hideToast(){
    
    toast.style.display = "none";

}

const toastState = document.querySelector(".toast");
const type = window.getComputedStyle(toastState);

bouton.addEventListener("click", ()=>{

    if(type.display == "none"){

        toast.style.display = "flex";
        setTimeout(hideToast, 4000);
    }else{

        toast.style.display = "none";
    }
});