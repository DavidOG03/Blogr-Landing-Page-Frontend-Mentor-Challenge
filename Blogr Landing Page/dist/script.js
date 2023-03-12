const hamburger = document.querySelector("#hamburger")
const navbar = document.querySelector("#nav--bar")
const navLinks = document.querySelectorAll(".moblink")
const navList = document.querySelector(".list")
const desktopNavLinks = document.querySelectorAll(".desktoplink")
const arrow = document.querySelectorAll(".arrow")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navbar.classList.toggle("active");
    if(navbar.classList.contains("active")){
        document.body.style.overflow = "hidden"
    }
    else{
        document.body.style.overflow = "scroll"
    }
})

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        if(navLink.classList.contains("active")){
            navLink.classList.remove("active")
            navList.classList.remove("active")
        }
        else{
            navLink.classList.add("active")
            navList.classList.add("active")
       } 
    })
});

desktopNavLinks.forEach(dskLink => {
    dskLink.addEventListener("click", (e) => {
        if(dskLink.classList.contains("active")){
            dskLink.classList.remove("active")
        }
        else{
            dskLink.classList.add("active")
       } 
       
    })
    window.addEventListener("mouseup", (e) => {
        if(e.target !== dskLink){
            dskLink.classList.remove("active")
        }
    })
    
});

