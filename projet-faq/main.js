const questions = document.querySelectorAll(".question");

questions.forEach((question) =>{

    question.addEventListener("click", ()=>{

        const answer = question.nextElementSibling;
        const item = question.parentElement;
        item.classList.add("active");    
        answer.classList.add("active");
    })
})

answer.addEventListener("click", ()=>{

    answer.classList.remove("active");
});

