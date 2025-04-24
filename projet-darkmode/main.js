const abonnement = document.querySelector(".abonnement");
abonnement.addEventListener("click", ()=>{

    if(abonnement.classList.contains("abonnement")){

        abonnement.classList.replace("abonnement", "isAbonner");
        abonnement.innerText = "Abonné!";
    }else{

        abonnement.classList.replace("isAbonner", "abonnement");
        abonnement.innerText = "S'abonner";
    }

});

const like = document.querySelector(".fa-thumbs-up");
like.addEventListener("click", ()=>{

    if(like.classList.contains("far")){

        like.classList.remove("far");
        like.classList.add("fas");
        like.style.fontSize = "36px";

    }else{

        like.classList.remove("fas");
        like.classList.add("far");
        like.style.fontSize = "36px";

    }
})

const light = document.querySelector(".light_mode");
const lightIcon = light.querySelector("i");
light.addEventListener("click", ()=>{

    if(lightIcon.classList.contains("fa-moon")){

        lightIcon.classList.remove("fa-moon", "far");
        lightIcon.classList.add("fa-sun", "fas");
        document.body.classList.toggle("dark-mode");
        
    }else{
        
        lightIcon.classList.remove("fa-sun", "fas");
        lightIcon.classList.add("fa-moon", "far");
        document.body.classList.remove("dark-mode");
    }
})

/* <i class='fas fa-thumbs-up' style='font-size:36px'></i> */