const menuIcons = document.querySelector(".menu_icon");
const icon = menuIcons.querySelector("i");
const menuBurger = document.querySelector(".nav_menu");
icon.addEventListener("click", ()=>{

    if(icon.classList.contains("fa-bars")){
    
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        menuBurger.classList.add("active");
    
    }else{
        
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        menuBurger.classList.remove("active");
    }
});

