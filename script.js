const menuBtn = document.getElementById("menu");
const navi = document.getElementById("last-menu");
const darkOverlay = document.getElementById("dark-overlay");
const closeBtn= document.getElementById("close");

menuBtn.addEventListener("click",()=>{
    navi.classList.toggle("active");
    darkOverlay.classList.toggle("active");
    closeBtn.classList.toggle("active");
    menuBtn.classList.toggle("active");
})

closeBtn.addEventListener("click",()=>{
    navi.classList.toggle("active");
    darkOverlay.classList.toggle("active");
    closeBtn.classList.toggle("active");
    menuBtn.classList.toggle("active");
})