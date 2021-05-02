(()=>{
    const aboutSection = document.querySelector(".about-section"),
      tabsContainer = document.querySelector(".about-tabs");
  
    tabsContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("tab-item") && 
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            console.log(target);
            tabsContainer.querySelector('.active').classList.remove("outer-shadow" , "active");
            event.target.classList.add("active", "outer-shadow");
            
        }
    })
})();

