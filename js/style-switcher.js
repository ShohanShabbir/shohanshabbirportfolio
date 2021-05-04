

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");

})

window.addEventListener("scroll", ()=>{
    if( document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const alternateStyle = document.querySelectorAll(".alternate-style");

function setActivateStyle(color){
    alternateStyle.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
    
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})