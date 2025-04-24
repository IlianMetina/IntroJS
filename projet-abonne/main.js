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

/* <i class='fas fa-thumbs-up' style='font-size:36px'></i> */