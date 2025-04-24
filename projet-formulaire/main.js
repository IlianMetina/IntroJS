function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email))
    {
        return true;
    }else{
        return false
    }
}

const send = document.querySelector(".envoyer");
send.addEventListener("click", (e)=>{
    
    e.preventDefault();

    const oldErrors = document.querySelectorAll(".form-error");

    oldErrors.forEach(error => error.remove());

    const nameInput = document.querySelector(".nom");
    const name = nameInput.value;
    console.log(name);

    const surnameInput = document.querySelector(".prenom");
    const surname = surnameInput.value;
    console.log(surname);

    const emailInput = document.querySelector(".mail");
    const email = emailInput.value;
    console.log(email);

    const messageInput = document.querySelector(".message");
    const message = messageInput.value;    
    console.log(message);
    
    if(name.length < 2 && name.length > 0 || name.length > 20){

        const nameError = document.createElement("p");
        nameError.textContent = "Erreur NOM, veuillez entrer un nom entre 2 et 20 caractères.";
        console.log(nameError);
        nameError.style.color = "red";
        nameInput.insertAdjacentElement("afterend", nameError);
        nameError.classList.add("form-error");
        

    }
    
    if(surname.length < 2 && surname.length > 0 || surname.length > 20){

        const surnameError = document.createElement("p");
        surnameError.textContent = "Erreur PRENOM, veuillez entrer un prénom entre 2 et 20 caractères.";
        console.log(surnameError);
        surnameError.style.color = "red";
        surnameInput.insertAdjacentElement("afterend", surnameError);
        surnameError.classList.add("form-error");

    }

    const checkEmail = isValidEmail(email);

    if(email.length > 0){

        if(checkEmail == 0){
            
            const emailError = document.createElement("p");
            emailError.textContent = "Erreur, veuillez rentrer une adresse e-mail valide.";
            emailError.style.color = "red";
            emailError.classList.add("form-error");
            emailInput.insertAdjacentElement("afterend", emailError);
        }
        
    }
        if(message.length < 10 && message.length > 0 || message.length > 100){
            
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Erreur, votre message est trop court ou trop long";
            errorMessage.classList.add("form-error");
            errorMessage.style.color = "red";
            messageInput.insertAdjacentElement("afterend", errorMessage);
    }

});