/*window.addEventListener("scroll", ()=>{

    const scrollTop = document.documentElement.scrollTop;
    const section3 = document.querySelector(".section3");
    const section3Position = section3.offsetTop;

    if(scrollTop >= section3Position){

        document.querySelector(".pop_up").style.display = "flex";
    }
});*/

function popUpDisplay(){

    document.querySelector(".pop_up").style.display = "flex";
}

setTimeout(popUpDisplay, 3000);

const popUp = document.querySelector(".pop_up");
const closeIcon = document.querySelector(".icon");
const closeWindow = closeIcon.querySelector("i");

closeWindow.addEventListener("click", ()=>{

    document.querySelector(".pop_up").style.display = "none";


});