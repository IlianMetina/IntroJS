const banner = document.querySelector(".banner"); /* ou .banner.active a test */ 
const boutons = document.querySelectorAll(".bouton");
const CookiesAccepted = localStorage.getItem("CookiesAccepted");

console.log(CookiesAccepted);
console.log(typeof CookiesAccepted);


if(CookiesAccepted != "true"){

    banner.classList.add("active");
    
    boutons.forEach(bouton =>{
        
        bouton.addEventListener("click", ()=>{
            
            banner.classList.remove("active");
            banner.classList.add("passive");
            localStorage.setItem("CookiesAccepted", "true");
            
        });
        
    });
    
}else{

    banner.classList.remove("active");
    banner.classList.add("passive");
}